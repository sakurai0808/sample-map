// カテゴリ「首都高」の地点データ

import { Point } from "@/app/types";

export const shutoko: Point[] = [
  {
    id: 1,
    name: "飯倉IC(入口、内回り)",
    pos: [35.66113368962089, 139.73789906934073] as [number, number],
    category: "shutoko",
    description:
      "「六本木麻布通り」交差点に設置されています。Uターン、および全方向からの進行が可能です。",
    articleUrl: "https://tokyotaximap.com/iikura-entrance/",
  },
  {
    id: 2,
    name: "飯倉IC(出口、外回り)",
    pos: [35.66067668789784, 139.73732324066327] as [number, number],
    category: "shutoko",
    description:
      "「飯倉片町」交差点に出ます。そのままのレーンだと右折レーンなので注意してください。",
    articleUrl: "https://tokyotaximap.com/iikura-exit/",
  },
  {
    id: 3,
    name: "芝公園IC(入口、内回り)",
    pos: [35.65345131673485, 139.74990351837326] as [number, number],
    category: "shutoko",
    description:
      "8~20時は右折で進入できません。「赤羽橋」交差点の方向から来た場合は左側の右折レーンを進行してください。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 4,
    name: "芝公園IC(入口、外回り)",
    pos: [35.65489402920839, 139.74437213303912] as [number, number],
    category: "shutoko",
    description: "8~20時は右折で進入できません。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 5,
    name: "芝公園IC(出口、内回り)",
    pos: [35.654053427197645, 139.7478500341407] as [number, number],
    category: "shutoko",
    description:
      "「芝公園ランプ出口」交差点に出ます。右左折することができます。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-exit/",
  },
];
