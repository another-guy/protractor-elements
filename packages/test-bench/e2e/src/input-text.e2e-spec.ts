import { AppPage } from './app.component-object';
import { InputText } from 'protractor-elements';
import { by, element } from 'protractor';
import { shouldImplement } from './testing/should-implement';

describe(InputText.name, () => {
  let page: AppPage;
  let inputText: InputText;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    inputText = new InputText(element(by.css(`.input-text`)));
  });

  it(
    shouldImplement(
      InputText.prototype.isPresent$.name,
      InputText.prototype.isEnabled$.name,
      InputText.prototype.isDisplayed$.name,
      InputText.prototype.getDisplayValue$.name,
      InputText.prototype.setDisplayValue$.name,
    ),
    async () => {
      expect(await inputText.isPresent$()).toBeTruthy();
      expect(await inputText.isEnabled$()).toBeTruthy();
      expect(await inputText.isDisplayed$()).toBeTruthy();
      expect(await inputText.getDisplayValue$()).toEqual(`initial text value`);

      await inputText.setDisplayValue$(`new text value`);
      expect(await inputText.getDisplayValue$()).toEqual(`new text value`);
    }
  );
});
