import { by, element } from 'protractor';
import { InputRadioGroup, InputRadio } from 'protractor-elements';
import { AppPage } from './app.component-object';
import { shouldImplement } from './testing/should-implement';

describe(InputRadioGroup.name, () => {
  let page: AppPage;
  let colorRadioGroup: InputRadioGroup;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    colorRadioGroup = new InputRadioGroup(element.all(by.css(`[name=input-radio-color]`)));
  });

  it(
    shouldImplement(
      InputRadioGroup.prototype.items.name,
      InputRadioGroup.prototype.getHiddenValue$.name,
      InputRadioGroup.prototype.setHiddenValue$.name,
      InputRadio.prototype.findRelatedLabel$.name,
      InputRadio.prototype.isPresent$.name,
      InputRadio.prototype.isEnabled$.name,
      InputRadio.prototype.isDisplayed$.name,
      InputRadio.prototype.getDisplayValue$.name,
    ),
    async () => {
      expect(await colorRadioGroup.items().count$()).toEqual(3);

      const optionRed = colorRadioGroup.items().get(0);
      expect(await (await optionRed.findRelatedLabel$()).getDisplayValue$()).toEqual(`Red`);

      const optionGreen = await colorRadioGroup.items().get(1);
      expect(await (await optionGreen.findRelatedLabel$()).getDisplayValue$()).toEqual(`Green`);

      const optionBlue = await colorRadioGroup.items().get(2);
      expect(await (await optionBlue.findRelatedLabel$()).getDisplayValue$()).toEqual(`Blue`);

      await Promise.all([ optionRed, optionGreen, optionBlue ].map(async option => {
        expect(await option.isPresent$()).toBeTruthy();
        expect(await option.isEnabled$()).toBeTruthy();
        expect(await option.isDisplayed$()).toBeTruthy();
      }));

      // // TODO Check disabled/not present/not displayed

      expect(await colorRadioGroup.getHiddenValue$()).toEqual(`value-green`);
      await colorRadioGroup.setHiddenValue$(`value-red`);
      expect(await colorRadioGroup.getHiddenValue$()).toEqual(`value-red`);
    }
  );
});
