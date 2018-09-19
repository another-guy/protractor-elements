import { by, element } from 'protractor';
import { InputRadio, InputRadioOption } from 'protractor-elements';
import { AppPage } from './app.component-object';
import { shouldImplement } from './testing/should-implement';

describe(InputRadio.name, () => {
  let page: AppPage;
  let inputRadioColor: InputRadio;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    inputRadioColor = new InputRadio(element.all(by.css(`[name=input-radio-color]`)));
  });

  it(
    shouldImplement(
      InputRadio.prototype.items.name,
      InputRadio.prototype.getHiddenValue$.name,
      InputRadio.prototype.setHiddenValue$.name,
      InputRadioOption.prototype.findRelatedLabel$.name,
      InputRadioOption.prototype.isPresent$.name,
      InputRadioOption.prototype.isEnabled$.name,
      InputRadioOption.prototype.isDisplayed$.name,
      InputRadioOption.prototype.getDisplayValue$.name,
    ),
    async () => {
      expect(await inputRadioColor.items().count$()).toEqual(3);

      const optionRed = inputRadioColor.items().get(0);
      expect(await (await optionRed.findRelatedLabel$()).getDisplayValue$()).toEqual(`Red`);

      const optionGreen = await inputRadioColor.items().get(1);
      expect(await (await optionGreen.findRelatedLabel$()).getDisplayValue$()).toEqual(`Green`);

      const optionBlue = await inputRadioColor.items().get(2);
      expect(await (await optionBlue.findRelatedLabel$()).getDisplayValue$()).toEqual(`Blue`);

      await Promise.all([ optionRed, optionGreen, optionBlue ].map(async option => {
        expect(await option.isPresent$()).toBeTruthy();
        expect(await option.isEnabled$()).toBeTruthy();
        expect(await option.isDisplayed$()).toBeTruthy();
      }));

      // // TODO Check disabled/not present/not displayed

      expect(await inputRadioColor.getHiddenValue$()).toEqual(`value-green`);
      await inputRadioColor.setHiddenValue$(`value-red`);
      expect(await inputRadioColor.getHiddenValue$()).toEqual(`value-red`);
    }
  );
});
