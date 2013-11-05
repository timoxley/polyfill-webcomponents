# polyfill-webcomponents

Browserifyable Web Components Polyfills courtesy of [Polymer](https://github.com/Polymer/polymer)

** This is simply the result of building the 'polymer platform'. ** 

Due to nature of the browser, encapsulation of these polyfills is not possible. This modifies your entire browser environment with polyfills for:

* CustomElements
* ShadowDOM
* HTMLTemplates
* Model Driven Views
* WeakMap
* Object.observe
* PointerEvents
* PointerGestures
* HTMLImports

Go to [polymer-project.org](http://www.polymer-project.org/) for details of usage.

## Usage

```js
// modify your whole environment
require('polyfill-webcomponents')
```

## TODO

* Break these up into more component pieces
* [Convince polymer team to publish these on npm themselves](https://github.com/Polymer/polymer/issues/326#)
