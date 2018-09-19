import { ElementFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { IClickable, IFocusable, IVisible, IWithClearableValue, IWithGetDisplayValue, IWithSetDisplayValue } from './interfaces';

export class InputText
  implements
    IClickable,
    IFocusable,
    IVisible,
    IWithGetDisplayValue<string>,
    IWithSetDisplayValue<string>,
    IWithClearableValue
{
  private _adapter = new Adapter();

  constructor(
    public _element: ElementFinder,
  ) {}

  async clearDisplayValue$(): Promise<void> {
    return await this._element.clear();
  }

  getDisplayValue$(): Promise<string> {
    return this._adapter.getValueAttribute$(this._element);
  }

  async setDisplayValue$(value: string): Promise<void> {
    await this.clearDisplayValue$();
    await this._element.sendKeys(value);
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
  
  isFocused$(): Promise<boolean> {
    return this._adapter.isFocused$(this._element);
  }

  focus$(): Promise<void> {
    return this.click$();
  }

  click$(): Promise<void> {
    return this._adapter.click$(this._element);
  }
}
