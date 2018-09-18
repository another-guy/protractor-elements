import { AppPage } from './app.component-object';
import { InputRadio, InputRadioOptionInfo, InputBase } from 'protractor-elements';
import { by, element } from 'protractor';
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
      InputRadio.prototype.optionsCount$.name,
      InputRadio.prototype.getOption$.name,
      InputRadio.prototype.getSelectedValue$.name,
      InputRadio.prototype.setSelectedValue$.name,
      InputRadioOptionInfo.prototype.findRelatedLabel$.name,
      InputRadioOptionInfo.prototype.getInput$.name,
      InputBase.prototype.isPresent$.name,
      InputBase.prototype.isEnabled$.name,
      InputBase.prototype.isDisplayed$.name,
    ),
    async () => {
      expect(await inputRadioColor.optionsCount$()).toEqual(3);

      const optionRed = await inputRadioColor.getOption$(0);
      expect(await (await optionRed.findRelatedLabel$()).getInnerText$()).toEqual(`Red`);

      const optionGreen = await inputRadioColor.getOption$(1);
      expect(await (await optionGreen.findRelatedLabel$()).getInnerText$()).toEqual(`Green`);

      const optionBlue = await inputRadioColor.getOption$(2);
      expect(await (await optionBlue.findRelatedLabel$()).getInnerText$()).toEqual(`Blue`);

      await Promise.all([ optionRed, optionGreen, optionBlue ].map(async option => {
        expect(await option.getInput$().isPresent$()).toBeTruthy();
        expect(await option.getInput$().isEnabled$()).toBeTruthy();
        expect(await option.getInput$().isDisplayed$()).toBeTruthy();
      }));

      // TODO Check disabled/not present/not displayed

      expect(await inputRadioColor.getSelectedValue$()).toEqual(`value-green`);
      await inputRadioColor.setSelectedValue$(`value-red`);
      expect(await inputRadioColor.getSelectedValue$()).toEqual(`value-red`);
    }
  );
});
