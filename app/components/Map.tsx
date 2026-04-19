// マップのコンポーネント

"use client"; // ブラウザのみで動かす

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

// FontAwesomeの読み込み
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRoute,
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

// カテゴリごとに見た目を設定する
const category_config: { [key: string]: { color: string; icon: any } } = {
  facility: { color: "#ffd700", icon: faHouse },
  secretpath: { color: "#a0d8ef", icon: faRoute },
  default: { color: "#4285F4", icon: faLocationDot },
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

// 表示させる地点
const points = [
  {
    id: 1,
    name: "パークハイアット東京",
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
  {
    id: 6,
    name: "西麻布~根津美術館",
    pos: [35.662618299028466, 139.71722704319342] as [number, number],
    category: "secretpath",
    description:
      "西麻布と根津美術館を結ぶ抜け道です。多少のルートの違いはありますが、両方向に進行可能です。",
    articleUrl: "https://tokyotaximap.com/nishiazabu-to-nezumuseum/",
  },
];

export default function Map() {
  return (
    <MapContainer
      center={[35.6812, 139.7671]}
      zoom={13}
      style={{ height: "600px", width: "100%" }} // *高さを指定すること!
    >
      <TileLayer
        attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a>'
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // positron
        // url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" // dark matter
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // voyager
      />
      {points.map((point) => (
        <Marker
          key={point.id}
          position={point.pos}
          icon={createCustomIcon(point.name, point.category)}
        >
          <Popup>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {point.name}
              </p>
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
  );
}
