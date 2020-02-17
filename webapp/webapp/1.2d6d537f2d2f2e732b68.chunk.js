webpackJsonp([1],Array(310).concat([
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6258a346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6258a346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6258a346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(670)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6258a346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/member/chat/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6258a346", Component.options)
  } else {
    hotAPI.reload("data-v-6258a346", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventTarget = __webpack_require__(374)
  ;

function EventEmitter() {
  EventTarget.call(this);
}

inherits(EventEmitter, EventTarget);

EventEmitter.prototype.removeAllListeners = function(type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};

EventEmitter.prototype.once = function(type, listener) {
  var self = this
    , fired = false;

  function g() {
    self.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  this.on(type, g);
};

EventEmitter.prototype.emit = function() {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

module.exports.EventEmitter = EventEmitter;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URL = __webpack_require__(373);

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:utils:url');
}

module.exports = {
  getOrigin: function(url) {
    if (!url) {
      return null;
    }

    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }

    var port = p.port;
    if (!port) {
      port = (p.protocol === 'https:') ? '443' : '80';
    }

    return p.protocol + '//' + p.hostname + ':' + port;
  }

, isOriginEqual: function(a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  }

, isSchemeEqual: function(a, b) {
    return (a.split(':')[0] === b.split(':')[0]);
  }

, addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  }

, addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
  }
};


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = "function" === "function" && __webpack_require__(521);

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return JSON3;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module), __webpack_require__(8)))

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var random = __webpack_require__(341);

var onUnload = {}
  , afterUnload = false
    // detect google chrome packaged apps because they don't allow the 'unload' event
  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
  ;

module.exports = {
  attachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  }

, detachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  }

, unloadAdd: function(listener) {
    if (isChromePackagedApp) {
      return null;
    }

    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  }

, unloadDel: function(ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  }

, triggerUnloadCallbacks: function() {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};

