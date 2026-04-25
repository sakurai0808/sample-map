// カテゴリ「施設」の地点データ

import { Point } from "@/app/types";

export const facilities: Point[] = [
  {
    id: "facility-1",
    name: "キャピトルホテル東急",
    pos: [35.673960049945066, 139.74077728841004] as [number, number],
    category: "facility",
    description: "車寄せへの入口は2つあります。両方とも右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/the-capitol-hotel-tokyu/",
  },
  {
    id: "facility-2",
    name: "グランドハイアット東京",
    pos: [35.660077672488136, 139.72831006623068] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口はテレ朝通り沿いにあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/grandhyatt-tokyo/",
  },
  {
    id: "facility-3",
    name: "渋谷エクセルホテル東急",
    pos: [35.65858274942378, 139.69983037224398] as [number, number],
    category: "facility",
    description:
      "ホテル車寄せへの入口は「道玄坂上交番前」交差点にあります。全方向から進行可能です。",
    articleUrl: "https://tokyotaximap.com/shibuya-excelhoteltokyu/",
  },
  {
    id: "facility-4",
    name: "東京プリンスホテル",
    pos: [35.65894453810081, 139.74811763739464] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口は「芝公園3丁目」交差点にあります。全方向から進行可能です。",
    articleUrl: "",
  },
  {
    id: "facility-5",
    name: "パークハイアット東京",
    category: "facility",
    pos: [35.68618692982386, 139.69047206623225] as [number, number],
    description: "車寄せへの入口は水道道路側にあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/parkhyatt/",
  },
];
