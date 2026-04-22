// マップのコンポーネント

"use client"; // ブラウザのみで動かす

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

// FontAwesomeの読み込み
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRoute,
  faRoad,
  faTruckFast,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// データのインポート
import { points } from "./points";

// ※毛必要なし? ピンのアイコンが消える問題の対策(CDNから画像を直接読み込む)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// カテゴリごとに見た目を設定する(辞書型で定義する)
const category_config: {
  [key: string]: { label: string; color: string; icon: any };
} = {
  // 施設
  facility: { label: "施設", color: "#ffd700", icon: faHouse },
  // 抜け道・定番ルート
  secretpath: { label: "抜け道・定番ルート", color: "#a0d8ef", icon: faRoute },
  // 知名度の高い道
  famousStreets: { label: "知名度の高い道", color: "#ff7f50", icon: faRoad },
  // 首都高
  shutoko: { label: "首都高", color: "#1F8435", icon: faTruckFast },
  // カテゴリなし
  default: { label: "カテゴリなし", color: "#4285F4", icon: faLocationDot },
};

// カスタムアイコンを作成する関数
const createCustomIcon = (name: string, category: string) => {
  // カテゴリごとの設定を取得する(該当がない場合はdefaultにする)
  const config = category_config[category] || category_config.default;

  return L.divIcon({
    html: renderToStaticMarkup(
      //JSXをHTML文字列に変換
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* アイコン */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: config.color,
            border: "2px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {/* 施設のロゴ画像が入る */}
          <FontAwesomeIcon icon={config.icon} />
        </div>
        {/* ラベル名 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "2px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            marginTop: "4px",
            border: "1px solid #ccc",
          }}
        >
          {name}
        </div>
      </div>,
    ),
    className: "custom-div-icon",
    iconSize: [0, 0],
    iconAnchor: [20, 20], // アイコンの中身を座標に合わせる
  });
};

// 地図を動かすためのサブのコンポーネント
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, 15, { animate: true }); // 指定した座標へ移動する
  return null; // 何らかの描画は不必要
}

export default function Map() {
  // 「現在選択されているカテゴリ」を管理する
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  // 「現在選択されている地点」をuseStateで管理する
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  // フィルタリングされた地点データを作成する
  const filteredPoints = activeCategory
    ? points.filter((p) => p.category === activeCategory)
    : points;

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* フィルターボタン、コンテンツを一覧表示するサイドバー */}
      <div
        style={{
          width: "400px",
          height: "100%",
          overflowY: "auto",
          backgroundColor: "#f8f9fa", //変更?
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* フィルターボタンのエリア */}
        <div>
          <p>カテゴリ検索</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1em",
            }}
          >
            {/* 「すべて」ボタン */}
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: "4px 12px",
                borderRadius: "16px",
                fontSize: "12px",
                cursor: "pointer",
                border: "1px solid #ccc",
              }}
            >
              すべて
            </button>
            {/* カテゴリごとのボタン */}
            {Object.keys(category_config)
              .filter((key) => key !== "default") // デフォルトはボタンから除外
              .map(
                (
                  cat, //「cat」は配列から取り出すそれぞれを示す
                ) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "16px",
                      fontSize: "12px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                    }}
                  >
                    {category_config[cat].label}
                  </button>
                ),
              )}
          </div>
        </div>

        {/* リスト表示 */}
        <div>
          {filteredPoints.map((point) => (
            <div
              key={point.id}
              onClick={() => setSelectedPoint(point)} // クリックでstateを変化
              style={{
                padding: "12px",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderBottom: "solid 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                {point.name}
              </div>
              <div
                style={{ fontSize: "0.75rem", color: "#888", marginTop: "4px" }}
              >
                {point.description.substring(0, 30)}...
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 地図 */}
      <MapContainer
        center={[35.6812, 139.7671]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }} // *高さを指定すること!
      >
        <TileLayer
          attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // ベースマップ「voyager」
        />

        {/* 地点を選択した場合、ズームして移動させる */}
        {selectedPoint && <ChangeView center={selectedPoint.pos} />}

        {filteredPoints.map((point) => (
          <Marker
            key={point.id}
            position={point.pos}
            icon={createCustomIcon(point.name, point.category)}
            // eventHandlersを使い、リストから選ばれた場合にポップアップを表示
            ref={(ref) => {
              // refには、Leafletのマーカーオブジェクトそのものが入る
              if (selectedPoint?.id === point.id && ref) {
                ref.openPopup(); // openPopupはピンのメソッド
              }
            }}
          >
            <Popup>
              <div>
                <strong
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {point.name}
                </strong>
                <p>{point.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "12px",
                  }}
                >
                  {/* Googleマップボタン */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${point.pos[0]},${point.pos[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      backgroundColor: "#4285F4",
                      color: "white",
                      textAlign: "center",
                      padding: "8px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    GoogleMapで確認
                  </a>
                  {/* 記事リンクボタン */}
                  <a
                    href={point.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      backgroundColor: "#34A853",
                      color: "white",
                      textAlign: "center",
                      padding: "8px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    解説記事を見る
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