var unloadTriggered = function() {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global crypto:true */
var crypto = __webpack_require__(513);

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function(length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , urlUtils = __webpack_require__(338)
  , SenderReceiver = __webpack_require__(375)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:ajax-based');
}

function createAjaxSender(AjaxObject) {
  return function(url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {'Content-type': 'text/plain'};
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function(status) {
      debug('finish', status);
      xo = null;

      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function() {
      debug('abort');
      xo.close();
      xo = null;

      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}

function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}

inherits(AjaxBasedTransport, SenderReceiver);

module.exports = AjaxBasedTransport;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , XhrDriver = __webpack_require__(376)
  ;

function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}

inherits(XHRLocalObject, XhrDriver);

XHRLocalObject.enabled = XhrDriver.enabled;

module.exports = XHRLocalObject;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = {
  isOpera: function() {
    return global.navigator &&
      /opera/i.test(global.navigator.userAgent);
  }

, isKonqueror: function() {
    return global.navigator &&
      /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
, hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }

    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventUtils = __webpack_require__(340)
  , JSON3 = __webpack_require__(339)
  , browser = __webpack_require__(344)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:utils:iframe');
}

module.exports = {
  WPrefix: '_jp'
, currentWindowId: null

, polluteGlobalNamespace: function() {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  }

, postMessage: function(type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON3.stringify({
        windowId: module.exports.currentWindowId
      , type: type
      , data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  }

, createIframe: function(iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function() {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function() {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function() {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function(err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function(msg, origin) {
      debug('post', msg, origin);
      setTimeout(function() {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };

    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function() {
      onerror('onerror');
    };
    iframe.onload = function() {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function() {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }

/* eslint no-undef: "off", new-cap: "off" */
, createHtmlfile: function(iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function() {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function() {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function(r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function(msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function() {
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };

    doc.open();
    doc.write('<html><s' + 'cript>' +
              'document.domain="' + global.document.domain + '";' +
              '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function() {
      onerror('onerror');
    };
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }
};

module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
    typeof global.postMessage === 'object') && (!browser.isKonqueror());
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 判断元素类型
 * @care
 * console.log(document.__proto__); // HTMLDocument
 * console.log(document.__proto__.__proto__); // Document
 * console.log(document.__proto__.__proto__.__proto__); // Node
 * console.log(document.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(window.__proto__); // Window
 * console.log(window.__proto__.__proto__); // WindowProperties
 * console.log(window.__proto__.__proto__.__proto__); // Node
 * console.log(window.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(document.body.__proto__); // HTMLBodyElement
 * console.log(document.body.__proto__.__proto__); // HTMLElement
 * console.log(document.body.__proto__.__proto__.__proto__); // Element
 * console.log(document.body.__proto__.__proto__.__proto__.__proto__); // Node
 * console.log(document.body.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
 *
 * console.log(document.documentElement.__proto__); // HTMLHtmlElement
 * console.log(document.documentElement.__proto__.__proto__); // HTMLElement
 * console.log(document.documentElement.__proto__.__proto__.__proto__); // Element
 * console.log(document.documentElement.__proto__.__proto__.__proto__.__proto__); // Node
 * console.log(document.documentElement.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
 * @param { elem } [ any<require> ]
 * @param { type = 'dom'} [ 'dom','document','window']
 * @return [ boolean ]
 */

let checker = function(elem, type = "dom") {
  if (elem == null) throw new Error("The argument must be require.");
  if (type === "dom") {
    return typeof elem === "object" && elem.nodeType === 1 && typeof elem.nodeName === "string";
  } else if (type === "document") {
    return typeof elem === "object" && elem.nodeType === 9 && elem.nodeName === "#document";
  } else if (type === "window") {
    return elem === elem.window;
  }
};
checker.dom = function(elem) {
  return checker(elem, "dom");
};
checker.document = function(elem) {
  return checker(elem, "document");
};
checker.window = function(elem) {
  return checker(elem, "window");
};
/* harmony default export */ __webpack_exports__["a"] = (checker);

//console.log(checker.window(window));


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:receiver:xhr');
}

function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;

  this.bufferPosition = 0;

  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function(status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}

inherits(XhrReceiver, EventEmitter);

XhrReceiver.prototype._chunkHandler = function(status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }

  for (var idx = -1; ; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};

XhrReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

XhrReceiver.prototype.abort = function() {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};

module.exports = XhrReceiver;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , XhrDriver = __webpack_require__(376)
  ;

function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minusScore = exports.closeWork = exports.getMemberChat = exports.setChatStatus = exports.getChatHistoryKfAndCd = exports.getChatHistory = exports.closeAppeal = exports.getAppealDetail = exports.changeWorkStatus = exports.getWorkBench = exports.queryCustom = undefined;

var _http = __webpack_require__(26);

var queryCustom = exports.queryCustom = function queryCustom(data) {
  return (0, _http.post)("admin/otc/appeal/appeal", data);
};

// 获取申诉订单
var getWorkBench = exports.getWorkBench = function getWorkBench(data) {
  return (0, _http.request)("admin/otc/appeal/appealWorkbench", data);
};

// 切换工作状态
var changeWorkStatus = exports.changeWorkStatus = function changeWorkStatus(data) {
  return (0, _http.request)("admin/otc/appeal/workStatus", data);
};

//获取申述订单详情
var getAppealDetail = exports.getAppealDetail = function getAppealDetail(data) {
  return (0, _http.request)("admin/otc/appeal/AppealDetail", data);
};

//关闭申诉订单
var closeAppeal = exports.closeAppeal = function closeAppeal(data) {
  return (0, _http.request)("admin/otc/appeal/closeAppeal", data);
};

// 获取历史聊天信息
var getChatHistory = exports.getChatHistory = function getChatHistory(data) {
  return (0, _http.request)("/p/getHistoryMessageKf.do", data, "000");
};

// 获取历史聊天信息 - 承兑商单聊
var getChatHistoryKfAndCd = exports.getChatHistoryKfAndCd = function getChatHistoryKfAndCd(data) {
  return (0, _http.request)("/p/getHistoryMessageKfpCd.do", data, "000");
};

// 标记聊天数据为已读
var setChatStatus = exports.setChatStatus = function setChatStatus(data) {
  return (0, _http.request)("/p/read.do", data, "000");
};

// 获取历史聊天对象
var getMemberChat = exports.getMemberChat = function getMemberChat(data) {
  return (0, _http.request)("/admin/member/memberChat", data);
};

// 获取正在上班的客服
var closeWork = exports.closeWork = function closeWork(data) {
  return (0, _http.request)("admin/otc/appeal/closeWork", data);
};

// 惩罚
var minusScore = exports.minusScore = function minusScore(data) {
  return (0, _http.request)("admin/member/minusScore", data);
};

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 验证一个数据是否是合法的时间格式
 * @param { date } [ any ]
 * @msg 当 date 是 null true 1 等值时，可以得到合法的时间
 * @return [ boolean ]
 * @example  console.log(checker(new Date())); // => true
 */
let checker = function(date) {
  return new Date(date).toString() !== "Invalid Date";
};

/* harmony default export */ __webpack_exports__["a"] = (checker);

//console.log(checker(new Date())); // => true


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(350);

/**
 * @name 时间格式化
 * @param {date} [date] 需要格式化的时间
 * @param {fmt} [ string ] 格式化规则 yyyy-MM-dd HH:mm:ss
 * @example console.log(formater(new Date(), "yyyy-MM-dd HH:mm:ss ")); => 2019-06-28 18:19:16
 */
let formater = function(date, fmt) {
  let checkDate = new Date(date);
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(date)) throw new Error("The first argument must be a valid date.");
  if (typeof fmt !== "string") throw new Error("The second argument must be string.");
  date = checkDate;
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
};

/* harmony default export */ __webpack_exports__["a"] = (formater);
//console.log(formater("new Date()", "yyyy-MM-dd HH:mm:ss "));


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  , eventUtils = __webpack_require__(340)
  , browser = __webpack_require__(344)
  , urlUtils = __webpack_require__(338)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self._start(method, url, payload);
  }, 0);
}

inherits(XDRObject, EventEmitter);

XDRObject.prototype._start = function(method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  xdr.onerror = function() {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function() {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function() {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function() {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function() {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};

XDRObject.prototype._error = function() {
  this.emit('finish', 0, '');
  this._cleanup(false);
};

XDRObject.prototype._cleanup = function(abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);

  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};

XDRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

module.exports = XDRObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var inherits = __webpack_require__(336)
  , IframeTransport = __webpack_require__(380)
  , objectUtils = __webpack_require__(354)
  ;

module.exports = function(transport) {

  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }

  inherits(IframeWrapTransport, IframeTransport);

  IframeWrapTransport.enabled = function(url, info) {
    if (!global.document) {
      return false;
    }

    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };

  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;

  return IframeWrapTransport;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

, extend: function(obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Event(eventType) {
  this.type = eventType;
}

Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};

Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};

Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

module.exports = Event;


/***/ }),
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dimener;
/**
 * @name 判断数组是二维数组
 * @msg 子元素全部是数组组成的数组
 * @param { array } [ array ]
 * @return [ boolean ]
 */
function dimener(array) {
  if (!Array.isArray(array)) {
    throw new Error("The argument must be array.");
  }
  for (let n = 0; n < array.length; n++) {
    if (!Array.isArray(array[n])) {
      return false;
    }
  }
  return true;
}


/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sorter;
/**
 * @name  数组排序
 * @msg 不支持对象类型元素,会改变原数组的顺序
 * @param { array } [ array ]
 * @param { isUp = true } [ boolean ] 是否是升序
 * @return  [ array ]
 */

function sorter(array = [], isUp = true) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be array.');
  }
  if (typeof isUp !== 'boolean') {
    throw new Error('The second argument must be boolean.');
  }
  return array.sort((a, b) => {
    return isUp ? a - b : b - a;
  });
}

/**
 * @name 数组排序-快速
 * @msg 不支持对象元素
 * @param { array } [ array ]
 * @param { isUp = true } [ boolean ] 是否是升序
 * @return: [ array ]
 */

sorter.quicker = function(array = [], isUp = true) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be array.');
  }
  if (typeof isUp !== 'boolean') {
    throw new Error('The second argument must be boolean.');
  }
  if (array.length === 0) {
    return array;
  }
  let mid = array[0];
  let left = [],
    right = [];
  for (let n = 1; n < array.length; n++) {
    let element = array[n];
    element < mid ? left.push(element) : right.push(element);
  }
  return sorter.quicker(left).concat([mid], sorter.quicker(right));
};

/**
 * @name 数组排序-快速
 * @msg 支持对象元素的排序
 * @param { array } [array]
 * @param { callback } [ function ] 通过指定的函数
 * @param { context } [ any ] 执行方法的执行上下文
 * @return:[ array ]
 */

sorter.quicker.with = function(array = [], callback = function() {}, context = this) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be array.');
  }
  if (typeof callback !== 'function') {
    throw new Error('The second argument must be function.');
  }
  if (array.length === 0) {
    return array;
  }
  let mid = array[0];
  let left = [],
    right = [];
  for (let n = 1; n < array.length; n++) {
    let element = array[n];
    let res = callback.call(context, element, mid, array);
    res ? left.push(element) : right.push(element);
  }
  return sorter.quicker.with(left, callback, context).concat([mid], sorter.quicker.with(right, callback, context));
};

/**
 * @name 数组排序(冒泡)
 * @msg 所有排序中速度最慢的
 * 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 * 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
 * 针对所有的元素重复以上的步骤，除了最后一个。
 * 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 * 冒泡排序总的平均时间复杂度为O(n^2)
 * @param {arr} [ array] 数组
 * @param { isUp = true } [ boolean] 是否是升序
 * @return [array]
 */
sorter.subbinger = function(array = [], isUp = true) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be array.');
  }
  if (typeof isUp !== 'boolean') {
    throw new Error('The second argument must be boolean.');
  }
  let len = array.length;
  for (let n = 0; n < len - 1; n++) {
    for (let k = 0; k < len - n - 1; k++) {
      if ((isUp && array[k] > array[k + 1]) || (!isUp && array[k] < array[k + 1])) {
        [array[k], array[k + 1]] = [array[k + 1], array[k]];
      }
    }
  }
  return array;
};


/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/**
 * @name  获取数据类型
 * @param   { ...args } [ array<string> ]
 * @return [ function ]
 * @param   { value } [ any ]
 * @return  [ boolean ]
 */

function is(...args) {
  return function(value) {
    let type = Object.prototype.toString
      .call(value)
      .slice(8, -1)
      .toLowerCase();
    return args.some(arg => arg === type);
  };
}

//console.log(is('null','undefined')())


/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Descripttion: 正则表达式
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-25 17:18:22
 */

/* harmony default export */ __webpack_exports__["a"] = ([
  {
    type: "special",
    rules: ["含特殊字符组成的非空字符串"],
    text: "是否含特殊字符",
    success: ["!@#$$%^&*())", "1!"],
    error: ["123456", "qazxsw"],
    value: /[`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
  },
  {
    type: "chinese",
    rules: ["只能由中文汉字组成的非空字符串"],
    text: "是否是中文",
    success: ["一二三"],
    error: ["123456", "qazxsw"],
    value: /^[\u4E00-\u9FA5]+$/
  },
  {
    type: "english",
    rules: ["只能由'a-z'|'A-Z'组成的非空字符串"],
    text: "是否是英文",
    success: ["qazxsw", "QAZWSX", "qazWSX"],
    error: ["123456", "123qaz"],
    value: /^[a-zA-Z]+$/
  },
  {
    type: "english-upper",
    rules: ["只能由'A-Z'组成的非空字符串"],
    text: "是否是大写英文",
    success: ["QAZWSX"],
    error: ["qazwsx"],
    value: /^[A-Z]+$/
  },
  {
    type: "english-lower",
    rules: ["只能由'a-z'组成的非空字符串"],
    text: "是否是小写英文",
    success: ["qazxsw"],
    error: ["QAZWSX"],
    value: /^[a-z]+$/
  },

  {
    type: "number",
    rules: ["只能由0-9组成的非空字符串"],
    text: "是否是数字",
    success: ["13231", "093920"],
    error: ["dsdsdsdsds", "0.100102010201"],
    value: /^[0-9]+$/
  },
  {
    type: "number-free",
    rules: ["只能由'0-9'|'.'|'-'组成的非空字符串", "小数点至多有一个，并且第一位不能是小数点", "以0打头，后面没有小数点，则0本身，且前面不能带'-'，否则，后面跟任意位的非全0的数字", "非0打头，后面没有小数点，则数值本身，否则后面跟任意位的任意数字"],
    text: "是否是合法的数字",
    success: ["1", "0", "10", "-1", "0.1", "0.01"],
    error: ["-0", "0.", "0.00", ".0", "01"],
    value: /(^(-)?0\.([0-9]*)?[1-9]+([0-9]*)?$)|(^[0]{1}$)|(^(-)?[1-9]([0-9]+)?(\.[0-9]+)?$)/
  },
  {
    type: "number-integer",
    rules: ["只能由'0-9'|'-'组成的非空字符串", "以0打头，则0本身"],
    text: "是否是整数",
    success: ["1", "0", "10", "-1"],
    error: ["-0", "0.1", "0.00", ".0", "0.001", "01"],
    value: /(^(-)?([1-9][0-9]*)$)|(^[0]{1}$)/
  },
  {
    type: "number-money",
    rules: ["只能由'0-9'|'.'组成的非空字符串", "小数点至多有一个，并且第一位不能是小数点", "以0打头，后面没有小数点，则0本身，否则后面跟不能全为0的至少一位数字", "非0打头，后面没有小数点，则数值本身，否则后面跟1-2位的任意数字"],
    success: ["0.01", "0.10", "0.1", "0", "1"],
    error: ["-0", "0.0", "0.00", ".0", "0.001", "-1", "01"],
    text: "是否是金钱格式",
    value: /(^[0]{1}$)|(^0\.[1-9]([0-9])?$)|(^0\.([0-9])?[1-9]$)|(^[1-9]([0-9]*)?(\.[0-9]{1,2})?$)/
  },
  {
    type: "mobile",
    rules: ["只能由0-9组成的11位非空字符串", "首位一定是1"],
    text: "是否是手机号码",
    success: ["13980464237"],
    error: ["02334455555"],
    value: /^1[0-9]{10}$/
  },
  {
    type: "tel",
    rules: ["只能由'0-9'|'-'组成的[7,8,11]位非空字符串"],
    text: "是否是座机号码",
    success: ["028-12345678", "0832-5231402", "12345678", "5231402"],
    error: ["02812345678"],
    value: /(^[0-9]{3}\-[0-9]{8}$)|(^[0-9]{4}\-[0-9]{7}$)|(^[0-9]{7,8}$)/
  },
  {
    type: "id-card",
    memo: "该方法只是简单的验证，更复杂的需要判断生日，地区，校验等",
    rules: ["长度只能是15位或18位", "若15位，则全部是数字", "若18位，则前17位全部是数字，最后一位可能是数字或字符x"],
    text: "是否是身份证号码",
    success: ["5110251992071806019", "511025199207180601x", "51102519920718"],
    error: ["511025199207180601o", "511025199"],
    value: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
  }
]);

// let regex = /(^[0-9]{3}\-[0-9]{8}$)|(^[0-9]{4}\-[0-9]{7}$)|(^[0-9]{7,8}$)/
// console.log(regex.test('3456789'))


/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 判断字符串是否是base64格式图片文件
 * @param { string } [ string ]
 * @return [ boolean ]
 */
let baser = function(string) {
  if (typeof string !== "string") throw new Error("The argument must be string.");
  //data:image/jpeg;base64
  const regexp = /^data\:image\/(.*?)\;base64/;
  return regexp.test(string);
};

/**
 * @name  获取based64图片文件的类型
 * @param   { base64 } [ string ] base64格式的图片路径
 * @return { string }
 */

baser.typer = function(base64) {
  if (!baser(base64)) throw new Error("The argument must be base64 string.");
  let type = "";
  base64.replace(/\:(.*?)\;/, function(a, b, c) {
    type = b;
  });
  return type;
};

/**
 * @name 获取base64图片文件的体积
 * @msg   必须是base64格式图片地址
 * @param   { base64 } [ string ]
 * @return  [ number ] 字节大小
 */

baser.size = function(base64) {
  if (!baser(base64)) throw new Error("The argument must be base64 string.");
  let index1 = base64.indexOf(",");
  let index2 = base64.indexOf("=");
  let base = base64.slice(index1 + 1, index2 > -1 ? index2 : base64.length);
  let strLength = base.length;
  let fileLength = parseInt(strLength - (strLength / 8) * 2);
  return fileLength;
};

/* harmony default export */ __webpack_exports__["a"] = (baser);


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name  尺寸格式化
 * @param   { size } [ number ]
 * @return  [ object ]
 * value  值
 * unit 单位
 */
let formater = function(size) {
  if (!Number.isInteger(size) || size < 0) {
    throw new Error("The argument must be int number and must be not less than 0.");
  }
  let storage = [{ unit: "B", scaler: 1 }, { unit: "KB", scaler: 1024 }, { unit: "MB", scaler: 1024 * 1024 }, { unit: "GB", scaler: 1024 * 1024 * 1024 }, { unit: "TB", scaler: 1024 * 1024 * 1024 * 1024 }];
  let res = {
    value: 0,
    unit: ""
  };
  for (let n = storage.length - 1; n > -1; n--) {
    let value = Math.round(size / storage[n]["scaler"]);
    if (value > 0) {
      res.value = value;
      res.unit = storage[n]["unit"];
      return res;
    }
  }
  return res;
};

/* harmony default export */ __webpack_exports__["a"] = (formater);


/***/ }),
/* 371 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.7.1

/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
 */

(function() {
  var Byte, Client, Frame, Stomp,
    __hasProp = {}.hasOwnProperty,
    __slice = [].slice;

  Byte = {
    LF: '\x0A',
    NULL: '\x00'
  };

  Frame = (function() {
    var unmarshallSingle;

    function Frame(command, headers, body) {
      this.command = command;
      this.headers = headers != null ? headers : {};
      this.body = body != null ? body : '';
    }

    Frame.prototype.toString = function() {
      var lines, name, skipContentLength, value, _ref;
      lines = [this.command];
      skipContentLength = this.headers['content-length'] === false ? true : false;
      if (skipContentLength) {
        delete this.headers['content-length'];
      }
      _ref = this.headers;
      for (name in _ref) {
        if (!__hasProp.call(_ref, name)) continue;
        value = _ref[name];
        lines.push("" + name + ":" + value);
      }
      if (this.body && !skipContentLength) {
        lines.push("content-length:" + (Frame.sizeOfUTF8(this.body)));
      }
      lines.push(Byte.LF + this.body);
      return lines.join(Byte.LF);
    };

    Frame.sizeOfUTF8 = function(s) {
      if (s) {
        return encodeURI(s).match(/%..|./g).length;
      } else {
        return 0;
      }
    };

    unmarshallSingle = function(data) {
      var body, chr, command, divider, headerLines, headers, i, idx, len, line, start, trim, _i, _j, _len, _ref, _ref1;
      divider = data.search(RegExp("" + Byte.LF + Byte.LF));
      headerLines = data.substring(0, divider).split(Byte.LF);
      command = headerLines.shift();
      headers = {};
      trim = function(str) {
        return str.replace(/^\s+|\s+$/g, '');
      };
      _ref = headerLines.reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        idx = line.indexOf(':');
        headers[trim(line.substring(0, idx))] = trim(line.substring(idx + 1));
      }
      body = '';
      start = divider + 2;
      if (headers['content-length']) {
        len = parseInt(headers['content-length']);
        body = ('' + data).substring(start, start + len);
      } else {
        chr = null;
        for (i = _j = start, _ref1 = data.length; start <= _ref1 ? _j < _ref1 : _j > _ref1; i = start <= _ref1 ? ++_j : --_j) {
          chr = data.charAt(i);
          if (chr === Byte.NULL) {
            break;
          }
          body += chr;
        }
      }
      return new Frame(command, headers, body);
    };

    Frame.unmarshall = function(datas) {
      var data;
      return (function() {
        var _i, _len, _ref, _results;
        _ref = datas.split(RegExp("" + Byte.NULL + Byte.LF + "*"));
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          data = _ref[_i];
          if ((data != null ? data.length : void 0) > 0) {
            _results.push(unmarshallSingle(data));
          }
        }
        return _results;
      })();
    };

    Frame.marshall = function(command, headers, body) {
      var frame;
      frame = new Frame(command, headers, body);
      return frame.toString() + Byte.NULL;
    };

    return Frame;

  })();

  Client = (function() {
    var now;

    function Client(ws) {
      this.ws = ws;
      this.ws.binaryType = "arraybuffer";
      this.counter = 0;
      this.connected = false;
      this.heartbeat = {
        outgoing: 10000,
        incoming: 10000
      };
      this.maxWebSocketFrameSize = 16 * 1024;
      this.subscriptions = {};
    }

    Client.prototype.debug = function(message) {
      var _ref;
      return typeof window !== "undefined" && window !== null ? (_ref = window.console) != null ? _ref.log(message) : void 0 : void 0;
    };

    now = function() {
      if (Date.now) {
        return Date.now();
      } else {
        return new Date().valueOf;
      }
    };

    Client.prototype._transmit = function(command, headers, body) {
      var out;
      out = Frame.marshall(command, headers, body);
      if (typeof this.debug === "function") {
        this.debug(">>> " + out);
      }
      while (true) {
        if (out.length > this.maxWebSocketFrameSize) {
          this.ws.send(out.substring(0, this.maxWebSocketFrameSize));
          out = out.substring(this.maxWebSocketFrameSize);
          if (typeof this.debug === "function") {
            this.debug("remaining = " + out.length);
          }
        } else {
          return this.ws.send(out);
        }
      }
    };

    Client.prototype._setupHeartbeat = function(headers) {
      var serverIncoming, serverOutgoing, ttl, v, _ref, _ref1;
      if ((_ref = headers.version) !== Stomp.VERSIONS.V1_1 && _ref !== Stomp.VERSIONS.V1_2) {
        return;
      }
      _ref1 = (function() {
        var _i, _len, _ref1, _results;
        _ref1 = headers['heart-beat'].split(",");
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          v = _ref1[_i];
          _results.push(parseInt(v));
        }
        return _results;
      })(), serverOutgoing = _ref1[0], serverIncoming = _ref1[1];
      if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {
        ttl = Math.max(this.heartbeat.outgoing, serverIncoming);
        if (typeof this.debug === "function") {
          this.debug("send PING every " + ttl + "ms");
        }
        this.pinger = Stomp.setInterval(ttl, (function(_this) {
          return function() {
            _this.ws.send(Byte.LF);
            return typeof _this.debug === "function" ? _this.debug(">>> PING") : void 0;
          };
        })(this));
      }
      if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {
        ttl = Math.max(this.heartbeat.incoming, serverOutgoing);
        if (typeof this.debug === "function") {
          this.debug("check PONG every " + ttl + "ms");
        }
        return this.ponger = Stomp.setInterval(ttl, (function(_this) {
          return function() {
            var delta;
            delta = now() - _this.serverActivity;
            if (delta > ttl * 2) {
              if (typeof _this.debug === "function") {
                _this.debug("did not receive server activity for the last " + delta + "ms");
              }
              return _this.ws.close();
            }
          };
        })(this));
      }
    };

    Client.prototype._parseConnect = function() {
      var args, connectCallback, errorCallback, headers;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      headers = {};
      switch (args.length) {
        case 2:
          headers = args[0], connectCallback = args[1];
          break;
        case 3:
          if (args[1] instanceof Function) {
            headers = args[0], connectCallback = args[1], errorCallback = args[2];
          } else {
            headers.login = args[0], headers.passcode = args[1], connectCallback = args[2];
          }
          break;
        case 4:
          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3];
          break;
        default:
          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], headers.host = args[4];
      }
      return [headers, connectCallback, errorCallback];
    };

    Client.prototype.connect = function() {
      var args, errorCallback, headers, out;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      out = this._parseConnect.apply(this, args);
      headers = out[0], this.connectCallback = out[1], errorCallback = out[2];
      if (typeof this.debug === "function") {
        this.debug("Opening Web Socket...");
      }
      this.ws.onmessage = (function(_this) {
        return function(evt) {
          var arr, c, client, data, frame, messageID, onreceive, subscription, _i, _len, _ref, _results;
          data = typeof ArrayBuffer !== 'undefined' && evt.data instanceof ArrayBuffer ? (arr = new Uint8Array(evt.data), typeof _this.debug === "function" ? _this.debug("--- got data length: " + arr.length) : void 0, ((function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              c = arr[_i];
              _results.push(String.fromCharCode(c));
            }
            return _results;
          })()).join('')) : evt.data;
          _this.serverActivity = now();
          if (data === Byte.LF) {
            if (typeof _this.debug === "function") {
              _this.debug("<<< PONG");
            }
            return;
          }
          if (typeof _this.debug === "function") {
            _this.debug("<<< " + data);
          }
          _ref = Frame.unmarshall(data);
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            frame = _ref[_i];
            switch (frame.command) {
              case "CONNECTED":
                if (typeof _this.debug === "function") {
                  _this.debug("connected to server " + frame.headers.server);
                }
                _this.connected = true;
                _this._setupHeartbeat(frame.headers);
                _results.push(typeof _this.connectCallback === "function" ? _this.connectCallback(frame) : void 0);
                break;
              case "MESSAGE":
                subscription = frame.headers.subscription;
                onreceive = _this.subscriptions[subscription] || _this.onreceive;
                if (onreceive) {
                  client = _this;
                  messageID = frame.headers["message-id"];
                  frame.ack = function(headers) {
                    if (headers == null) {
                      headers = {};
                    }
                    return client.ack(messageID, subscription, headers);
                  };
                  frame.nack = function(headers) {
                    if (headers == null) {
                      headers = {};
                    }
                    return client.nack(messageID, subscription, headers);
                  };
                  _results.push(onreceive(frame));
                } else {
                  _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled received MESSAGE: " + frame) : void 0);
                }
                break;
              case "RECEIPT":
                _results.push(typeof _this.onreceipt === "function" ? _this.onreceipt(frame) : void 0);
                break;
              case "ERROR":
                _results.push(typeof errorCallback === "function" ? errorCallback(frame) : void 0);
                break;
              default:
                _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled frame: " + frame) : void 0);
            }
          }
          return _results;
        };
      })(this);
      this.ws.onclose = (function(_this) {
        return function() {
          var msg;
          msg = "Whoops! Lost connection to " + _this.ws.url;
          if (typeof _this.debug === "function") {
            _this.debug(msg);
          }
          _this._cleanUp();
          return typeof errorCallback === "function" ? errorCallback(msg) : void 0;
        };
      })(this);
      return this.ws.onopen = (function(_this) {
        return function() {
          if (typeof _this.debug === "function") {
            _this.debug('Web Socket Opened...');
          }
          headers["accept-version"] = Stomp.VERSIONS.supportedVersions();
          headers["heart-beat"] = [_this.heartbeat.outgoing, _this.heartbeat.incoming].join(',');
          return _this._transmit("CONNECT", headers);
        };
      })(this);
    };

    Client.prototype.disconnect = function(disconnectCallback, headers) {
      if (headers == null) {
        headers = {};
      }
      this._transmit("DISCONNECT", headers);
      this.ws.onclose = null;
      this.ws.close();
      this._cleanUp();
      return typeof disconnectCallback === "function" ? disconnectCallback() : void 0;
    };

    Client.prototype._cleanUp = function() {
      this.connected = false;
      if (this.pinger) {
        Stomp.clearInterval(this.pinger);
      }
      if (this.ponger) {
        return Stomp.clearInterval(this.ponger);
      }
    };

    Client.prototype.send = function(destination, headers, body) {
      if (headers == null) {
        headers = {};
      }
      if (body == null) {
        body = '';
      }
      headers.destination = destination;
      return this._transmit("SEND", headers, body);
    };

    Client.prototype.subscribe = function(destination, callback, headers) {
      var client;
      if (headers == null) {
        headers = {};
      }
      if (!headers.id) {
        headers.id = "sub-" + this.counter++;
      }
      headers.destination = destination;
      this.subscriptions[headers.id] = callback;
      this._transmit("SUBSCRIBE", headers);
      client = this;
      return {
        id: headers.id,
        unsubscribe: function() {
          return client.unsubscribe(headers.id);
        }
      };
    };

    Client.prototype.unsubscribe = function(id) {
      delete this.subscriptions[id];
      return this._transmit("UNSUBSCRIBE", {
        id: id
      });
    };

    Client.prototype.begin = function(transaction) {
      var client, txid;
      txid = transaction || "tx-" + this.counter++;
      this._transmit("BEGIN", {
        transaction: txid
      });
      client = this;
      return {
        id: txid,
        commit: function() {
          return client.commit(txid);
        },
        abort: function() {
          return client.abort(txid);
        }
      };
    };

    Client.prototype.commit = function(transaction) {
      return this._transmit("COMMIT", {
        transaction: transaction
      });
    };

    Client.prototype.abort = function(transaction) {
      return this._transmit("ABORT", {
        transaction: transaction
      });
    };

    Client.prototype.ack = function(messageID, subscription, headers) {
      if (headers == null) {
        headers = {};
      }
      headers["message-id"] = messageID;
      headers.subscription = subscription;
      return this._transmit("ACK", headers);
    };

    Client.prototype.nack = function(messageID, subscription, headers) {
      if (headers == null) {
        headers = {};
      }
      headers["message-id"] = messageID;
      headers.subscription = subscription;
      return this._transmit("NACK", headers);
    };

    return Client;

  })();

  Stomp = {
    VERSIONS: {
      V1_0: '1.0',
      V1_1: '1.1',
      V1_2: '1.2',
      supportedVersions: function() {
        return '1.1,1.0';
      }
    },
    client: function(url, protocols) {
      var klass, ws;
      if (protocols == null) {
        protocols = ['v10.stomp', 'v11.stomp'];
      }
      klass = Stomp.WebSocketClass || WebSocket;
      ws = new klass(url, protocols);
      return new Client(ws);
    },
    over: function(ws) {
      return new Client(ws);
    },
    Frame: Frame
  };

  if (typeof exports !== "undefined" && exports !== null) {
    exports.Stomp = Stomp;
  }

  if (typeof window !== "undefined" && window !== null) {
    Stomp.setInterval = function(interval, f) {
      return window.setInterval(f, interval);
    };
    Stomp.clearInterval = function(id) {
      return window.clearInterval(id);
    };
    window.Stomp = Stomp;
  } else if (!exports) {
    self.Stomp = Stomp;
  }

}).call(this);


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
Copyright 2013 Sleepless Software Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. 
*/

// yes, I know this seems stupid, but I have my reasons.

var net = __webpack_require__(372)
for(k in net)
	global[k] = net[k]


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(514)
  , qs = __webpack_require__(515)
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */

function EventTarget() {
  this._listeners = {};
}

EventTarget.prototype.addEventListener = function(eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};

EventTarget.prototype.removeEventListener = function(eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};

EventTarget.prototype.dispatchEvent = function() {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

module.exports = EventTarget;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , urlUtils = __webpack_require__(338)
  , BufferedSender = __webpack_require__(518)
  , Polling = __webpack_require__(519)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:sender-receiver');
}

function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);

  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function(msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function(code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}

inherits(SenderReceiver, BufferedSender);

SenderReceiver.prototype.close = function() {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};

module.exports = SenderReceiver;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  , utils = __webpack_require__(340)
  , urlUtils = __webpack_require__(338)
  , XHR = global.XMLHttpRequest
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:browser:xhr');
}

function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}

inherits(AbstractXHRObject, EventEmitter);

AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
  var self = this;

  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }

  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function() {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }

  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }

  this.xhr.onreadystatechange = function() {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
      case 3:
        // IE doesn't like peeking into responseText or status
        // on Microsoft.XMLHTTP and readystate=3
        try {
          status = x.status;
          text = x.responseText;
        } catch (e) {
          // intentionally empty
        }
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }

        // IE does return readystate == 3 for 404 answers.
        if (status === 200 && text && text.length > 0) {
          debug('chunk');
          self.emit('chunk', status, text);
        }
        break;
      case 4:
        status = x.status;
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }
        // IE returns this for a bad port
        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
        if (status === 12005 || status === 12029) {
          status = 0;
        }

        debug('finish', status, x.responseText);
        self.emit('finish', status, x.responseText);
        self._cleanup(false);
        break;
      }
    }
  };

  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};

AbstractXHRObject.prototype._cleanup = function(abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function() {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }

  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};

AbstractXHRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && (axo in global)) {
  debug('overriding xmlhttprequest');
  XHR = function() {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}

var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}

AbstractXHRObject.supportsCORS = cors;

module.exports = AbstractXHRObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , AjaxBasedTransport = __webpack_require__(342)
  , XhrReceiver = __webpack_require__(347)
  , XDRObject = __webpack_require__(352)
  ;

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}

inherits(XdrStreamingTransport, AjaxBasedTransport);

XdrStreamingTransport.enabled = function(info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};

XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , AjaxBasedTransport = __webpack_require__(342)
  , EventSourceReceiver = __webpack_require__(520)
  , XHRCorsObject = __webpack_require__(348)
  , EventSourceDriver = __webpack_require__(379)
  ;

function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}

inherits(EventSourceTransport, AjaxBasedTransport);

EventSourceTransport.enabled = function() {
  return !!EventSourceDriver;
};

EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;

module.exports = EventSourceTransport;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global.EventSource;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php

var inherits = __webpack_require__(336)
  , JSON3 = __webpack_require__(339)
  , EventEmitter = __webpack_require__(337).EventEmitter
  , version = __webpack_require__(381)
  , urlUtils = __webpack_require__(338)
  , iframeUtils = __webpack_require__(345)
  , eventUtils = __webpack_require__(340)
  , random = __webpack_require__(341)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:transport:iframe');
}

function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);

  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);

  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);

  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });

  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}

inherits(IframeTransport, EventEmitter);

IframeTransport.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};

IframeTransport.prototype._message = function(e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }

  var iframeMessage;
  try {
    iframeMessage = JSON3.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }

  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }

  switch (iframeMessage.type) {
  case 's':
    this.iframeObj.loaded();
    // window global dependency
    this.postMessage('s', JSON3.stringify([
      version
    , this.transport
    , this.transUrl
    , this.baseUrl
    ]));
    break;
  case 't':
    this.emit('message', iframeMessage.data);
    break;
  case 'c':
    var cdata;
    try {
      cdata = JSON3.parse(iframeMessage.data);
    } catch (ignored) {
      debug('bad json', iframeMessage.data);
      return;
    }
    this.emit('close', cdata[0], cdata[1]);
    this.close();
    break;
  }
};

IframeTransport.prototype.postMessage = function(type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON3.stringify({
    windowId: this.windowId
  , type: type
  , data: data || ''
  }), this.origin);
};

IframeTransport.prototype.send = function(message) {
  debug('send', message);
  this.postMessage('m', message);
};

IframeTransport.enabled = function() {
  return iframeUtils.iframeEnabled;
};

IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;

module.exports = IframeTransport;


/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = '1.3.0';


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , HtmlfileReceiver = __webpack_require__(522)
  , XHRLocalObject = __webpack_require__(343)
  , AjaxBasedTransport = __webpack_require__(342)
  ;

function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}

inherits(HtmlFileTransport, AjaxBasedTransport);

HtmlFileTransport.enabled = function(info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};

HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;

module.exports = HtmlFileTransport;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , AjaxBasedTransport = __webpack_require__(342)
  , XhrReceiver = __webpack_require__(347)
  , XHRCorsObject = __webpack_require__(348)
  , XHRLocalObject = __webpack_require__(343)
  ;

function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}

inherits(XhrPollingTransport, AjaxBasedTransport);

XhrPollingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }

  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};

XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = global.location || {
  origin: 'http://localhost:80'
, protocol: 'http:'
, host: 'localhost'
, port: 80
, href: 'http://localhost/'
, hash: ''
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  , JSON3 = __webpack_require__(339)
  , XHRLocalObject = __webpack_require__(343)
  , InfoAjax = __webpack_require__(386)
  ;

function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);

  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function(info, rtt) {
    self.ir = null;
    self.emit('message', JSON3.stringify([info, rtt]));
  });
}

inherits(InfoReceiverIframe, EventEmitter);

InfoReceiverIframe.transportName = 'iframe-info-receiver';

InfoReceiverIframe.prototype.close = function() {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};

module.exports = InfoReceiverIframe;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  , JSON3 = __webpack_require__(339)
  , objectUtils = __webpack_require__(354)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:info-ajax');
}

function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);

  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);

  this.xo.once('finish', function(status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = (+new Date()) - t0;
      if (text) {
        try {
          info = JSON3.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }

      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}

inherits(InfoAjax, EventEmitter);

InfoAjax.prototype.close = function() {
  this.removeAllListeners();
  this.xo.close();
};

module.exports = InfoAjax;


/***/ }),
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayer_index_js__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dater_index_js__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typer_index_js__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objecter_index_js__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domer_index_js__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stringer_index_js__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__funer_index_js__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__number_index_js__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__regexer_index_js__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__langer_index_js__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__imager_index_js__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storager_index_js__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hexer_index_js__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__urler_index_js__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__queryer_index_js__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checker_index_js__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_emeitter_index_js__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calcer_index_js__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dater", function() { return __WEBPACK_IMPORTED_MODULE_1__dater_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "typer", function() { return __WEBPACK_IMPORTED_MODULE_2__typer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrayer", function() { return __WEBPACK_IMPORTED_MODULE_0__arrayer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "objecter", function() { return __WEBPACK_IMPORTED_MODULE_3__objecter_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "domer", function() { return __WEBPACK_IMPORTED_MODULE_4__domer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stringer", function() { return __WEBPACK_IMPORTED_MODULE_5__stringer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "funer", function() { return __WEBPACK_IMPORTED_MODULE_6__funer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return __WEBPACK_IMPORTED_MODULE_7__number_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "regexer", function() { return __WEBPACK_IMPORTED_MODULE_8__regexer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "langer", function() { return __WEBPACK_IMPORTED_MODULE_9__langer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "imager", function() { return __WEBPACK_IMPORTED_MODULE_10__imager_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Storager", function() { return __WEBPACK_IMPORTED_MODULE_11__storager_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Hexer", function() { return __WEBPACK_IMPORTED_MODULE_12__hexer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Urler", function() { return __WEBPACK_IMPORTED_MODULE_13__urler_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Queryer", function() { return __WEBPACK_IMPORTED_MODULE_14__queryer_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checker", function() { return __WEBPACK_IMPORTED_MODULE_15__checker_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmeitter", function() { return __WEBPACK_IMPORTED_MODULE_16__event_emeitter_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Calcer", function() { return __WEBPACK_IMPORTED_MODULE_17__calcer_index_js__["a"]; });
/**
 * 对象式
 */









//import ajax from './ajax/index.js';


/**
 * 类式 - 需要实例化才能使用
 */


//import Cookie from "./cookie/index.js";











/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delayer__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dimener__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flattener__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shuffler__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sorter__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templater__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeser__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transposer__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treer__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trulyer__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__uniquer__ = __webpack_require__(445);












/* harmony default export */ __webpack_exports__["a"] = ({
  delayer: __WEBPACK_IMPORTED_MODULE_0__delayer__["a" /* default */],
  dimener: __WEBPACK_IMPORTED_MODULE_1__dimener__["a" /* default */],
  flattener: __WEBPACK_IMPORTED_MODULE_2__flattener__["a" /* default */],
  shuffler: __WEBPACK_IMPORTED_MODULE_3__shuffler__["a" /* default */],
  sorter: __WEBPACK_IMPORTED_MODULE_4__sorter__["a" /* default */],
  templater: __WEBPACK_IMPORTED_MODULE_5__templater__["a" /* default */],
  timeser: __WEBPACK_IMPORTED_MODULE_6__timeser__["a" /* default */],
  transposer: __WEBPACK_IMPORTED_MODULE_7__transposer__["a" /* default */],
  treer: __WEBPACK_IMPORTED_MODULE_8__treer__["a" /* default */],
  trulyer: __WEBPACK_IMPORTED_MODULE_9__trulyer__["a" /* default */],
  uniquer: __WEBPACK_IMPORTED_MODULE_10__uniquer__["a" /* default */]
});


/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayer;
/**
 * @name 树形结构数据转一维数组
 * @param {array} [array]
 * @returns [array]
 */

function delayer(array) {
  if (!Array.isArray(array)) {
    console.error("[array] is not array");
    return array;
  }
  let newArray = [];
  array.forEach(item => {
    let children = item && item["children"];
    newArray.push(item);
    if (children) {
      newArray.push(...delayer(children));
    }
  });
  return newArray;
}

// let data = [
//   {
//     id: 1,
//     pid: "",
//     text: "中国",
//     children: [
//       {
//         id: 11,
//         pid: 1,
//         text: "四川省",
//         children: [
//           {
//             id: 111,
//             pid: 11,
//             text: "成都市"
//           },
//           {
//             id: 112,
//             pid: 11,
//             text: "内江市"
//           }
//         ]
//       },
//       {
//         id: 12,
//         pid: 1,
//         text: "云南省"
//       }
//     ]
//   },
//   {
//     id: 2,
//     pid: "",
//     text: "中国",
//     children: []
//   }
// ];

// let format = delayer(data);
// console.log(format);
// console.log(data);


/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flattener;
/**
 * @name  扁平化数组
 * @param { array } [ array ] 需要偏平化的数组
 * @param { deepth } [ number ] 深度
 * @returns [array]
 */

function flattener(array, deepth = 1) {
  if (!Array.isArray(array)) {
    console.error("[array] is not array");
    return array;
  }
  let arr = [];
  for (let n = 0; n < array.length; n++) {
    if (deepth > 1) {
      if (!Array.isArray(array[n])) {
        arr.push(array[n]);
      } else {
        arr.push(...flattener(array[n], --deepth));
      }
    } else {
      arr.push(array[n]);
    }
  }
  return arr;
}

//console.log(flatten([1, 2, [3]]));


/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffler;
/**
 * @name  数组乱序
 * @msg 使用fisher-tayes算法，目前最好的乱序方式，使得每个元素参与的概率一致
 * @param  { array }  [ array ] 数组
 * @return [ array ]
 */
function shuffler(array) {
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array.');
  }
  var m = array.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [array[m], array[index]] = [array[index], array[m]];
  }
  return array;
}

/**
 * @name 数组乱序
 * @msg 该方式乱序不完全，由于每个元素参与的次数不一致
 * @param { array }
 * @return:[ array ]
 */

shuffler.sorter = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array.');
  }
  return array.sort(function(a, b) {
    return Math.random() - 0.5;
  });
};

// console.log(
//   shuffle.sort([1, { name: "" }, 3, { name: "好几十" }, 5, 6, 7, 8, 9, 0])
// );


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = templater;
/**
 * @name: 生成一个数组模板
 * @param { start = 0 } [ number<int> ]开始值
 * @param { len = 10 } [ number<int> ]长度
 * @param { isUp = true } [ boolean ] 是否是向上递增，否则向下递减
 * @return: array<number>
 */

function templater(start = 0, len = 10, isUp = true) {
  if (!Number.isInteger(start)) {
    throw new Error("The first argument must be integer number.");
  }
  if (!Number.isInteger(len) || len <= 0) {
    throw new Error("The first argument must be be integer number and it must be greate than 0.");
  }
  if (typeof isUp !== "boolean") {
    throw new Error("The third argument must be boolean,and this normal is false.");
  }
  let res = [];
  if (isUp) {
    for (let n = start; n < len + start; n++) {
      res.push(n);
    }
  } else {
    for (let n = start; n > start - len; n--) {
      res.push(n);
    }
  }
  return res;
}

/**
 * @name: 随机产生一个指定长度的字符串
 * @param { n } [ number<int> ] 指定长度
 * @return: string
 */
templater._random = function(n = 16) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("The first argument must be integer number and it must be greater than 0,and this normal is 16.");
  }
  let standard = "abcdefghijklmnopqrstuvwxyz9876543210";
  let len = standard.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len));
  }
  return result;
};

/**
 * @name: 生成一个指定长度的数组，每个元素并由指定长度字符串组成
 * @param { len = 10 } [ number<int> ] 指定长度数组
 * @param { charLen = 4 } [ number<int> ] 指定长度的字符串元素
 * @return: [ array<number>]
 */
templater.stringer = function(len = 10, charLen = 4) {
  if (!Number.isInteger(len) || len <= 0) {
    throw new Error("The first argument must be integer number and it must be greater than 0,and this normal is 10.");
  }
  if (!Number.isInteger(charLen) || charLen < 1) {
    throw new Error("The second argument must be integer number and it must be greater than 0,and this normal is 4.");
  }
  let res = [];
  for (let n = 0; n < len; n++) {
    res.push(template._random(charLen));
  }
  return res;
};

/**
 * @name 填充相同值的元素的指定长度的数组
 * @param { len = 10 } [ len ] 数组的指定长度
 * @param { callback } [ function ] 指定函数
 * @param { context = this } [ any ] 函数执行上下文
 * @return:[ array ]
 */

templater.ofer = function(len = 10, callback = function() {}, context = this) {
  return Array.apply(null, Array(len)).map(() => callback.call(context));
};


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorter__ = __webpack_require__(366);
/**
 * @name 数组中元素出现的次数信息统计
 * @msg 不支持对象类型[ objecy,array ]统计，支持NaN
 * @param { array = [] } [ array ]
 * @return: [ array<object> ]
 */

function timeser(array = []) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be array.');
  }
  let ret = [];
  for (let n = 0; n < array.length; n++) {
    let element = array[n];
    let index = ret.findIndex(item => {
      let nan = Number.isNaN(item['value']) && Number.isNaN(element);
      return item['value'] === element || nan;
    });
    if (index === -1) {
      ret.push({
        value: element,
        times: 1,
        indexs: [n]
      });
    } else {
      ret[index]['times'] += 1;
      ret[index]['indexs'].push(n);
    }
  }
  return ret;
}

/**
 * @name 判断数组中出现最多次数的值
 * @param { array = [] } [ array ]
 * @return:[ array<object>]
 */
timeser.maxer = function(array = []) {
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array.');
  }
  let ret = times(array);
  let sortRet = __WEBPACK_IMPORTED_MODULE_0__sorter__["a" /* default */].quicker.with(ret, function(prev, next) {
    return prev.times > next.times;
  });
  return sortRet.filter(function(item, index, target) {
    return item['times'] === target[0]['times'];
  });
};

/**
 * @name 判断数组中出现最少次数的值
 * @param { array = [] } [ array ]
 * @return:[ array<object> ]
 */
timeser.miner = function(array = []) {
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array.');
  }
  let ret = times(array);
  let sortRet = __WEBPACK_IMPORTED_MODULE_0__sorter__["a" /* default */].quicker.with(ret, function(prev, next) {
    return prev.times < next.times;
  });
  return sortRet.filter(function(item, index, target) {
    return item['times'] === target[0]['times'];
  });
};


/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transposer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dimener__ = __webpack_require__(365);


// 判断数组子元素的长度是否一致
let equalLen = function(arr) {
  return (
    arr.findIndex((element, index, array) => {
      return element.length !== array[0].length;
    }) > -1
  );
};
/**
 * @name 数组置换
 * @param {array} [array] 需要置换的数组
 * @msg 目标数组必须是二维数组，并且每一个元素的长度一致
 * @return  [array]
 */

function transposer(array) {
  // 判断是否是数组
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array.');
  }
  // 判断是否是二维数组，以及子元素的长度是否一致
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__dimener__["a" /* default */])(array) || equalLen(array)) {
    throw new Error("The argument must be dimener array,and it's item length must be equal.");
  }
  let resArr = [];
  for (let k = 0; k < array[0].length; k++) {
    resArr.push([]);
  }
  for (let n = 0; n < array.length; n++) {
    for (let k = 0; k < array[n].length; k++) {
      resArr[k][n] = array[n][k];
    }
  }
  return resArr;
}

//console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = treer;
/**
 * @name 一维数组转树形结构数据
 * @msg 利用js的引用对象实现，会修改原本的数组
 * @param {array} [ array ]
 * @param { pid } [ string ] 根
 * @return [ array ]
 */

// 对象引用的方式
function treer(array, pid = "") {
  if (!Array.isArray(array)) {
    throw new Error("The first argument must be array.");
  }
  if (typeof pid !== "string") {
    throw new Error("The second argument must be string.");
  }

  array.forEach(ele => {
    let arr = array.filter(item => item["pid"] === ele["id"]);
    if (arr.length > 0) {
      ele["children"] = arr;
    }
  });
  return array.filter(item => item["pid"] === pid);
}

// 递归的方式
// function tree2(array, pid) {
//   if (!Array.isArray(array)) return [];
//   let copyArr = JSON.parse(JSON.stringify(array));
//   let resArr = [];
//   copyArr.forEach(item => {
//     if (item["pid"] === pid) {
//       let children = tree2(copyArr, item["id"]);
//       if (children.length > 0) {
//         item["children"] = children;
//       }
//       resArr.push(item);
//     }
//   });
//   return resArr;
// }

// let data = [
//   { id: 1, pid: "", text: "中国" },
//   { id: 11, pid: 1, text: "四川省" },
//   { id: 111, pid: 11, text: "成都市" },
//   { id: 112, pid: 11, text: "内江市" },
//   { id: 113, pid: 11, text: "绵阳市" },
//   { id: 12, pid: 1, text: "云南省" },
//   { id: 2, text: "日本" }
// ];

// let format = tree(data, "");
// console.log(format);
// console.log(data);


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = trulyer;
/**
 * @name 过滤掉数组中的falsy值
 * @msg [ false , 0 , null, undefined , NaN , ""] 表示falsy值
 * @param { array } [ array ]
 * @return: array
 */

function trulyer(array) {
  if (!Array.isArray(array)) {
    throw new Error("The argument must be a array.");
  }
  return array.filter(Boolean);
}


/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniquer;
/**
 * @name 数组去重
 * @msg 只支持 object 类型
 * @param { array }  [ array ]
 * @return [ array]
 */

function uniquer(array) {
  if (!Array.isArray(array)) {
    throw new Error('The argument must be array');
  }
  return [...new Set(array)];
}


/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formater__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reverser__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zer__ = __webpack_require__(448);





/* harmony default export */ __webpack_exports__["a"] = ({
  checker: __WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */],
  formater: __WEBPACK_IMPORTED_MODULE_1__formater__["a" /* default */],
  reverser: __WEBPACK_IMPORTED_MODULE_2__reverser__["a" /* default */],
  zer: __WEBPACK_IMPORTED_MODULE_3__zer__["a" /* default */]
});


/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(350);

/**
 * @name 获取倒计时信息
 * @param { createTime } [date]  创建时间
 * @param { currentTime } [date]   当前时间
 * @param { backTimeRange } [date] 倒计时范围
 * @param { type = 'day'} [ 'day','hour','minute','second']
 * @return { object }
 * code 标识 -1/当前时间小于起始时间 | 0/正在倒计时中... 1/当前时间大于起始时间与倒计时之和
 * memo 描述
 * storage 当code=0时，倒计时详情
 */

let reverser = function (createTime, currentTime, backTimeRange, type = "day") {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(createTime)) throw new Error("The first argument must be a valid date.");
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(currentTime)) throw new Error("The second argument must be a valid date.");
  if (!Number.isInteger(backTimeRange) || backTimeRange < 0) throw new Error("The third argument must be int number,and it must be not less than 0.");
  let types = ["day", "hour", "minute", "second"];
  if (types.findIndex(item => item === type) === -1) throw new Error("The fourth argument must be in ['day', 'hour', 'minute', 'second'].");
  createTime = +new Date(createTime);
  currentTime = +new Date(currentTime);

  let start = createTime,
    end = createTime + backTimeRange;
  if (currentTime < start) {
    return { type: -1, memo: "当前时间小于起始时间" };
  }
  if (currentTime > end) {
    return { type: 1, memo: "当前时间大于起始时间与倒计时之和" };
  }

  let backTime = createTime + backTimeRange - currentTime;
  let storage;
  if (type === "day") {
    storage = [{ text: ["日", "day", "d"], label: "day", value: 24 * 60 * 60 * 1000 }, { text: ["时", "hour", "h"], label: "hour", value: 60 * 60 * 1000 }, { text: ["分", "minute", "m"], label: "minute", value: 60 * 1000 }, { text: ["秒", "second", "s"], label: "second", value: 1000 }];
  } else if (type === "hour") {
    storage = [{ text: ["时", "hour", "h"], label: "hour", value: 60 * 60 * 1000 }, { text: ["分", "minute", "m"], label: "minute", value: 60 * 1000 }, { text: ["秒", "second", "s"], label: "second", value: 1000 }];
  } else if (type === "minute") {
    storage = [{ text: ["分", "minute", "m"], label: "minute", value: 60 * 1000 }, { text: ["秒", "second", "s"], label: "second", value: 1000 }];
  } else if (type === "second") {
    storage = [{ text: ["秒", "second", "s"], label: "second", value: 1000 }];
  }
  for (let n = 0; n < storage.length; n++) {
    let temp = storage[n];
    if (n === 0) {
      temp["backTime"] = Math.floor(backTime / temp["value"]);
      temp["reserveTime"] = backTime - temp["backTime"] * temp["value"];
    } else {
      let prev = storage[n - 1];
      temp["backTime"] = Math.floor(prev["reserveTime"] / temp["value"]);
      temp["reserveTime"] = prev["reserveTime"] - temp["backTime"] * temp["value"];
    }
  }
  return { type: 0, memo: "正在倒计时中...", storage };
};

reverser.day = function (createTime, currentTime, backTimeRange) {
  return reverser(createTime, currentTime, backTimeRange, "day");
};
reverser.hour = function (createTime, currentTime, backTimeRange) {
  return reverser(createTime, currentTime, backTimeRange, "hour");
};
reverser.minute = function (createTime, currentTime, backTimeRange) {
  return reverser(createTime, currentTime, backTimeRange, "minute");
};
reverser.second = function (createTime, currentTime, backTimeRange) {
  return reverser(createTime, currentTime, backTimeRange, "second");
};

/* harmony default export */ __webpack_exports__["a"] = (reverser);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zer;
/**
 * @name 补0
 * @param {value} [number] 需要补0的数
 * @return [ string ]
 */

function zer(value) {
  if (Number.isInteger(value) || value < 0) throw new Error("The argument must be int number , and it must be not less than 0.");
  return value < 10 ? "0" + value : +value;
}


/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ios__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orientation__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type__ = __webpack_require__(453);







const isNumber = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("number");
const isString = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("string");
const isFunction = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("function");
const isBoolean = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("boolean");
const isNull = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("null");
const isUndefined = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("undefined");
const isObject = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("object");
const isArray = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("array");
const isNil = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("null", "undefined");
const isRegexp = Object(__WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */])("regexp");

/* harmony default export */ __webpack_exports__["a"] = ({
  browser: __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */],
  ios: __WEBPACK_IMPORTED_MODULE_1__ios__["a" /* default */],
  is: __WEBPACK_IMPORTED_MODULE_2__is__["a" /* default */],
  orientation: __WEBPACK_IMPORTED_MODULE_3__orientation__["a" /* default */],
  type: __WEBPACK_IMPORTED_MODULE_4__type__["a" /* default */],

  isNumber,
  isString,
  isFunction,
  isBoolean,
  isNull,
  isUndefined,
  isObject,
  isArray,
  isNil,
  isRegexp
});


/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = browser;
/**
 * @name  获取浏览器的类型
 * @return  [ string ]
 */

function browser() {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  let isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
  let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) return "IE7";
    else if (fIEVersion == 8) return "IE8";
    else if (fIEVersion == 9) return "IE9";
    else if (fIEVersion == 10) return "IE10";
    else if (fIEVersion == 11) return "IE11";
    else return "IE7以下"; //IE版本过低
  }

  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isEdge) return "Edge";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}

//console.log(browserType());


/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ios;
/**
 * @name  判断客户端是否是ios
 * @return  [boolean]
 */

function ios() {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    // return "Android";
    return false;
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    // return "iPhone";
    return true;
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    // return "iPad";
    return false;
  } else if (u.indexOf("Windows Phone") > -1) {
    //winphone手机
    // return "Windows Phone";
    return false;
  } else {
    return false;
  }
}


/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orientation;
/**
 * @name  判断手机的方向
 * @return  [ string ] 'horizontal' => 横屏 'vertical' => 竖屏 '' => 未知
 */

function orientation() {
  if (window.orientation == 180 || window.orientation == 0) {
    return "horizontal";
  }
  if (window.orientation == 90 || window.orientation == -90) {
    return "vertical";
  }
  return "";
}


/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/**
 * @name  获取数据类型
 * @param   { value } [ any ]
 * @return  [ string ]
 * @example type('null') => string type(0) => number
 */

function type(value) {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}

//console.log(type('null'))


/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(455);


/* harmony default export */ __webpack_exports__["a"] = ({
  checker: __WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */]
});


/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checker;
/**
 * @name 验证一个数据是否是对象
 * @param { object } [ any ]
 * @return [ boolean ]
 * @example checker({})=> true
 */

function checker(object) {
  return (
    Object.prototype.toString
      .call(object)
      .slice(8, -1)
      .toLowerCase() === 'object'
  );
}

/**
 * @name 验证一个对象地方是空对象
 * @msg 没有自身属性
 * @param { object } [ object ]
 * @return [ boolean ]
 * @example checker.emptyer({}) => true
 */
checker.emptyer = function(object) {
  if (!checker(object)) {
    throw new Error('The argument must be object.');
  }
  return Object.keys(object).length === 0;
};

//console.log(checker.emptyer({}));

/**
 * @name 验证一个数据是否是纯对象
 * @msg 该对象是通过 {} 和 new Object()方式创建
 * @msg Object.getPrototypeOf 不能获取 [ undefined,null ]的原型，所以使用了try catch
 * @param { object } [ any ]
 * @return [ boolean ]
 * @example checker.plainer({}) => true
 * @example checker.plainer(new Object()) => true
 * @example checker.plainer("") => false
 */
checker.plainer = function(object) {
  try {
    let proto = object;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    //console.log(Object.getPrototypeOf(null));
    return Object.getPrototypeOf(object) === proto; // 指向同一个object原型对象
  } catch (error) {
    return false;
  }
};
/**
 * @name 验证一个数据是否是纯对象或没有原型的对象，即常用的业务对象
 * @msg 该对象是通过 {} 、new Object()、Object.create(null)方式创建的
 * @param { object } [ any ]
 * @return [ boolean ]
 * @example
 * checker.freer(Object.create(null)) => true
 * checker.freer({}) => true
 * checker.freer(new Object()) => true
 */
checker.freer = function(object) {
  //当object是undefined，null 会报错： Cannot convert undefined or null to object
  if (object == null) return false;
  return Object.getPrototypeOf(object) === null || Object.getPrototypeOf(Object.getPrototypeOf(object)) === null;
};
// let Person = function(name) {
//   this.name = name;
// };
// Person.prototype.getName = function() {
//   return this.name;
// };
// let o = Object.create(null);
// console.log(o);
//console.log(checker.freer(null));


/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classer__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checker__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heighter__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listener__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queryer__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroller__ = __webpack_require__(461);







/* harmony default export */ __webpack_exports__["a"] = ({ classer: __WEBPACK_IMPORTED_MODULE_0__classer__["a" /* default */], checker: __WEBPACK_IMPORTED_MODULE_1__checker__["a" /* default */], heighter: __WEBPACK_IMPORTED_MODULE_2__heighter__["a" /* default */], listener: __WEBPACK_IMPORTED_MODULE_3__listener__["a" /* default */], queryer: __WEBPACK_IMPORTED_MODULE_4__queryer__["a" /* default */], scroller: __WEBPACK_IMPORTED_MODULE_5__scroller__["a" /* default */] });

// window.innerHeight 各大浏览器表现一致

// clientHeight | scrollHeight | offsetHeight |  offsetTop | scrollTop

// 普通的dom元素，即在非document.body 和 document.documentElement下，各大浏览器的值均一致
// clientHeight : 元素可见高度，包括padding，不包括border，滚动条，必须是块级元素
// scrollHeight : 元素内部可滚动的像素
// offsetHeight : 元素可见高度，包括padding，border，滚动条，也必须是块级元素
// offsetTop : 元素顶部距离父元素的顶部的距离
// scrollTop : 内部的元素被卷起的高度，该值可读也可设置

// 在document.body 和 document.documentElement下
// height:400px,padding:20px,border:10px
// wh - window.innerHeight
// 小于wh时
// 电脑端
// document.body.clientHeight - 460
// document.body.scrollHeight - 460
// document.body.offsetHeight - 460
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - wh
// document.documentElement.offsetHeight - 460
//  手机端
// document.body.clientHeight - 460
// document.body.scrollHeight - wh
// document.body.offsetHeight - 460
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - 460
// document.documentElement.offsetHeight - 460

// height:400px,padding:20px,border:10px,margin-bottom:20px
// 电脑端
// 谷歌
// document.body.clientHeight - 460
// document.body.scrollHeight - 480
// document.body.offsetHeight - 460
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - wh
// document.documentElement.offsetHeight - 480
// 火狐 IE
// document.body.clientHeight - 460
// document.body.scrollHeight - 460
// document.body.offsetHeight - 460
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - wh
// document.documentElement.offsetHeight - 480
// 手机端
// document.body.clientHeight - 460
// document.body.scrollHeight - wh
// document.body.offsetHeight - 460
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - 480
// document.documentElement.offsetHeight - 480

// 大于wh时
// height:1000px,padding:20px,border:10px
// 电脑端 + 手机端
// document.body.clientHeight - 1060
// document.body.scrollHeight - 1060
// document.body.offsetHeight - 1060
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - 1060
// document.documentElement.offsetHeight - 1060

// height:1000px,padding:20px,border:10px
// 电脑端 + 谷歌 + 手机端
// document.body.clientHeight - 1060
// document.body.scrollHeight - 1080
// document.body.offsetHeight - 1060
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - 1080
// document.documentElement.offsetHeight - 1080
// 电脑端 + 火狐 + IE
// document.body.clientHeight - 1060
// document.body.scrollHeight - 1060
// document.body.offsetHeight - 1060
// document.documentElement.clientHeight - wh
// document.documentElement.scrollHeight - 1080
// document.documentElement.offsetHeight - 1080

// 由以上得知，document.documentElement.offsetHeight是文档的高度最好的期望值


/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(346);

/**
 * @name 获取元素的class属性
 * @param {  elem } [ dom ] dom元素
 * @return [ array ]
 */
const classer = function(elem) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(elem)) throw new Error("The argument must be HTMLElement.");
  let attr = elem.getAttribute("class");
  return attr === null ? [] : attr.split(" ").filter(Boolean);
};

/**
 * @name 获取元素的中是否存在指定的class属性名
 * @param {  elem } [ dom ] dom元素
 * @param { className } [ string ] 指定的class名
 * @return [ boolean ]
 */
classer.haser = function(elem, className) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(elem)) throw new Error("The first argument must be HTMLElement.");
  if (typeof className !== "string") throw new Error("The second argument must be string.");
  return classer(elem).findIndex(item => item === className) > -1;
};
/**
 * @name 添加指定的class属性名
 * @param {  elem } [ dom ] dom元素
 * @param { className } [ string ] 指定的class名
 * @return [ elem ]
 */
classer.adder = function(elem, className) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(elem)) throw new Error("The first argument must be HTMLElement.");
  if (typeof className !== "string") throw new Error("The second argument must be string.");
  if ("classList" in elem) {
    elem.classList.add(className);
  } else {
    let prevClassName = classer(elem);
    let findIndex = prevClassName.findIndex(item => item === className);
    if (findIndex === -1) {
      prevClassName.push(className);
      elem.setAttribute("class", prevClassName.join(" "));
    }
  }

  return elem;
  //"classList" in elem elem.classList.add(className);
};
/**
 * @name 移除指定的class属性名
 * @param {  elem } [ dom ] dom元素
 * @param { className } [ string ] 指定的class名
 * @return [ elem ]
 */
classer.remover = function(elem, className) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(elem)) throw new Error("The first argument must be HTMLElement.");
  if (typeof className !== "string") throw new Error("The second argument must be string.");
  if ("classList" in elem) {
    elem.classList.remove(className);
  } else {
    let prevClassName = classer(elem).filter(item => item !== className);
    elem.setAttribute("class", prevClassName.join(" "));
  }
  return elem;
};

/* harmony default export */ __webpack_exports__["a"] = (classer);


/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(346);


/**
 * @name 获取指定元素的高度
 * @param { element } [ window , document , element ]
 * @return [ number ]
 */
let heighter = function(element) {
  if (__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */].window(element)) {
    return element.innerHeight;
  } else if (__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */].document(element)) {
    return document.documentElement.offsetHeight;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(element)) {
    return element.offsetHeight;
  } else {
    return 0;
  }
};
/**
 * @name 获取窗口的高度
 * @return [ number ]
 */
heighter.window = function() {
  return window.innerHeight;
};
/**
 * @name 获取整个文档的高度
 * @return [ number ]
 */
heighter.document = function() {
  return document.documentElement.offsetHeight;
};

/* harmony default export */ __webpack_exports__["a"] = (heighter);


/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 添加事件
 * @param { elem } [ element ]
 * @param { type } [ string ]
 * @param { handler } [ function ]
 * @return void
 */
const listener = (function() {
  if (window.addEventListener) {
    // 标准浏览器
    return function(elem, type, handler) {
      elem.addEventListener(type, handler, false);
    };
  } else if (window.attachEvent) {
    // IE浏览器
    return function(elem, type, handler) {
      elem.attachEvent("on" + type, handler);
    };
  }
})();

/**
 * @name 取消事件
 * @param { elem } [ element ]
 * @param { type } [ string ]
 * @param { handler } [ function ]
 * @return void
 */

listener.closer = (function() {
  if (window.removeEventListener) {
    // 标准浏览器
    return function(elem, type, handler) {
      elem.removeEventListener(type, handler, false);
    };
  } else if (window.detachEvent) {
    // IE浏览器
    return function(elem, type, handler) {
      elem.detachEvent("on" + type, handler);
    };
  }
})();
/**
 * @name 事件类型
 */
listener.typer = ["click", "mouseover", "mouseout", "mousedown", "mouseup"];
/* harmony default export */ __webpack_exports__["a"] = (listener);


/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 获取页面元素
 * @param { selector }  [ string  ]
 * @param { type ='class'} [ 'class','id','tag']
 * @return [ element ]
 */
let queryer = function(selector, type = "class") {
  if (typeof selector !== "string") throw new Error("The first argument must be string.");
  if (["class", "id", "tag"].findIndex(item => item === type) === -1) throw new Error("The second argument must be in ['class', 'id', 'tag'].");
  if (type === "class") {
    if (document.querySelecotorAll) return document.querySelectorAll("." + selector);
    return document.getElementsByClassName(selector);
  }
  if (type === "id") {
    if (document.querySelecotor) return document.querySelector("#" + selector);
    return document.getElementById(selector);
  }
  if (type === "tag") {
    return document.querySelectorAll ? document.querySelectorAll(selector) : document.getElementsByTagName(selector);
  }
};
queryer.class = function(selector) {
  return queryer(selector, "class");
};
queryer.id = function(selector) {
  return queryer(selector, "id");
};
queryer.tag = function(selector) {
  return queryer(selector, "tag");
};
/* harmony default export */ __webpack_exports__["a"] = (queryer);


/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checker__ = __webpack_require__(346);

/**
 * @name 获取最近的祖先元素是滚动元素的
 * @param { element } [ element ]
 * @param { rootParent = window } [ element ]
 * @return [ number ]
 */
let scroller = function(element, rootParent = window) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */])(element)) throw new Error("The first argument must be HTMLElement.");
  let node = element;
  while (node && node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === 1 && node !== rootParent) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY === "scroll" || overflowY === "auto") {
      return node;
    }
    node = node.parentNode;
  }
  return rootParent;
};

/**
 * @name 获取指定元素的滚动距离
 * @msg 当元素是window时，window并没有scrollTop属性值，pageYOffset代表该值
 * 当客户端为手机端时，得到的是 document.body值，而document.documentElement值为0 ，为电脑时，反之
 * @param { element } [ element ]
 * @param { top }  [ number ]
 * @return
 * 当 top = null时，则是获取值，否则是设置值
 */
scroller.top = function(element, top) {
  if (top == null) {
    let scrollTop = 0;
    if (__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */].window(element)) {
      scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    } else {
      scrollTop = element.scrollTop;
    }
    return scrollTop;
  } else {
    if (__WEBPACK_IMPORTED_MODULE_0__checker__["a" /* default */].window(element)) {
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    } else {
      element.scrollTop = top;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (scroller);

//document.body.scrollTop - 手机端支持 ， 否则为0
//document.documentElement.scrollTop - 电脑端支持 ，否则为0

// let scrollHeight = this.$refs["outer"].scrollHeight;
// domer.scroller.top(this.$refs["outer"], scrollHeight);


/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__check__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contains__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__convert__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hump__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__insert__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__random__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reverse__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shousand__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transfer__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trim__ = __webpack_require__(474);













/* harmony default export */ __webpack_exports__["a"] = ({
  check: __WEBPACK_IMPORTED_MODULE_0__check__["a" /* default */],
  connect: __WEBPACK_IMPORTED_MODULE_1__connect__["a" /* default */],
  contains: __WEBPACK_IMPORTED_MODULE_2__contains__["a" /* default */],
  convert: __WEBPACK_IMPORTED_MODULE_3__convert__["a" /* default */],
  hump: __WEBPACK_IMPORTED_MODULE_4__hump__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_5__insert__["a" /* default */],
  path: __WEBPACK_IMPORTED_MODULE_6__path__["a" /* default */],
  random: __WEBPACK_IMPORTED_MODULE_7__random__["a" /* default */],
  reverse: __WEBPACK_IMPORTED_MODULE_8__reverse__["a" /* default */],
  shousand: __WEBPACK_IMPORTED_MODULE_9__shousand__["a" /* default */],
  transfer: __WEBPACK_IMPORTED_MODULE_10__transfer__["a" /* default */],
  trim: __WEBPACK_IMPORTED_MODULE_11__trim__["a" /* default */]
});


/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = check;
/**
 * @name  验证字符串是否是有值
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check("s") => true
 * @example check("") => false
 * @example check(0) => false
 * @example check(" ") => true
 */

function check(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return /^[\s\S]+$/.test(string);
}
/**
 * @name  验证字符串是否是包含指定的字符串
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.contain("huang","hua") => true
 */

check.contain = function(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  let regex = new RegExp(`${target}`, "g");
  return regex.test(string);
};
//console.log(check.contain("huangjunquan", "hua"));
/**
 * @name  验证字符串是否是连续的
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.continue("123") => true
 * @example check.continue("abc") => true
 */
check.continue = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  if (string.length < 2) return false;
  for (let n = 1; n < string.length; n++) {
    if (string.charCodeAt(n) - string.charCodeAt(n - 1) !== 1) {
      return false;
    }
  }
  return true;
};
//console.log(check.continue(""));

/**
 * @name  验证字符串是否是重复的-全部是由一个字符组成
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.repeat("aaa")=>true
 * @example check.repeat("abc")=>false
 */
check.repeat = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  if (string.length < 2) return false;
  return string.split("").filter((item, index, array) => array.indexOf(item) === index).length === 1;
};
//console.log(check.repeat("aaa"));

/**
 * @name  验证字符串中部是否是指定的字符串
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.center("huang","a") => true
 */
check.center = function(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  let index = (string.length - target.length) / 2;
  if (!Number.isInteger(index)) return false;
  return string.slice(index, index + target.length) === target;
};
//console.log(check.center("hjq", "j"));

/**
 * @name  验证字符串尾部是否是指定的字符串
 * @param   { string  }  [ string ]
 * @param   { target  }  [ string ]
 * @return  [ boolean ]
 * @example check.end("huang","ng") => true
 */
check.end = function(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  return string.slice(string.length - target.length) === target;
};
//console.log(check.end("hjq", "jq"));

/**
 * @name  验证字符串开头是否是指定的字符串
 * @param   { string  }  [ string ]
 * @param   { target  }  [ string ]
 * @return  [ boolean ]
 * @example check.start("hjq", "hj") => true
 */
check.start = function(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  return string.slice(0, target.length) === target;
};
//console.log(check.start("hjq", "hj"));

/**
 * @name  验证字符串是否是回文字符串
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.plalin("121") => true
 */
check.plalin = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
};
//console.log(check.plalin("121"));

/**
 * @name  验证字符串是否存在空白字符
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.space("121 ") => true
 * @example check.space("  ") => true
 */
check.space = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/\s+/g, "") !== string;
};
//console.log(check.space("121 "));

/**
 * @name  验证字符串是否全部是空白字符组成
 * @param   { string  }  [ string ]
 * @return  [ boolean ]
 * @example check.space.whole(" ") => true
 * @example check.space.whole("") => false
 */
check.space.whole = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string !== "" && string.replace(/\s+/g, "") === "";
};
//console.log(check.space.whole(" "));


/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connect;
/**
 * @name 每隔几位添加指定的连接符-从末尾计数
 * @param { string } [ string ]
 * @param { connect = '-' } [ string ] 连接符
 * @param { len = 4 } [ number ]  每隔多少位
 * @param { type = start } [ string ]  计数位置
 * @return [ string ]
 * @example connect("13980464237"," ",4) => 139 8046 4237
 * @msg  exp1(?=exp2) 查找exp2前面的exp1 || (?<=exp2)exp1 查找exp2后面的exp1 || exp1(?!exp2) 查找后面不是exp2的exp1 ||  (?<!=exp2)exp1 查找前面不是exp2的exp1
 * @notice
 * new RegExp(`(?<=^([\\S\\s]{${len}})+)([\\s\\S])`, 'g') 在火狐下不能识别
 * new RegExp(`([\\s\\S])(?=([\\S\\s]{${len}})+$)`, 'g')
 */

function connect(string, connect = '-', len = 4, type = 'start') {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (typeof connect !== 'string') {
    throw new Error('The second argument must be string.');
  }
  if (!Number.isInteger(len) || len < 1) {
    throw new Error('The third argument must be int number and it must not less then 1.');
  }
  if (['start', 'end'].findIndex(item => item === type) === -1) {
    throw new Error('The fourth argument must be start or end.');
  }

  if (type === 'start') {
    let strings = string.split('');
    let newStrings = [];
    for (let n = 0; n < strings.length; n++) {
      if (n > 0 && n % len === 0) {
        newStrings.push(connect);
      }
      newStrings.push(strings[n]);
    }
    return newStrings.join('');
  } else {
    let strings = string.split('').reverse();
    let newStrings = [];
    for (let n = 0; n < strings.length; n++) {
      if (n > 0 && n % len === 0) {
        newStrings.push(connect);
      }
      newStrings.push(strings[n]);
    }
    return newStrings.reverse().join('');
  }
}

connect.start = function(string, link, len) {
  return connect(
    string,
    link,
    len,
    'start'
  );
};
connect.end = function(string, link, len) {
  return connect(
    string,
    link,
    len,
    'end'
  );
};


/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/**
 * @name  获取一个字符串包含指定的字符串的所有角标
 * @param   { string } [ string ]
 * @param   { target } [ string ] 指定的字符串
 * @return  [ array ] 角标位置数组
 * @example console.log(contains("insssinsssins", "s")); => [2,3,3,7,8,9,12]
 */

function contains(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  let res = [];
  let regex = new RegExp(`${target}`, "g");
  string.replace(regex, function(regex, index, string) {
    res.push(index);
  });
  return res;
}

/**
 * @name  获取一个字符串包含指定的字符串的所有角标
 * @msg 循环方式
 * @param   { string } [ string ]
 * @param   { target } [ string ] 指定的字符串
 * @return  [ array ] 角标位置数组
 * @example console.log(contains("insssinsssins", "s")); => [2,3,3,7,8,9,12]
 */

contains.exec = function(string, target) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The second argument must be string.");
  }
  let res = [];
  let regex = new RegExp(`${target}`, "g");
  let result;
  do {
    result = regex.exec(string);
    result && res.push(result["index"]);
  } while (result != null);
  return res;
};

/**
 * @name 返字符串中匹配正则表达式的值
 * @msg  replace的callback函数的参数的个数由正则表达式决定的 1.第一个 ： 正则表达式结果;2.倒数第二个：角标;3.倒数第一个：字符串本身;4.剩余的：正则表达式匹配的结果
 * @param  { string }  [ string ]
 * @param  { regexp } [ regexp ]
 * @return [ array<object> ]
 */

contains.with = function(string, regexp) {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (regexp.constructor !== RegExp) {
    throw new Error("The second argument must be regexp.");
  }
  let res = [];
  let newRegex = new RegExp(regexp);
  string.replace(newRegex, function(...args) {
    res.push({
      regex: args[0],
      string: args[args.length - 1],
      index: args[args.length - 2],
      match: [...args.slice(1, -2)]
    });
  });
  return res;
};

// let a = /\{(.*?)\}/g;
// console.log(a instanceof RegExp);

// 获取字符串中{}中的值
// let string = "a{b}c{d}e{f}";
// console.log(contains.with(string, /\{(.*?)\}/g));
// 获取字符串中[]中的值
// let string2 = 'a[b]c[d]e[f]'
// console.log(containsWith(string2, /\[(.*?)\]/g))
// 获取字符串中单词中的值
//let string3 = 'ass ass asas asas asas sa'
//console.log(containsWith(string3, /\b(\w+)\b/g))

// 获取url字符串中的key=value
//let string4 = "name=hjq&age=10&address={si}";
//console.log(containsWith(string4, false, /(\w+)(\=)(\w+)/g));


/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convert;
/**
 * @name 字符串的转换
 * @param  {string} [ string ]
 * @param { type='upper' } [ string ]
 * upper | 全部大写
 * lower | 全部小写
 * upperStart | 首字母大写，其余全部小写
 * lowerStart | 首字母小写，其余全部大写
 * exchange | 大小写互转
 * @return [ string ]
 * @example
 * convert("sSs",'upper') => 'SSS'
 * convert.upper('assaSAS');
 * convert.lower('assaSAS');
 * convert.upperStart('assaSAS');
 * convert.lowerStart('assaSAS');
 * convert.exchange('assaSAS');
 */

function convert(string, type = 'upper') {
  let types = ['upper', 'lower', 'upperStart', 'lowerStart', 'exchange'];
  if (typeof string !== 'string') throw new Error('The first argument must string.');
  if (!types.includes(type)) throw new Error("The second argument must be in ['upper', 'lower', 'upperStart', 'lowerStart', 'exchange'].");
  if (type === 'upper') return string.toUpperCase();

  if (type === 'lower') return string.toLowerCase();

  if (type === 'upperStart') return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();

  if (type === 'lowerStart') return string.substring(0, 1).toLowerCase() + string.substring(1).toUpperCase();

  if (type === 'exchange') {
    return string
      .split('')
      .map(function(word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase();
        }
      })
      .join('');
  }
}

convert.upper = string => convert(string, 'upper');
convert.lower = string => convert(string, 'lower');
convert.upperStart = string => convert(string, 'upperStart');
convert.lowerStart = string => convert(string, 'lowerStart');
convert.exchange = string => convert(string, 'exchange');

//console.log(convert('SAJJKSJAKSJ', 'uppe'));
// console.log(convert.upper('assaSAS'));
// console.log(convert.lower('assaSAS'));
// console.log(convert.upperStart('assaSAS'));
// console.log(convert.lowerStart('assaSAS'));
// console.log(convert.exchange('assaSAS'));


/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hump;
/**
 * @name 驼峰字符串转链接字符串
 * @param  { string }  [ string ]
 * @return [ string ]
 * @example hump('name-name') => nameName
 */
function hump(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  let regex = new RegExp(/\-(\w)/g);
  return string.replace(regex, function(m, c) {
    return c ? c.toUpperCase() : "";
  });
}

/**
 * @name  驼峰字符串转链接字符串
 * @param  {string} [string]
 * @return  [string]
 * @example hump.spread("asashAHjjasHsa") => asash-a-hjjas-hsa
 */

hump.spread = function(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return "-" + b.toLowerCase();
  });
};
//console.log(hump.spread("nameNameNameLeight")); // nameNameNameLeight


/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = insert;
/**
 * @name 向字符串指定的角标后面插入指定字符串
 * @param { string } [ string ]  目标字符串
 * @param { index } [ number ] 角标值
 * @param { target } [ string ] 插入的字符串
 * @return [ string ]
 */

function insert(string, index = 0, target = "") {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (!Number.isInteger(index) || index < 0 || index > string.length) {
    throw new Error("The second argument must be int number,and it must not less than 0 and not greater than the first argument length.");
  }
  if (typeof target !== "string") {
    throw new Error("The third argument must be string.");
  }
  return string.slice(0, index) + target + string.slice(index);
}
/**
 * @name 向字符串指定的字符串后面插入指定字符串
 * @param { string } [ string ]  目标字符串
 * @param { code } [ string ] 目标位置字符串
 * @param { target } [ string ] 插入的字符串
 * @return [ string ]
 */
insert.code = function(string, code = "", target = "") {
  if (typeof string !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof code !== "string") {
    throw new Error("The second argument must be string.");
  }
  if (typeof target !== "string") {
    throw new Error("The third argument must be string.");
  }
  let index = string.indexOf(code);
  return index > -1 ? string.slice(0, index) + target + string.slice(index) : string;
};


/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = path;
/**
 * @name  将字符串转成合法的对象的键
 * @msg
 * a.b.c形式，获取对象属性的时候用'.'，获取数组的时候可以使用'.0'，也可以使用a[0],
 * []只能是数组的角标0-9组成的字符串，并且 [] 中不能再存在 []
 * 不能以'.'开头，且不能有连续的'.'
 * 对象的属性名需要满足js变量命名规则
 *
 * JS标识符的命名规则，即变量的命名规则：
 * 标识符只能由字母、数字、下划线和‘$’组成
 * 数字不可以作为标识符的首字符
 *
 * 对象属性的命名规则
 * 通过[]操作符为对象添加属性时，属性名称可以是任何字符串（包括只包含空格的字符串和空字符串）；
 * 通过.操作符为对象添加属性时，属性名称必须是合法的标识符名称；
 * 如果属性名包含非法的标识符字符，则只能采用obj[“propertyName”]的形式；
 * 如果属性名是合法的标识符，读取时即可以采用obj.propertyName,也可以采用obj[“propertyName”]的形式；
 *
 * @param  { string } [ string ]
 * @return  [ array ]
 * @example path(".a[a].b[0.s..s].c[c].....") => ['a','0','b','0','c','c']
 */
function path(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }

  let regex = new RegExp(/\[(.*?)\]/, "g"); // '.'匹配除换行符外的任意字符

  string = string.replace(regex, function(regex, match, index, string) {
    return "." + match;
  });

  return string.split(".").filter(item => !!item);
}

// let string = ".a[a].b[0.s..s].c[c]....."; // => ['a','0','b','0',c','c']

// let arr = toPath(".a[a].b[0.s..s].c[c].....");
// console.log(arr);


/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = random;
/**
 * @name  生成随机字符串
 * @param  { n } [ number ] 指定长度 ， 默认长度为16
 * @return  [ string ]
 * @example random(16) => n568c2cjdbdi3oop
 */

function random(n) {
  if (!(Number.isInteger(n) && n > 0)) {
    console.error("[n] is not integer or less than 1");
    n = 16;
  }
  let standard = "abcdefghijklmnopqrstuvwxyz9876543210";
  let len = standard.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len));
  }
  return result;
}

/**
 * @name  随机生成颜色字符串
 * @param  { isOpacity } [ boolean ] 是否需要透明度
 * @return  [string]
 * @example random.color(true) => rgba(226,180,173,0.3421123393946621)
 * @example random.color() => rgba(226,180,173)
 */

random.color = function(isOpacity) {
  if (typeof isOpacity !== "boolean") {
    throw new Error("The argument must be boolean.");
  }
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return isOpacity ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
};

/**
 * @name  随机生成颜色字符串-16进制字符串
 * @return  [string]
 * @example random.color.hex() => #3e7fce
 */
random.color.hex = function() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

//console.log(random.color.hex());


/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reverse;
/**
 * @name: 字符串反向
 * @param { string  } string
 * @return: [string]
 */

function reverse(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return string
    .split("")
    .reverse()
    .join("");
}


/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shousand;
/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-24 09:13:26
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-25 12:21:37
 */

// 前瞻：
// exp1(?=exp2) 查找exp2前面的exp1
// 后顾：
// (?<=exp2)exp1 查找exp2后面的exp1
// 负前瞻：
// exp1(?!exp2) 查找后面不是exp2的exp1
// 负后顾：
// (?<!=exp2)exp1 查找前面不是exp2的exp1
// ()表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)
// (?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来

/**
 * @name 字符串转千分位
 * @msg  判断字符串是否存在'.'，存在则使用Number(value).toLocaleString()，否则正则替换
 * @param { string } [ string,number ]
 * @return [ string ]
 * @example shousand(123456788) => 123,456,788
 * @example shousand(123456788.11) => 123,456,788.11
 */
function shousand(string) {
  if (typeof string !== "string" && typeof string !== "number") {
    console.error("[string] is not string or number");
    return string;
  }
  string = String(string);
  return /\./g.test(string) ? Number(string).toLocaleString() : string.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}

// let string = shousand(123456788);
// console.log(string);

// 查找 junquan前面的huang
//  let regex = /huang(?=junquan)/
//  let strings = 'huangjunquan'
//  let strings2 = 'chenjunquan'
//  console.log(regex.test(strings))
//  console.log(strings.replace(regex,'chen'))
//  console.log(regex.test(strings2))
//  console.log(strings2.replace(regex,'huang'))

// 查找 huang后面的junquan
//  let regex = /(?<=huang)junquan/g
//  let strings = 'huangjunquanhuangjunquan'
//  let strings2 = 'chenjunquan'
//  console.log(regex.test(strings))
//  console.log(strings.replace(regex,'lan'))
//  console.log(regex.test(strings2))
//  console.log(strings2.replace(regex,'jun'))


/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transfer;
/**
 * @name 字符串的转义
 * @param {string} [ string ]
 * @return  [ string ]
 * @example transfer("< >") => &lt;&nbsp;&gt;
 */

function transfer(string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  string = string.replace(/&/gi, "&amp;");
  string = string.replace(/</gi, "&lt;");
  string = string.replace(/>/gi, "&gt;");
  string = string.replace(" ", "&nbsp;");
  return string;
}

//console.log(transfer("< >"));


/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = trim;
/**
 * @name  字符串的空格去除-整体
 * @msg String.prototype.trim 只能删除字符串开头的空白
 * @param { string } [ string ] 字符串
 * @param { type = 'whole'} [ string ] 类型
 * start | 首部
 * end | 尾部
 * both | 两侧
 * whole | 整体
 * @return [ string ]
 * @example
 * trim(' dsdsds dsd ds dsds ds ' ,'whole');
 * trim.both(' dsdsds dsd ds dsds ds ');
 * trim.start(' dsdsds dsd ds dsds ds ');
 * trim.end(' dsdsds dsd ds dsds ds ');
 * trim.whole(' dsdsds dsd ds dsds ds ');
 */

function trim(string, type = 'whole') {
  let types = ['start', 'end', 'both', 'whole'];
  if (typeof string !== 'string') throw new Error('The first argument must be string.');
  if (!types.includes(type)) throw new Error("The second argument must be in ['start', 'end', 'both', 'whole'].");
  if (type === 'start') return string.replace(/(^\s*)/g, '');
  if (type === 'end') return string.replace(/(\s*$)/g, '');
  if (type === 'both') return string.replace(/(^\s*)|(\s*$)/g, '');
  if (type === 'whole') return string.replace(/\s+/g, '');
}
trim.start = string => trim(string, 'start');
trim.end = string => trim(string, 'end');
trim.both = string => trim(string, 'both');
trim.whole = string => trim(string, 'whole');

// console.log(trim(' dsdsds dsd ds dsds ds ', 'both'));
// console.log(trim.both(' dsdsds dsd ds dsds ds '));
// console.log(trim.start(' dsdsds dsd ds dsds ds '));
// console.log(trim.end(' dsdsds dsd ds dsds ds '));
// console.log(trim.whole(' dsdsds dsd ds dsds ds '));


/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__beforer__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binder__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryer__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debouncer__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delayer__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partialer__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__throttler__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uncurryer__ = __webpack_require__(483);









/* harmony default export */ __webpack_exports__["a"] = ({
  beforer: __WEBPACK_IMPORTED_MODULE_0__beforer__["a" /* default */],
  binder: __WEBPACK_IMPORTED_MODULE_1__binder__["a" /* default */],
  curryer: __WEBPACK_IMPORTED_MODULE_2__curryer__["a" /* default */],
  debouncer: __WEBPACK_IMPORTED_MODULE_3__debouncer__["a" /* default */],
  delayer: __WEBPACK_IMPORTED_MODULE_4__delayer__["a" /* default */],
  partialer: __WEBPACK_IMPORTED_MODULE_5__partialer__["a" /* default */],
  throttler: __WEBPACK_IMPORTED_MODULE_6__throttler__["a" /* default */],
  uncurryer: __WEBPACK_IMPORTED_MODULE_7__uncurryer__["a" /* default */]
});


/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = beforer;
/**
 * @name 方法执行前函数
 * @msg 只支持同步函数
 * @param { fn  } [function] 执行的方法
 * @param { beforefn } [function] 方法执行前需要执行的方法
 * @param [ function ]
 */
function beforer(fn, beforefn) {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");
  if (typeof beforefn !== "function") throw new Error("The second argument must be function.");
  return function() {
    beforefn.apply(this, arguments);
    return fn.apply(this, arguments);
  };
}

// let dod = beforer(
//   function() {
//     console.log("do something.");
//   },
//   function() {
//     console.log("before.");
//   }
// );
// dod();


/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = binder;
/**
 * @name  函数绑定执行上下文
 * @param { fn } [function] 方法
 * @param { context } [any]  执行的上下文
 * @return [ function ]
 */
function binder(fn, context = this) {
  if (typeof fn !== "function") throw new Error("The fisrt argument must be function.");
  return function(...args) {
    return fn.call(context, ...args);
  };
}

// let bin = bind(function(age){
//   console.log(this,age)
// },{ name :'hjq'})

// bin('1111')


/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = curryer;
/**
 * @name 函數柯里化
 * @msg
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
 * 可以任意传参，到达预期的时候触发函数执行返回值（可以是参数为空的时候）
 * @param { fn } [ function ]
 * @param { ..args }
 * @return [ function ]
 */

function curryer(fn, ...args) {
  if (typeof fn !== "function") throw new Error("The argument must be function.");
  let params = args;
  return function(...rest) {
    if (rest.length === 0) {
      let _args = params.concat();
      params = [];
      return fn.call(this, ..._args);
    } else {
      params.push(...rest);
      return curryer.call(this, fn, ...params);
    }
  };
}

// let add = function(...args) {
//   return args.reduce((prex, next) => prex + next);
// };
// let curryFn = curryer(add, 0);

// console.log(curryFn(1, 2, 3)(4)(5, 6, 7, 8)(9, 10)());


/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debouncer;
/**
 * @name 执行方法去抖动
 * @msg 如果一个函数持续地触发，那么只在它结束后过一段时间只执行一次
 *  使用闭包的作用，独立每个的bounce，互相不影响
 * @param { fn } [function] 执行的方法
 * @param { delay }  等待多少时间触发
 * @return [ function ]
 */

function debouncer(fn, delay) {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");
  if (!Number.isInteger(delay) || delay < 0) throw new Error("The second argument must be int number , and it must be not less than 0.");
  let timeout = null;
  let time = 0;
  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      time++;
      fn.call(this, ...args);
    }, delay);
    return time;
  };
}


/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayer;
/***
 * @name 延迟多少时间触发事件
 * @param {fn} [function] 触发的方法
 * @param { wait }  等待的时长
 * @param { ..args} 方法的参数
 * @return [ function ]
 */

function delayer(fn, wait, ...args) {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");
  if (!Number.isInteger(wait) || wait < 0) throw new Error("The second argument must be int number , and it must be not less than 0.");
  return function() {
    setTimeout(fn, wait, ...args);
  };
}

// let test = delayer(
//   function(...args) {
//     console.log(...args);
//   },
//   2000,
//   "hjq",
//   "hjsh"
// );
// test();


/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partialer;
/**
 * @name 偏函數
 * @msg 
 * 创建一个调用另一部分参数或变量已经预置的函数
 * 可以先进行一些参数的设置
 * @param { fn }  [ function ]
 * @param {...args }
 * @return [ function ]
 */

function partialer(fn, ...args) {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");
  return function(...rest) {
    return fn.apply(this, [...args, ...rest]);
  };
}

// let cur = partial(function(a,b){
//   return a + b
// },1)

// console.log(cur(2))

// 偏函数的应用场景

// function isType(type) {
//   return function(value) {
//     return (
//       Object.prototype.toString
//         .call(value)
//         .slice(8, -1)
//         .toLowerCase() === type
//     );
//   };
// }

// let isString = isType('string')
// let isFunction = isType('function')
// let isNumber = isType('number')

// console.log(isString(''))


/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 执行方法节流-定时器式
 * @msg 就是指连续触发事件但是在 n 毫秒中只执行一次函数，
 * @param { fn } [function]执行方法
 * @param { delay } 间隔多少秒后执行方法
 * @param { type } [ 'timeout','time']
 * @return [ function ]
 */
let throttler = function(fn, delay, type = "timeout") {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");
  if (!Number.isInteger(delay) || delay < 0) throw new Error("The second argument must be int number , and it must be not less than 0.");
  if (["timeout", "time"].findIndex(item => item === type) === -1) throw new Error("The third argument must be in ['timeout', 'time'].");
  if (type === "timeout") {
    let timeout = null;
    let time = 0;
    return function(...args) {
      if (!timeout) {
        timeout = setTimeout(() => {
          time++;
          timeout = null;
          fn.call(this, ...args);
        }, delay);
      }
      return time;
    };
  }
  if (type === "time") {
    let previous = 0;
    let time = 0;
    return function(...args) {
      let now = +new Date();
      if (now - previous > delay) {
        time++;
        fn.call(this, ...args);
        previous = now;
      }
      return time;
    };
  }
};
throttler.timeout = function(fn, delay) {
  return throttler(fn, delay, "timeout");
};

throttler.time = function(fn, delay) {
  return throttler(fn, delay, "time");
};

/* harmony default export */ __webpack_exports__["a"] = (throttler);


/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uncurryer;
/**
 * @name 传入一个现有函数，反柯里化会返回一个新的函数，该新函数接受的第一个实参将绑定为fn中的this的上下文，其他参数将传递给fn作为参数
 * @msg 是对js内置的其他方法的借调，而不用自己去实现一遍
 * @param { fn } 需要反柯里化的函数
 * @return { function }  返回一个新的函数
 *
 */

function uncurryer(fn) {
  if (typeof fn !== "function") throw new Error("The first argument must be function.");

  return function(...args) {
    return fn.apply(args[0], args.slice(1));
  };
}

// let split = uncurryer(String.prototype.split);
// console.log(split("a,b,c", ","));
// let push = uncurry(Array.prototype.push)
// let arr = [1,2,3,4]
// push(arr,1,2,3,4)
// console.log(arr)


/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeToChineseUpper__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__changeToChinese__ = __webpack_require__(486);



/* harmony default export */ __webpack_exports__["a"] = ({
  changeToChinese: __WEBPACK_IMPORTED_MODULE_1__changeToChinese__["a" /* default */],
  changeToChineseUpper: __WEBPACK_IMPORTED_MODULE_0__changeToChineseUpper__["a" /* default */]
});


/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeToChineseUpper;
/**
 * 将阿拉伯数字翻译成中文的大写数字
 *
 * @param {num} num
 */

function changeToChineseUpper(num) {
  if (Number(num) !== num) return num;

  var AA = new Array(
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十"
  );
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];
    for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
  }
  if (re == "一十") re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
}


/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeToChinese;
/**
 * 将数字转换为大写金额
 *
 * @param {num} 数字
 */

function changeToChinese(Num) {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  }
  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”
  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格
  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符
  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(Num).split(".");
  var newchar = "";
  //小数点前进行转化
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return "";
      //若数量超过拾亿单位，提示
    }
    var tmpnewchar = "";
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;
      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;
      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;
      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;
      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;
      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;
      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;
      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;
      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;
      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  //小数点之后进行转化
  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  }
  //替换所有无用汉字
  while (newchar.search("零零") != -1) newchar = newchar.replace("零零", "零");
  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");
  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }
  return newchar;
}


/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloner__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equaler__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caser__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getter__ = __webpack_require__(491);




/* harmony default export */ __webpack_exports__["a"] = ({
  cloner: __WEBPACK_IMPORTED_MODULE_0__cloner__["a" /* default */],
  equaler: __WEBPACK_IMPORTED_MODULE_1__equaler__["a" /* default */],
  caser: __WEBPACK_IMPORTED_MODULE_2__caser__["a" /* default */],
  getter: __WEBPACK_IMPORTED_MODULE_3__getter__["a" /* default */]
});


/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloner;
function typer(value) {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}
// 验证一个数据是否是纯对象或没有原型的对象，即常用的业务对象
function freer(object) {
  //当object是undefined，null 会报错： Cannot convert undefined or null to object
  if (object == null) return false;
  return Object.getPrototypeOf(object) === null || Object.getPrototypeOf(Object.getPrototypeOf(object)) === null;
}
// 检查是否在指定的类型当中
function checker(type, method = 'support') {
  if (method === 'support') {
    return ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object'].includes(type);
  } else if (method === 'quote') {
    return ['array', 'object'].includes(type);
  } else if (method === 'origin') {
    return ['string', 'number', 'boolean', 'null', 'undefined'].includes(type);
  }
}
/**
 * @name 数据的克隆
 * @msg
 * 只支持['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']类型的拷贝，并且当类型是对象时，必须是有{}、new Object()、Object.create(null)方式创建的
 * 深拷贝，即和源数据之间不存在引用关系
 * 暂不支持 function、symbol 、regex 等的拷贝
 * 存在__proto__属性时，不通过
 * @param { target } [ 'string', 'number', 'boolean', 'array', 'null', 'undefined', 'object' ] 目标数据
 * @return [ any ]
 * @example
 * cloner({ name: ["", 2, 3, 5] }) => { name: ["", 2, 3, 5] }
 */

function cloner(target) {
  let currentType = typer(target);
  if (!checker(currentType)) throw new Error("The argument type must be in ['string', 'number', 'boolean', 'array', 'null', 'undefined','object'].");
  if (currentType === 'object' && !freer(target)) throw new Error('While the argument type is object,it must be created of {} or new Object() or Object.create(null).');

  if (currentType === 'array') {
    let res = [];
    for (let n = 0; n < target.length; n++) {
      res.push(cloner(target[n]));
    }
    return res;
  }
  if (currentType === 'object') {
    let res = {};
    for (let key in target) {
      res[key] = cloner(target[key]);
    }
    return res;
  }
  return target;
}

// let Person = function() {};
// let object = { name: undefined };
// let cloneObject = cloner(object);
// console.log(cloneObject, object);
//console.log(preson, type(preson));

/**
 * @name 数据深拷贝，向后（替换+追加）
 * @msg
 * 只用于满足常用业务逻辑
 * 只支持['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']类型的拷贝，并且当类型是对象时，必须是有{}、new Object()、Object.create(null)方式创建的
 * 原始 + 原始 | 返回原始next
 * 引用 + 原始 | 返回原始next
 * 原始 + 引用 | 返回引用next的深拷贝
 * 引用 + 引用 | 若类型不一致，则返回next的深拷贝，若类型一直，则判断next中属性在prev中的存在性，若存在，则替换，若不存在，则追加
 * @param { prev } ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']
 * @param { next } ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']
 * @return [ any ]
 */

cloner.nexter = function(prev, next) {
  let prevType = typer(prev);
  let nextType = typer(next);
  if (!checker(prevType)) throw new Error('The first argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (!checker(nextType)) throw new Error('The second argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (prevType === 'object' && !freer(prev)) throw new Error('While the first argument type is object,it must be created of {} or new Object() or Object.create(null).');
  if (nextType === 'object' && !freer(next)) throw new Error('While the second argument type is object,it must be created of {} or new Object() or Object.create(null).');
  if (checker(nextType, 'origin')) return next == null ? prev : next;
  if (prevType !== nextType) return cloner(next);
  if (prevType === 'array') {
    let maxLen = Math.max(prev.length, next.length);
    let res = [];
    for (let n = 0; n < maxLen; n++) {
      res.push(cloner.nexter(prev[n], next[n]));
    }
    return res;
  }
  if (prevType === 'object') {
    let prevKeys = Object.keys(prev);
    let nextKeys = Object.keys(next);
    let mergeKeys = [...prevKeys, ...nextKeys].filter((item, index, array) => array.indexOf(item) === index);
    let res = {};
    mergeKeys.forEach(item => {
      res[item] = cloner.nexter(prev[item], next[item]);
    });
    return res;
  }
};

//console.log(cloner.next({ name: null, addree: '' }, { age: 1, name: '', addree: [1, 2, 3] }));

/**
 * @name 数据深拷贝，向前（替换）
 * @msg
 * 只用于满足常用业务逻辑
 * 只支持['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']类型的拷贝，并且当类型是对象时，必须是有{}、new Object()、Object.create(null)方式创建的
 * 原始 + 原始 | 返回原始next
 * 引用 + 原始 | 返回原始next
 * 原始 + 引用 | 返回引用next的深拷贝
 * 引用 + 引用 | 若类型不一致，则返回next的深拷贝，若类型一直，则判断next中属性在prev中的存在性，若存在，则替换，若不存在，则忽略
 * @param { prev } ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']
 * @param { next } ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']
 * @return [ any ]
 */
cloner.prever = function(prev, next) {
  let prevType = typer(prev);
  let nextType = typer(next);
  if (!checker(prevType)) throw new Error('The first argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (!checker(nextType)) throw new Error('The second argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (prevType === 'object' && !freer(prev)) throw new Error('While the first argument type is object,it must be created of {} or new Object() or Object.create(null).');
  if (nextType === 'object' && !freer(next)) throw new Error('While the second argument type is object,it must be created of {} or new Object() or Object.create(null).');
  if (checker(nextType, 'origin')) return next == null ? prev : next;
  if (prevType !== nextType) return cloner(next);
  if (prevType === 'array') {
    let res = [];
    for (let n = 0; n < prev.length; n++) {
      res.push(cloner.prever(prev[n], next[n]));
    }
    return res;
  }
  if (prevType === 'object') {
    let prevKeys = Object.keys(prev);
    let res = {};
    prevKeys.forEach(item => {
      res[item] = cloner.prever(prev[item], next[item]);
    });
    return res;
  }
};

// console.log(cloner.nexter({ name: '', age: 0 }, { name: 'huang', a: 12 }));
// console.log(cloner.prever({ name: '', age: 0 }, { name: 'huang', a: 12 }));

// console.log(cloner.prever([1, 2, 3], [1, 2, 4, 5, 6]));
// console.log(cloner.nexter([1, 2, 3], [1, 2, 4, 5, 6]));

// console.log(cloner.nexter([{ name: '', age: 0 }], [{ name: 'hjq' }, 2, 4, 5, 6]));
// console.log(cloner.prever([{ name: '', age: 0 }], [{ name: 'hjq' }, 2, 4, 5, 6]));


/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equaler;
function type(value) {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}
// 验证一个数据是否是纯对象或没有原型的对象，即常用的业务对象
function freer(object) {
  //当object是undefined，null 会报错： Cannot convert undefined or null to object
  if (object == null) return false;
  return Object.getPrototypeOf(object) === null || Object.getPrototypeOf(Object.getPrototypeOf(object)) === null;
}
// 检查是否在指定的类型当中
function checker(type) {
  return ['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object'].includes(type);
}

/**
 * @name 判断两个数据的属性值是否相等
 * @msg
 * 只支持['string', 'number', 'boolean', 'array', 'null', 'undefined', 'object']类型的拷贝，并且当类型是对象时，必须是有{}、new Object()、Object.create(null)方式创建的
 * @param { prev } [ number,string,boolean,null,undefined,array,object ]
 * @param { next } [ number,string,boolean,null,undefined,array,object ]
 * @return: [ boolean ]
 * @example
 * equal(NaN, NaN) => true
 * equaler([NaN, { name: true }], [NaN, { name: true }]) => true
 */

function equaler(prev, next) {
  let prevType = type(prev);
  let nextType = type(next);
  if (!checker(prevType)) throw new Error('The first argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (!checker(nextType)) throw new Error('The second argument type must be in [ number,string,boolean,null,undefined,array,object ]');
  if (prevType === 'object' && !freer(prev)) throw new Error('While the first argument type is object,it must be created of {} or new Object() or Object.create(null).');
  if (nextType === 'object' && !freer(next)) throw new Error('While the second argument type is object,it must be created of {} or new Object() or Object.create(null).');

  if (prevType !== nextType) return false;
  if (prevType === 'string' || prevType === 'boolean' || prevType === 'null' || prevType === 'undefined') return prev === next;
  if (prevType === 'number') return prev === next || (Number.isNaN(prev) && Number.isNaN(next));
  if (prevType === 'object') {
    let prevKeys = Object.keys(prev);
    let nextKeys = Object.keys(next);
    if (prevKeys.length !== nextKeys.length) return false;
    for (let n = 0; n < prevKeys.length; n++) {
      let isCheck = equaler(prev[prevKeys[n]], next[prevKeys[n]]);
      if (!isCheck) {
        return false;
      }
    }
    return true;
  }
  if (prevType === 'array') {
    if (prev.length !== next.length) return false;
    for (let n = 0; n < prev.length; n++) {
      let isCheck = equaler(prev[n], next[n]);
      if (!isCheck) {
        return false;
      }
    }
    return true;
  }
}

// console.log(equaler(NaN, NaN));
// console.log(equaler([NaN, { name: true }], [NaN, { name: true }]));
// console.log(equaler([1, 2, true, NaN, [1, 2, true, NaN, [1, 2, true, NaN]]], [1, 2, true, NaN, [1, 2, true, NaN, [1, 2, true, NaN]]]));


/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @description 实例化
 * @param { p } [ function ] 构造方法
 * @return [ object ]
 */

let caser = function(p) {
  if (typeof p !== 'function') throw new Error('The first argument must be function.');
  let o = {};
  let arg = Array.prototype.slice.call(arguments, 1);
  o.__proto__ = p.prototype;
  p.prototype.constructor = p;
  p.apply(o, arg);
  return o;
};

/* harmony default export */ __webpack_exports__["a"] = (caser);

// let Person = function(name) {
//   this.name = name;
// };
// Person.prototype.getName = function() {
//   return this.name;
// };

// let person = caser('', 'huang');
// console.log(person);


/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getter;
/**
 * @name 按指定的路径获取值
 * @msg
 * 若未取值则返回默认
 * 取到的值若对象类型，则与目标对象之间存在引用关系的
 * @param { object } [ any ] 取值对象
 * @param { path = []} [ array ] 路径
 * @param { defaults } [ any ] 默认值
 * @return [ any ]
 * @example
 * getter({ a: { b: { c: { d: { e: { f: { g: true } } } } } } }, ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0) => true
 */
function getter(object, path = [], defaults) {
  if (!Array.isArray(path)) throw new Error('The second argument must be array');
  let res = object;
  try {
    for (let n = 0; n < path.length; n++) {
      res = res[path[n]];
    }
    return res || defaults;
  } catch (e) {
    return defaults;
  }
}

//console.log(getter({ a: { b: { c: { d: { e: { f: { g: true } } } } } } }, ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0));


/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baser__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compresser__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filer__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formater__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transformer__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typer__ = __webpack_require__(497);







/* harmony default export */ __webpack_exports__["a"] = ({
  baser: __WEBPACK_IMPORTED_MODULE_0__baser__["a" /* default */],
  compresser: __WEBPACK_IMPORTED_MODULE_1__compresser__["a" /* default */],
  filer: __WEBPACK_IMPORTED_MODULE_2__filer__["a" /* default */],
  formater: __WEBPACK_IMPORTED_MODULE_3__formater__["a" /* default */],
  sizer: __WEBPACK_IMPORTED_MODULE_4__sizer__["a" /* default */],
  transformer: __WEBPACK_IMPORTED_MODULE_5__transformer__["a" /* default */],
  typer: __WEBPACK_IMPORTED_MODULE_6__typer__["a" /* default */]
});


/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baser__ = __webpack_require__(369);


let compressser = {};
/**
 * @name 图片压缩-按质量
 * @param { src } [ string ]
 * @param { quality } [number] 压缩后的质量
 * @param { type = image/png } [ string ] 文件的类型，最好是先知道文件的类型，相同类型之间的压缩会更准确
 * @return: [ promise ] => [ string<base64>]
 */
compressser.qualityer = function(src, quality = 0.7, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof quality !== "number" || quality < 0 || quality > 1) {
    throw new Error("The second argument must be number , and it must not less than 0 and not greate than 1.");
  }
  if (typeof type !== "string") {
    throw new Error("The third argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      //image.setAttribute("crossOrigin",'Anonymous') // Tainted canvases may not be exported. 跨域问题
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          //document.body.appendChild(canvas)
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, quality);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name 图片压缩-指定宽
 * @param { src } [ string ]
 * @param { width } [ number ]
 * @param { type = image/png } [ string ]
 * @return [ promise ] => [ string<base64>]
 */
compressser.widther = function(src, width, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof width !== "number" || width < 0) {
    throw new Error("The second argument must be number , and it must not less than 0.");
  }
  if (typeof type !== "string") {
    throw new Error("The third argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.width = width || image.width;
          canvas.height = (image.height / image.width) * canvas.width;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name  图片压缩-指定高度
 * @param { src } [ string ]
 * @param { height } [ number ]
 * @param { type = image/png } [ string ]
 * @return  [ promise ] => [ string<base64>]
 */
compressser.heighter = function(src, height, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof height !== "number" || height < 0) {
    throw new Error("The second argument must be number , and it must not less than 0.");
  }
  if (typeof type !== "string") {
    throw new Error("The third argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = height || image.height;
          canvas.width = (image.width / image.height) * canvas.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name  图片压缩=指定高和宽
 * @param { src } [ string ]
 * @param { width } [ number ]
 * @param { height } [ number ]
 * @param { type = image/png } [ string ]
 * @return: [ promise ] => [ string<base64>]
 * @msg  图片会被挤压
 */
compressser.sizer = function(src, width, height, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof width !== "number" || width < 0) {
    throw new Error("The second argument must be number , and it must not less than 0.");
  }
  if (typeof height !== "number" || height < 0) {
    throw new Error("The third argument must be number , and it must not less than 0.");
  }
  if (typeof type !== "string") {
    throw new Error("The fourth argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = height || image.height;
          canvas.width = width || image.width;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name 图片压缩-指定比率
 * @param { src } [ string ]
 * @param { ratio = 1.0 } [ number ]
 * @param { type = image/png } [ string ]
 * @return  [ promise ] => [ string<base64>]
 */
compressser.ratioer = function(src, ratio = 1.0, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof ratio !== "number" || ratio < 0) {
    throw new Error("The second argument must be number , and it must not less than 0.");
  }
  if (typeof type !== "string") {
    throw new Error("The third argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.height = image.height * ratio;
          canvas.width = image.width * ratio;
          console.log(canvas);
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataurl = canvas.toDataURL(type, 1);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          resolve(dataurl);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/**
 * @name 图片压缩-指定体积的图片
 * @msg  Base64编码要求把3个8位字节（3 * 8=24）转化为4个6位的字节（4 * 6=24），之后在6位的前面补两个0，形成8位一个字节的形式。 如果剩下的字符不足3个字节，则用0填充，输出字符使用’=’，因此编码后输出的文本末尾可能会出现1或2个’=’
 * @param { src } [ string ] 图片地址
 * @param { size = 200 * 1024 } [ number ] | 200 * 1024 压缩到指定的大小 需要精确到 Bytes
 * @param { range = 100 } [number ] | 10 * 1024 容错范围即可 需要精确到 Bytes
 * @param { type = image/png } [ string ]
 * @return [ promise ] => [ string<base64>]
 */
compressser.valumer = function(src, size = 200 * 1024, range = 100, type = "image/png") {
  if (typeof src !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof size !== "number" || size < 0) {
    throw new Error("The second argument must be number , and it must not less than 0.");
  }
  if (typeof range !== "number" || range < 0) {
    throw new Error("The third argument must be number , and it must not less than 0.");
  }
  if (typeof type !== "string") {
    throw new Error("The fourth argument must be string.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      image.onload = () => {
        try {
          let start = 0,
            end = 1,
            mid = 1,
            count = 0;
          let resSize = 0;
          let res;
          do {
            count++;
            if (count !== 1) {
              mid = (start + end) / 2;
            }
            let canvas = document.createElement("canvas");
            canvas.width = image.width * mid;
            canvas.height = image.height * mid;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            res = canvas.toDataURL(type, 1);
            resSize = __WEBPACK_IMPORTED_MODULE_0__baser__["a" /* default */].size(res);
            if (count === 1 && resSize < size) {
              break;
            } else {
              if (Math.abs(resSize - size) <= range) {
                break;
              } else if (resSize - size > range) {
                end = mid - 0.0000000001;
              } else if (size - resSize > range) {
                start = mid + 0.0000000001;
              }
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          } while (start < end);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (compressser);
//compressser.valumer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg", 20 * 1024).then(res => console.log(res));


/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typer_is__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dater_formater__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formater__ = __webpack_require__(370);



let isFile = Object(__WEBPACK_IMPORTED_MODULE_0__typer_is__["a" /* default */])("file");

/**
 * @name 获取本地文件资源的详细信息
 * @param { file } [ file ]
 * @return { object }
 * bytes: 62661
 * fileType: "jpg"
 * lastUpdateDate: "2018-10-17 09:08:17"
 * name: "zly (18)"
 * size: 61
 * sizeUnit: "KB"
 * subType: "jpeg"
 * type: "image"
 */

let filer = function(file) {
  if (!isFile(file)) {
    throw new Error("The argument must be file.");
  }
  let lastUpdateDate = Object(__WEBPACK_IMPORTED_MODULE_1__dater_formater__["a" /* default */])(file.lastModified, "yyyy-MM-dd HH:mm:ss");
  let transformSize = Object(__WEBPACK_IMPORTED_MODULE_2__formater__["a" /* default */])(file.size);
  let types = file.type.split("/");
  let name = file.name;
  let nameSlotIndex = file.name.lastIndexOf(".");
  return {
    type: types[0],
    subType: types[1],
    fileType: name.substring(nameSlotIndex + 1),
    bytes: file.size,
    name: name.substring(0, nameSlotIndex),
    lastUpdateDate: lastUpdateDate,
    size: transformSize["value"],
    sizeUnit: transformSize["unit"]
  };
};

/**
 * @name   获取本地资源文件的二进制流
 * @msg : 可以获取图片的二进制流直接用于页面显示
 * @param   { file } [ file ]
 * @return  [ promise ] => [ string ]
 */

filer.blober = function(file) {
  if (!isFile(file)) {
    throw new Error("The argument must be file.");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let url;
      try {
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        resolve(url);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name  获取本地资源文件的base64数据
 * @param { file } [ file ]
 * @return  [ promise ] => [ string ]
 */

filer.baser = function(file) {
  if (!isFile(file)) {
    throw new Error("The argument must be file.");
  }
  return new Promise((resole, reject) => {
    setTimeout(() => {
      try {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
          resole(reader.result);
        };
        reader.onerror = function(e) {
          reject(e);
        };
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (filer);


/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name  获取图片的高宽数据
 * @param  { src } [ string ] 图片地址 [ 访问路径式，based4式，二进制式]
 * @param { type} ["height-width", "height", "width", "volume"] volume(体积)
 * @return  [ promise ] => [ number ]
 * @example sizer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));
 */
let sizer = function(src, type = "height-width") {
  if (typeof src !== "string") throw new Error("The argument must be string.");
  if (["height-width", "height", "width", "volume"].findIndex(item => item === type) === -1) throw new Error("The second argument must be in ['height-width', 'height', 'width','volume'].");
  if (type === "volume") {
    return new Promise((resolve, reject) => {
      let xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
      }
      if (xmlhttp != null) {
        xmlhttp.open("GET", src, true);
        let size = 0;
        xmlhttp.onloadend = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.getResponseHeader('Content-type'))
            resolve(size);
            //xmlhttp.getAllResponseHeaders()
          } else {
            reject({ message: "The picture request is failded." });
          }
        };
        xmlhttp.onprogress = function(e) {
          //console.log(e)
          size = e.total;
        };
        try {
          xmlhttp.send(null);
        } catch (e) {
          reject({ message: "The http request is aborted." });
        }
      } else {
        reject({ message: "The browser is not support xmlhttp." });
      }
    });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        if (type === "height-width") resolve({ width: image.width, height: image.height });
        if (type === "width") resolve(image.width);
        if (type === "height") resolve(image.height);
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};
sizer.height = function(src) {
  return sizer(src, "height");
};
sizer.width = function(src) {
  return sizer(src, "width");
};
sizer.volume = function(src) {
  return sizer(src, "volume");
};
/* harmony default export */ __webpack_exports__["a"] = (sizer);
//sizer.volume("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res));


/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 图片格式转换
 * @param { src } [ string ]
 * @param { type } ["base64", "blob"]
 * @return [ promise ]
 */

let transformer = function(src, type = "base64") {
  if (typeof src !== "string") throw new Error("The first argument must be string.");
  if (["base64", "blob"].findIndex(item => item === type) === -1) throw new Error("The third argument must be in ['base64', 'blob' ].");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = new Image();
      image.src = src;
      image["crossOrigin"] = "Anonymous";
      //image.setAttribute("crossOrigin",'Anonymous') // Tainted canvases may not be exported. 跨域问题
      image.onload = () => {
        try {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          if (type === "base64") {
            let dataurl = canvas.toDataURL(type, 1);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            resolve(dataurl);
          } else {
            canvas.toBlob(
              function(blob) {
                resolve(blob);
              },
              type,
              1
            );
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        } catch (e) {
          reject(e);
        }
      };
      image.onerror = e => {
        reject(e);
      };
    }, 0);
  });
};
transformer.base64 = function(src) {
  return transformer(src, "base64");
};
transformer.blob = function(src) {
  return transformer(src, "blob");
};
/* harmony default export */ __webpack_exports__["a"] = (transformer);

// transformer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg", "blob").then(res => console.log(res)); //image/jpeg
// transformer.blob("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res)); //image/jpeg
// transformer.base64("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res)); //image/jpeg


/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name  获取图片资源的类型
 * @msg  通过再次请求该图片，获取该请求下的一些信息
 * @param { src } [ string ] 图片路径
 * @return  [ promise ]
 */
let typer = function(src) {
  if (typeof src !== "string") {
    throw new Error("The argument must be string.");
  }
  return new Promise((resolve, reject) => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
      xmlhttp.open("GET", src, true);
      xmlhttp.onloadend = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //console.log(xmlhttp.getResponseHeader('Content-type'))
          resolve(xmlhttp.getResponseHeader("Content-type"));
          //xmlhttp.getAllResponseHeaders()
        } else {
          reject({ message: "The picture request is failded." });
        }
      };
      try {
        xmlhttp.send(null);
      } catch (e) {
        reject({ message: "The http request is aborted." });
      }
    } else {
      reject({ message: "The browser is not support xmlhttp." });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (typer);

//typer("http://img5.imgtn.bdimg.com/it/u=1128579105,2742690848&fm=26&gp=0.jpg").then(res => console.log(res)); //image/jpeg


/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Storager;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dater_formater__ = __webpack_require__(351);

/*
 * @Descripttion: 本地存储
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-17 15:16:52
 * @msg:暂时只能存储的数据类型 string boolean number null  object array  not function symbol undefined
 */
/**
 * @name 本地存储
 * @param :  { isLocal } [ boolean ] 是否是本地永久存储
 */

function Storager(isLocal = true) {
  if (typeof isLocal !== 'boolean') {
    throw new Error('The argument must be boolean.');
  }
  this.isLocal = typeof isLocal === 'boolean' ? isLocal : true;
  this.storage = window[`${this.isLocal ? 'local' : 'session'}Storage`];
}
/**
 * @name 获取存储信息
 * @param  { key } [ string ] 关键字
 * @return [ promise ]
 */
Storager.prototype.getter = function(key) {
  if (typeof key !== 'string') {
    throw new Error('The argument must be string.');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let store = this.storage.getItem(key);
        let storeFormat = store ? JSON.parse(store) : undefined;
        resolve(storeFormat && storeFormat['value']);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name 存储信息
 * @param  { key }
 * @param  { value }
 * @return [ promise ]
 */

Storager.prototype.setter = function(key, value) {
  if (typeof key !== 'string') {
    throw new Error('The first argument must be string.');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let result = {};
        result.time = Object(__WEBPACK_IMPORTED_MODULE_0__dater_formater__["a" /* default */])(new Date(), 'yyyy-MM-dd HH:mm:ss');
        result.path = window.location.href;
        result.type = Object.prototype.toString
          .call(value)
          .slice(8, -1)
          .toLowerCase();
        result.value = value;
        this.storage.setItem(key, JSON.stringify(result));
        resolve(value);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name  移除指定关键字存储信息
 * @param  { key } [ string ]
 * @return [ promise ]
 */

Storager.prototype.remover = function(key) {
  if (typeof key !== 'string') {
    throw new Error('The first argument must be string.');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        this.storage.removeItem(key);
        resolve(this);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

/**
 * @name  清除存储信息
 */

Storager.prototype.clear = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        this.storage.clear();
        resolve(this);
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
};

// // test
// let storage = new Storager(true);

// storage.setter('message', { name: 'web-app' });
// storage.getter('message').then(res => {
//   console.log(res);
// });
// storage.clear();


/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Hexer;
/*
 * @Descripttion:字符串的转码
 * @version:
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-17 15:35:19
 */

function Hexer() {}
/**
 * @name 16进制编码
 * @msg 不支持中文编码，以及中文相关的标点符号等，适合单纯的数字和英文字母组成的字符串
 * @param { string } [ string ]
 * @return [ string ]
 */
Hexer.prototype.escape = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  var hexCharCode = [];
  hexCharCode.push('0x');
  for (var i = 0; i < string.length; i++) {
    hexCharCode.push(string.charCodeAt(i).toString(16));
  }
  return hexCharCode.join('');
};

/**
 * @name 16进制解码
 * @msg 必须要要使用encode编码的字符串才能进行解
 * @param { string } [ string ] 16进制编码字符串
 * @return [ string ]
 */

Hexer.prototype.unescape = function(hexCharCodeStr) {
  if (typeof hexCharCodeStr !== 'string') {
    throw new Error('The argument must be string.');
  }
  var trimedStr = hexCharCodeStr.trim();
  var rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr;
  var len = rawStr.length;
  if (len % 2 !== 0) {
    alert('Illegal Format ASCII Code!');
    return '';
  }
  var curCharCode;
  var resultStr = [];
  for (var i = 0; i < len; i = i + 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
    resultStr.push(String.fromCharCode(curCharCode));
  }
  return resultStr.join('');
};

/**
 * @name 字符串转16进制
 * @msg 该方式是通过将每个字符串转成对应的16进制，并以指定的连接符连接
 * 支持任何字符串
 * @param { string } [ string ]
 * @param { concat = ',' } [ string ]
 * @return [ string ]
 */
Hexer.prototype.encodeURI = function(string, concat = ',') {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (typeof concat !== 'string') {
    throw new Error('The second argument must be string.');
  }
  var val = '';
  for (var i = 0; i < string.length; i++) {
    if (val == '') val = string.charCodeAt(i).toString(16);
    else val += concat + string.charCodeAt(i).toString(16);
  }
  return val;
};

/**
 * @name 字符串转16进制
 * @msg  必须要使用encodeURI编码的字符串
 * @param { string } [ string ]
 * @param { concat = ',' } [ string ]
 * @return [ string ]
 */

Hexer.prototype.decodeURI = function(string, concat = ',') {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (typeof concat !== 'string') {
    throw new Error('The second argument must be string.');
  }
  var val = '';
  var arr = string.split(concat);
  for (var i = 0; i < arr.length; i++) {
    val += String.fromCharCode(parseInt(arr[i], 16));
  }
  return val;
};

/**
 * @name 16进制转字符串
 * @param { string }
 * @return [ string]
 */
Hexer.prototype.decodeComponent = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  var buf = [];
  for (var i = 0; i < string.length; i += 2) {
    let code = string.substring(i, i + 2);
    buf.push(parseInt(string.substring(i, i + 2), 16));
  }
  return this.readUTF(buf);
};

/**
 * @name 中文编码处理
 * @param { arr }
 * @return [ string ]
 */
Hexer.prototype.readUTF = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument must be array.');
  }
  var UTF = '',
    _arr = arr;
  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
      v = one.match(/^1+?(?=0)/);

    if (v && one.length == 8) {
      var bytesLength = v[0].length;
      var store = _arr[i].toString(2).slice(7 - bytesLength);

      for (var st = 1; st < bytesLength; st++) {
        //console.log(_arr[st + i], _arr[st + i].toString(2), _arr[st + i].toString(2).slice(2));
        store += _arr[st + i].toString(2).slice(2);
      }

      UTF += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
      //console.log(_arr[i], i, one, v, bytesLength, store, UTF);
    } else {
      UTF += String.fromCharCode(_arr[i]);
    }
  }
  return UTF;
};


/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Urler;
/*
 * @Descripttion:
 * @version:
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-17 15:37:04
 */
/**
 * @name 编码和解码
 * @msg 通过对三个函数的分析，我们可以知道：escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。
 * 而encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。encodeURIComponent方法在编码单个URIComponent（指请求参 数）应当是最常用的，它可以将参数中的中文、特殊字符进行转义，而不会影响整个URL。
 */
function Urler() {}
/**
 * @name 字符串编码
 * @msg 该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.escape = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return escape(string);
};
/**
 * @name 字符串解码
 * @msg 该方法和escape对应
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.unescape = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return unescape(string);
};
/**
 * @name 字符串编码
 * @msg  该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。 该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.encodeURI = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return encodeURI(string);
};
/**
 * @name 字符串解码
 * @msg 该方法和encodeURI对应
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.decodeURI = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return decodeURI(string);
};
/**
 * @name 字符串编码
 * @msg encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.encodeURIComponent = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return encodeURIComponent(string);
};
/**
 * @name 字符串解码
 * @msg 该方法和encodeURIComponent对应
 * @param { string } [ string ]
 * @return [ string ]
 */
Urler.prototype.decodeURIComponent = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return decodeURIComponent(string);
};

// let urler = new Urler();
// console.log(urler.encodeURIComponent('http://dhsjhdjshdjhsjhd?name=黄军泉'));


/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Query;
/*
 * @Descripttion:url 字符串处理
 * @version:0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-24 10:57:12
 * @msg:对象转字符串，字符串转对象后，数字和布尔均会变成字符串
 */

const encodeReserveRE = /[!'()*]/g;
const encodeReserveReplacer = c => "%" + c.charCodeAt(0).toString(16);
const commaRE = /%2C/g;

function Query() {}

/**
 * @name 编码
 * @param  { string } [ string ]
 * @return [ string ]
 */

Query.prototype.encode = function(string) {
  return encodeURIComponent(string)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ",");
};

/**
 * @name 解码
 * @param  { string } [ string ]
 * @return [ string ]
 */

Query.prototype.decode = decodeURIComponent;

/**
 * @name 对象转字符串
 * @param  { obj } [ object ]
 * @return [ string ]
 */

Query.prototype.stringify = function stringify(obj) {
  const res = obj
    ? Object.keys(obj)
        .map(key => {
          const val = obj[key];

          if (val === undefined) {
            return "";
          }

          if (val === null) {
            return this.encode(key);
          }

          if (Array.isArray(val)) {
            const result = [];
            val.forEach(val2 => {
              if (val2 === undefined) {
                return;
              }
              if (val2 === null) {
                result.push(this.encode(key));
              } else {
                result.push(this.encode(key) + "=" + this.encode(val2));
              }
            });
            return result.join("&");
          }

          return this.encode(key) + "=" + this.encode(val);
        })
        .filter(x => x.length > 0)
        .join("&")
    : null;
  return res ? `?${res}` : "";
};

/**
 * @name 字符串转对象
 * @param  { query } [ string ]
 * @return [ object ]
 */

Query.prototype.parse = function parse(query) {
  if (String(query) !== query) return query;

  const res = {};

  query = query.trim().replace(/^(\?|#|&)/, "");

  if (!query) {
    return res;
  }

  query.split("&").forEach(param => {
    const parts = param.replace(/\+/g, " ").split("=");
    const key = this.decode(parts.shift());
    const val = parts.length > 0 ? this.decode(parts.join("=")) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
};

// let query = new Query();

// let stringify = query.stringify({
//   name: "黄军泉",
//   age: 100,
//   num: [12, 3, [5, [1, 2, 3], 3, 4]],
//   is: false
// });

// console.log(stringify);

// let parse = query.parse(stringify);
// console.log(parse);


/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Check;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regexer__ = __webpack_require__(368);
/*
 * @Descripttion: 表单数据验证
 * @version:0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-12 11:17:47
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-07-05 09:08:50
 * @msg : 首先会判断是否是必填项； 是，则先判断是否有值，再进行后续的验证判断；否，先判断是否有值，无，则跳过该数据的后续验证，有，则继续后续验证、
 * @msg : 支持的类型 regex | len | function
 */


function Check() {
  this.data = null;
  this.message = "";
  this.pass = true;
  this.isRequire = false;
  this.sourse = [];
}

/**
 * @name 绑定当前验证的数据
 * @param  { data } [ string ] 验证数据
 * @param { isRequire } [ boolean ] 是否是必填项
 * @param { message } [ string ] 错误提示语
 * @return [ object ] 当前实例
 */
Check.prototype.set = function (data, isRequire = false, message = "") {
  if (typeof data !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof isRequire !== "boolean") {
    throw new Error("The second argument must be boolean.");
  }
  if (isRequire && typeof message !== "string") {
    throw new Error("While the second argument is true,the third argument must be string.");
  }
  if (!this.pass) return this;
  this.isRequire = isRequire;
  this.data = data;
  this.sourse.push({
    data: data,
    require: isRequire
  });
  if (this.isRequire) {
    this.pass = this._isRequire(this.data);
    if (!this.pass) {
      this.message = message;
    }
    return this;
  }
  this.pass = true;
  this.message = "";
  return this;
};

/**
 * @name 数据长度是否是指定长度
 * @param { message } [ string ] 错误提示语
 * @param { len } [ number ] 指定长度
 * @return [ object ]
 */
Check.prototype.len = function (message, len) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (!Number.isInteger(len) || len < 0) {
    throw new Error("The second argument must be int number,and it's must be not less than 0.");
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  let regex = new RegExp(`^[\\s\\S]{${len}}$`);
  this.pass = regex.test(this.data);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};

/**
 * @name 数据长度是否大于指定长度
 * @param { message } [ string ] 错误提示语
 * @param { min } [ number ] 最小长度
 * @return [ object ]
 */
Check.prototype.minLen = function (message, min) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (!Number.isInteger(min) || min < 0) {
    throw new Error("The second argument must be int number,and it's must be not less than 0.");
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  let regex = new RegExp(`^[\\s\\S]{${min},}$`);
  this.pass = regex.test(this.data);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};

/**
 * @name 数据是否在最大长度范围值内
 * @param { message } [ string ] 错误提示语
 * @param { max } [ number ] 最大长度
 * @return [ object ]
 */
Check.prototype.maxLen = function (message, max) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (!Number.isInteger(max) || max < 1) {
    throw new Error("The second argument must be int number,and it's must be greater than 0.");
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  let regex = new RegExp(`^[\\s\\S]{0,${max}}$`);
  this.pass = regex.test(this.data);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};
/**
 * @name 数据是否在指定的范围内
 * @param { message } [ string ] 错误提示语
 * @param { min } [ number ] 最小长度
 * @param { max } [ number ] 最大长度
 * @return [ object ]
 */

Check.prototype.rangeLen = function (message, min, max) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("The second argument and third argument must be int number.");
  }
  if (min < 0 || min >= max) {
    throw new Error("The second argument must be not less than 0 ,and the third argument must be greater than the second argument.");
  }

  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  let regex = new RegExp(`^[\\s\\S]{${min},${max}}$`);
  this.pass = regex.test(this.data);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};

/**
 * @name 通过指定的正则表达式验证数据
 * @param { message } [ string ] 错误提示语
 * @param { type } [ string ] 指定的正则类型
 * @return [ object ]
 */
Check.prototype.regex = function (message, type) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof type !== "string") {
    throw new Error("The second argument must be string.");
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  let regex = __WEBPACK_IMPORTED_MODULE_0__regexer__["a" /* default */].findIndex(reg => reg.type === type);
  if (regex === -1) {
    throw new Error("The regex type is undefined.");
  }
  this.pass = __WEBPACK_IMPORTED_MODULE_0__regexer__["a" /* default */][regex]["value"].test(this.data);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};

/**
 * @name 通过指定的函数验证数据
 * @param { message } [ string ] 错误提示语
 * @param { callback } [ function ] 指定的函数
 * @return [ object ]
 */

Check.prototype.check = function (message, callback) {
  if (typeof message !== "string") {
    throw new Error("The first argument must be string.");
  }
  if (typeof callback !== "function") {
    throw new Error("The second argument must be function.");
  }
  if (!this.pass || (!this.isRequire && !this._isRequire(this.data))) {
    return this;
  }
  this.pass = callback.call(this, this.data, __WEBPACK_IMPORTED_MODULE_0__regexer__["a" /* default */]);
  if (!this.pass) {
    this.message = message;
  }
  return this;
};

/**
 * @name 验证字符串是必填项
 * @param { string } [ string ]
 * @return [ boolean ]
 */
Check.prototype._isRequire = function (string) {
  if (typeof string !== "string") {
    throw new Error("The argument must be string.");
  }
  return /^[\s\S]+$/.test(string);
};

// test

// let check = new Check()
//   .set("")
//   .check("长度不少于4", function(value, regex) {
//     return value.length >= 4;
//   })
//   .regex("格式错误", "chinese")
//   .set("1398046423")
//   .regex("格式错误", "mobile");

// console.log(check);
// console.log(check.pass, check.message);


/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EventEmeitter;
/*
 * @Descripttion: 发布、订阅模式
 * @version: 1.0.0
 * @Author: huangjunquan
 * @Date: 2019-05-24 11:24:11
 * @LastEditors: huangjunquan
 * @LastEditTime: 2019-06-25 14:21:54
 */

function EventEmeitter() {
  this.events = new Map();
}
/**
 * @name: 监听名为type的事件
 * @param { type } [ string ]
 * @param { fn } [ function ]
 * @return: 当前实例
 */
EventEmeitter.prototype.addListener = function(type, fn) {
  if (typeof type !== "string" || type === "") {
    throw new Error("The first argument must be string and it must be not empty.");
  }

  if (typeof fn !== "function") {
    throw new Error("The second argument must be function.");
  }

  let handler = this.events.get(type);
  if (!handler) {
    this.events.set(type, fn);
  } else if (handler && typeof handler === "function") {
    this.events.set(type, [handler, fn]);
  } else {
    handler.push(fn);
  }
  return this;
};
/**
 * @name 触发名为type的事件
 * @param { type } [string]
 * @param { ...args } [ any ]
 * @return 当前实例
 */
EventEmeitter.prototype.emit = function(type, ...args) {
  if (typeof type !== "string" || type === "") {
    throw new Error("The first argument must be string and it must be not empty.");
  }
  let handler = this.events.get(type);
  if (!handler) {
    throw new Error("The event " + type + " is not addListener.");
  }

  if (Array.isArray(handler)) {
    handler.forEach(handlerItem => {
      handlerItem.call(this, ...args);
    });
  } else if (typeof handler === "function") {
    handler.call(this, ...args);
  }
  return this;
};
/**
 * @name: 移除监听事件
 * @param {type} 事件名
 * @return: 当前实例
 */
EventEmeitter.prototype.removeListener = function(type) {
  if (typeof type !== "string" || type === "") {
    throw new Error("The first argument must be string and it must be not empty.");
  }
  this.events.delete(type);
};



/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Calcer;
/*
 * @Descripttion: 数学计算
 * @version: 0.0.1
 * @Author: huangjunquan
 * @Date: 2019-06-11 18:07:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-17 15:29:48
 * @msg
 * 小数与整数的积也不能得到期望值，1.2334567 * 1000 = 1233.4567000000002
 * 两数乘积可能会超安全数范围
 * 有些特殊的数字会自动转为科学计数，当数值为整数时，后面有21个0时， 9000000000000000000000 => 9e+21 ； 当数值为浮点数时，一个不为0的数前面有7个0时，0.0000001 => 1e-7
 *
 */

function Calcer() {}
/**
 * @description 按指定的函数返回值填充指定长度的数组
 * @param { len = 10 } [ number ] 指定长度
 * @param { callback } [ function ] 指定函数返回值
 * @param { context = this } [ any ] 函数执行上下文
 * @return [ array ]
 */
//
Calcer.prototype._template = function(len = 10, callback = function() {}, context = this) {
  return Array.apply(null, Array(len)).map(() => callback.call(context));
};

/**
 * @name 向字符串指定的角标后面插入指定字符串
 * @param { string } [ string ]  目标字符串
 * @param { index } [ number ] 角标值
 * @param { target } [ string ] 插入的字符串
 * @return [ string ]
 */

Calcer.prototype._insert = function(string, index = 0, target = '') {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (!Number.isInteger(index) || index < 0 || index > string.length) {
    throw new Error('The second argument must be int number,and it must not less than 0 and not greater than the first argument length.');
  }
  if (typeof target !== 'string') {
    throw new Error('The third argument must be string.');
  }
  return string.slice(0, index) + target + string.slice(index);
};

/**
 * @name 数字格式化
 * @msg
 * 1.是否存在'.'，若存在，去掉开头和结尾的0，否则，只去掉开头的0
 * 2.当以'.'开头，则前面补'0'
 * 3.当以'.'结尾，则去掉结尾的'.'
 * 4.若为空，则返回0
 * @param { string } [ string]
 * @return string
 * @example console.log(calcer.format("000.0001"));=> '0.0001'
 */
Calcer.prototype._format = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (string.indexOf('.') > -1) {
    string = string.replace(/(0+)$/, '');
  }
  string = string.replace(/^(0+)/, '');
  if (string.startsWith('.')) {
    string = '0' + string;
  }
  string = string.replace(/\.$/, '');
  return string.length === 0 ? '0' : string;
};
/**
 * @name 是否是合法的可计算的数字
 * @param { string } [ string ]
 * @return [ boolean ]
 * @example isFreeNumber("0.0") => true
 * @example isFreeNumber("0.") => false
 * @example isFreeNumber("001") => false
 * @example isFreeNumber(".0") => false
 * @example isFreeNumber("-1") => false
 * @example isFreeNumber("+1") => false
 */
Calcer.prototype._isFreeNumber = function(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  let regex = /(^[0](\.[0-9]+)?$)|(^[1-9]([0-9]+)?(\.[0-9]+)?$)/; ///(^0\.([0-9]*)?[1-9]+([0-9]*)?$)|(^[0]{1}$)|(^[1-9]([0-9]+)?(\.[0-9]+)?$)/;
  return regex.test(string);
};

/**
 * @name 转可用的数字
 * @msg
 * number类型
 * 数字必须大于等于0
 * 将科学计数方式的数字转为可用的数字，小数点后面位数加整数部分的长度为16位，才能正确获取数字
 * string类型
 * 是合法的数字即可，整数部分和小数部分均是任意长度
 * 以'0'开头，若后面没有有小数点，则'0'本身；若后面有小数点，则小数点后面有至少一位的数字
 * 不以'0'开头，后面跟任意位的数字，若有小数点，后面至少需要一位以上的数字
 * @param { value } [ number | string ]
 * @return [string]
 */
Calcer.prototype._toFreeNumber = function(value) {
  if (typeof value !== 'number' && typeof value !== 'string') throw new Error('The argument must be string or number.');
  if (typeof value === 'number') {
    let result = String(value);
    let index = result.indexOf('-');
    if (index === 0) {
      throw new Error('The argument must be not less than 0.');
    } else if (index > 0) {
      result = '0' + String(Number(result) + 1).substr(1);
    }
    return result;
  } else {
    let regex = /(^[0](\.[0-9]+)?$)|(^[1-9]([0-9]+)?(\.[0-9]+)?$)/;
    if (!regex.test(value)) throw new Error('The argument must be a free number.');
    return value;
  }
};
/**
 * @name 加法运算
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [ string ]
 * @example console.log(calc.add("1.123", "0.877")); // => 2
 * @example console.log(calc.add("0.1", "0.2")); // 0.3
 * @example console.log(calc.add("0.1", "1.23")); // => 1.33
 * @example console.log(calc.add("1000", "0.0001")); //=>1000.0001
 * @example console.log(calc.add("00001", "1")); // => 2
 * @example console.log(calc.add("99999999999999999", "1")); //=> 1000000000000000
 */

Calcer.prototype.adder = function(prev, next) {
  prev = this._toFreeNumber(prev);
  next = this._toFreeNumber(next);
  let prevSplit = prev.split('.'),
    nextSplit = next.split('.');
  let prevIntLen = prevSplit[0].length,
    nextIntLen = nextSplit[0].length,
    minusIntLen = prevIntLen - nextIntLen,
    maxIntLen = Math.max(prevIntLen, nextIntLen);
  let prevFloatLen = prevSplit[1] ? prevSplit[1].length : 0,
    nextFloatLen = nextSplit[1] ? nextSplit[1].length : 0,
    minusFloatLen = prevFloatLen - nextFloatLen,
    maxFloatLen = Math.max(prevFloatLen, nextFloatLen);
  // 进行整数部分0的补位
  let intZero = this._template(Math.abs(minusIntLen), () => '0').join('');
  if (minusIntLen > 0) {
    next = intZero + next;
  } else if (minusIntLen < 0) {
    prev = intZero + prev;
  }
  // 进行浮点数部分0的补位
  let floatZero = this._template(Math.abs(minusFloatLen), () => '0').join('');
  if (minusFloatLen > 0) {
    next = next + floatZero;
  } else if (minusFloatLen < 0) {
    prev = prev + floatZero;
  }
  next = next.replace('.', '');
  prev = prev.replace('.', '');
  prev = prev.split('').reverse();
  next = next.split('').reverse();
  let resArr = [];
  for (let i = 0; i < prev.length; i++) {
    let addRes = Number(prev[i] || 0) + Number(next[i] || 0) + Number(resArr[i] || 0);
    resArr[i] = addRes % 10;
    let res = (addRes - (addRes % 10)) / 10;
    res > 0 ? (resArr[i + 1] = res) : null;
  }
  let res = resArr.reverse().join('');
  let resSlot = this._insert(res, res.length - maxFloatLen, '.');

  return this._format(resSlot);
};

/**
 * @name 乘法运算
 * @param { prev } [ number | string ]
 * @param { next } [ number | string ]
 * @return [ string ]
 * @example console.log(calc.mul("0.1", "0.7")); => '0.07'
 * @example console.log(calc.mul("123456", "0.123456")); => '15241.383936'
 */

Calcer.prototype.muler = function(prev, next) {
  prev = this._toFreeNumber(prev);
  next = this._toFreeNumber(next);
  let prevSplit = prev.split('.'),
    nextSplit = next.split('.');
  let prevIntLen = prevSplit[0].length,
    nextIntLen = nextSplit[0].length,
    minusIntLen = prevIntLen - nextIntLen,
    maxIntLen = Math.max(prevIntLen, nextIntLen);
  let prevFloatLen = prevSplit[1] ? prevSplit[1].length : 0,
    nextFloatLen = nextSplit[1] ? nextSplit[1].length : 0,
    addFloatLen = prevFloatLen + nextFloatLen,
    maxFloatLen = Math.max(prevFloatLen, nextFloatLen);
  prev = prev.replace('.', '');
  next = next.replace('.', '');
  let res = [];
  for (let n = prev.length - 1; n >= 0; n--) {
    for (let k = next.length - 1; k >= 0; k--) {
      let value = Number(prev[n] || 0) * Number(next[k] || 0) + (res[n + k + 1] || 0);

      let value1 = value % 10;
      let value2 = (value - value1) / 10;
      res[n + k + 1] = value1;
      res[n + k] = value2 + Number(res[n + k] || 0);
    }
  }
  let resJoin = res.join('');
  let resInsert = this._insert(resJoin, resJoin.length - addFloatLen, '.');
  let resFormat = this._format(resInsert);
  return resFormat;
};

// let calcer = new Calcer();
// console.log(calcer.adder(0.0000000000123455, 0.0000000000123455));


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
//
//   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
//
// The library can be used in node.js app to connect to STOMP brokers over TCP 
// or Web sockets.

// Root of the `stompjs module`

var Stomp = __webpack_require__(371);
var StompNode = __webpack_require__(506);

module.exports = Stomp.Stomp;
module.exports.overTCP = StompNode.overTCP;
module.exports.overWS = StompNode.overWS;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.7.1

/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
 */

(function() {
  var Stomp, net, overTCP, overWS, wrapTCP, wrapWS;

  Stomp = __webpack_require__(371);

  net = __webpack_require__(372);

  Stomp.Stomp.setInterval = function(interval, f) {
    return setInterval(f, interval);
  };

  Stomp.Stomp.clearInterval = function(id) {
    return clearInterval(id);
  };

  wrapTCP = function(port, host) {
    var socket, ws;
    socket = null;
    ws = {
      url: 'tcp:// ' + host + ':' + port,
      send: function(d) {
        return socket.write(d);
      },
      close: function() {
        return socket.end();
      }
    };
    socket = net.connect(port, host, function(e) {
      return ws.onopen();
    });
    socket.on('error', function(e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('close', function(e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('data', function(data) {
      var event;
      event = {
        'data': data.toString()
      };
      return ws.onmessage(event);
    });
    return ws;
  };

  wrapWS = function(url) {
    var WebSocketClient, connection, socket, ws;
    WebSocketClient = __webpack_require__(507).client;
    connection = null;
    ws = {
      url: url,
      send: function(d) {
        return connection.sendUTF(d);
      },
      close: function() {
        return connection.close();
      }
    };
    socket = new WebSocketClient();
    socket.on('connect', function(conn) {
      connection = conn;
      ws.onopen();
      connection.on('error', function(error) {
        return typeof ws.onclose === "function" ? ws.onclose(error) : void 0;
      });
      connection.on('close', function() {
        return typeof ws.onclose === "function" ? ws.onclose() : void 0;
      });
      return connection.on('message', function(message) {
        var event;
        if (message.type === 'utf8') {
          event = {
            'data': message.utf8Data
          };
          return ws.onmessage(event);
        }
      });
    });
    socket.connect(url);
    return ws;
  };

  overTCP = function(host, port) {
    var socket;
    socket = wrapTCP(port, host);
    return Stomp.Stomp.over(socket);
  };

  overWS = function(url) {
    var socket;
    socket = wrapWS(url);
    return Stomp.Stomp.over(socket);
  };

  exports.overTCP = overTCP;

  exports.overWS = overWS;

}).call(this);


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var _global = (function() { return this; })();
var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
var websocket_version = __webpack_require__(508);


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(509).version;


/***/ }),
/* 509 */
/***/ (function(module, exports) {

module.exports = {"_from":"websocket@latest","_id":"websocket@1.0.28","_inBundle":false,"_integrity":"sha1-nl9v3Io/4B1EImR++Tq92NRaeNM=","_location":"/websocket","_phantomChildren":{"ms":"2.0.0"},"_requested":{"type":"tag","registry":true,"raw":"websocket@latest","name":"websocket","escapedName":"websocket","rawSpec":"latest","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["/stompjs"],"_resolved":"http://registry.npm.taobao.org/websocket/download/websocket-1.0.28.tgz","_shasum":"9e5f6fdc8a3fe01d4422647ef93abdd8d45a78d3","_spec":"websocket@latest","_where":"D:\\AA.WORK\\BSTL\\Git\\exchange_admin_web\\node_modules\\stompjs","author":{"name":"Brian McKelvey","email":"theturtle32@gmail.com","url":"https://github.com/theturtle32"},"browser":"lib/browser.js","bugs":{"url":"https://github.com/theturtle32/WebSocket-Node/issues"},"bundleDependencies":false,"config":{"verbose":false},"contributors":[{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net","url":"http://dev.sipdoc.net"}],"dependencies":{"debug":"^2.2.0","nan":"^2.11.0","typedarray-to-buffer":"^3.1.5","yaeti":"^0.0.6"},"deprecated":false,"description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","devDependencies":{"buffer-equal":"^1.0.0","faucet":"^0.0.1","gulp":"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4","jshint":"^2.0.0","jshint-stylish":"^2.2.1","tape":"^4.9.1"},"directories":{"lib":"./lib"},"engines":{"node":">=0.10.0"},"homepage":"https://github.com/theturtle32/WebSocket-Node","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"license":"Apache-2.0","main":"index","name":"websocket","repository":{"type":"git","url":"git+https://github.com/theturtle32/WebSocket-Node.git"},"scripts":{"gulp":"gulp","install":"(node-gyp rebuild 2> builderror.log) || (exit 0)","test":"faucet test/unit"},"version":"1.0.28"}

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var transportList = __webpack_require__(511);

module.exports = __webpack_require__(527)(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  // streaming transports
  __webpack_require__(512)
, __webpack_require__(517)
, __webpack_require__(377)
, __webpack_require__(378)
, __webpack_require__(353)(__webpack_require__(378))

  // polling transports
, __webpack_require__(382)
, __webpack_require__(353)(__webpack_require__(382))
, __webpack_require__(383)
, __webpack_require__(523)
, __webpack_require__(353)(__webpack_require__(383))
, __webpack_require__(524)
];


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(340)
  , urlUtils = __webpack_require__(338)
  , inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  , WebsocketDriver = __webpack_require__(516)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:websocket');
}

function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  EventEmitter.call(this);
  debug('constructor', transUrl);

  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;

  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function(e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function(e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function(e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}

inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.send = function(data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};

WebSocketTransport.prototype.close = function() {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};

WebSocketTransport.prototype._cleanup = function() {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};

WebSocketTransport.enabled = function() {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;

module.exports = WebSocketTransport;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url) {
		return new Driver(url);
	};
} else {
	module.exports = undefined;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var inherits = __webpack_require__(336)
  , AjaxBasedTransport = __webpack_require__(342)
  , XhrReceiver = __webpack_require__(347)
  , XHRCorsObject = __webpack_require__(348)
  , XHRLocalObject = __webpack_require__(343)
  , browser = __webpack_require__(344)
  ;

function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}

inherits(XhrStreamingTransport, AjaxBasedTransport);

XhrStreamingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }

  return XHRCorsObject.enabled;
};

XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;

module.exports = XhrStreamingTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:buffered-sender');
}

function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}

inherits(BufferedSender, EventEmitter);

BufferedSender.prototype.send = function(message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function() {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function() {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};

BufferedSender.prototype.sendSchedule = function() {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function(err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};

BufferedSender.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

BufferedSender.prototype.close = function() {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};

module.exports = BufferedSender;


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:polling');
}

function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}

inherits(Polling, EventEmitter);

Polling.prototype._scheduleReceiver = function() {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

  poll.on('message', function(msg) {
    debug('message', msg);
    self.emit('message', msg);
  });

  poll.once('close', function(code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;

    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};

Polling.prototype.abort = function() {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};

module.exports = Polling;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  , EventSourceDriver = __webpack_require__(379)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:receiver:eventsource');
}

function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);

  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function(e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function(e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
    self._cleanup();
    self._close(reason);
  };
}

inherits(EventSourceReceiver, EventEmitter);

EventSourceReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

EventSourceReceiver.prototype._cleanup = function() {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};

EventSourceReceiver.prototype._close = function(reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function() {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};

module.exports = EventSourceReceiver;


/***/ }),
/* 521 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var inherits = __webpack_require__(336)
  , iframeUtils = __webpack_require__(345)
  , urlUtils = __webpack_require__(338)
  , EventEmitter = __webpack_require__(337).EventEmitter
  , random = __webpack_require__(341)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:receiver:htmlfile');
}

function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
      iframeUtils.createHtmlfile : iframeUtils.createIframe;

  global[iframeUtils.WPrefix][this.id] = {
    start: function() {
      debug('start');
      self.iframeObj.loaded();
    }
  , message: function(data) {
      debug('message', data);
      self.emit('message', data);
    }
  , stop: function() {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function() {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}

inherits(HtmlfileReceiver, EventEmitter);

HtmlfileReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

HtmlfileReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};

HtmlfileReceiver.prototype._close = function(reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};

HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}

HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

module.exports = HtmlfileReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , AjaxBasedTransport = __webpack_require__(342)
  , XdrStreamingTransport = __webpack_require__(377)
  , XhrReceiver = __webpack_require__(347)
  , XDRObject = __webpack_require__(352)
  ;

function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}

inherits(XdrPollingTransport, AjaxBasedTransport);

XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;


/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors

var inherits = __webpack_require__(336)
  , SenderReceiver = __webpack_require__(375)
  , JsonpReceiver = __webpack_require__(525)
  , jsonpSender = __webpack_require__(526)
  ;

function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}

inherits(JsonPTransport, SenderReceiver);

JsonPTransport.enabled = function() {
  return !!global.document;
};

JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;

module.exports = JsonPTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var utils = __webpack_require__(345)
  , random = __webpack_require__(341)
  , browser = __webpack_require__(344)
  , urlUtils = __webpack_require__(338)
  , inherits = __webpack_require__(336)
  , EventEmitter = __webpack_require__(337).EventEmitter
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:receiver:jsonp');
}

function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);

  utils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function() {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}

inherits(JsonpReceiver, EventEmitter);

JsonpReceiver.prototype.abort = function() {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};

JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;

JsonpReceiver.prototype._callback = function(data) {
  debug('_callback', data);
  this._cleanup();

  if (this.aborting) {
    return;
  }

  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};

JsonpReceiver.prototype._abort = function(err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};

JsonpReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror =
        script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};

JsonpReceiver.prototype._scriptError = function() {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }

  this.errorTimer = setTimeout(function() {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};

JsonpReceiver.prototype._createScript = function(url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2;  // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function() {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function() {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }

  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};

module.exports = JsonpReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var random = __webpack_require__(341)
  , urlUtils = __webpack_require__(338)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:sender:jsonp');
}

var form, area;

function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}

function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';

  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);

  global.document.body.appendChild(form);
}

module.exports = function(url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);

  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();

  var completed = function(err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function() {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function() {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function() {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function(e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function() {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(528);

var URL = __webpack_require__(373)
  , inherits = __webpack_require__(336)
  , JSON3 = __webpack_require__(339)
  , random = __webpack_require__(341)
  , escape = __webpack_require__(529)
  , urlUtils = __webpack_require__(338)
  , eventUtils = __webpack_require__(340)
  , transport = __webpack_require__(530)
  , objectUtils = __webpack_require__(354)
  , browser = __webpack_require__(344)
  , log = __webpack_require__(531)
  , Event = __webpack_require__(355)
  , EventTarget = __webpack_require__(374)
  , loc = __webpack_require__(384)
  , CloseEvent = __webpack_require__(532)
  , TransportMessageEvent = __webpack_require__(533)
  , InfoReceiver = __webpack_require__(534)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:main');
}

var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);

  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};

  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function() {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }

  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }

  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function(proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain()
  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };

  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}

inherits(SockJS, EventTarget);

function userSetCode(code) {
  return code === 1000 || (code >= 3000 && code <= 4999);
}

SockJS.prototype.close = function(code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};

SockJS.prototype.send = function(data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};

SockJS.version = __webpack_require__(381);

SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;

SockJS.prototype._receiveInfo = function(info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');

  this._connect();
};

SockJS.prototype._connect = function() {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body ||
          (typeof global.document.readyState !== 'undefined' &&
            global.document.readyState !== 'complete' &&
            global.document.readyState !== 'interactive')) {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = (this._rto * Transport.roundTrips) || 5000;
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);

    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;

    return;
  }
  this._close(2000, 'All transports failed', false);
};

SockJS.prototype._transportTimeout = function() {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }

    this._transportClose(2007, 'Transport timed out');
  }
};

SockJS.prototype._transportMessage = function(msg) {
  debug('_transportMessage', msg);
  var self = this
    , type = msg.slice(0, 1)
    , content = msg.slice(1)
    , payload
    ;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }

  if (content) {
    try {
      payload = JSON3.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }

  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }

  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function(p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};

SockJS.prototype._transportClose = function(code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }

  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }

  this._close(code, reason);
};

SockJS.prototype._open = function() {
  debug('_open', this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};

SockJS.prototype._close = function(code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;

  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }

  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }

  this.readyState = SockJS.CLOSING;
  setTimeout(function() {
    this.readyState = SockJS.CLOSED;

    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }

    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;

    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};

module.exports = function(availableTransports) {
  transports = transport(availableTransports);
  __webpack_require__(537)(SockJS, availableTransports);
  return SockJS;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */
/* jscs: disable */


// pulled specific shims from https://github.com/es-shims/es5-shim

var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;

var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};

var supportsDescriptors = Object.defineProperty && (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        object[name] = method;
    };
}
var defineProperties = function (object, map, forceAssign) {
    for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
    }
};

var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
    var n = +num;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function ToUint32(x) {
    return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, { isArray: isArray });


var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline  ? 'm' : '') +
                        (separator.extended   ? 'x' : '') + // Proposed for ES6
                        (separator.sticky     ? 'y' : ''), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ToUint32(limit);
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) { return []; }
        return string_split.call(this, separator, limit);
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}, hasNegativeSubstrBug);


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var JSON3 = __webpack_require__(339);

// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
  , extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push( String.fromCharCode(i) );
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function(a) {
    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function(string) {
    var quoted = JSON3.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }

    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }

    return quoted.replace(extraEscapable, function(a) {
      return extraLookup[a];
    });
  }
};


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:utils:transport');
}

module.exports = function(availableTransports) {
  return {
    filterToEnabled: function(transportsWhitelist, info) {
      var transports = {
        main: []
      , facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }

      availableTransports.forEach(function(trans) {
        if (!trans) {
          return;
        }

        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }

        if (transportsWhitelist.length &&
            transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }

        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;

  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch(e) {
    // do nothing
  }

  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : (level === 'log' ? function () {} : logObject.log);
});

module.exports = logObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , Event = __webpack_require__(355)
  ;

function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}

inherits(CloseEvent, Event);

module.exports = CloseEvent;


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__(336)
  , Event = __webpack_require__(355)
  ;

function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}

inherits(TransportMessageEvent, Event);

module.exports = TransportMessageEvent;


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  , urlUtils = __webpack_require__(338)
  , XDR = __webpack_require__(352)
  , XHRCors = __webpack_require__(348)
  , XHRLocal = __webpack_require__(343)
  , XHRFake = __webpack_require__(535)
  , InfoIframe = __webpack_require__(536)
  , InfoAjax = __webpack_require__(386)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:info-receiver');
}

function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}

inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};

InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
  var self = this
    , url = urlUtils.addPath(baseUrl, '/info')
    ;
  debug('doXhr', url);

  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

  this.timeoutRef = setTimeout(function() {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);

  this.xo.once('finish', function(info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};

InfoReceiver.prototype._cleanup = function(wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};

InfoReceiver.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};

InfoReceiver.timeout = 8000;

module.exports = InfoReceiver;


/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  ;

function XHRFake(/* method, url, payload, opts */) {
  var self = this;
  EventEmitter.call(this);

  this.to = setTimeout(function() {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}

inherits(XHRFake, EventEmitter);

XHRFake.prototype.close = function() {
  clearTimeout(this.to);
};

XHRFake.timeout = 2000;

module.exports = XHRFake;


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var EventEmitter = __webpack_require__(337).EventEmitter
  , inherits = __webpack_require__(336)
  , JSON3 = __webpack_require__(339)
  , utils = __webpack_require__(340)
  , IframeTransport = __webpack_require__(380)
  , InfoReceiverIframe = __webpack_require__(385)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:info-iframe');
}

function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);

  var go = function() {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

    ifr.once('message', function(msg) {
      if (msg) {
        var d;
        try {
          d = JSON3.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }

        var info = d[0], rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });

    ifr.once('close', function() {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}

inherits(InfoIframe, EventEmitter);

InfoIframe.enabled = function() {
  return IframeTransport.enabled();
};

InfoIframe.prototype.close = function() {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};

module.exports = InfoIframe;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var urlUtils = __webpack_require__(338)
  , eventUtils = __webpack_require__(340)
  , JSON3 = __webpack_require__(339)
  , FacadeJS = __webpack_require__(538)
  , InfoIframeReceiver = __webpack_require__(385)
  , iframeUtils = __webpack_require__(345)
  , loc = __webpack_require__(384)
  ;

var debug = function() {};
if (false) {
  debug = require('debug')('sockjs-client:iframe-bootstrap');
}

module.exports = function(SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function(at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function() {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function(e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }

      var iframeMessage;
      try {
        iframeMessage = JSON3.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
      case 's':
        var p;
        try {
          p = JSON3.parse(iframeMessage.data);
        } catch (ignored) {
          debug('bad json', iframeMessage.data);
          break;
        }
        var version = p[0];
        var transport = p[1];
        var transUrl = p[2];
        var baseUrl = p[3];
        debug(version, transport, transUrl, baseUrl);
        // change this to semver logic
        if (version !== SockJS.version) {
          throw new Error('Incompatible SockJS! Main site uses:' +
                    ' "' + version + '", the iframe:' +
                    ' "' + SockJS.version + '".');
        }

        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
          throw new Error('Can\'t connect to different domain from within an ' +
                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
        }
        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
        break;
      case 'm':
        facade._send(iframeMessage.data);
        break;
      case 'c':
        if (facade) {
          facade._close();
        }
        facade = null;
        break;
      }
    };

    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};


/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var JSON3 = __webpack_require__(339)
  , iframeUtils = __webpack_require__(345)
  ;

function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}

FacadeJS.prototype._transportClose = function(code, reason) {
  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function(frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function() {
  this._transport.close();
  this._transport.removeAllListeners();
};

module.exports = FacadeJS;


/***/ }),
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(26);

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _custom = __webpack_require__(349);

var _common = __webpack_require__(70);

var _getData = __webpack_require__(25);

var _vuex = __webpack_require__(29);

var _storeEs = __webpack_require__(435);

var _es = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//

var Stomp = __webpack_require__(505);
var SockJS = __webpack_require__(510);

console.log(_es.storager);
exports.default = {
  name: "member-chat",
  data: function data() {
    return {
      basis: {
        appId: "",
        accessToken: "",
        userId: "",
        userName: ""
      },

      user: {
        query: "",
        list: [],
        activeIndex: null,
        pageSize: 10,
        pageNo: 1,
        loading: false,
        push: {
          finished: true
        }
      },

      member: {
        list: [],
        activeIndex: null
      },

      chat: {
        list: [],
        message: "",
        pic: "",
        loading: false,
        pageSize: 20,
        connected: false,
        push: {
          finished: true
        },
        picture: {
          show: false,
          url: ""
        }
      },
      letter: {
        list: []
      }
    };
  },
  mounted: function mounted() {
    this.init();
    this.getClipboardImage();
  },

  methods: {
    init: function init() {
      this.getBasisMessage();
      this.createSocket();
      this.getUserList();
      this.getMemberChat();
      this.getLetterList();
    },

    /**
     * 描述：获取历史常用语
     */
    getLetterList: function getLetterList() {
      this.letter.list = _es.storager.getStore("app/chat/letter") || [];
    },

    /**
     * 描述：获取历史常用语
     */
    setLetter: function setLetter(message) {
      if (!message) return this.$Message.error("常用语不能为空");
      var letters = _es.storager.getStore("app/chat/letter") || [];
      if (letters.find(function (ele) {
        return ele === message;
      })) return false;
      letters.unshift(message);
      this.letter.list = letters;
      _es.storager.setStore("app/chat/letter", letters);
    },

    /**
     * 描述：清除历史常用语
     */
    clearLetter: function clearLetter(message) {
      var letters = _es.storager.getStore("app/chat/letter") || [];
      this.letter.list = letters.filter(function (ele) {
        return ele !== message;
      });
      _es.storager.setStore("app/chat/letter", this.letter.list);
    },

    /**
     * 时间：2019/9/18 ,
     * 描述：获取粘贴板的图片文件
     */

    getClipboardImage: function getClipboardImage() {
      var _this = this;

      var elems = this.$refs["editable"].$el.childNodes;
      var elem = null;
      for (var n = 0; n < elems.length; n++) {
        if (elems[n].localName === "input") {
          elem = elems[n];
          break;
        }
      }
      if (elem == null) return false;

      elem.onpaste = function (event) {
        var value = event.clipboardData.items[0];
        if (value.kind === "file" && value.type.indexOf("image/") !== -1) {
          _this.selectPic(value.getAsFile(), "clipboard");
          return false;
        }
      };
    },

    /**
     * 获取基础信息
     */
    getBasisMessage: function getBasisMessage() {
      var local = localStorage.getItem("app/order/custom/chat/message");
      var localFormat = local ? JSON.parse(local) : {};
      this.basis.appId = localFormat.appId;
      this.basis.accessToken = localFormat.accessToken;
      var userInfoCookies = _jsCookie2.default.get("userInfo");
      var userInfoFormat = userInfoCookies ? JSON.parse(userInfoCookies) : {};
      this.basis.userId = userInfoFormat["id"];
      this.basis.userName = userInfoFormat["username"];
    },


    /**
     * 获取会员列列表
     */
    getUserList: function getUserList() {
      var _this2 = this;

      var more = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.user.loading) return;
      this.user.loading = true;
      if (more) {
        this.user.pageNo++;
      } else {
        this.user.pageNo = 1;
      }
      var params = {
        account: this.user.query,
        commonStatus: 0,
        pageSize: this.user.pageSize,
        pageNo: this.user.pageNo
      };

      (0, _getData.memberManage)(params).then(function (res) {
        _this2.user.loading = false;
        if (res.code === 0) {
          var list = res["data"]["content"];
          _this2.user.push.finished = _this2.user.pageSize > list.length;
          if (more) {
            _this2.user.list = [].concat(_toConsumableArray(_this2.user.list), _toConsumableArray(list));
          } else {
            _this2.user.list = list;
          }
          console.log(_this2.user.list);
        } else {
          _this2.user.pageNo--;
          _this2.$Message.error("获取聊会员列表失败！");
        }
      }).catch(function (err) {
        _this2.user.loading = false;
        _this2.user.pageNo--;
        _this2.$Message.error("获取会员列表失败！");
      });
    },

    /**
     * 获取聊天记录
     */
    getMemberChat: function getMemberChat() {
      var _this3 = this;

      (0, _custom.getMemberChat)().then(function (res) {
        _this3.member.list = res;
        if (_this3.member.list.length > 0) {
          _this3.member.activeIndex = 0;
          _this3.getChatHistory();
        }
      }).catch(function (err) {
        _this3.$Message.error("获取最近聊天会员列表失败！");
      });
    },


    /**
     * 获取历史聊天记录
     */
    getChatHistory: function getChatHistory() {
      var _this4 = this;

      var more = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.chat.loading) {
        return this.$Message.error("正在获取历史聊天记录！");
      }
      this.chat.loading = true;

      var currentMemberActive = this.getCurMemberAcitve();

      var params = {
        cdId: currentMemberActive["cdId"],
        appId: this.basis["appId"],
        accessToken: this.basis["accessToken"]
      };

      if (more) {
        params.minChatId = this.chat.list[0]["chatId"];
      } else {
        params.minChatId = 0;
      }

      (0, _custom.getChatHistoryKfAndCd)(params).then(function (res) {
        var list = res.reverse();
        console.table(list);

        _this4.chat.push.finished = _this4.chat.pageSize > list.length;

        if (more) {
          _this4.chat.list = [].concat(_toConsumableArray(list), _toConsumableArray(_this4.chat.list));
        } else {
          _this4.chat.list = list;

          // 将数字改变为0
          _this4.member.list.forEach(function (item) {
            if (item["cdId"] == currentMemberActive["cdId"]) {
              item["unReadCnt"] = 0;
            }
          });

          _this4.scrollToBottom();
        }

        _this4.chat.loading = false;
      }).catch(function (err) {
        _this4.chat.loading = false;
        _this4.$Message.error("获取聊天记录失败！");
      });
    },


    /**
     * 创建socket
     */
    createSocket: function createSocket() {
      var _this5 = this;

      this.closeSocket();

      var url = _http.BASEURL + "chat/socket/chat-webSocket";

      var socket = new SockJS(url);

      this._socket = Stomp.over(socket);

      this._socket.connect({}, function (frame) {
        _this5.$Notice.success({
          top: 50,
          duration: 5,
          title: "提示",
          desc: "聊天室连接成功，可以进行聊天了~"
        });
        _this5.chat.connected = true;
        _this5.getSockMessage();
      }, function (frame) {
        _this5.chat.connected = false;
        _this5.$Notice.error({
          top: 50,
          duration: 5,
          title: "提示",
          desc: "聊天室连接失败，请重试！"
        });
      });
    },

    /**
     * 关闭实时通信
     */
    closeSocket: function closeSocket() {
      if (this._socket) {
        this._socket.disconnect();
        this._socket = null;
      }
    },

    /**
     * 收到socket信息
     */
    getSockMessage: function getSockMessage() {
      var _this6 = this;

      this._socket.subscribe("/topic/chatMsg/kf/" + this.basis.userId, function (response) {
        var message = JSON.parse(response.body);
        console.log("get-chat-message");
        console.log(message);

        if (message.uidType != 7) return;

        var memberItem = _this6.getCurMemberAcitve();
        // 判断是否是最近用户
        // 是的话 再进行判断是否是当前选中的
        // 否则重新刷新最近聊天列表
        var uidFrom = message["uidFrom"];

        var isExitIndex = _this6.member.list.findIndex(function (item) {
          return item["cdId"] == uidFrom;
        });

        if (_this6.member.list.length > 0 && memberItem && isExitIndex > -1) {
          if (memberItem["cdId"] == uidFrom) {
            _this6.getChatHistory();
          } else {
            _this6.member.list.forEach(function (item) {
              if (item["cdId"] == uidFrom) {
                item["unReadCnt"]++;
              }
            });
          }
        } else {
          _this6.getMemberChat();
        }
      });
    },


    /**
     * 发送socket信息
     */
    sendSocketMessage: function sendSocketMessage(params) {
      var memberItem = this.getCurMemberAcitve();

      var sendParams = {
        uidTo: memberItem["cdId"],
        uidFrom: this.basis.userId,
        nameFrom: this.basis.userName,
        nameTo: memberItem["cdName"],
        content: params.content,
        type: params.type,
        appId: this.basis.appId,
        accessToken: this.basis.accessToken,
        uidType: 5
      };
      console.log("send");
      console.log(sendParams);

      this.chat.list.push(sendParams);

      this.scrollToBottom();

      this._socket.send("/app/message/nologin", {}, JSON.stringify(sendParams));
    },


    /**
     * 发送文本信息
     */
    sendMessage: function sendMessage(message) {
      if (!this.chat.connected) {
        this.$Message.error("当前聊天室连接未成功，请重试！");
        return;
      }
      if (this.member.activeIndex === -1) {
        this.$Message.error("当前没有选择会员！");
        return;
      }
      if (message === "") {
        this.$Message.error("聊天内容不能为空！");
        return;
      }

      if (_storeEs.stringer.check.space.whole(message)) {
        this.$Message.error("聊天内容不能全部为空字符串！");
        return;
      }

      if (message.length > 150) {
        this.$Message.error("聊天内容长度不能超过150");
        return;
      }

      this.sendSocketMessage({ content: message, type: 0 });
      this.chat.message = "";
    },


    /**
     * 发送图片信息
     */
    sendPic: function sendPic() {
      if (!this.chat.connected) {
        this.$Message.error("当前聊天室连接未成功，请重试！");
        return;
      }
      if (this.member.activeIndex === -1) {
        this.$Message.error("当前没有选择会员！");
        return;
      }
      if (this.chat.pic === "") {
        this.$Message.error("图片发送失败，请重新尝试！");
        return;
      }

      this.sendSocketMessage({ content: this.chat.pic, type: 1 });
      this.chat.pic = "";
    },

    /**
     * 让滚动条始终在底部
     */
    scrollToBottom: function scrollToBottom() {
      var _this7 = this;

      setTimeout(function () {
        var div = _this7.$refs["chat"];
        div && (div.scrollTop = div.scrollHeight);
      }, 300);
    },


    /**
     * 获取当前选中的申诉订单
     */
    getCurMemberAcitve: function getCurMemberAcitve() {
      return this.member.list[this.member.activeIndex];
    },

    /**
     * 选择图片，并发送图片消息
     */
    selectPic: function selectPic(e) {
      var _this8 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "local";

      var file = e;
      if (type === "local") {
        file = e.target.files[0];
      }
      var formData = new FormData();
      formData.append("file", file);
      (0, _common.uploadImage)(formData).then(function (data) {
        if (data["code"] === "000") {
          _this8.chat.pic = data["data"]["url"];
          _this8.sendPic();
        } else {
          _this8.$Message.error("发送图片失败！");
        }
      }).catch(function (err) {
        _this8.$Message.error("发送图片失败！");
      });
    },
    /**
     * 放大图片
     */
    showPicture: function showPicture(url) {
      this.chat.picture.url = url;
      this.chat.picture.show = true;
    },

    /**
     * 选择会员
     */
    changeUser: function changeUser(item, index) {
      // 判断会员是否存在，若存在则激活，不存在则添加并激活
      var isExitIndex = this.member.list.findIndex(function (memberItem) {
        return memberItem["cdId"] === item["id"];
      });
      if (isExitIndex > -1) {
        this.member.activeIndex = isExitIndex;
      } else {
        this.member.list.unshift({
          cdName: item["username"],
          unReadCnt: 0,
          mobilePhone: item["mobilePhone"],
          cdId: item["id"]
        });
        this.member.activeIndex = 0;
      }
      this.getChatHistory();
    },

    /**
     * 选择聊天对象
     */
    changeMember: function changeMember(item, index) {
      if (this.member.activeIndex === index) return;
      this.member.activeIndex = index;
      this.getChatHistory();
    },


    /**
     * 判断角色是否是自己
     */

    isMine: function isMine(item) {
      return item["uidType"] == "5";
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.closeSocket();
  }
};

/***/ }),
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("56244590", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6258a346\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6258a346\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "vv-chat" }, [_c("Modal", {
    staticClass: "ivu-modal--preview",
    attrs: { title: "图片预览", width: "100%" },
    model: {
      value: _vm.chat.picture.show,
      callback: function callback($$v) {
        _vm.$set(_vm.chat.picture, "show", $$v);
      },
      expression: "chat.picture.show"
    }
  }, [_c("img", {
    staticClass: "is-preview",
    attrs: { src: _vm.chat.picture.url, alt: "" }
  }), _vm._v(" "), _c("div", { attrs: { slot: "footer" }, slot: "footer" })]), _vm._v(" "), _c("Card", [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("\n      会员交流\n      "), _c("Button", {
    attrs: { type: "primary", size: "small" },
    on: { click: _vm.init }
  }, [_c("Icon", { attrs: { type: "refresh" } }), _vm._v(" 刷新\n      ")], 1)], 1), _vm._v(" "), _c("div", [_c("div", { staticClass: "vi-flex is-align-items--center vi-margin-bottom" }, [_c("div", { staticClass: "vi-margin-right" }, [_c("Poptip", {
    attrs: {
      trigger: "hover",
      content: "请输入用户名、邮箱、手机号、姓名搜索",
      placement: "bottom-start"
    }
  }, [_c("Input", {
    attrs: {
      placeholder: "请输入用户名、邮箱、手机号、姓名搜索"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        _vm.getUserList(false);
      }
    },
    model: {
      value: _vm.user.query,
      callback: function callback($$v) {
        _vm.$set(_vm.user, "query", $$v);
      },
      expression: "user.query"
    }
  })], 1)], 1), _vm._v(" "), _c("div", { staticClass: " " }, [_c("i-button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.getUserList(false);
      }
    }
  }, [_vm._v("\n            搜索\n          ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vi-flex",
    staticStyle: { height: "calc(100vh - 260px)" }
  }, [_c("div", {
    staticStyle: {
      width: "250px",
      height: "100%",
      overflow: "auto"
    }
  }, [_vm._l(_vm.user.list, function (item, index) {
    return _c("div", {
      staticClass: "vi-padding vi-border is-border--bottom is-border--thin",
      on: {
        click: function click($event) {
          _vm.changeUser(item, index);
        }
      }
    }, [_c("div", { staticStyle: { "line-height": "32px" } }, [_c("span", { staticClass: "vi-text is-weight--bold" }, [_vm._v(_vm._s(item.username))])]), _vm._v(" "), _c("div", {
      staticClass: "vi-flex is-justify-content--space-between",
      staticStyle: { "line-height": "24px" }
    }, [_c("span", [_vm._v(_vm._s(item.realName))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm._f("formatPhone")(item.mobilePhone)))])])]);
  }), _vm._v(" "), !_vm.user.push.finished ? _c("div", { staticClass: "vi-padding" }, [_c("i-button", {
    attrs: { type: "default", long: "" },
    on: {
      click: function click($event) {
        _vm.getUserList(true);
      }
    }
  }, [_vm._v("\n              加载更多\n            ")])], 1) : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "250px",
      height: "100%",
      overflow: "auto"
    }
  }, _vm._l(_vm.member.list, function (item, index) {
    return _c("div", {
      staticClass: "vi-border",
      class: {
        "vi-background is-background--gray is-border--left is-border--primary is-border--bold": index === _vm.member.activeIndex
      },
      on: {
        click: function click($event) {
          _vm.changeMember(item, index);
        }
      }
    }, [_c("div", {
      staticClass: "vi-padding vi-border is-border--bottom is-border--thin  "
    }, [_c("div", {
      staticClass: "vi-flex is-justify-content--space-between",
      staticStyle: { "line-height": "32px" }
    }, [_c("span", { staticClass: "vi-text is-weight--bold" }, [_vm._v(_vm._s(item.cdName))]), _vm._v(" "), item.unReadCnt !== 0 ? [_c("span", { staticClass: "vi-tag " }, [_c("span", { staticClass: "vi-tag-label" }, [_vm._v(_vm._s(item.unReadCnt))])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
      staticClass: "vi-flex is-justify-content--space-between",
      staticStyle: { "line-height": "24px" }
    }, [_c("span", [_vm._v(_vm._s(_vm._f("formatPhone")(item.mobilePhone)))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.createTime))])])])]);
  })), _vm._v(" "), _c("div", {
    staticClass: "vi-flex-item is-flex--1",
    staticStyle: { height: "100%" }
  }, [_c("div", { staticClass: "vi-chat" }, [_c("div", { ref: "chat", staticClass: "vi-chat-body" }, [!_vm.chat.push.finished ? _c("div", {
    staticClass: "vi-margin-bottom vi-flex is-justify-content--center"
  }, [_c("i-button", {
    attrs: { type: "default" },
    on: {
      click: function click($event) {
        _vm.getChatHistory(true);
      }
    }
  }, [_vm._v("\n                  加载更多\n                ")])], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.chat.list, function (item, index) {
    return _c("div", {
      staticClass: "vi-chat-row ",
      class: {
        "is-row--left": !_vm.isMine(item),
        "is-row--right": _vm.isMine(item)
      }
    }, [!_vm.isMine(item) ? _c("div", { staticClass: "vi-chat-tag" }) : _vm._e(), _vm._v(" "), _c("div", { staticClass: "vi-chat-content" }, [_c("div", { staticClass: "vi-chat-arrow" }), _vm._v(" "), _c("div", { staticClass: "vi-chat-message" }, [_c("div", [item.type === 0 ? _c("span", [_vm._v(_vm._s(item.content))]) : _c("img", {
      staticStyle: {
        "max-width": "250px",
        "max-height": "350px"
      },
      attrs: { src: item.content, alt: "" },
      on: {
        click: function click($event) {
          _vm.showPicture(item.content);
        }
      }
    })]), _vm._v(" "), item.sendTimeStr ? _c("div", { staticClass: "vi-margin-top" }, [_c("span", {
      staticClass: "vi-text is-color--gray "
    }, [_vm._v("\n                        " + _vm._s(item.sendTimeStr) + "\n                      ")])]) : _vm._e()])]), _vm._v(" "), _vm.isMine(item) ? _c("div", { staticClass: "vi-chat-tag" }) : _vm._e()]);
  })], 2), _vm._v(" "), _c("div", { staticClass: "vi-chat-footer vi-padding" }, [_c("div", { staticClass: "vi-flex" }, [_c("label", {
    staticClass: "upload vi-margin-right",
    attrs: { for: "file-1" }
  }, [_c("Icon", {
    attrs: { type: "image", size: "36" }
  }), _vm._v(" "), _c("input", {
    attrs: { type: "file", id: "file-1" },
    on: { change: _vm.selectPic }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vi-flex-item is-flex--1 vi-margin-right"
  }, [_c("Input", {
    ref: "editable",
    attrs: {
      size: "large",
      placeholder: "输入聊天内容 按回车键可发送"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        _vm.sendMessage(_vm.chat.message);
      }
    },
    model: {
      value: _vm.chat.message,
      callback: function callback($$v) {
        _vm.$set(_vm.chat, "message", $$v);
      },
      expression: "chat.message"
    }
  })], 1), _vm._v(" "), _c("div", { staticClass: "vi-margin-right" }, [_c("Button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.sendMessage(_vm.chat.message);
      }
    }
  }, [_vm._v("发送")])], 1), _vm._v(" "), _c("div", {}, [_c("Button", {
    on: {
      click: function click($event) {
        _vm.setLetter(_vm.chat.message);
      }
    }
  }, [_vm._v("\n                    记为常用语\n                  ")])], 1)]), _vm._v(" "), _vm.letter.list.length > 0 ? _c("div", {
    staticClass: "vi-padding vi-background is-background--gray",
    staticStyle: {
      "max-height": "150px",
      overflow: "auto"
    }
  }, _vm._l(_vm.letter.list, function (item, index) {
    return _c("Tag", {
      key: index,
      ref: "tagsPageOpened",
      refInFor: true,
      attrs: { name: item, closable: "" },
      on: {
        "on-close": function onClose($event) {
          _vm.clearLetter(item);
        }
      },
      nativeOn: {
        click: function click($event) {
          _vm.sendMessage(item);
        }
      }
    }, [_vm._v(_vm._s(item) + "\n                ")]);
  })) : _vm._e()])])])])]), _vm._v(" "), false ? _c("div", { staticClass: "vv-chat--body" }, [_c("div", {
    staticStyle: {
      "border-right": "1px solid #e3e8ee",
      width: "280px",
      position: "relative",
      "padding-top": "50px"
    }
  }, [_c("div", {
    staticClass: "vui-relative--top   vui-grid",
    staticStyle: { height: "50px" }
  }, [_c("div", { staticClass: "vui-grid-child vui-flex-grow--1 " }, [_c("div", { staticClass: "vui-padding-right" }, [_c("Poptip", {
    attrs: {
      trigger: "hover",
      content: "请输入用户名、邮箱、手机号、姓名搜索",
      placement: "bottom-start"
    }
  }, [_c("Input", {
    attrs: {
      placeholder: "请输入用户名、邮箱、手机号、姓名搜索"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        _vm.getUserList(false);
      }
    },
    model: {
      value: _vm.user.query,
      callback: function callback($$v) {
        _vm.$set(_vm.user, "query", $$v);
      },
      expression: "user.query"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vui-grid-child vui-flex-grow--0 vui-padding-right"
  }, [_c("i-button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.getUserList(false);
      }
    }
  }, [_vm._v("\n              搜索\n            ")])], 1)]), _vm._v(" "), _c("div", { staticClass: "vui-contain--vertical vui-overflow--auto" }, [_vm._l(_vm.user.list, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vv-user-item ",
      on: {
        click: function click($event) {
          _vm.changeUser(item, index);
        }
      }
    }, [_c("p", {
      staticClass: "vui-margin-bottom--small vui-text--bold"
    }, [_vm._v("\n              " + _vm._s(item["username"]) + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "vui-grid vui-justify-content--space-between"
    }, [_c("span", {
      staticClass: "vui-text--light  vui-text--smaller"
    }, [_vm._v(_vm._s(item["realName"]))]), _vm._v(" "), _c("span", {
      staticClass: "vui-text--gray vui-text--smaller"
    }, [_vm._v(_vm._s(item["mobilePhone"]))])])]);
  }), _vm._v(" "), !_vm.user.push.finished ? _c("div", {
    staticClass: "vui-text-align--center vui-line-height--large",
    on: {
      click: function click($event) {
        _vm.getUserList(true);
      }
    }
  }, [_c("span", {
    staticClass: "vui-text--primary vui-cursor--pointer"
  }, [_vm._v("加载更多")])]) : _vm._e()], 2)]), _vm._v(" "), _vm.member.list.length > 0 ? _c("div", { staticStyle: { width: "300px" } }, [_c("div", {
    staticClass: "vui-contain--vertical vui-overflow--auto"
  }, _vm._l(_vm.member.list, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vv-room-item ",
      class: {
        "is-active": index == _vm.member.activeIndex
      },
      on: {
        click: function click($event) {
          _vm.changeMember(item, index);
        }
      }
    }, [_c("div", {
      staticClass: "vui-grid vui-justify-content--space-between vui-margin-bottom"
    }, [_c("p", { staticClass: "title vui-text--bold" }, [_vm._v(_vm._s(item["cdName"]))]), _vm._v(" "), item["unReadCnt"] !== 0 ? [_c("div", { staticClass: "vui-tag" }, [_c("div", { staticClass: "vui-tag--label" }, [_vm._v(_vm._s(item["unReadCnt"]))])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
      staticClass: "vui-grid vui-justify-content--space-between"
    }, [_c("p", {
      staticClass: "vui-text--smaller title-sub"
    }, [_vm._v("\n                " + _vm._s(item["mobilePhone"]) + "\n              ")]), _vm._v(" "), _c("p", {
      staticClass: "vui-text--smaller title-sub"
    }, [_vm._v("\n                " + _vm._s(item["createTime"]) + "\n              ")])])]);
  }))]) : _vm._e(), _vm._v(" "), false ? _c("div", { staticClass: "vv-chat--chat" }, [_c("div", { ref: "chat", staticClass: "chat" }, [_c("div", { staticClass: "chat-body" }, [!_vm.chat.push.finished ? _c("div", { staticClass: "chat-more" }, [_c("span", {
    on: {
      click: function click($event) {
        _vm.getChatHistory(true);
      }
    }
  }, [_vm._v("加载更多")])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.chat.list, function (item, i) {
    return _c("div", {
      key: i,
      staticClass: "chat-item",
      class: {
        "is-left": !_vm.isMine(item),
        "is-right": _vm.isMine(item)
      }
    }, [!_vm.isMine(item) ? [_c("div", { staticClass: "chat-head" }, [_c("div", {
      staticClass: "chat-head-inner vc-flex--center"
    }, [_c("span", { staticClass: "chat-name" }, [_vm._v(_vm._s(item["nameFrom"] ? item["nameFrom"].split("")[0] : ""))])])]), _vm._v(" "), _c("div", [_c("div", { staticClass: "chat-name-detail" }, [_c("span", [_vm._v(_vm._s(item["nameFrom"]))])]), _vm._v(" "), _c("div", { staticClass: "chat-content" }, [_c("div", [item["type"] === 0 ? _c("div", [_c("span", {
      staticClass: "chat-info"
    }, [_vm._v(_vm._s(item["content"]))])]) : _vm._e(), _vm._v(" "), item["type"] === 1 ? _c("div", {
      on: {
        click: function click($event) {
          _vm.showPicture(item["content"]);
        }
      }
    }, [_c("img", {
      staticStyle: {
        "max-width": "200px",
        "max-height": "200px"
      },
      attrs: {
        src: item["content"],
        alt: ""
      }
    })]) : _vm._e()]), _vm._v(" "), _c("i", {
      staticClass: "chat-point"
    })]), _vm._v(" "), item["sendTimeStr"] ? _c("div", { staticClass: "chat-time" }, [_vm._v("\n                    " + _vm._s(item["sendTimeStr"]) + "\n                  ")]) : _vm._e()])] : _vm._e(), _vm._v(" "), _vm.isMine(item) ? [_c("div", {
      staticStyle: { "margin-top": "20px" }
    }, [true ? _c("div", {
      staticClass: "chat-name-detail"
    }, [_vm._v("\n                    " + _vm._s(item["nameFrom"]) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c("div", { staticClass: "chat-content" }, [_c("div", [item["type"] === 0 ? _c("div", [_c("span", {
      staticClass: "chat-info"
    }, [_vm._v(_vm._s(item["content"]))])]) : _vm._e(), _vm._v(" "), item["type"] === 1 ? _c("div", {
      on: {
        click: function click($event) {
          _vm.showPicture(item["content"]);
        }
      }
    }, [_c("img", {
      staticStyle: {
        "max-width": "200px",
        "max-height": "200px"
      },
      attrs: {
        src: item["content"],
        alt: ""
      }
    })]) : _vm._e()]), _vm._v(" "), _c("i", {
      staticClass: "chat-point"
    })]), _vm._v(" "), item["sendTimeStr"] ? _c("div", { staticClass: "chat-time" }, [_vm._v("\n                    " + _vm._s(item["sendTimeStr"]) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _c("div", { staticClass: "chat-head" }, [_c("div", {
      staticClass: "chat-head-inner vc-flex--center"
    }, [_c("span", { staticClass: "chat-name" }, [_vm._v("我")])])])] : _vm._e()], 2);
  })], 2)]), _vm._v(" "), _c("div", { staticClass: "chat-send-wrap" }, [_c("div", { staticClass: "chat-send" }, [_c("label", { staticClass: "upload", attrs: { for: "file" } }, [_c("Icon", {
    attrs: { type: "image", size: "36" }
  }), _vm._v(" "), _c("input", {
    attrs: { type: "file", id: "file" },
    on: { change: _vm.selectPic }
  })], 1), _vm._v(" "), _c("div", { staticClass: "chat-send__input" }, [_c("Input", {
    ref: "editable",
    attrs: {
      size: "large",
      placeholder: "输入聊天内容 按回车键可发送"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }
        return _vm.sendMessage($event);
      }
    },
    model: {
      value: _vm.chat.message,
      callback: function callback($$v) {
        _vm.$set(_vm.chat, "message", $$v);
      },
      expression: "chat.message"
    }
  })], 1), _vm._v(" "), _c("div", [_c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.sendMessage }
  }, [_vm._v("发送")])], 1), _vm._v(" "), _vm.storeCustomLetter.length > 0 ? _c("div", { staticClass: "vui-margin-left" }, [_c("Button", {
    attrs: { type: "warning" },
    on: {
      click: function click($event) {
        _vm.letter.modal = true;
      }
    }
  }, [_vm._v("常用语")])], 1) : _vm._e(), _vm._v(" "), _c("div", { staticClass: "vui-margin-left" }, [_c("Button", {
    on: {
      click: function click($event) {
        _vm.createLetter(_vm.chat.message);
      }
    }
  }, [_vm._v("设置为常用语")])], 1)])])]) : _vm._e(), _vm._v(" "), false ? _c("div", { staticClass: "chat-content" }, [_c("div", { staticClass: "chat-content-message" }), _vm._v(" "), _c("div", { staticClass: "chat-content-send" }, [_c("span", [_vm._v("房贷的收款发了说")]), _vm._v(" "), _c("div", [_c("span", [_vm._v("胜多负少看到了时空来电")])])])]) : _vm._e()]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-6258a346", esExports);
  }
}

/***/ })
]));