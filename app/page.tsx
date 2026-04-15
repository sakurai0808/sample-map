"use client";

import dynamic from "next/dynamic"; // ブラウザでしか動かないLeafletのために必要

// SSで読み込まず、CSだけで読み込む
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "600px", background: "#eee" }}>
      地図を読み込んでいます...
    </div>
  ),
});

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>タクシー運転手向けマップ(テスト)</h1>
      <div style={{ marginTop: "20px", border: "1px solid #ccc" }}>
        <Map />
      </div>
    </main>
  );
}
