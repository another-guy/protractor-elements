import { InputBase } from './input-base';

export class InputCheckbox extends InputBase {
  async getValue$(): Promise<boolean> {
    return await this._element!.isSelected();
  }

  async setValue$(checked: boolean): Promise<void> {
    if (checked !== await this.getValue$()) await this.click$();
  }
}
