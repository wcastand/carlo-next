(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(203),{page:t.exports.default}})},203:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n.n(o);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){function e(){var t,n,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var c=arguments.length,a=new Array(c),p=0;p<c;p++)a[p]=arguments[p];return o=this,r=(t=i(e)).call.apply(t,[this].concat(a)),n=!r||"object"!==u(r)&&"function"!=typeof r?f(o):r,l(f(f(n)),"state",{count:0}),l(f(f(n)),"next",function(){n.setState(function(t){return{count:t.count+1}})}),l(f(f(n)),"prev",function(){n.setState(function(t){return{count:t.count-1}})}),n}var n,o,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,this.state.count),r.a.createElement("button",{onClick:this.next},"+"),r.a.createElement("button",{onClick:this.prev},"-"))}}])&&c(n.prototype,o),p&&c(n,p),e}();e.default=p}},[[202,1,0]]]);