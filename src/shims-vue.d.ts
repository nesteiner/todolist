/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface todoListCard {
  isdone: boolean;
  text: string;
}

declare interface todoListPanel {
  cards: Array<todoListCard>;
}