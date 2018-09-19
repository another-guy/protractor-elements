import { ElementArrayFinder } from 'protractor';
import { Adapter } from './adapters/adapter';
import { InputRadioOption } from './input-radio-option';
import { IWithGetHiddenValue, IWithItemList, IWithSetHiddenValue } from './interfaces';
import { ListOf } from './list-of-items';

export class InputRadio
  implements
    IWithItemList<InputRadioOption>,
    IWithGetHiddenValue<string>,
    IWithSetHiddenValue<string>
{
  private _adapter = new Adapter();

  constructor(
    public _rootElementList: ElementArrayFinder,
  ) { }

  items(): ListOf<InputRadioOption> {
    return new ListOf<InputRadioOption>(element => new InputRadioOption(element!), this._rootElementList);
  }

  async getHiddenValue$(): Promise<string> {
    const selectedValues = await this.items()
      .filter$(async option => `true` === await option._element.getAttribute(`checked`));

    if (selectedValues.length > 1) throw new Error(`More than one option (${selectedValues.length}) is selected`);
    else if (selectedValues.length === 0) return ``;
    else return await this._adapter.getValueAttribute$(selectedValues[0]._element);
  }

  async setHiddenValue$(target: string): Promise<void> {
    const matchingInputs = await this.items()
      .filter$(async option => target === await option._element.getAttribute(`value`));

    if (matchingInputs.length > 1) throw new Error(`More than one option with target value were found`);
    else if (matchingInputs.length === 0) throw new Error(`No options with target value were found`);
    else await matchingInputs[0].click$();
  }
}
