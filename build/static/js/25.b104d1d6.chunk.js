(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(119);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(120);function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},120:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},131:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return p})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return b}));var r=n(12),a=n.n(r),c=n(15),s=n(23),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/categories"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/category/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("http://localhost:8000/api","/category/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("http://localhost:8000/api","/category/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/category/"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/category/subs/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},134:function(t,e,n){"use strict";n(0);var r=n(31),a=n(2);e.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/user/password",className:"nav-link",children:"password"})})]})})}},174:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"a",(function(){return f}));var r=n(12),a=n.n(r),c=n(15),s=n(23),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/subs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/sub/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("http://localhost:8000/api","/sub/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("http://localhost:8000/api","/sub/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/sub"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},193:function(t,e,n){"use strict";n(0);var r=n(2);e.a=function(t){var e=t.handleSubmit,n=t.setName,a=t.name;return Object(r.jsx)("form",{onSubmit:e,children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return n(t.target.value)},value:a,autoFocus:!0,required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn btn-outline-primary",children:"Save"})]})})}},978:function(t,e,n){"use strict";n.r(e);var r=n(111),a=n(33),c=n(0),s=n(134),u=n(43),o=n(21),i=n(131),l=n(174),p=n(193),f=n(2);e.default=function(t){var e=t.match,n=t.history,b=Object(o.c)((function(t){return Object(a.a)({},t)})).user,d=Object(c.useState)(""),h=Object(r.a)(d,2),j=h[0],m=h[1],v=Object(c.useState)(!1),O=Object(r.a)(v,2),x=O[0],y=O[1],g=Object(c.useState)([]),w=Object(r.a)(g,2),N=w[0],k=w[1],S=Object(c.useState)(""),A=Object(r.a)(S,2),C=A[0],P=A[1];Object(c.useEffect)((function(){I(),_()}),[]);var I=function(){return Object(i.b)().then((function(t){k(t.data)}))},_=function(){return Object(l.b)(e.params.slug).then((function(t){m(t.data.name),console.log("s.data.name:",t.data.name),P(t.data.parent)})).catch((function(t){return console.log("load subs",t)}))};return Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-2",children:Object(f.jsx)(s.a,{})}),Object(f.jsxs)("div",{className:"col",children:[x?Object(f.jsx)("h4",{className:"text-danger",children:"Loading.."}):Object(f.jsx)("h4",{children:"Update sub category"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Parent category"}),Object(f.jsxs)("select",{name:"category",className:"form-control",onChange:function(t){return P(t.target.value)},children:[Object(f.jsx)("option",{children:"Please select"}),N.length>0&&N.map((function(t){return Object(f.jsx)("option",{value:t._id,selected:t._id===C,children:t.name},t._id)}))]})]}),Object(f.jsx)(p.a,{handleSubmit:function(t){t.preventDefault(),y(!0),Object(l.e)(e.params.slug,{name:j,parent:C},b.token).then((function(t){y(!1),m(""),u.b.success('"'.concat(t.data.name,'" is updated')),n.push("/admin/sub")})).catch((function(t){console.log(t),y(!1),400===t.response.status&&u.b.error(t.response.data)}))},name:j,setName:m})]})]})})}}}]);
//# sourceMappingURL=25.b104d1d6.chunk.js.map