(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6997],{4184:function(e,t){var o; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var u=typeof o;if("string"===u||"number"===u)e.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&e.push(a)}}else if("object"===u){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(o=(function(){return r}).apply(t,[]))&&(e.exports=o)}()},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,u=o(7273).Z,a=r(o(7294)),c=o(6273),l=o(2725),f=o(3462),i=o(1018),s=o(7190),p=o(1210),d=o(8684),y={};function v(e,t,o,n){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;y[t+"%"+o+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef(function(e,t){var o,r,h=e.href,b=e.as,g=e.children,O=e.prefetch,_=e.passHref,j=e.replace,C=e.shallow,x=e.scroll,m=e.locale,R=e.onClick,L=e.onMouseEnter,P=e.onTouchStart,E=e.legacyBehavior,M=void 0===E?!0!==Boolean(!1):E,w=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=g,M&&("string"==typeof o||"number"==typeof o)&&(o=a.default.createElement("a",null,o));var S=!1!==O,k=a.default.useContext(f.RouterContext),T=a.default.useContext(i.AppRouterContext);T&&(k=T);var Z=a.default.useMemo(function(){var e=n(c.resolveHref(k,h,!0),2),t=e[0],o=e[1];return{href:t,as:b?c.resolveHref(k,b):o||t}},[k,h,b]),B=Z.href,A=Z.as,U=a.default.useRef(B),D=a.default.useRef(A);M&&(r=a.default.Children.only(o));var H=M?r&&"object"==typeof r&&r.ref:t,K=n(s.useIntersection({rootMargin:"200px"}),3),N=K[0],G=K[1],I=K[2],q=a.default.useCallback(function(e){(D.current!==A||U.current!==B)&&(I(),D.current=A,U.current=B),N(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[A,H,B,I,N]);a.default.useEffect(function(){var e=G&&S&&c.isLocalURL(B),t=void 0!==m?m:k&&k.locale,o=y[B+"%"+A+(t?"%"+t:"")];e&&!o&&v(k,B,A,{locale:t})},[A,B,G,m,S,k]);var z={ref:q,onClick:function(e){M||"function"!=typeof R||R(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,l,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&c.isLocalURL(o)){e.preventDefault();var p,d,y=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:f,scroll:l}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?a.default.startTransition(y):y()}}(e,k,B,A,j,C,x,m,Boolean(T),S)},onMouseEnter:function(e){M||"function"!=typeof L||L(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!S&&T)&&c.isLocalURL(B)&&v(k,B,A,{priority:!0})},onTouchStart:function(e){M||"function"!=typeof P||P(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!S&&T)&&c.isLocalURL(B)&&v(k,B,A,{priority:!0})}};if(!M||_||"a"===r.type&&!("href"in r.props)){var F=void 0!==m?m:k&&k.locale,J=k&&k.isLocaleDomain&&p.getDomainLocale(A,F,k.locales,k.domainLocales);z.href=J||d.addBasePath(l.addLocale(A,F,k&&k.defaultLocale))}return M?a.default.cloneElement(r,z):a.default.createElement("a",Object.assign({},w,z),o)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=n.default.createContext(null);t.TemplateContext=c},1664:function(e,t,o){e.exports=o(8418)},7462:function(e,t,o){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}o.d(t,{Z:function(){return n}})},3366:function(e,t,o){"use strict";function n(e,t){if(null==e)return{};var o,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}o.d(t,{Z:function(){return n}})},4111:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},1438:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}o.d(t,{Z:function(){return n}})},2951:function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}o.d(t,{Z:function(){return r}})},460:function(e,t,o){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}o.d(t,{Z:function(){return u}});var r=o(4111);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var o,u,a,c,l,f=n(e);if(t){var i,s=n(this).constructor;l=Reflect.construct(f,arguments,s)}else l=f.apply(this,arguments);return(u=l)&&("object"==(u&&u.constructor===Symbol?"symbol":typeof u)||"function"==typeof u)?u:(0,r.Z)(this)}}},8029:function(e,t,o){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");if(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t){var o,r;n(e,t)}}o.d(t,{Z:function(){return r}})}}]);