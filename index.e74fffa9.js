!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},t.parcelRequired7c6=r);var o={},u=r("l5bVx"),f="Expected a function",c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,y=v||p||Function("return this")(),b=Object.prototype.toString,g=Math.max,w=Math.min,m=function(){return y.Date.now()};function x(t,e,n){var i,r,o,u,c,a,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(f);function p(e){var n=i,o=r;return i=r=void 0,l=e,u=t.apply(o,n)}function y(t){return l=t,c=setTimeout(x,e),d?p(t):u}function b(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-l>=o}function x(){var t=m();if(b(t))return j(t);c=setTimeout(x,function(t){var n=e-(t-a);return s?w(n,o-(t-l)):n}(t))}function j(t){return c=void 0,v&&i?p(t):(i=r=void 0,u)}function O(){var t=m(),n=b(t);if(i=arguments,r=this,a=t,n){if(void 0===c)return y(a);if(s)return c=setTimeout(x,e),p(a)}return void 0===c&&(c=setTimeout(x,e)),u}return e=h(e)||0,T(n)&&(d=!!n.leading,o=(s="maxWait"in n)?g(h(n.maxWait)||0,e):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},O.flush=function(){return void 0===c?u:j(m())},O}function T(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(T(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=T(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=l.test(t);return i||d.test(t)?s(t.slice(2),i?2:8):a.test(t)?NaN:+t}o=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(f);return T(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),x(t,e,{leading:i,maxWait:e,trailing:r})};var j=document.querySelector(".scrol-to");j.addEventListener("click",(function(t){window.scrollTo(0,0)})),window.addEventListener("scroll",o((function(){if(window.scrollY>300)return void j.classList.remove("scrol-to--opacity");j.classList.add("scrol-to--opacity")}),500))}();
//# sourceMappingURL=index.e74fffa9.js.map