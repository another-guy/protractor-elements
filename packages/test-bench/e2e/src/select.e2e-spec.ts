import { AppPage } from './app.component-object';
import { Select } from 'protractor-elements';
import { by, element } from 'protractor';
import { shouldImplement } from './testing/should-implement';

describe(Select.name, () => {
  let page: AppPage;
  let activeSelect: Select;
  let inactiveSelect: Select;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    activeSelect = new Select(element(by.css(`.select-active`)));
    inactiveSelect = new Select(element(by.css(`.select-inactive`)));
  });

  it(
    shouldImplement(
      Select.prototype.isPresent$.name,
      Select.prototype.isEnabled$.name,
      Select.prototype.isDisplayed$.name,
      Select.prototype.getDisplayValue$.name,
      Select.prototype.setDisplayValue$.name,
    ),
    async () => {
      // TODO get/setHiddenValue
      // TODO list values...

      expect(await activeSelect.isPresent$()).toBeTruthy();
      expect(await activeSelect.isEnabled$()).toBeTruthy();
      expect(await activeSelect.isDisplayed$()).toBeTruthy();
      expect(await activeSelect.getDisplayValue$()).toEqual(`None`);

      await activeSelect.setDisplayValue$(`One`);
      expect(await activeSelect.getDisplayValue$()).toEqual(`One`);

      expect(await inactiveSelect.isPresent$()).toBeTruthy();
      expect(await inactiveSelect.isEnabled$()).toBeFalsy();
      expect(await inactiveSelect.isDisplayed$()).toBeTruthy();
      expect(await inactiveSelect.getDisplayValue$()).toEqual(`None`);

      await inactiveSelect.setDisplayValue$(`One`);
      expect(await inactiveSelect.getDisplayValue$()).toEqual(`None`);
    }
  );
});
