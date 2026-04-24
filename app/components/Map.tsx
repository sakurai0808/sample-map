// マップのコンポーネント

"use client"; // ブラウザのみで動かす

import { useState } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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

type MapPoint = (typeof points)[number];

// カテゴリごとに見た目を設定する(辞書型で定義する)
const category_config: {
  [key: string]: { label: string; icon: IconDefinition; pinBgClass: string };
} = {
  // 施設
  facility: { label: "施設", icon: faHouse, pinBgClass: "bg-[#ffd700]" },
  // 抜け道・定番ルート
  secretpath: {
    label: "抜け道・定番ルート",
    icon: faRoute,
    pinBgClass: "bg-[#a0d8ef]",
  },
  // 知名度の高い道
  famousStreets: {
    label: "知名度の高い道",
    icon: faRoad,
    pinBgClass: "bg-[#ff7f50]",
  },
  // 首都高
  shutoko: { label: "首都高", icon: faTruckFast, pinBgClass: "bg-[#1F8435]" },
  // カテゴリなし
  default: {
    label: "カテゴリなし",
    icon: faLocationDot,
    pinBgClass: "bg-[#4285F4]",
  },
};

// 共通スタイルのまとめ
const filterButtonClass =
  "cursor-pointer rounded-2xl border border-gray-300 px-3 py-1 text-xs";

const popupLinkPrimaryClass =
  "block w-full rounded bg-[#4285F4] py-2 text-center text-xs font-bold text-white no-underline";

const popupLinkSecondaryClass =
  "block w-full rounded bg-[#34A853] py-2 text-center text-xs font-bold text-white no-underline";

// カスタムアイコンを作成する関数
const createCustomIcon = (name: string, category: string) => {
  // カテゴリごとの設定を取得する(該当がない場合はdefaultにする)
  const config = category_config[category] || category_config.default;

  return L.divIcon({
    html: renderToStaticMarkup(
      //JSXをHTML文字列に変換
      <div className="flex flex-col items-center">
        {/* アイコン */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white shadow-md ${config.pinBgClass}`}
        >
          {/* 施設のロゴ画像が入る */}
          <FontAwesomeIcon icon={config.icon} />
        </div>
        {/* ラベル名 */}
        <div className="mt-1 whitespace-nowrap rounded-xl border border-gray-300 bg-white/90 px-2 py-0.5 text-xs font-bold">
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
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  // フィルタリングされた地点データを作成する
  const filteredPoints = activeCategory
    ? points.filter((p) => p.category === activeCategory)
    : points;

  return (
    <div className="flex h-screen w-full">
      {/* フィルターボタン、コンテンツを一覧表示するサイドバー */}
      <div className="flex h-full w-[400px] shrink-0 flex-col overflow-y-auto bg-gray-50">
        {/* フィルターボタンのエリア */}
        <div>
          <p>カテゴリ検索</p>
          <div className="flex flex-wrap gap-4">
            {/* 「すべて」ボタン */}
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={filterButtonClass}
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
                    type="button"
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={filterButtonClass}
                  >
                    {category_config[cat].label}
                  </button>
                ),
              )}
          </div>
        </div>

        {/* リスト表示 */}
        <p>タクマップリスト</p>
        <div>
          {filteredPoints.map((point) => (
            <div
              key={point.id}
              onClick={() => setSelectedPoint(point)} // クリックでstateを変化
              className="cursor-pointer border-b border-black/20 bg-white p-3"
            >
              <div className="text-sm font-bold">{point.name}</div>
              <div className="mt-1 text-xs text-gray-500">
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
        className="z-0 h-full min-h-0 min-w-0 flex-1"
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
                <strong className="text-base font-bold">{point.name}</strong>
                <p>{point.description}</p>
                <div className="mt-3 flex flex-col gap-2">
                  {/* Googleマップボタン */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${point.pos[0]},${point.pos[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${popupLinkPrimaryClass} gm-btn`}
                  >
                    GoogleMapで確認
                  </a>
                  {/* 記事リンクボタン */}
                  <a
                    href={point.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${popupLinkSecondaryClass} article-btn`}
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
