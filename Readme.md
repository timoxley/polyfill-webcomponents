# polyfill-webcomponents

### Browserify compatible Web Components Polyfills

The 'polymer platform' in a browserify compatible package. Polyfills courtesy of [Polymer](https://github.com/Polymer/polymer)

Polyfills will be updated to latest development versions weekly.

## Usage

```js
// polyfill your browser environment
require('polyfill-webcomponents')
```

## Features

Due to nature of the browser, proper encapsulation of these polyfills is not possible.
**This modifies your entire browser environment** with polyfills for:

* CustomElements
* ShadowDOM
* HTMLTemplates
* Model Driven Views
* WeakMap
* Object.observe
* PointerEvents
* PointerGestures
* HTMLImports

Go to [polymer-project.org](http://www.polymer-project.org/) for API details.


## TODO

* Break these packages into more isolated components
* [Convince polymer team to publish these on npm themselves](https://github.com/Polymer/polymer/issues/326#)

## No Fork

If this package does not work as expected, let's work together to fix it; the last thing we need is
*more* random 3rd parties scattering unofficial Polymer pieces around npm.
