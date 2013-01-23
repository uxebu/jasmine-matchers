beforeEach(function() {
  this.addMatchers({

    //
    // toBe*
    //

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
    },

    //
    // toHave*
    //

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
    },

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

    toEitherStartWith: function() {
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
    },

    //
    // others
    //

    toContainOnce: function(value) {
      var actual = this.actual;
      var containsOnce = false;
      if (actual) {
        var firstFoundAt = actual.indexOf(value);
        containsOnce = firstFoundAt!=-1 && firstFoundAt == actual.lastIndexOf(value);
      }
      return containsOnce;
    },

    toThrowInstanceOf: function(klass) {
      try {
        this.actual();
      } catch (e) {
        return e instanceof klass;
      }
      return false;
    }

  });
});

function endsWith(haystack, needle) {
  return haystack.substr(-needle.length) == needle;
}

function startsWith(haystack, needle) {
  return haystack.substr(0, needle.length) == needle;
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
