# node-version-check
> Check if the runtime Node version satisfies some version

[![NPM Version][npm-image]][npm-url]
[![Linux & Mac Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Code Coverage][codecov-image]][codecov-url]


[![Dependency Status][david-image]][david-url]
[![Dev Dependency Status][david-dev-image]][david-dev-url]

## Usage

This module is meant to help out with running things only if the runtime version of node is greater than or equal a
given version, such as 4.

The module exposes a binary called `node-version-check`, which takes a string to check against as an argument.
 
Example usage is for example to not run `eslint>=3` on version of node less than 4.

```json
"scripts": {
  "lint": "node-version-check '>=4' && eslint . || node-version-check '<4'"
}
```

It uses [`node-semver`'s](https://github.com/npm/node-semver) `satisfies` under the hood, this allows you to check
against any arbitrary version, such as exact (`node-version-check '4.0.0'`) or minor (`node-version-check '^4.0.0'`)
etc..

### Extra binaries

For convenience, a binary to check whether the node version is >=4 and <4 is also included.

```json
"scripts": {
  "lint": "node-version-gte-4 && eslint . || echo Node version too old to run linting"
}
```

A bin with `lt` is also included to avoid having to handle the OR case.

```json
"scripts": {
  "lint": "node-version-gte-4 && eslint . || node-version-lt-4"
}
```

There are also binaries for `node@>=6` and `node@<6` included.

[npm-url]: https://npmjs.org/package/node-version-check
[npm-image]: https://img.shields.io/npm/v/node-version-check.svg
[travis-url]: https://travis-ci.org/SimenB/node-version-check
[travis-image]: https://img.shields.io/travis/SimenB/node-version-check/master.svg?maxAge=2592000
[appveyor-url]: https://ci.appveyor.com/project/SimenB/node-version-check
[appveyor-image]: https://ci.appveyor.com/api/projects/status/leljtwqeg3x55v22/branch/master?svg=true
[codecov-url]: https://codecov.io/gh/SimenB/node-version-check
[codecov-image]: https://img.shields.io/codecov/c/github/SimenB/node-version-check/master.svg
[david-url]: https://david-dm.org/SimenB/node-version-check
[david-image]: https://img.shields.io/david/SimenB/node-version-check.svg
[david-dev-url]: https://david-dm.org/SimenB/node-version-check?type=dev
[david-dev-image]: https://img.shields.io/david/dev/SimenB/node-version-check.svg
