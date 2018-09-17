import { Element } from './element';

export class InputBase extends Element {
  async clear(): Promise<void> {
    return await this._element.clear();
  }

  protected async getValueString(): Promise<string> {
    return await this._element.getAttribute('value');
  }
}
