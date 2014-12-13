#!/bin/bash

set -e

### Here be some dodgy modifications for browserify compatibility ###

cat build/webcomponents.js > index.src.js

# remove source mapping
sed -i bak -e 's/\/\/@ sourceMappingURL=platform\.concat.js\.map//g' index.src.js
sed -i bak -e 's/window.WebComponents || {}/window.WebComponents || {flags: flags}/g' index.src.js
# prevent double loading
# need to wrap in whole thing in closure because browserify/esprima spits "Illegal return statement"
# on return statement below?
echo "module.exports = (function(flags) {\n" > index.js
echo "if (window.Platform) return window.Platform; // prevent double-loading\n" >> index.js
# inject actual source
cat index.src.js >> index.js
# inject export val of window.Plaform.
# Try encourage people to access proprietary Platform via:
#   var Platform = require('polyfill-webcomponents')
# rather than global var window.Plaform
echo "return window.Platform;\n" >> index.js
## end closure
echo "\n})()\n" >> index.js

# clean up
rm index.src.jsbak
rm index.src.js
