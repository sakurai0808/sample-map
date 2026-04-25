// カテゴリ「知名度の高い道」の地点データ

import { Point } from "@/app/types";

export const famousStreets: Point[] = [
  {
    id: "famousStreet-1",
    name: "コロンビア通り",
    pos: [35.673126771768786, 139.7309835077916] as [number, number],
    category: "famousStreets",
    description:
      "正確にはコロンビア通りはすぐ近くの別の路地を指しますが、この通りを指すのが一般的です。",
    articleUrl: "https://tokyotaximap.com/columbia-street/",
  },
  {
    id: "famousStreet-2",
    name: "骨董通り",
    pos: [35.66126164553919, 139.71426785708934] as [number, number],
    category: "famousStreets",
    description: "南青山でよく使われる通りです。",
    articleUrl: "https://tokyotaximap.com/kottou-street/",
  },
  {
    id: "famousStreet-3",
    name: "星条旗通り",
    pos: [35.66213196981552, 139.72558333754085] as [number, number],
    category: "famousStreets",
    description: "六本木と西麻布を結ぶ通りです。",
    articleUrl: "https://tokyotaximap.com/seijouki-street/",
  },
  {
    id: "famousStreet-4",
    name: "プリンス通り",
    pos: [35.68133893940018, 139.73827072129805] as [number, number],
    category: "famousStreets",
    description:
      "赤坂見附と麹町を結ぶ通りです。麹町の方向から進行した場合、国道246号を右折はできません。",
    articleUrl: "https://tokyotaximap.com/prince-street/",
  },
  {
    id: "famousStreet-5",
    name: "平成通り",
    pos: [35.67490755714174, 139.7745342663552] as [number, number],
    category: "famousStreets",
    description: "昭和通りと新大橋通りの間に位置し、並行している通りです。",
    articleUrl: "https://tokyotaximap.com/heisei-street/",
  },
];
