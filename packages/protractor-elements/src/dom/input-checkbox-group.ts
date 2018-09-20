import { ElementArrayFinder } from 'protractor';
import { InputCheckbox } from './input-checkbox';
import { IWithItemList } from './interfaces';
import { ListOf } from './list-of-items';

export class InputCheckboxGroup
  implements
    IWithItemList<InputCheckbox>
{
  constructor(
    public _rootElementList: ElementArrayFinder,
  ) {}

  items(): ListOf<InputCheckbox> {
    return new ListOf(elementFinder => new InputCheckbox(elementFinder!), this._rootElementList);
  }
}
