import { AppPage } from './app.component-object';
import { Element } from 'protractor-elements';
import { by, element } from 'protractor';
import { shouldImplement } from './testing/should-implement';

describe(Element.name, () => {
  let page: AppPage;
  let h1: Element;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    h1 = new Element(element(by.css(`h1`)));
  });

  it(
    shouldImplement(
      Element.prototype.isPresent$.name,
      Element.prototype.isEnabled$.name,
      Element.prototype.isDisplayed$.name,
      Element.prototype.getInnerText$.name,
    ),
    async () => {
      expect(await h1.isPresent$()).toBeTruthy();
      expect(await h1.isEnabled$()).toBeTruthy();
      expect(await h1.isDisplayed$()).toBeTruthy();
      expect(await h1.getInnerText$()).toEqual(`Test Bench`);
    }
  );
});
