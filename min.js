var hyperHTML=function(e){"use strict";function t(e){var t=le.get(this);return t&&t.template===(Q?$(e):e)||(t=A.apply(this,arguments),le.set(this,t)),O.apply(t.updates,arguments),this}function n(e,t){for(var n=0,r=e.length,a=t.length;n<r;){if(!(n<a&&e[n]===t[n]))return n;n++}return n===a?-1:n}function r(e,t){switch(t.nodeType){case P:var r=e.childNodes;if(r[0]===t){a(r,1);break}i(e,t);break;case W:-1!==n(e.childNodes,t.childNodes)&&i(e,t);break;case _:e.textContent=t.textContent}}function a(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function i(e,t){e.textContent="",e.appendChild(t)}function o(e,t,n){var r=y(e);0!==n?(a(e.childNodes,n),ne(r,t.slice(n)),e.appendChild(r)):(ne(r,t),i(e,r))}function c(e){return function t(i){switch(typeof i){case"string":case"number":case"boolean":e.innerHTML=i;break;case"function":t(i(e,e.children,0));break;default:if(ee(i)){var c,l=i.length;if(1===l)t(i[0]);else switch(0===l?"":typeof i[0]){case"string":case"number":case"boolean":t(i.join(""));break;case"function":var u=X.call(e.children);for(c=0,l=i.length;c<l;c++)i[c]=i[c](e,u,c);a(u,c),t(i.concat.apply([],i));break;case"object":if(x(i[0])){Promise.all(i).then(t);break}default:c=n(e.childNodes,i),-1!==c&&o(e,i,c)}}else x(i)?i.then(t):r(e,i)}}}function l(e,t){var n,r=e.name,a=e.ownerElement,i="on"===r.slice(0,2),o=r in a&&!(q in a||V.test(r));return o&&t.push(a,r),o?function(e){n!==e&&(i&&n&&"handleEvent"in n&&N(a,"remove",r,n),n=e,i&&e&&"handleEvent"in e?N(a,"add",r,e):a[r]=e)}:function(t){n!==t&&(n=t,e.value=t)}}function u(e){var t;return function(n){t!==n&&(t=n,e.textContent=n)}}function s(e,t){return function n(r){switch(typeof r){case"string":case"number":case"boolean":a(t,0);var i=p(e,r);t=X.call(i.childNodes),e.parentNode.insertBefore(i,e);break;case"function":n(r(e.parentNode,t,0));break;default:if(ee(r))if(0===r.length)a(t,0),t=[];else switch(typeof r[0]){case"string":case"number":case"boolean":n(r.join(""));break;case"function":for(var o=e.parentNode,c=0,l=r.length;c<l;c++)r[c]=r[c](o,t,c);n(r.concat.apply([],r));break;case"object":if(x(r[0])){Promise.all(r).then(n);break}default:E(e,t,r)}else x(r)?r.then(n):E(e,t,r.nodeType===W?X.call(r.childNodes):[r])}}}function f(e,t){for(var n,r=U?J:K,a=e.attributes,i=0,o=a.length;i<o;i++)n=a[i],n.value===r&&t.push(D("attr",U?e.attributes[ie.shift()]:n))}function h(e,t){for(var n,r,a=e.childNodes,i=a.length,o=0;o<i;o++)switch(n=a[o],n.nodeType){case P:f(n,t),h(n,t);break;case z:n.textContent===J&&(1===i?t.push(D("any",e)):!(o<1||a[o-1].nodeType===P)||o+1!==i&&a[o+1].nodeType!==P?(r=m(n,""),n.parentNode.replaceChild(r,n),t.push(D("text",r))):t.push(D("virtual",n)));break;case _:V.test(e.nodeName)&&n.textContent===K&&t.push(D("text",e))}}function d(e){for(var t,n=[],r=e.childNodes,a=0,i=r.length;a<i;a++)t=r[a],t.nodeType!==P&&0===te.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function p(e,t){return(q in e?g:v)(e,t)}function v(e,t){var n,r=e.ownerDocument,a=r.createElement("template"),i="content"in a,o=!1;if(i||(n=r.createDocumentFragment(),o=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t)),o){var c=RegExp.$1;a.innerHTML="<table>"+t+"</table>",ne(n,X.call(a.querySelectorAll(c)))}else a.innerHTML=t,i?n=a.content:ne(n,X.call(a.childNodes));return n}function g(e,t){var n=e.ownerDocument,r=n.createDocumentFragment(),a=n.createElementNS(G,"svg");return a.innerHTML=t,ne(r,X.call(a.childNodes)),r}function m(e,t){return e.ownerDocument.createTextNode(t)}function b(e,t,n,r){for(var a=e,i=e.ownerDocument,o=n.path,c=ae(t,o),l=0,u=o.length;l<u;l++)switch(o[l++]){case"attributes":var s=c.name;e.hasAttribute(s)||e.setAttribute(s,""),a=e.attributes[s];break;case"childNodes":switch(n.type){case"text":var f=w(c,"previous"),h=w(c,"next");do{if(!(a=e.firstChild)||a.nodeType!==_)break;e.removeChild(a)}while(a);var d=i.createDocumentFragment();f.length&&d.appendChild(m(e,f)),a=d.appendChild(m(e,"")),h.length&&d.appendChild(m(e,h)),e.insertBefore(d,e.firstChild);break;case"virtual":var p=re(e),v=re(c.parentNode);a=c.previousElementSibling;var f=a?o.indexOf.call(v,a)+1:-1;a=c.nextElementSibling;var h=a?o.indexOf.call(v,a):-1;switch(a=i.createComment(J),!0){case h<0:h=p.length;break;case f<0:f=0;default:h=-(v.length-h)}r.push.apply(r,X.call(p,f,h)),e.insertBefore(a,r.length?r[r.length-1].nextElementSibling:X.call(p,h)[0]),0===r.length&&C(e,a)}break;default:a=re(e)[o[l]]||e.appendChild(e.ownerDocument.createElement(ae(t,o.slice(0,l+1)).nodeName)),e=a}return a}function y(e){return e.ownerDocument.createDocumentFragment()}function w(e,t){for(var n=[],r="next"===t?n.push:n.unshift;;){if(!(e=e[t+"Sibling"])||e.nodeType!==_)return n.join("");r.call(n,e.textContent)}}function N(e,t,n,r){e[t+"EventListener"](n.slice(2),r)}function x(e){return null!=e&&"then"in e}function k(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function C(e,t){var n=t.previousSibling;n&&n.nodeType===_&&(e.removeChild(n),C(e,t))}function T(e,t,n,r){var a;switch(e){case"any":a=c(t);break;case"attr":a=l(t,n);break;case"text":a=u(t);break;case"virtual":a=s(t,r)}return a}function E(e,t,r){var i=n(t,r);if(-1!==i){var o=y(e);a(t,i),t.splice(i),r=r.slice(i),ne(o,r),e.parentNode.insertBefore(o,e),t.push.apply(t,r)}}function D(e,t){return{type:e,path:S(t)}}function M(e){var t=[],n=e.join(K);U&&(ie=[],n=n.replace(oe,ce));var r=p(this,n),a={fragment:r,paths:t};return h(r,t),se.set(e,a),a}function S(e){var t,n=[];switch(e.nodeType){case P:case W:t=e;break;case _:case z:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case R:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(re(t),e));return n}function j(e,t){for(var n,r,i=[],o=[],c=0,l=t.length;c<l;c++)n=t[c],r=ae(e,n.path),r.nodeType===W&&(a(r.childNodes,0),r=this),i[c]=T(n.type,r,o,[]);return k(o),i}function L(e,t){for(var n,r,a=[],i=[],o=0,c=t.length;o<c;o++)r=[],n=t[o],a[o]=T(n.type,b(this,e,n,r),i,r);return k(i),a}function O(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function A(e){Q&&(e=$(e));var t,n=se.get(e)||M.call(this,e);if(fe){var r=n.fragment.cloneNode(!0);t=j.call(this,r,n.paths),i(this,r)}else t=L.call(this,n.fragment,n.paths);return{template:e,updates:t}}function F(e){function n(n){c=n.createDocumentFragment(),o="svg"===e?n.createElementNS(G,"svg"):c,l=t.bind(o)}function r(){return u&&(u=!1,"svg"===e&&ne(c,X.call(o.childNodes)),i=d(c)),i}var a,i,o,c,l,u,s;return"adopt"===e?function(i){var f=arguments;return Q&&(i=$(i)),s!==i&&(u=!0,s=i,a=function(a,i,s){return u&&(s<i.length?(o=i[s],c={ownerDocument:o.ownerDocument,childNodes:[o],children:[o]},l=t.adopt(c)):(q in a&&(e="svg"),n(a.ownerDocument))),l.apply(null,f),r()}),a}:function(e){return Q&&(e=$(e)),s!==e&&(u=!0,s=e,n(t.document)),l.apply(null,arguments),r()}}function H(e,t){var n=ue.get(e),r=t.indexOf(":"),a=t;return-1<r&&(a=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},ue.set(e,n)),n[a]||(n[a]=F(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */
t.document=e,t.adopt=function(e){return function(){return fe=!1,t.apply(e,arguments),fe=!0,e}},t.wire=function(e,t){return arguments.length<1?F("html"):null==e?F(t||"html"):H(e,t||"html")};var B,$,P=1,R=2,_=3,z=8,W=11,q="ownerSVGElement",G="http://www.w3.org/2000/svg",V=/^style$/i,I="_hyper_html: ",J=I+(Math.random()*new Date|0)+";",K="\x3c!--"+J+"--\x3e",Q="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,U=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),X=[].slice,Y=typeof WeakMap==typeof Y?function(){return{get:function(e){return e[I]},set:function(e,t){Object.defineProperty(e,I,{configurable:!0,value:t})}}}:WeakMap,Z=typeof Map==typeof Z?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,ee=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),te=I.trim||function(){return this.replace(/^\s+|\s+$/g,"")};Q&&(B=Object.create(null),$=function(e){var t=e.join(J);return B[t]||(B[t]=e)});var ne="append"in e?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},re="children"in e?function(e){return e.children}:function(e){for(var t,n=[],r=e.childNodes,a=0,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType===P&&(n[a++]=t);return n},ae=U?function(e,t){for(var n,r=0,a=t.length;r<a;r++)switch(n=t[r++]){case"children":e=re(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e};if(U)var ie,oe=new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+K+"\\2","g"),ce=function(e,t,n){return ie.push(t.slice(1,-1)),t+n+J+n};var le=new Y,ue=new Y,se=new Z,fe=!0;return t}(document);try{module.exports=hyperHTML}catch(e){}