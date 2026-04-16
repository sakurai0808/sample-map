// マップのコンポーネント

"use client"; // ブラウザのみで動かす

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// アイコンが消える問題の対策(CDNから画像を直接読み込む)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 表示させる地点
const points = [
  {
    id: 1,
    name: "パークハイアット東京",
    pos: [35.6862, 139.6904] as [number, number],
  },
  {
    id: 2,
    name: "キャピトルホテル東急",
    pos: [35.6739, 139.7407] as [number, number],
  },
  {
    id: 3,
    name: "渋谷エクセルホテル東急",
    pos: [35.6585, 139.6998] as [number, number],
  },
  {
    id: 4,
    name: "グランドハイアット東京",
    pos: [35.66, 139.7283] as [number, number],
  },
  {
    id: 5,
    name: "東京プリンスホテル",
    pos: [35.6589, 139.7481] as [number, number],
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
        <Marker key={point.id} position={point.pos} icon={markerIcon}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
