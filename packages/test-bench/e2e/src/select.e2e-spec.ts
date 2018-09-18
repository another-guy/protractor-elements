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

  fit(
    shouldImplement(
      Select.prototype.isPresent$.name,
      Select.prototype.isEnabled$.name,
      Select.prototype.isDisplayed$.name,
      Select.prototype.getValue$.name,
      Select.prototype.setValue$.name,
    ),
    async () => {
      expect(await activeSelect.isPresent$()).toBeTruthy();
      expect(await activeSelect.isEnabled$()).toBeTruthy();
      expect(await activeSelect.isDisplayed$()).toBeTruthy();
      expect(await activeSelect.getValue$()).toEqual(`None`);

      expect(await inactiveSelect.isPresent$()).toBeTruthy();
      expect(await inactiveSelect.isEnabled$()).toBeTruthy();
      expect(await inactiveSelect.isDisplayed$()).toBeTruthy();
      expect(await inactiveSelect.getValue$()).toEqual(`None`);

      await activeSelect.setValue$(`One`);
      expect(await activeSelect.getValue$()).toEqual(`One`);
    }
  );
});
