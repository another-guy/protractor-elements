import { by, element } from 'protractor';
import { InputCheckbox, InputCheckboxGroup } from 'protractor-elements';
import { AppPage } from './app.component-object';
import { shouldImplement } from './testing/should-implement';

describe(InputCheckboxGroup.name, () => {
  let page: AppPage;
  let fruitCheckbox: InputCheckboxGroup;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    fruitCheckbox = new InputCheckboxGroup(element.all(by.css(`.fruit-checkbox`)));
  });

  it(
    shouldImplement(
      InputCheckboxGroup.prototype.items.name,
      InputCheckbox.prototype.isPresent$.name,
      InputCheckbox.prototype.isEnabled$.name,
      InputCheckbox.prototype.isDisplayed$.name,
      InputCheckbox.prototype.getDisplayValue$.name,
      InputCheckbox.prototype.setDisplayValue$.name,
      InputCheckbox.prototype.clearDisplayValue$.name,
    ),
    async () => {
      const apple = fruitCheckbox.items().get(0);
      const orange = fruitCheckbox.items().get(1);

      expect(await apple.isPresent$()).toBeTruthy(`Apple CheckBox is present`);
      expect(await apple.isEnabled$()).toBeTruthy(`Apple CheckBox is enabled`);
      expect(await apple.isDisplayed$()).toBeTruthy(`Apple CheckBox is displayed`);
      expect(await orange.isPresent$()).toBeTruthy(`Orange CheckBox is present`);
      expect(await orange.isEnabled$()).toBeTruthy(`Orange CheckBox is enabled`);
      expect(await orange.isDisplayed$()).toBeTruthy(`Orange CheckBox is displayed`);

      expect(await apple.getDisplayValue$()).toBeTruthy(`Apple CheckBox is originally checked`);
      expect(await orange.getDisplayValue$()).toBeFalsy(`Orange CheckBox is originally UNchecked`);

      await apple.setDisplayValue$(! await apple.getDisplayValue$());
      expect(await apple.getDisplayValue$()).toBeFalsy(`Apple CheckBox is UNchecked after negating`);

      await orange.setDisplayValue$(! await orange.getDisplayValue$());
      expect(await orange.getDisplayValue$()).toBeTruthy(`Orange CheckBox is checked after negating`);

      await orange.clearDisplayValue$();
      expect(await orange.getDisplayValue$()).toBeFalsy(`Orange CheckBox is UNchecked after clearing`);
    }
  );
});
