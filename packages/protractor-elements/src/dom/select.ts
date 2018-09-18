import { by, ElementArrayFinder } from 'protractor';
import { Element } from './element';

export class Select extends Element {
  async getValue(): Promise<string> {
    return await this._element!.element(by.css(`option:checked`)).getText();
  }

  async setValue(value: string): Promise<void> {
    return await this._element!.all(
      by.cssContainingText(`option`, value)
    ).click();
  }

  async selectByIndex(index: number | Promise<number>): Promise<void> {
    return await this.allOptions.get(index).clear();
  }

  async getValueList(): Promise<string[]> {
    return (await this.allOptions.map(option => {
      if (option === undefined) throw new Error(`oops`);
      return option.getText();
    })) as string[];
  }

  private get allOptions(): ElementArrayFinder {
    return this._element!.all(by.css(`option`));
  }
}
