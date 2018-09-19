import { browser, ElementFinder } from 'protractor';

export class Adapter {
  async getValueAttribute$(element: ElementFinder): Promise<string> {
    return await element.getAttribute('value');
  }

  async click$(element: ElementFinder): Promise<void> {
    return await element.click();
  }

  async isFocused$(element: ElementFinder): Promise<boolean> {
    const activeWebElement = await browser.driver.switchTo().activeElement();
    const thisWebElement = await element!.getWebElement();
    return activeWebElement === thisWebElement;
  }

  async isPresent$(element: ElementFinder): Promise<boolean> {
    return await element.isPresent();
  }

  async isDisplayed$(element: ElementFinder): Promise<boolean> {
    return await element.isDisplayed();
  }
  
  async isEnabled$(element: ElementFinder): Promise<boolean> {
    return await element.isEnabled();
  }
  
  async getInnerText$(element: ElementFinder): Promise<string> {
    return await element.getText();
  }

}
