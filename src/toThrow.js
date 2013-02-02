beforeEach(function() {
  this.addMatchers({

    toThrowInstanceOf: function(klass) {
      try {
        this.actual();
      } catch (e) {
        return e instanceof klass;
      }
      return false;
    },

    toThrowStartsWith: function(text) {
      var doesStartWith = false;
      var errorMessage = '';
      try {
        this.actual();
      } catch (e) {
        errorMessage = e.message;
        doesStartWith = startsWith(errorMessage, text);
      }
      var not = this.isNot ? " NOT" : "";
      this.message = function() {
        return 'Expected thrown error message `' + errorMessage + '`' + not + ' to start with `' + text + '`.';
      };
      return doesStartWith;
    }

  });

  function startsWith(haystack, needle) {
    return haystack.substr(0, needle.length) == needle;
  }

});
