"use client";

import dynamic from "next/dynamic"; // ブラウザでしか動かないLeafletのために必要。サーバーでは無視し、ブラウザに届いてから読み込む

// SSで読み込まず、CSだけで読み込む
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center bg-gray-200 text-gray-600">
      地図を読み込んでいます...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="p-5">
      <h1>タクシー運転手向けマップ(テスト)</h1>
      <div className="mt-5 border border-gray-300">
        <Map /> {/* 地図のコンポーネント */}
      </div>
    </main>
  );
}
