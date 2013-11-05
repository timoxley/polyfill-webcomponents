#!/bin/bash
set -e
cat build/platform/platform.concat.js > index.js

# temporary workaround for assumptions about
# this/window context:
# https://github.com/Polymer/ShadowDOM/pull/282 
sed -i bak -e 's/var ShadowDOMPolyfill/window.ShadowDOMPolyfill/' index.js
sed -i bak -e 's/this.ShadowDOMPolyfill/window.ShadowDOMPolyfill/g' index.js

# remove source mapping
sed -i bak -e 's/\/\/@ sourceMappingURL=platform\.concat.js\.map//g' index.js

rm index.jsbak
