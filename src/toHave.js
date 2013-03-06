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
    for (var key in referenceObject) {
      if (!testFn(object, key, referenceObject[key])) {
        return false;
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
    return object[key] === value;
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
        return testKeyObject(obj, this.actual, hasPropertyWithValue);
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
