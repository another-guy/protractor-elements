import { AppPage } from './app.component-object';
import { InputCheckbox } from 'protractor-elements';
import { by, element } from 'protractor';
import { shouldImplement } from './testing/should-implement';

describe(InputCheckbox.name, () => {
  let page: AppPage;
  let inputCheckbox1: InputCheckbox;
  let inputCheckbox2: InputCheckbox;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    inputCheckbox1 = new InputCheckbox(element(by.css(`.input-checkbox-1`)));
    inputCheckbox2 = new InputCheckbox(element(by.css(`.input-checkbox-2`)));
  });

  it(
    shouldImplement(
      InputCheckbox.prototype.isPresent$.name,
      InputCheckbox.prototype.isEnabled$.name,
      InputCheckbox.prototype.isDisplayed$.name,
      InputCheckbox.prototype.getDisplayValue$.name,
      InputCheckbox.prototype.setDisplayValue$.name,
    ),
    async () => {
      expect(await inputCheckbox1.isPresent$()).toBeTruthy();
      expect(await inputCheckbox1.isEnabled$()).toBeTruthy();
      expect(await inputCheckbox1.isDisplayed$()).toBeTruthy();
      expect(await inputCheckbox1.getDisplayValue$()).toEqual(true);

      expect(await inputCheckbox2.isPresent$()).toBeTruthy();
      expect(await inputCheckbox2.isEnabled$()).toBeTruthy();
      expect(await inputCheckbox2.isDisplayed$()).toBeTruthy();
      expect(await inputCheckbox2.getDisplayValue$()).toEqual(false);

      await inputCheckbox1.setDisplayValue$(! await inputCheckbox1.getDisplayValue$());
      await inputCheckbox2.setDisplayValue$(! await inputCheckbox2.getDisplayValue$());
      expect(await inputCheckbox1.getDisplayValue$()).toEqual(false);
      expect(await inputCheckbox2.getDisplayValue$()).toEqual(true);
    }
  );
});
