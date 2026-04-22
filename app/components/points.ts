// コンテンツのデータ専用ファイル

export const points = [
  // カテゴリ: 施設
  {
    id: 1,
    name: "パークハイアット東京",
    category: "facility",
    pos: [35.68618692982386, 139.69047206623225] as [number, number],
    description: "車寄せへの入口は水道道路側にあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/parkhyatt/",
  },
  {
    id: 2,
    name: "キャピトルホテル東急",
    pos: [35.673960049945066, 139.74077728841004] as [number, number],
    category: "facility",
    description: "車寄せへの入口は2つあります。両方とも右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/the-capitol-hotel-tokyu/",
  },
  {
    id: 3,
    name: "渋谷エクセルホテル東急",
    pos: [35.65858274942378, 139.69983037224398] as [number, number],
    category: "facility",
    description:
      "ホテル車寄せへの入口は「道玄坂上交番前」交差点にあります。全方向から進行可能です。",
    articleUrl: "https://tokyotaximap.com/shibuya-excelhoteltokyu/",
  },
  {
    id: 4,
    name: "グランドハイアット東京",
    pos: [35.660077672488136, 139.72831006623068] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口はテレ朝通り沿いにあります。右折で進入可能です。",
    articleUrl: "https://tokyotaximap.com/grandhyatt-tokyo/",
  },
  {
    id: 5,
    name: "東京プリンスホテル",
    pos: [35.65894453810081, 139.74811763739464] as [number, number],
    category: "facility",
    description:
      "車寄せへの入口は「芝公園3丁目」交差点にあります。全方向から進行可能です。",
    articleUrl: "",
  },
  // カテゴリ: 抜け道・定番ルート
  {
    id: 6,
    name: "西麻布~根津美術館",
    pos: [35.662618299028466, 139.71722704319342] as [number, number],
    category: "secretpath",
    description:
      "西麻布と根津美術館を結ぶ抜け道です。多少のルートの違いはありますが、両方向に進行可能です。",
    articleUrl: "https://tokyotaximap.com/nishiazabu-to-nezumuseum/",
  },
  {
    id: 7,
    name: "二の橋→東京タワー方面",
    pos: [35.652570689127636, 139.73679602283786] as [number, number],
    category: "secretpath",
    description:
      "「二の橋」交差点から赤羽橋など東京タワー方面に抜けるときに使える道です。",
    articleUrl: "https://tokyotaximap.com/ninohashi-to-tokyotower/",
  },
  {
    id: 8,
    name: "権田原",
    pos: [35.67713290255072, 139.72097415966672] as [number, number],
    category: "secretpath",
    description: "青山と四谷見附の間を移動するときによく通る交差点です。",
    articleUrl: "https://tokyotaximap.com/gonndawara/",
  },
  {
    id: 9,
    name: "ゴルフパートナー(赤坂)",
    pos: [35.66828065385025, 139.73985435275614] as [number, number],
    category: "secretpath",
    description: "赤坂のエリアで定番の目印です。TBSの方向へ素早く進めます。",
    articleUrl: "https://tokyotaximap.com/golfpartner_akasaka/",
  },
  {
    id: 10,
    name: "飯倉片町ショートカット",
    pos: [35.65974231060215, 139.73659423829397] as [number, number],
    category: "secretpath",
    description:
      "「新一の橋」交差点から六本木方向へ向かうときはここを通るのが定番です。",
    articleUrl: "https://tokyotaximap.com/iikurakatamachi-shortcut/",
  },
  // カテゴリ: 知名度の高い道
  {
    id: 11,
    name: "骨董通り",
    pos: [35.66126164553919, 139.71426785708934] as [number, number],
    category: "famousStreets",
    description: "南青山でよく使われる通りです。",
    articleUrl: "https://tokyotaximap.com/kottou-street/",
  },
  {
    id: 12,
    name: "プリンス通り",
    pos: [35.68133893940018, 139.73827072129805] as [number, number],
    category: "famousStreets",
    description:
      "赤坂見附と麹町を結ぶ通りです。麹町の方向から進行した場合、国道246号を右折はできません。",
    articleUrl: "https://tokyotaximap.com/prince-street/",
  },
  {
    id: 13,
    name: "平成通り",
    pos: [35.67490755714174, 139.7745342663552] as [number, number],
    category: "famousStreets",
    description: "昭和通りと新大橋通りの間に位置し、並行している通りです。",
    articleUrl: "https://tokyotaximap.com/heisei-street/",
  },
  {
    id: 14,
    name: "星条旗通り",
    pos: [35.66213196981552, 139.72558333754085] as [number, number],
    category: "famousStreets",
    description: "六本木と西麻布を結ぶ通りです。",
    articleUrl: "https://tokyotaximap.com/seijouki-street/",
  },
  {
    id: 15,
    name: "コロンビア通り",
    pos: [35.673126771768786, 139.7309835077916] as [number, number],
    category: "famousStreets",
    description:
      "正確にはコロンビア通りはすぐ近くの別の路地を指しますが、この通りを指すのが一般的です。",
    articleUrl: "https://tokyotaximap.com/columbia-street/",
  },
  // カテゴリ: 首都高
  {
    id: 16,
    name: "飯倉IC(入口、内回り)",
    pos: [35.66113368962089, 139.73789906934073] as [number, number],
    category: "shutoko",
    description:
      "「六本木麻布通り」交差点に設置されています。Uターン、および全方向からの進行が可能です。",
    articleUrl: "https://tokyotaximap.com/iikura-entrance/",
  },
  {
    id: 17,
    name: "飯倉IC(出口、外回り)",
    pos: [35.66067668789784, 139.73732324066327] as [number, number],
    category: "shutoko",
    description:
      "「飯倉片町」交差点に出ます。そのままのレーンだと右折レーンなので注意してください。",
    articleUrl: "https://tokyotaximap.com/iikura-exit/",
  },
  {
    id: 18,
    name: "芝公園IC(入口、内回り)",
    pos: [35.65345131673485, 139.74990351837326] as [number, number],
    category: "shutoko",
    description:
      "8~20時は右折で進入できません。「赤羽橋」交差点の方向から来た場合は左側の右折レーンを進行してください。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 19,
    name: "芝公園IC(入口、外回り)",
    pos: [35.65489402920839, 139.74437213303912] as [number, number],
    category: "shutoko",
    description: "8~20時は右折で進入できません。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-entrance/",
  },
  {
    id: 20,
    name: "芝公園IC(出口、内回り)",
    pos: [35.654053427197645, 139.7478500341407] as [number, number],
    category: "shutoko",
    description:
      "「芝公園ランプ出口」交差点に出ます。右左折することができます。",
    articleUrl: "https://tokyotaximap.com/shibakouenn-exit/",
  },
];
