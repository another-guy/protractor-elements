import { ElementFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { IClickable, IVisible, IWithClearableValue, IWithGetDisplayValue, IWithSetDisplayValue } from './interfaces';

export class InputCheckbox
  implements
    IClickable,
    //    IFocusable, // TODO
    IVisible,
    IWithGetDisplayValue<boolean>,
    IWithSetDisplayValue<boolean>,
    IWithClearableValue
    // TODO   IWithGetHiddenValue<boolean>
{
  private _adapter = new Adapter();

  constructor(
    public _element: ElementFinder,
  ) {}

  async clearDisplayValue$(): Promise<void> {
    if (await this.getDisplayValue$()) await this.click$();
  }

  async getDisplayValue$(): Promise<boolean> {
    return await this._element!.isSelected();
  }

  async setDisplayValue$(value: boolean): Promise<void> {
    if (value !== await this.getDisplayValue$()) await this.click$();
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
