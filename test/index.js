var assert = require('assert')

var Platform = require('../')
require('templatebinding')
assert.strictEqual(window.Platform, Platform)

    function createShadowRoot(node) {
      return window.ShadowDOMPolyfill ? node.createShadowRoot() :
          node.createShadowRoot();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      var host = document.querySelector('#host');
      var root = createShadowRoot(host);
      var template = document.querySelector('template');
      root.appendChild(template.createInstance());
      
      var innerHost = root.querySelector('#innerHost');
      var innerRoot = createShadowRoot(innerHost);
      innerRoot.innerHTML = '<content select="*"></content>';
      
      
      var t = root.querySelector('template');
      t.model = {
        person: {name: 'Bob'}
      };
      setTimeout(function() {
        console.log('notifyChanges');
        assert.equal(innerHost.children.length, 3, 
          'Template stamped into shadowDOM');
        if (window.ShadowDOMPolyfill) {
          assert.equal(innerHost.impl.children.length, 3, 
          'Template stamping distributed to composed tree under ShadowDOMPolyfill');
        }
      }, 500);
    });
