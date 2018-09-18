import { ElementFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { IClickable, IFocusable, IVisible, IWithInnerText } from './interfaces';

export class Button
  implements IClickable, IFocusable, IVisible, IWithInnerText
{
  private _adapter = new Adapter();

  constructor(
    public _element: ElementFinder,
  ) {}

  click$(): Promise<void> {
    return this._adapter.click$(this._element);
  }
  
  isFocused$(): Promise<boolean> {
    return this._adapter.isFocused$(this._element);
  }

  async focus$(): Promise<void> {
    throw new Error("Method not implemented.");
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
  
  getInnerText$(): Promise<string> {
    return this._adapter.getInnerText$(this._element);
  }

}
