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
      var actual = this.actual, doesHaveOwnProperty = {}.hasOwnProperty;
      for (var i = 0, len = arguments.length; i < len; i += 1) {
        if (!doesHaveOwnProperty.call(actual, arguments[i])) {
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
