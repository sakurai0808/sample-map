// カテゴリ「抜け道・定番ルート」の地点データ

import { Point } from "@/app/types";

export const secretpaths: Point[] = [
  {
    id: 1,
    name: "飯倉片町ショートカット",
    pos: [35.65974231060215, 139.73659423829397] as [number, number],
    category: "secretpath",
    description:
      "「新一の橋」交差点から六本木方向へ向かうときはここを通るのが定番です。",
    articleUrl: "https://tokyotaximap.com/iikurakatamachi-shortcut/",
  },
  {
    id: 2,
    name: "権田原",
    pos: [35.67713290255072, 139.72097415966672] as [number, number],
    category: "secretpath",
    description: "青山と四谷見附の間を移動するときによく通る交差点です。",
    articleUrl: "https://tokyotaximap.com/gonndawara/",
  },
  {
    id: 3,
    name: "ゴルフパートナー(赤坂)",
    pos: [35.66828065385025, 139.73985435275614] as [number, number],
    category: "secretpath",
    description: "赤坂のエリアで定番の目印です。TBSの方向へ素早く進めます。",
    articleUrl: "https://tokyotaximap.com/golfpartner_akasaka/",
  },
  {
    id: 4,
    name: "西麻布~根津美術館",
    pos: [35.662618299028466, 139.71722704319342] as [number, number],
    category: "secretpath",
    description:
      "西麻布と根津美術館を結ぶ抜け道です。多少のルートの違いはありますが、両方向に進行可能です。",
    articleUrl: "https://tokyotaximap.com/nishiazabu-to-nezumuseum/",
  },
  {
    id: 5,
    name: "二の橋→東京タワー方面",
    pos: [35.652570689127636, 139.73679602283786] as [number, number],
    category: "secretpath",
    description:
      "「二の橋」交差点から赤羽橋など東京タワー方面に抜けるときに使える道です。",
    articleUrl: "https://tokyotaximap.com/ninohashi-to-tokyotower/",
  },
];
