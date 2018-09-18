import { ElementArrayFinder } from 'protractor';
import { filter$ } from '../async/filter';
import { InputBase } from './input-base';
import { InputRadioOptionInfo } from './input-radio-option-info';

export class InputRadio {
  constructor(private _rootElementList: ElementArrayFinder) {}

  private async getOptionElementList$(): Promise<InputRadioOptionInfo[]> {
    const optionElementList: InputRadioOptionInfo[] = [];
    const count = await this._rootElementList.count();
    for (let index = 0; index < count; index++)
      optionElementList.push(new InputRadioOptionInfo(new InputBase(await this._rootElementList.get(index))));
    return optionElementList;
  }

  async getOption$(index: number): Promise<InputRadioOptionInfo> {
    return (await this.getOptionElementList$())[index];
  }

  async optionsCount$(): Promise<number> {
    return (await this.getOptionElementList$()).length;
  }

  async getSelectedValue$(): Promise<string> {
    const selectedValues = await filter$(
      await this.getOptionElementList$(),
      async optionElement => `true` === await (await optionElement.getInput$())._element!.getAttribute(`checked`)
    );

    if (selectedValues.length > 1) throw new Error(`More than one option (${selectedValues.length}) is selected`);
    else if (selectedValues.length === 0) return ``;
    else return (await selectedValues[0].getInput$())._element!.getAttribute(`value`);
  }

  async setSelectedValue$(target: string): Promise<void> {
    const matchingInputs = await filter$(
      await this.getOptionElementList$(),
      async optionElement => target === await (await optionElement.getInput$())._element!.getAttribute(`value`)
    );

    if (matchingInputs.length > 1) throw new Error(`More than one option with target value were found`);
    else if (matchingInputs.length === 0) throw new Error(`No options with target value were found`);
    else await (await matchingInputs[0].getInput$())._element!.click();
  }
}
