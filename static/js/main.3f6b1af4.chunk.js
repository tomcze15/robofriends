(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),n(2)),i=(n(10),n(0)),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(i.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"http://robohash.org/".concat(t,"?200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:n}),Object(i.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots;return Object(i.jsx)(i.Fragment,{children:t.map((function(e,t){return Object(i.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})},l=function(e){var t=e.handleSearchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},h=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},d=(n(12),function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),b=o[0],d=o[1],u=Object(c.useState)(0),O=Object(a.a)(u,2),f=O[0],x=O[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)})),console.log(f)}),[f]);var g=n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)("button",{onClick:function(){return x(f+1)},children:"Click Me!"}),Object(i.jsx)(l,{handleSearchChange:function(e){d(e.target.value)}}),Object(i.jsx)(h,{children:Object(i.jsx)(j,{robots:g})})]}):Object(i.jsx)("h1",{children:"Loading"})});o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.3f6b1af4.chunk.js.map