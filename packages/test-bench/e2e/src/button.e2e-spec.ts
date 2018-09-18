import { AppPage } from './app.component-object';
import { Element, Button } from 'protractor-elements';
import { by, element } from 'protractor';
import { shouldImplement } from './testing/should-implement';

describe(Button.name, () => {
  let page: AppPage;
  let activeButton: Button;
  let inactiveButton: Button;
  let buttonClickStatus: Element;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    activeButton = new Button(element(by.css(`.active-button`)));
    inactiveButton = new Button(element(by.css(`.inactive-button`)));
    buttonClickStatus = new Element(element(by.css(`.button-click-status`)));
  });

  it(
    shouldImplement(
      Button.prototype.isPresent$.name,
      Button.prototype.isEnabled$.name,
      Button.prototype.isDisplayed$.name,
      Button.prototype.getInnerText$.name,
      Button.prototype.click$.name,
    ),
    async () => {
      expect(await activeButton.isPresent$()).toBeTruthy();
      expect(await activeButton.isEnabled$()).toBeTruthy();
      expect(await activeButton.isDisplayed$()).toBeTruthy();
      expect(await activeButton.getInnerText$()).toEqual(`Active Button`);

      expect(await inactiveButton.isPresent$()).toBeTruthy();
      expect(await inactiveButton.isEnabled$()).toBeFalsy();
      expect(await inactiveButton.isDisplayed$()).toBeTruthy();
      expect(await inactiveButton.getInnerText$()).toEqual(`Inactive Button`);

      expect(await buttonClickStatus.getInnerText$()).toEqual(`none`);

      await inactiveButton.click$();

      expect(await buttonClickStatus.getInnerText$()).toEqual(`none`);

      await activeButton.click$();

      expect(await buttonClickStatus.getInnerText$()).toEqual(`active-button`);
    }
  );
});
