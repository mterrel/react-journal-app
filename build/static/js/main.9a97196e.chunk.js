/*! For license information please see main.9a97196e.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),c=n(16),l=n(32),u=n(72),s=n(73),f=Object(l.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_ALL":return e.payload;case"CREATE":return[].concat(Object(s.a)(t),[e.payload]);case"UPDATE":return t.map((function(t){return t._id===e.payload._id?e.payload:t}));case"DELETE":return t.filter((function(t){return t._id!==e.payload}));default:return t}}}),p=(n(88),n(38)),h=n(152),d=n(153),m=n(145),v=n(156),y=n(151),g=n(39),b=n(40),E=n.n(b),x="http://localhost:5000/posts",w=function(t,e){return E.a.patch("".concat(x,"/").concat(t),e)},j=function(t){return E.a.delete("".concat(x,"/").concat(t))};function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var s={};function f(){}function p(){}function h(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&n.call(v,a)&&(d=v);var y=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=h,c(y,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var L=n(17),C=n(75),k=n(154),N=n(155),_=n(64),I=n.n(_),S=n(141),T=Object(S.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1)}},paper:{padding:t.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),F=function(t){var e=t.currentId,n=t.setCurrentId,o=T(),i=Object(c.b)(),l=Object(r.useState)({author:"",title:"",content:"",tags:"",selectedFile:""}),u=Object(p.a)(l,2),s=u[0],f=u[1],h=Object(c.c)((function(t){return e?t.posts.find((function(t){return t._id===e})):null}));Object(r.useEffect)((function(){h&&f(h)}),[h]);var d=Object(r.useState)(0),v=Object(p.a)(d,2),y=v[0],b=v[1],j=function(){n(0),f({author:"",title:"",content:"",tags:"",selectedFile:""})};return a.a.createElement(C.a,{className:o.paper},a.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(o.root," ").concat(o.form),onSubmit:function(t){t.preventDefault(),b(1),0===e?(i(function(t){return function(){var e=Object(g.a)(O().mark((function e(n){var r,a;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o=t,E.a.post(x,o);case 3:r=e.sent,a=r.data,n({type:"CREATE",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}var o}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(s)),j()):(i(function(t,e){return function(){var n=Object(g.a)(O().mark((function n(r){var a,o;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w(t,e);case 3:a=n.sent,o=a.data,r({type:"UPDATE",payload:o}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}(e,s)),j())}},a.a.createElement(m.a,{variant:"h6"},e?"Editing":"Creating"," a Journal Entry"),a.a.createElement(k.a,{name:"author",variant:"outlined",label:"Author",fullWidth:!0,value:s.author,onChange:function(t){return f(Object(L.a)(Object(L.a)({},s),{},{author:t.target.value}))}}),a.a.createElement(k.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(t){return f(Object(L.a)(Object(L.a)({},s),{},{title:t.target.value}))}}),a.a.createElement(k.a,{name:"content",variant:"outlined",label:"Content",fullWidth:!0,value:s.content,onChange:function(t){return f(Object(L.a)(Object(L.a)({},s),{},{content:t.target.value}))}}),a.a.createElement(k.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(t){return f(Object(L.a)(Object(L.a)({},s),{},{tags:t.target.value.trim().split(",")}))}}),a.a.createElement("div",{className:o.fileInput,ref:function(){b(0)}},a.a.createElement(I.a,{type:"file",multiple:!1,key:y,onDone:function(t){var e=t.base64;return f(Object(L.a)(Object(L.a)({},s),{},{selectedFile:e}))}})),a.a.createElement(N.a,{className:o.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),a.a.createElement(N.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0},"Clear")))},A=n(150),D=n(146),G=n(147),P=n(148),W=n(149),B=(n(106),n(70)),z=n.n(B),J=n(69),R=n.n(J),H=Object(S.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"flex-end"}}),M=function(t){var e=t.post,n=t.setCurrentId,r=H(),o=Object(c.b)();return a.a.createElement(D.a,{className:r.card},a.a.createElement(G.a,{className:r.media,image:e.selectedFile,title:e.title}),a.a.createElement("div",{className:r.overlay},a.a.createElement(m.a,{variant:"h6"},e.author),a.a.createElement(m.a,{variant:"body2"},R()(e.createdAt).fromNow())),a.a.createElement("div",{className:r.overlay2},a.a.createElement(N.a,{style:{color:"white"},size:"small",onClick:function(){return n(e._id)}},"Edit")),a.a.createElement("div",{className:r.details},a.a.createElement(m.a,{variant:"body2",color:"textSecondary"},e.tags.map((function(t){return"#".concat(t," ")})))),a.a.createElement(m.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),a.a.createElement(P.a,null,a.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},e.content)),a.a.createElement(W.a,{className:r.cardActions},a.a.createElement(N.a,{size:"small",color:"primary",onClick:function(){return o((t=e._id,function(){var e=Object(g.a)(O().mark((function e(n){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:n({type:"DELETE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var t}},a.a.createElement(z.a,{fontSize:"small"}),"Delete")))},U=Object(S.a)((function(t){return{mainContainer:{display:"flex",alignItems:"center"}}})),Y=function(t){var e=t.setCurrentId,n=U(),r=Object(c.c)((function(t){return t.posts}));return console.log(r),r.length?a.a.createElement(y.a,{className:n.container,container:!0,alignItems:"flex-start",spacing:3},r.map((function(t){return a.a.createElement(y.a,{key:t._id,item:!0,xs:12,sm:6},a.a.createElement(M,{post:t,setCurrentId:e}))}))):a.a.createElement(A.a,null)},V=n(71),q=n.n(V),K=n(46),Q=Object(S.a)((function(t){return Object(K.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"black",fontFamily:"Roboto"},image:{marginLeft:"15px"}},t.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),X=function(){var t=Object(r.useState)(0),e=Object(p.a)(t,2),n=e[0],o=e[1],i=Q(),l=Object(c.b)();return Object(r.useEffect)((function(){l(function(){var t=Object(g.a)(O().mark((function t(e){var n,r;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get(x);case 3:n=t.sent,r=n.data,e({type:"FETCH_ALL",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[l]),a.a.createElement(h.a,{maxwidth:"lg"},a.a.createElement(d.a,{className:i.appBar,position:"static",color:"inherit"},a.a.createElement(m.a,{className:i.heading,variant:"h2",align:"center"},"My Journal"),a.a.createElement("img",{className:i.image,src:q.a,alt:"my journal",height:"60"})),a.a.createElement(v.a,{in:!0},a.a.createElement(h.a,null,a.a.createElement(y.a,{container:!0,justifyContent:"space-between",align:"stretch",spacing:3,className:i.mainContainer},a.a.createElement(y.a,{item:!0,xs:12,sm:7},a.a.createElement(Y,{setCurrentId:o})),a.a.createElement(y.a,{item:!0,xs:12,sm:4},a.a.createElement(F,{currentId:n,setCurrentId:o}))))))},Z=Object(l.d)(f,Object(l.c)(Object(l.a)(u.a)));i.a.render(a.a.createElement(c.a,{store:Z},a.a.createElement(X,null)),document.getElementById("root"))},71:function(t,e,n){t.exports=n.p+"static/media/myJournal.b182dce9.png"},80:function(t,e,n){t.exports=n(112)},88:function(t,e,n){}},[[80,1,2]]]);
//# sourceMappingURL=main.9a97196e.chunk.js.map