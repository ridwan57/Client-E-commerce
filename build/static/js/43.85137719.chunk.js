(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[43],{154:function(t,e,n){"use strict";n.d(e,"k",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return p})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return f})),n.d(e,"a",(function(){return O})),n.d(e,"i",(function(){return x}));var r=n(12),a=n.n(r),c=n(15),s=n(23),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/address"),{address:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/order"),{stripeResponse:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/cash-order"),{COD:n,couponApplied:r},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("http://localhost:8000/api","/user/wishlist/").concat(e),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},982:function(t,e,n){"use strict";n.r(e);var r=n(33),a=n(111),c=n(0),s=n(21),u=n(43),o=n(154),i=n(785),p=n.n(i),l=(n(885),n(2));e.default=function(t){var e=t.history,n=Object(c.useState)([]),i=Object(a.a)(n,2),d=i[0],h=i[1],b=Object(c.useState)(0),j=Object(a.a)(b,2),f=j[0],O=j[1],x=Object(c.useState)(""),m=Object(a.a)(x,2),v=m[0],k=m[1],y=Object(c.useState)(!1),w=Object(a.a)(y,2),g=w[0],C=w[1],N=Object(c.useState)(""),S=Object(a.a)(N,2),A=S[0],D=S[1],P=Object(c.useState)(0),E=Object(a.a)(P,2),R=E[0],T=E[1],I=Object(c.useState)(""),_=Object(a.a)(I,2),U=_[0],J=_[1],L=Object(s.b)(),F=Object(s.c)((function(t){return Object(r.a)({},t)})),G=F.user,H=F.COD,$=Object(s.c)((function(t){return t.coupon}));Object(c.useEffect)((function(){Object(o.f)(G.token).then((function(t){console.log("user cart res",JSON.stringify(t.data,null,4)),h(t.data.products),O(t.data.cartTotal)}))}),[]);var q=function(){Object(o.j)(G.token,v).then((function(t){t.data.ok&&(C(!0),u.b.success("Address saved"))}))},z=function(){console.log("send coupon to backend",A),Object(o.b)(G.token,A).then((function(t){console.log("RES ON COUPON APPLIED",t.data),t.data&&(T(t.data),L({type:"COUPON_APPLIED",payload:!0})),t.data.err&&J(t.data.err)}))};return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h4",{children:"Delivery Address"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{theme:"snow",value:v,onChange:k}),Object(l.jsx)("button",{className:"btn btn-primary mt-2",onClick:q,children:"Save"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{children:"Got Coupon?"}),Object(l.jsx)("br",{}),d.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{onChange:function(t){D(t.target.value),J("")},value:A,type:"text",className:"form-control",disabled:!d.length}),Object(l.jsx)("button",{disabled:!d.length,onClick:z,className:"btn btn-primary mt-2",children:"Apply"})]}),Object(l.jsx)("br",{}),U&&Object(l.jsx)("p",{className:"bg-danger p-2",children:U})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h4",{children:"Order Summary"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["Products ",d.length]}),Object(l.jsx)("hr",{}),d.map((function(t,e){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:[t.product.title," (",t.color,") x ",t.count," ="," ",t.product.price*t.count]})},e)})),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["Cart Total: ",f]}),R>0&&Object(l.jsxs)("p",{className:"bg-success p-2",children:["Discount Applied: Total Payable: $",R]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-6",children:H?Object(l.jsx)("button",{onClick:function(){Object(o.c)(G.token,H,$).then((function(t){console.log("USER CASH ORDER CREATED:",t.data),t.data.ok?("undefined"!==typeof window&&localStorage.removeItem("cart"),L({type:"ADD_TO_CART",payload:[]}),L({type:"COD",payload:!1}),L({type:"COUPON_APPLIED",payload:!1}),Object(o.e)(G.token),u.b.success("Order Placed"),e.push("/user/history")):u.b.error("Cash On Order placed failed")})).catch((function(t){console.log(t)}))},className:"btn btn-primary",disabled:!g||!d.length,children:"Checkout"}):Object(l.jsx)("button",{onClick:function(){return e.push("/payment")},className:"btn btn-primary",disabled:!g||!d.length,children:"Place Order"})}),Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("button",{disabled:!d.length,onClick:function(){"undefined"!==typeof window&&localStorage.removeItem("cart"),L({type:"ADD_TO_CART",payload:[]}),Object(o.e)(G.token).then((function(t){h([]),O(0),T(0),D(""),u.b.success("Cart is emapty. Contniue shopping.")}))},className:"btn btn-primary",children:"Empty Cart"})})]})]})]})}}}]);
//# sourceMappingURL=43.85137719.chunk.js.map