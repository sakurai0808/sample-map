// カテゴリ「施設」の地点データ

import { Point } from "@/app/types";

{
  /*
{
  id: "",
  name: "",
  pos: [] as [number, number],
  category: "",
  description: "",
  articleUrl: "",
},
*/
}

export const facilities: Point[] = [
  {
    id: "facility-1",
    name: "NHK(放送センター)西口",
    pos: [35.66501009463589, 139.694534903563] as [number, number],
    category: "facility",
    description:
      "NHKがお送り先の場合、メインの入り口はこちらです。右折では進入できません。",
    articleUrl: "https://tokyotaximap.com/nhk-west/",
  },
  {
    id: "facility-2",
    name: "キャピトルホテル東急",
    pos: [35.673960049945066, 139.74077728841004] as [number, number],
    category: "facility",
    description: "車寄せへの入口は2つあります。両方とも右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/the-capitol-hotel-tokyu/",
  },
  {
    id: "facility-3",
    name: "グランドハイアット東京",
    pos: [35.660077672488136, 139.72831006623068] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口はテレ朝通り沿いにあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/grandhyatt-tokyo/",
  },
  {
    id: "facility-4",
    name: "渋谷エクセルホテル東急(渋谷マークシティ②)",
    pos: [35.65747917548087, 139.6962018791301] as [number, number],
    category: "facility",
    description:
      "ホテル、およびマークシティ内オフィスの車寄せへの入口は「道玄坂上交番前」交差点にあります。全方向から進行可能です。",
    articleUrl: "https://tokyotaximap.com/shibuya-excelhoteltokyu/",
  },
  {
    id: "facility-5",
    name: "渋谷マークシティ①(路上)",
    pos: [35.65861405968681, 139.70022245404607] as [number, number],
    category: "facility",
    description:
      "路上だとお送り先として多いのはこの地点です。ホテルやオフィスの車寄せは別にあります。",
    articleUrl: "https://tokyotaximap.com/markcity/",
  },
  {
    id: "facility-6",
    name: "渋谷マークシティ②(車寄せ)",
    pos: [35.65751520053855, 139.69621323219673] as [number, number],
    category: "facility",
    description: "",
    articleUrl: "",
  },
  {
    id: "facility-7",
    name: "新宿区役所",
    pos: [35.69372353785878, 139.70370776015392] as [number, number],
    category: "facility",
    description:
      "靖国通りと区役所通りの交差点すぐにあります。向かいのミスタードーナツも目印です。",
    articleUrl: "https://tokyotaximap.com/shinjuku-kuyakusho/",
  },
  {
    id: "facility-8",
    name: "東京プリンスホテル",
    pos: [35.65894453810081, 139.74811763739464] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口は「芝公園3丁目」交差点にあります。全方向から進行可能です。",
    articleUrl: "",
  },
  {
    id: "facility-9",
    name: "パークハイアット東京",
    category: "facility",
    pos: [35.68618692982386, 139.69047206623225] as [number, number],
    description: "車寄せへの入口は水道道路側にあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/parkhyatt/",
  },
  {
    id: "facility-10",
    name: "広尾日赤病院(日本赤十字医療センター)",
    pos: [35.655043934113685, 139.71731631070165] as [number, number],
    category: "facility",
    description: "日赤通りの信号のところにあります。全方向から進入できます。",
    articleUrl: "https://tokyotaximap.com/hiroo-nisseki-hospital/",
  },
];
