import { browser, ElementFinder } from 'protractor';

export class Element {
  constructor(public _element: ElementFinder | undefined) {
    if (_element == null) throw new Error(`_element can not be null/undefined`);
  }

  async isPresent$(): Promise<boolean> {
    return await this._element!.isPresent();
  }

  async isDisplayed$(): Promise<boolean> {
    return await this._element!.isDisplayed();
  }

  async isEnabled$(): Promise<boolean> {
    return await this._element!.isEnabled();
  }

  async getInnerText$(): Promise<string> {
    return await this._element!.getText();
  }

  async click$(): Promise<void> {
    return await this._element!.click();
  }

  async isFocused$(): Promise<boolean> {
    const activeWebElement = await browser.driver.switchTo().activeElement();
    const thisWebElement = await this._element!.getWebElement();
    return activeWebElement === thisWebElement;
  }

  focus() {
    // TODO
    //   Button is tricky...
  }
}
