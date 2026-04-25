// カテゴリ「首都高」の地点データ

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

export const shutoko: Point[] = [
  {
    id: "shutoko-1",
    name: "飯倉IC(入口、内回り)",
    pos: [35.66113368962089, 139.73789906934073] as [number, number],
    category: "shutoko",
    description:
      "「六本木麻布通り」交差点に設置されています。Uターン、および全方向からの進行が可能です。",
    articleUrl: "https://tokyotaximap.com/iikura-entrance/",
  },
  {
    id: "shutoko-2",
    name: "飯倉IC(出口、外回り)",
    pos: [35.66067668789784, 139.73732324066327] as [number, number],
    category: "shutoko",
    description:
      "「飯倉片町」交差点に出ます。そのままのレーンだと右折レーンなので注意してください。",
    articleUrl: "https://tokyotaximap.com/iikura-exit/",
  },
  {
    id: "shutoko-3",
    name: "清洲橋IC(出口)",
    pos: [35.68372187266838, 139.7898307754416] as [number, number],
    category: "shutoko",
    description:
      "このICは出口のみです。清洲橋通りとの交差点に直結し、右左折できます。",
    articleUrl: "https://tokyotaximap.com/kiyosubashi-exit/",
  },
  {
    id: "shutoko-4",
    name: "芝公園IC(入口、内回り)",
    pos: [35.65345131673485, 139.74990351837326] as [number, number],
    category: "shutoko",
    description:
      "8~20時は右折で進入できません。「赤羽橋」交差点の方向から来た場合は左側の右折レーンを進行してください。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: "shutoko-5",
    name: "芝公園IC(入口、外回り)",
    pos: [35.65489402920839, 139.74437213303912] as [number, number],
    category: "shutoko",
    description: "8~20時は右折で進入できません。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: "shutoko-6",
    name: "芝公園IC(出口、内回り)",
    pos: [35.654053427197645, 139.7478500341407] as [number, number],
    category: "shutoko",
    description:
      "「芝公園ランプ出口」交差点に出ます。右左折することができます。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-exit/",
  },
  {
    id: "shutoko-7",
    name: "箱崎IC(入口)",
    pos: [35.680261997918635, 139.7829261801844] as [number, number],
    category: "shutoko",
    description: "右左折で進入できます。",
    articleUrl: "https://tokyotaximap.com/hakozaki-entrance/",
  },
  {
    id: "shutoko-8",
    name: "箱崎IC(出口)",
    pos: [35.67997364614321, 139.78318152495004] as [number, number],
    category: "shutoko",
    description: "出てすぐのところは左折のみです。",
    articleUrl: "https://tokyotaximap.com/hakozaki-exit/",
  },
  {
    id: "shutoko-9",
    name: "浜町IC(入口)",
    pos: [35.68285558358253, 139.7891464111884] as [number, number],
    category: "shutoko",
    description:
      "首都高の高架下のわかりにくい位置に入口があります。実質的に新大橋通りと清洲橋通りそれぞれから直結しています。",
    articleUrl: "https://tokyotaximap.com/hamacho-entrance/",
  },
  {
    id: "shutoko-10",
    name: "浜町IC(出口)",
    pos: [35.68500151750327, 139.78698883598898] as [number, number],
    category: "shutoko",
    description: "新大橋通りに直結します。全方向に進行できます。",
    articleUrl: "https://tokyotaximap.com/hamacho-exit/",
  },
];
