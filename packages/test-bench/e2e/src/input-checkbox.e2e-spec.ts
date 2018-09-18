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
      InputCheckbox.prototype.getValue$.name,
      InputCheckbox.prototype.setValue$.name,
    ),
    async () => {
      expect(await inputCheckbox1.isPresent$()).toBeTruthy();
      expect(await inputCheckbox1.isEnabled$()).toBeTruthy();
      expect(await inputCheckbox1.isDisplayed$()).toBeTruthy();
      expect(await inputCheckbox1.getValue$()).toEqual(true);

      expect(await inputCheckbox2.isPresent$()).toBeTruthy();
      expect(await inputCheckbox2.isEnabled$()).toBeTruthy();
      expect(await inputCheckbox2.isDisplayed$()).toBeTruthy();
      expect(await inputCheckbox2.getValue$()).toEqual(false);

      await inputCheckbox1.setValue$(! await inputCheckbox1.getValue$());
      await inputCheckbox2.setValue$(! await inputCheckbox2.getValue$());
      expect(await inputCheckbox1.getValue$()).toEqual(false);
      expect(await inputCheckbox2.getValue$()).toEqual(true);
    }
  );
});
