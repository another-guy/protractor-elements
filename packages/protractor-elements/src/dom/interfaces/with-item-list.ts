import { ListPageObject } from '../../abstractions';

export interface IWithItemList<TItem> {
  items(): ListPageObject<TItem>;
}
