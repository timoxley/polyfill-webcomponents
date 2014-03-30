# polyfill-webcomponents

### Web Components Polyfills for use with [Browserify](https://github.com/substack/node-browserify).

This is the [Polymer Platform](https://github.com/Polymer/polymer) in a browserify-compatible package. This is not the full Polymer framework, just the platform, which provides the polyfills for next-generation web technology (plus some other stuff).

Polyfills will be regularly updated to latest development versions.

## Installation

```
> npm install --save polyfill-webcomponents
```

## Usage

**See the [Getting Started](https://github.com/timoxley/polyfill-webcomponents/wiki/Getting-Started) guide for a step-by-step example.**

Use in-browser only with [browserify](https://github.com/substack/node-browserify).

```js
// polyfill your browser environment
var Platform = require('polyfill-webcomponents')
// Platform is polymer's proprietary namespace, contains some helpers
```

Simply require polyfill-webcomponents anywhere your code needs webcomponent support.

You can safely require polyfill-webcomponents multiple times, it will only add the polyfills once.

### Use as a peer dependency

It is recommended to set `polyfill-webcomponents` as a [Peer Dependency](http://domenic.me/2013/02/08/peer-dependencies/) for anything except your top-level application.

Because `polyfill-webcomponents` necessarily modifies your global state, and will only load once, it doesn't make sense to have multiple copies bundled in your app. Peer dependencies allows a child modules to use the version loaded in the parent module.

Add this to your `package.json`:

```json
  "peerDependencies": {
    "polyfill-webcomponents": "*"
  },
```

## Documentation

See the documentation specifically for the **Platform** on the [Polymer website.](http://www.polymer-project.org/docs/polymer/polymer.html)

## Features

Due to nature of the browser, proper encapsulation of these polyfills is not possible.
**This modifies your entire browser environment** with polyfills for:

* CustomElements
* ShadowDOM
* HTMLTemplates
* Model Driven Views
* WeakMap
* PointerEvents
* PointerGestures
* HTMLImports

Go to [polymer-project.org](http://www.polymer-project.org/) for API details.

## Browser Compatibility

This is alpha software. Support/performance is a bit fickle in everything but Chrome & Canary, and you may even experience dramatic differences between versions of Chrome. For best experience you'll want to at least enable:

* chrome://flags/#enable-experimental-web-platform-features
* chrome://flags/#enable-html-imports
* chrome://flags/#enable-javascript-harmony

But remember to also test for degraded performance with these features off.

These polyfills work ([with caveats](http://www.polymer-project.org/compatibility.html)) in [Evergreen Browsers](http://tomdale.net/2013/05/evergreen-browsers/).

* Chrome
* Canary
* Chrome Android
* Firefox
* Safari 6+
* Mobile Safari
* Internet Explorer 10+

Do the web a favour, insist on only supporting Evergreen Browsers in your upcoming project.

[See Polymer's documentation for more information](http://www.polymer-project.org/compatibility.html).

## TODO

* Break these packages into more isolated components
* [Convince polymer team to publish these on npm themselves](https://github.com/Polymer/polymer/issues/326#)

## No Fork

If this package does not work as expected, let's work together to fix it; the last thing we need is
*more* random 3rd parties scattering unofficial Polymer pieces around npm.
