import { by, ElementArrayFinder, ElementFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { IClickable, IFocusable, IVisible, IWithDisplayValueList, IWithGetDisplayValue, IWithGetHiddenValue, IWithHiddenValueList, IWithSetDisplayValue, IWithSetHiddenValue } from './interfaces';

export class Select
  implements
    IClickable,
    IFocusable,
    IVisible,
    IWithGetDisplayValue<string>,
    IWithSetDisplayValue<string>,
    IWithDisplayValueList<string>,
    IWithGetHiddenValue<string>,
    IWithSetHiddenValue<string>,
    IWithHiddenValueList<string> {

  private _adapter = new Adapter();

  constructor(
    public _element: ElementFinder,
  ) {}

  private get checkedOption(): ElementFinder {
    return this._element.element(by.css(`option:checked`));
  }

  private get allOptions(): ElementArrayFinder {
    return this._element.all(by.css(`option`));
  }

  async getDisplayValue$(): Promise<string> {
    return await this.checkedOption.getText();
  }

  async setDisplayValue$(value: string): Promise<void> {
    await this._element
      .all(by.cssContainingText(`option`, value))
      .click();
  }

  async getDisplayValueList$(): Promise<string[]> {
    return await this.allOptions
      .map(option => option!.getText()) as string[];
  }

  getHiddenValue$(): Promise<string> {
    return this._adapter.getValueAttribute$(this.checkedOption);
  }

  async setHiddenValue$(value: string): Promise<void> {
    await this._element
      .element(by.css(`[value=${value}]`))
      .click();
  }

  async getHiddenValueList$(): Promise<string[]> {
    return await this.allOptions
      .map(option => this._adapter.getValueAttribute$(option!)) as string[];
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

  isPresent$(): Promise<boolean> {
    return this._adapter.isPresent$(this._element);
  }

  isDisplayed$(): Promise<boolean> {
    return this._adapter.isDisplayed$(this._element);
  }
  
  isEnabled$(): Promise<boolean> {
    return this._adapter.isEnabled$(this._element);
  }
}
