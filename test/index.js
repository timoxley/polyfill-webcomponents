var assert = require('assert')

require('../')

if (!hasTemplateBinding()) {
  require('templatebinding')
}

var Expressions = typeof PolymerExpressions !== 'undefined'
  ? PolymerExpressions
  : require('polymer-expressions')

function hasTemplateBinding() {
  var t = document.createElement('template')
  return 'model' in t
}

var t = document.getElementById('text');
var t = document.querySelector('template');
t.bindingDelegate = new Expressions()
t.model = {
  text: [
    { value: 'Fee' },
    { value: 'Fi' },
    { value: 'Fo' },
    { value: 'Fum' }
  ]
};

var b = document.getElementById('rotateText');
b.addEventListener('click', function() {
  t.model.text.push(t.model.text.shift());
});

setTimeout(function() {
  var ul = document.querySelector('ul')
  for (var i = 1, l = ul.children.length; i < l; i ++) {
    var child = ul.children[i];
    assert.equal(child.innerText,  'Value: ' + t.model.text[i - 1].value)
  }
}, 100)
