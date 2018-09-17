import * as index from '../src/index';

const exportedTypeList = [
  index.Button,
  index.Element,
  index.InputBase,
  index.InputCheckbox,
  index.InputRadio,
  index.InputText,
  index.ListPageObject,
  index.Select,
];

exportedTypeList.forEach(type =>
  describe(`Should have ${type} available`, () => {
    expect(type).toBeTruthy();
  })
);
