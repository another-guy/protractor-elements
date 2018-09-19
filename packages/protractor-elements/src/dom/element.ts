import { ElementFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { IClickable, IVisible, IWithGetDisplayValue } from './interfaces';

export class Element
  implements
    IClickable,
//    IFocusable, // TODO
    IVisible,
    IWithGetDisplayValue<string>
{

  private _adapter = new Adapter();

  constructor(
    public _element: ElementFinder,
  ) { }

  getDisplayValue$(): Promise<string> {
    return this._adapter.getInnerText$(this._element);
  }

  isPresent$(): Promise<boolean> {
    return this._adapter.isPresent$(this._element);
  }

  isDisplayed$(): Promise<boolean> {
    return this._adapter.isDisplayed$(this._element);
  }
  
  isEnabled$(): Promise<boolean> {
    return this._adapter.isEnabled$(this._element);
  }

  click$(): Promise<void> {
    return this._adapter.click$(this._element);
  }

}
