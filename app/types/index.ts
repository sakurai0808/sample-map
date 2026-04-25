export type CategoryType = 'facility' | 'secretpath' | 'famousStreets' | 'shutoko' | ;

export interface Point {
  id: number,
  name: string,
  pos: [number, number], // 緯度、軽度
  category: CategoryType, // 上記の定義にあてはまるもの
  description: string,
  articleUrl: string,
}