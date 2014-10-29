.PHONY: update clean all test

all: index.js

index.js: build

update: build/tools
	-cd build/tools && sh bin/pull-all.sh

build:
	-cd build/tools/components/webcomponentsjs && git checkout .
	cp -f build/tools/components/webcomponentsjs/webcomponents.js build/webcomponents.js
	sh replace.sh

build/tools:
	-mkdir build
	-cd build && git clone https://github.com/Polymer/tools.git
	-cd build/tools && git checkout . && git clean -df

test: build
	node_modules/.bin/uglifyjs ./build/webcomponents.js --lint 2>&1 | grep Accide || echo "ok"
	cd test && beefy index.js:build.js --open

clean:
	rm -Rf build

