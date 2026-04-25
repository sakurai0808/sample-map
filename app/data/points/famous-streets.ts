// カテゴリ「知名度の高い道」の地点データ

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

export const famousStreets: Point[] = [
  {
    id: "famousStreet-1",
    name: "医大通り(東京医大通り)",
    pos: [35.69304412266681, 139.71183630100455] as [number, number],
    category: "famousStreets",
    description:
      "靖国通り周辺と歌舞伎町を運行する際によく使う通りです。混雑の多い明治通りをできるだけ避けたいときなどにも使えます。",
    articleUrl: "",
  },
  {
    id: "famousStreet-2",
    name: "小滝橋通り",
    pos: [35.70137011100923, 139.6954371984854] as [number, number],
    category: "famousStreets",
    description: "歌舞伎町周辺の運行でよく使う通りです。",
    articleUrl: "https://tokyotaximap.com/otakibashi-street/",
  },
  {
    id: "famousStreet-3",
    name: "区役所通り(新宿)",
    pos: [35.694649291876814, 139.70416260318248] as [number, number],
    category: "famousStreets",
    description: "歌舞伎町のメインストリートです。夜間は相当混雑します。",
    articleUrl: "https://tokyotaximap.com/kuyakusho-street/",
  },
  {
    id: "famousStreet-4",
    name: "コロンビア通り",
    pos: [35.673126771768786, 139.7309835077916] as [number, number],
    category: "famousStreets",
    description:
      "正確にはコロンビア通りはすぐ近くの別の路地を指しますが、この通りを指すのが一般的です。",
    articleUrl: "https://tokyotaximap.com/columbia-street/",
  },
  {
    id: "famousStreet-5",
    name: "骨董通り",
    pos: [35.66126164553919, 139.71426785708934] as [number, number],
    category: "famousStreets",
    description: "南青山でよく使われる通りです。",
    articleUrl: "https://tokyotaximap.com/kottou-street/",
  },
  {
    id: "famousStreet-6",
    name: "渋谷~恵比寿間の線路沿いの道(西側)",
    pos: [35.649798809707455, 139.70760283084002] as [number, number],
    category: "famousStreets",
    description:
      "渋谷から来ると、途中で一方通行になる区間があるので注意が必要です。",
    articleUrl: "https://tokyotaximap.com/shibuya-ebisu-route/",
  },
  {
    id: "famousStreet-7",
    name: "渋谷~恵比寿間の線路沿いの道(東側)",
    pos: [35.65465260561262, 139.70500160939707] as [number, number],
    category: "famousStreets",
    description: "混雑がなく、この区間を移動する際に使える道です。",
    articleUrl: "https://tokyotaximap.com/shibuya-ebisu-route/",
  },
  {
    id: "famousStreet-8",
    name: "星条旗通り",
    pos: [35.66213196981552, 139.72558333754085] as [number, number],
    category: "famousStreets",
    description: "六本木と西麻布を結ぶ通りです。",
    articleUrl: "https://tokyotaximap.com/seijouki-street/",
  },
  {
    id: "famousStreet-9",
    name: "プリンス通り",
    pos: [35.68133893940018, 139.73827072129805] as [number, number],
    category: "famousStreets",
    description:
      "赤坂見附と麹町を結ぶ通りです。麹町の方向から進行した場合、国道246号を右折はできません。",
    articleUrl: "https://tokyotaximap.com/prince-street/",
  },
  {
    id: "famousStreet-10",
    name: "平成通り",
    pos: [35.67490755714174, 139.7745342663552] as [number, number],
    category: "famousStreets",
    description: "昭和通りと新大橋通りの間に位置し、並行している通りです。",
    articleUrl: "https://tokyotaximap.com/heisei-street/",
  },
];
