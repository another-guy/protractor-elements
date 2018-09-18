import { by, element } from 'protractor';
import { promiseOf } from '../async/promise-of';
import { Element } from './element';
import { InputBase } from './input-base';

export class InputRadioOptionInfo {
  constructor(private input: InputBase) {}

  getInput(): InputBase {
    return this.input;
  }

  async findRelatedLabel(): Promise<Element> {
    const targetId = await this.input._element!.getAttribute('id');
    return new Element(element(by.css(`label[for=${targetId}]`)));
  }
}
