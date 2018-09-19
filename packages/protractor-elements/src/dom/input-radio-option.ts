import { by, element } from 'protractor';
import { Element } from './element';

export class InputRadioOption
  extends Element
{
  async findRelatedLabel$(): Promise<Element> {
    const targetId = await this._element.getAttribute('id');
    return new Element(element(by.css(`label[for=${targetId}]`)));
  }
}
