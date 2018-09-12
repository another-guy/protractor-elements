# Breadcrumbs

```sh

mkdir protractor-elements

cd protractor-elements

lerna init

yarn install

cd packages
mkdir protractor-elements && cd $_
yo node-typescript

cd packages
ng new test-bench

# Add   "protractor-elements": "^0.0.0" as a dependency to `test-bench`

lerna bootstrap

cd packages/protractor-elements
lerna add protractor

```
