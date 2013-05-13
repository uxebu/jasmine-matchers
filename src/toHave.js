(function() {
  function testKeyList(keys, object, testFn) {
    for (var i = 0, len = keys.length; i < len; i += 1) {
      if (!testFn(object, keys[i])) {
        return false;
      }
    }
    return true;
  }

  function testKeyObject(referenceObject, object, testFn) {
    if (typeof object != 'object') {
      return false;
    }

    for (var key in referenceObject) {
      if (typeof object[key] == 'object') {
        if (!testKeyObject(referenceObject[key], object[key], testFn)) {
          return false;
        }
      } else {
        if (!testFn(object, key, referenceObject[key])) {
          return false;
        }
      }
    }
    return true;
  }

  function hasProperty(object, key) {
    return key in object;
  }
  function hasOwnProperty(object, key) {
    return {}.hasOwnProperty.call(object, key);
  }
  function hasPropertyWithValue(object, key, value) {
    return JSON.stringify(object[key]) === JSON.stringify(value);
  }
  function hasOwnPropertyWithValue(object, key, value) {
    return hasOwnProperty(object, key) && hasPropertyWithValue(object, key, value);
  }

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
        return testKeyList(arguments, this.actual, hasOwnProperty);
      },

      toHaveOwnPropertiesWithValues: function(obj) {
        return testKeyObject(obj, this.actual, hasOwnPropertyWithValue);
      },

      toHaveProperties: function(name0, name1, name2) {
        return testKeyList(arguments, this.actual, hasProperty);
      },

      toHavePropertiesWithValues: function(obj) {
        var hasProps = testKeyObject(obj, this.actual, hasPropertyWithValue);
        var not = this.isNot ? " NOT" : "";
        this.message = function() {
          // Show only the values we compare, which are all keys given in obj.
          var keys = Object.keys(obj);
          var allActuals = this.actual;
          var actual = {};
          keys.forEach(function(key) { actual[key] = (allActuals && allActuals[key]) || undefined });
          return 'Expected properties with values ' + JSON.stringify(actual) + not + ' to be ' + JSON.stringify(obj) + '.';
        };
        return hasProps;
      },

      toExactlyHaveProperties: function(name0, name1, name2) {
        var actual = this.actual;
        var numArguments = arguments.length;
        for (var i = 0; i < numArguments; i += 1) {
          if (!hasOwnProperty(actual, arguments[i])) { return false; }
        }
        return Object.keys(actual).length === numArguments;
      }

    });
  });
}());
