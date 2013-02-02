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


});
