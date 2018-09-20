# protractor-elements

Enabling abstraction levels in your [Protractor](https://github.com/angular/protractor) tests.

## Install

From [npm](https://www.npmjs.com/package/protractor-elements) via `npm` or `yarn` package managers.

```sh
npm install protractor-elements
```

```sh
yarn add protractor-elements
```

## Motivation

Your test should NOT read like this:

```js
describe(`homepage`, () => {
  it(`should greet the named user`, () => {
    browser.get(`http://www.my-demo.site`);

    element(by.model(`yourName`)).sendKeys(`Igor`);

    const greeting = element(by.binding(`yourName`));
    expect(greeting.getText()).toEqual(`Hi, Igor!`);
  });
});
```

but rather

```js
describe(`homepage`, () => {
  it(`should greet the named user`, async () => {
    await new Site(`http://www.my-demo.site`).navigateTo();

    const nameInput = new InputText(element(by.css(`.yourName`)));
    await nameInput.setDisplayValue$(`Igor`);

    const greetingDivElement = new Element(element(by.css(`.greeting`)));
    expect(await greetingDivElement.getDisplayValue$()).toEqual(`Hi, Igor!`);
  });
});
```

because the wrappers like `InputText` or `Element` allow better type safety; simplify [PageObject](https://martinfowler.com/bliki/PageObject.html) and [ComponentObject](https://slides.com/igorsoloydenko/pragmatic-protractor#/15) creation; and improve code maintainabiiity.

## License

This code is distributed under [MIT license](https://github.com/another-guy/protractor-elements/blob/master/LICENSE).