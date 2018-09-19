import { ListOf } from '../list-of-items';

export interface IWithItemList<TItem> {
  items(): ListOf<TItem>;
}
