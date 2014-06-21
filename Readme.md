# polyfill-webcomponents

### Web Components Polyfills for use with [Browserify](https://github.com/substack/node-browserify).

This is the [Polymer Platform](https://github.com/Polymer/polymer) in a browserify-compatible package. This is not the full Polymer framework (e.g. no  `<polymer-element>`), it's just the platform, which provides the polyfills for next-generation web technology (plus some other stuff).

![image](https://cloud.githubusercontent.com/assets/43438/3347655/b0cfdd68-f8f1-11e3-85ee-e467eb09c366.png)

## Features

* CustomElements
* ShadowDOM
* HTMLTemplates
* Model Driven Views
* WeakMap
* PointerEvents
* PointerGestures
* HTMLImports

Due to nature of the browser, isolated encapsulation of these polyfills is not possible, thus be warned
**this modifies your entire browser environment** i.e. does not play well with others.

## Documentation

See the documentation specifically for the **Platform** on the [Polymer website.](http://www.polymer-project.org/docs/polymer/polymer.html)

## Versioning

Polyfills will be regularly updated to latest development versions. As there is no sensible way to do semver, versions will be tagged by timestamp: `0.YYYYMMDD.patch`. Patch version may be incremented if there's a critical problem with the build. If you want me to cut a new build to incorporate a particular update, please just open an issue.

## Usage

**See the [Getting Started](https://github.com/timoxley/polyfill-webcomponents/wiki/Getting-Started) guide for a step-by-step example.**

Use in-browser only with [browserify](https://github.com/substack/node-browserify).

```js
// polyfill your browser environment
var Platform = require('polyfill-webcomponents')
// Platform is polymer's proprietary namespace, contains some helpers
// Note this will creates a bunch of globals.
```

Simply `require('polyfill-webcomponents')` anywhere your code depends on webcomponents support.

You can safely `require('polyfill-webcomponents')` multiple times, it will only add the polyfills once.

## Installation

```
> npm install polyfill-webcomponents
```

### Use as a peer dependency

Peer dependencies allow child modules to require that the parent module has a compatible version installed. Despite the npm team no longer being keen on peer-dependencies, I believe this is a perfect use-case for them and I recommended you set `polyfill-webcomponents` as a [Peer Dependency](http://domenic.me/2013/02/08/peer-dependencies/) for anything except your top-level application. 

Because `polyfill-webcomponents` necessarily modifies your global state, and has been configured to only apply the polyfills once, it doesn't make much sense to have multiple copies of it bundled in your app.

Add this to your `package.json`:

```json
  "peerDependencies": {
    "polyfill-webcomponents": "*"
  },
```

## Browser Compatibility

Polymer is alpha software. Support/performance is a bit fickle in everything but Chrome & Canary, and you may even experience dramatic differences between versions of Chrome. For best experience you'll want to at least enable:

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

**Do the web a favour, insist on only supporting Evergreen Browsers in your upcoming project.**

[See Polymer's documentation for more information](http://www.polymer-project.org/compatibility.html).

## TODO

* Break these packages into more isolated components
* [Convince polymer team to publish these on npm themselves](https://github.com/Polymer/polymer/issues/326#)

## No Fork

If this package does not work as expected, let's work together to fix it; the last thing we need is
*more* random 3rd parties scattering unofficial Polymer pieces around npm.
