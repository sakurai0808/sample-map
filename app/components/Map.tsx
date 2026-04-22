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

// 表示させる地点リスト
const points = [
  // カテゴリ: 施設
  {
    id: 1,
    name: "パークハイアット東京",
    category: "facility",
    pos: [35.68618692982386, 139.69047206623225] as [number, number],
    description: "車寄せへの入口は水道道路側にあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/parkhyatt/",
  },
  {
    id: 2,
    name: "キャピトルホテル東急",
    pos: [35.673960049945066, 139.74077728841004] as [number, number],
    category: "facility",
    description: "車寄せへの入口は2つあります。両方とも右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/the-capitol-hotel-tokyu/",
  },
  {
    id: 3,
    name: "渋谷エクセルホテル東急",
    pos: [35.65858274942378, 139.69983037224398] as [number, number],
    category: "facility",
    description:
      "ホテル車寄せへの入口は「道玄坂上交番前」交差点にあります。全方向から進行可能です。",
    articleUrl: "https://tokyotaximap.com/shibuya-excelhoteltokyu/",
  },
  {
    id: 4,
    name: "グランドハイアット東京",
    pos: [35.660077672488136, 139.72831006623068] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口はテレ朝通り沿いにあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/grandhyatt-tokyo/",
  },
  {
    id: 5,
    name: "東京プリンスホテル",
    pos: [35.65894453810081, 139.74811763739464] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口は「芝公園3丁目」交差点にあります。全方向から進行可能です。",
    articleUrl: "",
  },
  // カテゴリ: 抜け道・定番ルート
  {
    id: 6,
    name: "西麻布~根津美術館",
    pos: [35.662618299028466, 139.71722704319342] as [number, number],
    category: "secretpath",
    description:
      "西麻布と根津美術館を結ぶ抜け道です。多少のルートの違いはありますが、両方向に進行可能です。",
    articleUrl: "https://tokyotaximap.com/nishiazabu-to-nezumuseum/",
  },
  {
    id: 7,
    name: "二の橋→東京タワー方面",
    pos: [35.652570689127636, 139.73679602283786] as [number, number],
    category: "secretpath",
    description:
      "「二の橋」交差点から赤羽橋など東京タワー方面に抜けるときに使える道です。",
    articleUrl: "https://tokyotaximap.com/ninohashi-to-tokyotower/",
  },
  {
    id: 8,
    name: "権田原",
    pos: [35.67713290255072, 139.72097415966672] as [number, number],
    category: "secretpath",
    description: "青山と四谷見附の間を移動するときによく通る交差点です。",
    articleUrl: "https://tokyotaximap.com/gonndawara/",
  },
  {
    id: 9,
    name: "ゴルフパートナー(赤坂)",
    pos: [35.66828065385025, 139.73985435275614] as [number, number],
    category: "secretpath",
    description: "赤坂のエリアで定番の目印です。TBSの方向へ素早く進めます。",
    articleUrl: "https://tokyotaximap.com/golfpartner_akasaka/",
  },
  {
    id: 10,
    name: "飯倉片町ショートカット",
    pos: [35.65974231060215, 139.73659423829397] as [number, number],
    category: "secretpath",
    description:
      "「新一の橋」交差点から六本木方向へ向かうときはここを通るのが定番です。",
    articleUrl: "https://tokyotaximap.com/iikurakatamachi-shortcut/",
  },
  // カテゴリ: 知名度の高い道
  {
    id: 11,
    name: "骨董通り",
    pos: [35.66126164553919, 139.71426785708934] as [number, number],
    category: "famousStreets",
    description: "南青山でよく使われる通りです。",
    articleUrl: "https://tokyotaximap.com/kottou-street/",
  },
  {
    id: 12,
    name: "プリンス通り",
    pos: [35.68133893940018, 139.73827072129805] as [number, number],
    category: "famousStreets",
    description:
      "赤坂見附と麹町を結ぶ通りです。麹町の方向から進行した場合、国道246号を右折はできません。",
    articleUrl: "https://tokyotaximap.com/prince-street/",
  },
  {
    id: 13,
    name: "平成通り",
    pos: [35.67490755714174, 139.7745342663552] as [number, number],
    category: "famousStreets",
    description: "昭和通りと新大橋通りの間に位置し、並行している通りです。",
    articleUrl: "https://tokyotaximap.com/heisei-street/",
  },
  {
    id: 14,
    name: "星条旗通り",
    pos: [35.66213196981552, 139.72558333754085] as [number, number],
    category: "famousStreets",
    description: "六本木と西麻布を結ぶ通りです。",
    articleUrl: "https://tokyotaximap.com/seijouki-street/",
  },
  {
    id: 15,
    name: "コロンビア通り",
    pos: [35.673126771768786, 139.7309835077916] as [number, number],
    category: "famousStreets",
    description:
      "正確にはコロンビア通りはすぐ近くの別の路地を指しますが、この通りを指すのが一般的です。",
    articleUrl: "https://tokyotaximap.com/columbia-street/",
  },
  // カテゴリ: 首都高
  {
    id: 16,
    name: "飯倉IC(入口、内回り)",
    pos: [35.66113368962089, 139.73789906934073] as [number, number],
    category: "shutoko",
    description:
      "「六本木麻布通り」交差点に設置されています。Uターン、および全方向からの進行が可能です。",
    articleUrl: "https://tokyotaximap.com/iikura-entrance/",
  },
  {
    id: 17,
    name: "飯倉IC(出口、外回り)",
    pos: [35.66067668789784, 139.73732324066327] as [number, number],
    category: "shutoko",
    description:
      "「飯倉片町」交差点に出ます。そのままのレーンだと右折レーンなので注意してください。",
    articleUrl: "https://tokyotaximap.com/iikura-exit/",
  },
  {
    id: 18,
    name: "芝公園IC(入口、内回り)",
    pos: [35.65345131673485, 139.74990351837326] as [number, number],
    category: "shutoko",
    description:
      "8~20時は右折で進入できません。「赤羽橋」交差点の方向から来た場合は左側の右折レーンを進行してください。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 19,
    name: "芝公園IC(入口、外回り)",
    pos: [35.65489402920839, 139.74437213303912] as [number, number],
    category: "shutoko",
    description: "8~20時は右折で進入できません。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 20,
    name: "芝公園IC(出口、内回り)",
    pos: [35.654053427197645, 139.7478500341407] as [number, number],
    category: "shutoko",
    description:
      "「芝公園ランプ出口」交差点に出ます。右左折することができます。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-exit/",
  },
];

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
