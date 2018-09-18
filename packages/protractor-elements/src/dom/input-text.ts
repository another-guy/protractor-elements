import { InputBase } from './input-base';

export class InputText extends InputBase {
  async getValue$(): Promise<string> {
    return await this.getValueString$();
  }

  async setValue$(text: string): Promise<void> {
    await this.clear$();
    await this._element!.sendKeys(text);
  }
}
