var assert = require('assert')

var Platform = require('../')
assert.strictEqual(window.Platform, Platform)

document.addEventListener('DOMContentLoaded', function() {
  var t = document.getElementById('greeting');
  var model = {
    salutations: [
      { what: 'Hello', who: 'World' },
      { what: 'GoodBye', who: 'DOM APIs' },
      { what: 'Hello', who: 'Declarative' },
      { what: 'GoodBye', who: 'Imperative' }
    ]
  };
  t.model = model;

  // Needed to detect model changes if Object.observe
  // is not available in the JS VM.
  Platform.performMicrotaskCheckpoint();
});
