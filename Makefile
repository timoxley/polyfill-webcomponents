all: index.js

index.js: build/platform replace.sh
	sh replace.sh

build: pull-all.sh
	-mkdir build
	cp pull-all.sh build
	-cd build && sh pull-all.sh

build/platform: build
	cd build/platform && npm install && grunt

test: 
	browserify test/index.js > test/build.js
	open http://localhost:8676/test/index.html &
	http-server -p 8676

.PHONY: all test replace
