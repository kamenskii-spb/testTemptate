parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FVPG":[function(require,module,exports) {
function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=t(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("main");if(t.addEventListener("click",function(e){if(e.target.dataset.text){var t=e.target.closest(".post-content");t.classList.contains("open")?t.classList.remove("open"):t.classList.add("open")}}),window.innerWidth<=842){var n,o=e(t.querySelectorAll(".post-content"));try{for(o.s();!(n=o.n()).done;){n.value.classList.add("open")}}catch(y){o.e(y)}finally{o.f()}}var a,r=document.getElementById("modal"),i=document.getElementsByClassName("close_modal_window")[0],l=e(document.querySelectorAll("ol li span.dotted"));try{for(l.s();!(a=l.n()).done;){a.value.onclick=function(){r.style.display="block"}}}catch(y){l.e(y)}finally{l.f()}i.onclick=function(){r.style.display="none"},window.onclick=function(e){e.target==r&&(r.style.display="none")};var c,s=document.getElementsByTagName("form")[0],d=document.getElementById("input-mail"),u=(document.getElementById("input-name"),document.querySelector("#input-mail + span.error")),m=e(s.querySelectorAll(".cross"));try{for(m.s();!(c=m.n()).done;){c.value.addEventListener("click",function(e){var t=event.target.nextElementSibling;t.value="",f(t.getAttribute("type"))})}}catch(y){m.e(y)}finally{m.f()}function f(){"email"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"email")&&(u.textContent="",u.className="error",d.closest(".form-control").classList.remove("invalid"))}function f(){"email"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"email")&&(u.textContent="",u.className="error",d.closest(".form-control").classList.remove("invalid"))}function v(e){"email"===e&&(d.validity.valueMissing?u.textContent="You need to enter an e-mail address.":d.validity.typeMismatch?u.textContent="Entered value needs to be an e-mail address.":d.validity.tooShort&&(u.textContent="Email should be at least ".concat(d.minLength," characters; you entered ").concat(d.value.length,".")),u.className="error  arrow active",d.closest(".form-control").classList.add("invalid"))}d.addEventListener("input",function(e){d.validity.valid?f("email"):v("email")}),s.addEventListener("submit",function(e){d.validity.valid||(v("email"),e.preventDefault())}),s.addEventListener("submit",function(e){d.validity.valid||(v("email"),e.preventDefault())})});
},{}]},{},["FVPG"], null)
//# sourceMappingURL=/main.df6ddb03.js.map