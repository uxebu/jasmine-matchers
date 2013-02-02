beforeEach(function() {
  this.addMatchers({

    //
    // start/endWith
    //

    toEndWith: function(value) {
      return endsWith(this.actual, value);
    },

    toEachEndWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.every(function(oneValue) {
        return endsWith(oneValue, searchString)
      });
    },

    toStartWithEither: function() {
      var args = [].slice.call(arguments);
      for (var i=0, l=args.length; i<l; i++) {
        if (startsWith(this.actual, args[i])) {
          return true;
        }
      }
      return false;
    },

    toSomeEndWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.some(function(oneValue) {
        return endsWith(oneValue, searchString)
      });
    },

    toStartWith: function(value) {
      return startsWith(this.actual, value);
    },

    toEachStartWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.every(function(oneValue) {
        return startsWith(oneValue, searchString)
      });
    },

    toSomeStartWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.some(function(oneValue) {
        return startsWith(oneValue, searchString)
      });
    }

  });

  function isArray(value) {
    return toString.call(value) == '[object Array]';
  }

  function endsWith(haystack, needle) {
    if (isArray(haystack)) {
      return arrayEndsWith(haystack, needle);
    } else {
      return stringEndsWith(haystack, needle);
    }
  }

  function startsWith(haystack, needle) {
    if (isArray(haystack)) {
      return arrayStartsWith(haystack, needle);
    } else {
      return stringStartsWith(haystack, needle);
    }
  }

  function stringEndsWith(haystack, needle) {
    return haystack.substr(-needle.length) == needle;
  }

  function stringStartsWith(haystack, needle) {
    return haystack.substr(0, needle.length) == needle;
  }

  function arrayEndsWith(haystack, needle) {
    if (isArray(needle)) {
      var offset = haystack.length - needle.length;
      return needle.every(function(val, idx) {
        return val == haystack[idx + offset];
      });
    }
    return haystack.indexOf(needle) == haystack.length-1;
  }

  function arrayStartsWith(haystack, needle) {
    if (isArray(needle)) {
      return needle.every(function(val, idx) {
        return val == haystack[idx];
      });
    }
    return haystack.indexOf(needle) == 0;
  }

});
