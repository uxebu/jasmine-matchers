beforeEach(function() {
  this.addMatchers({

    toBeArray: function() {
      return {}.toString.call(this.actual) === '[object Array]';
    },

    toBeCloseToOneOf: function(values, isCloseToFunction) {
      var actual = this.actual;
      var isCloseTo = values.some(function(oneValue) {
        return isCloseToFunction(actual, oneValue)
      });

      var not = this.isNot ? " NOT" : "";
      var isCloseString = stringifyFunctionName(isCloseToFunction);
      this.message = function() {
        return 'Expected ' + actual + not + ' to be `' + isCloseString + '` of one of ' + JSON.stringify(values) + '.';
      };
      return isCloseTo;
    },

    toBeInstanceOf: function(Constructor) {
      return this.actual instanceof Constructor;
    },

    toBeInRange: function(a, b) {
      return this.actual <= b && this.actual >= a;
    },

    toBeNan: function() { // needs to be spelled 'Nan' due to jasmine conventions
      var actual = this.actual;
      // NaN is the only value that is not strictly equal to itself
      return actual !== actual;
    },

    toBeNumber: function() {
      return typeof this.actual == 'number';
    },

    toBeOfType: function(type) {
      return typeof this.actual === type;
    },

    toBeOneOf: function(values) {
      return values.indexOf(this.actual) > -1;
    }

  });
});
beforeEach(function() {
  this.addMatchers({

    toContainOnce: function(value) {
      var actual = this.actual;
      var containsOnce = false;
      if (actual) {
        var firstFoundAt = actual.indexOf(value);
        containsOnce = firstFoundAt!=-1 && firstFoundAt == actual.lastIndexOf(value);
      }
      return containsOnce;
    }

  });
});
beforeEach(function() {
  this.addMatchers({

    toHaveBeenCalledXTimes: function(count) {
      var callCount = this.actual.callCount;
      var not = this.isNot ? "NOT " : "";
      this.message = function() {
        return 'Expected spy "' + this.actual.identity + '" ' + not + ' to have been called ' + count + ' times, but was ' + callCount + '.';
      };
      return callCount == count;
    },

    toHaveLength: function(length) {
      return this.actual.length === length;
    },

    toHaveOwnProperties: function(name0, name1, name2) {
      var actual = this.actual, hasOwnProperty = {}.hasOwnProperty;
      for (var i = 0, len = arguments.length; i < len; i += 1) {
        if (!hasOwnProperty.call(actual, arguments[i])) {
          return false;
        }
      }
      return true;
    },

    toHaveProperties: function(name0, name1, name2) {
      var actual = this.actual;
      for (var i = 0, len = arguments.length; i < len; i += 1) {
        if (!(arguments[i] in actual)) {
          return false;
        }
      }
      return true;
    }

  });
});
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

function stringifyFunctionName(func) {
  var name = func.name;
  if (!name) {
    name = func.toSource()
      .replace(/^function\s/, '') // remove leading 'function '
      .match(/^.[^(]]+/)[0]; // remove everything after the function name.
  }
  return fromCamelCaseToReadable(name);
}

function fromCamelCaseToReadable(camelCaseString) {
  var characters = camelCaseString.split('');
  return characters.map(addSpaceBeforeUpperCaseLetter).join('').toLowerCase();
}

function addSpaceBeforeUpperCaseLetter(character){
  if (character.toLowerCase() != character) {
    character = ' ' + character;
  }
  return character;
}
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
