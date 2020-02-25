# How To Contribute

Feel free to open a PR on the [github repository](https://github.com/cedmax/youmightnotneed).  
If you want to suggest any othe framework or library please [open an issue](https://github.com/cedmax/youmightnotneed/issues/new), before the PR.

Please note we have a [Code of Conduct](https://github.com/cedmax/youmightnotneed/blob/master/CODE_OF_CONDUCT.md), make sure you follow it in all your interactions with the project.

Run `yarn contributors` to add yourself to the Readme.md

## How to add a method implementation

In order to add a method/section, run `yarn new` and follow the instructions.

## File structure

Please follow the current file structure:

```
lodash.js
notes.md
spec.js
vanilla.js
```

Please use the examples in the [lodash documentation](https://lodash.com/docs) for the lodash.js files, just add the appropriate import.

##### ./lodash/array/chunk/lodash.js

```javascript
import { chunk } from 'lodash'

module.exports = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
```

Note that both lodash and vanilla need to `module.exports` the result of their operations: it's hidden on the website, but necessary for testing purposes. If you have more example, feel free to use something like `exports.propertyNameThatMakesSense` and change the spec file accordingly.

##### ./lodash/collection/find/spec.js

```javascript
const expected = { user: 'barney', age: 36, active: true }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('find', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
```

The `notes.md` file is meant to contain external links relevant to the the vanilla implementation (where the implementation was found, if not original, mdn references or such).

##### ./lodash/array/tail/notes.md

```md
[source](https://www.sitepoint.com/lodash-features-replace-es6/)
[mdn](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_operator)
```

## How it make it work on local

Launch `yarn` to install dependencies.  
`yarn start` to launch the watch mode.  
`yarn test` to launch the tests.
`yarn build` to create the built version in the `dist` folder.
