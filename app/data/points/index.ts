// 全ての地点データをインポートして統合したファイル

import type { Point } from "@/app/types";

import { facilities } from "./facilities";
import { famousStreets } from "./famous-streets";
import { secretpaths } from "./secretpaths";
import { shutoko } from "./shutoko";

export const allPoints: Point[] = [
  ...facilities,
  ...famousStreets,
  ...secretpaths,
  ...shutoko,
];
