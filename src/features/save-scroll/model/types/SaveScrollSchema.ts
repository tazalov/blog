//* <адрес страницы, позиция скролла>
export type ScrollT = Record<string, number>

export interface SaveScrollSchema {
  scroll: ScrollT
}
