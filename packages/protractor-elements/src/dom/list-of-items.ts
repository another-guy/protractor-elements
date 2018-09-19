import { ElementArrayFinder, ElementFinder } from 'protractor';

export class ListOf<TListItem> {
  constructor(
    private _createT: (_: ElementFinder | undefined) => TListItem,
    protected _elementList: ElementArrayFinder
  ) {}

  get(itemIndex: number | Promise<number>): TListItem {
    return this._createT(this._elementList.get(itemIndex));
  }

  async count$(): Promise<number> {
    return await this._elementList.count();
  }

  async map$<TOutput>(
    mapFn: (part?: TListItem, index?: number | undefined) => TOutput
  ): Promise<TOutput[]> {
    return await this._elementList.map<TOutput>((element, index) =>
      mapFn(this._createT(element), index)
    );
  }

  async forEach$(
    callbackfn: (part: TListItem, index: number | undefined) => void
  ): Promise<void> {
    const _ = await this._elementList.map<void>((element, index) =>
      callbackfn(this._createT(element), index)
    );
  }

  async filter$(
    filterFn: (part: TListItem, index?: number) => boolean | Promise<boolean>
  ): Promise<TListItem[]> {
    const result: TListItem[] = [];
    
    for (let itemIndex = 0; itemIndex < await this.count$(); itemIndex++) {
      const item = this.get(itemIndex);
      const predicateMatchBoolOrPromise = filterFn(item);
      const matchesPredicate = typeof(predicateMatchBoolOrPromise) === `boolean` ?
        predicateMatchBoolOrPromise :
        await predicateMatchBoolOrPromise;
      if (matchesPredicate) result.push(item);
    }
    
    return result;
  }
}
