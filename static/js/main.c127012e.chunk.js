(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),i=(a(9),a(3)),o=a(0),d="009214338f9d92fe389ca2237cc8237b",l="https://api.openweathermap.org/data/2.5",u=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),s=Object(i.a)(r,2),u=s[0],h=s[1];return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},className:"search-bar",placeholder:"Search...",value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"/weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),n(""),console.log(e)}))}})}),"undefined"!=typeof u.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0"]}),Object(o.jsx)("div",{className:"weather",children:u.weather[0].main})]})]}):""]})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.c127012e.chunk.js.map