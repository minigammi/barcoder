(this.webpackJsonpbarcoder=this.webpackJsonpbarcoder||[]).push([[0],[,,,,,function(e,t,n){e.exports={Barcode:"Barcode_Barcode__3yPAw",BarcodeSvg:"Barcode_BarcodeSvg__2d1ws",BarcodeSpace:"Barcode_BarcodeSpace__1FWtV",BarcodeRemove:"Barcode_BarcodeRemove__3WOpM",BarcodeCodeInput:"Barcode_BarcodeCodeInput__3xjvr",Hidden:"Barcode_Hidden__1xyo4"}},,,,function(e,t,n){e.exports={CircleButton:"CircleButton_CircleButton__1Sc0r"}},,function(e,t,n){e.exports={Header:"Header_Header__2Ju7O",HeaderTitle:"Header_HeaderTitle__2P-6f",HeaderContent:"Header_HeaderContent__OX7_J"}},,function(e,t,n){e.exports={Button:"Button_Button__dTdoO",ButtonPrimary:"Button_ButtonPrimary__2Enhv"}},function(e,t,n){e.exports={AddButtonContainer:"AddButton_AddButtonContainer__1IJvW",AddButton:"AddButton_AddButton__3Gjq2",BarcodeSpace:"AddButton_BarcodeSpace__rZuXz",BarcodeInput:"AddButton_BarcodeInput__8HR5m"}},function(e,t,n){e.exports={Input:"Input_Input__2QxXH",Printable:"Input_Printable__8SV6M"}},,,,,,function(e,t,n){e.exports={Container:"Container_Container__3SQ4O"}},function(e,t,n){e.exports={ProjectsMenu:"ProjectsMenu_ProjectsMenu__4vtwK"}},,function(e,t,n){e.exports=n(40)},,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=n(1),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u,s,m,p=n(3),v=n(4),f=n(6),b=n(2),h=(n(12),u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(v.a)(this,e),Object(p.a)(this,"list",s,this),Object(p.a)(this,"selectedIndex",m,this),this.list=t,this.selectedIndex=n}return Object(f.a)(e,[{key:"selectedProject",get:function(){return this.list[this.selectedIndex]}}]),e}(),s=Object(b.a)(u.prototype,"list",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=Object(b.a)(u.prototype,"selectedIndex",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(b.a)(u.prototype,"selectedProject",[i.f],Object.getOwnPropertyDescriptor(u.prototype,"selectedProject"),u.prototype),u);var g,_,y,B,j,w,O,C,E=function(){return"new_".concat(Math.floor(1e8*Math.random()).toString(16))},P=(g=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;Object(v.a)(this,e),this.id=void 0,Object(p.a)(this,"code",_,this),Object(p.a)(this,"comment",y,this),this.id=r||E(),this.code=t,this.comment=n},_=Object(b.a)(g.prototype,"code",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=Object(b.a)(g.prototype,"comment",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g),k=(B=i.d.bound,j=i.d.bound,w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;Object(v.a)(this,e),this.id=void 0,Object(p.a)(this,"name",O,this),Object(p.a)(this,"barcodes",C,this),this.id=r||E(),this.name=t,this.barcodes=n}return Object(f.a)(e,[{key:"clear",value:function(){return this.barcodes=[],this}},{key:"addBarcode",value:function(){return this.barcodes.push(new P),this}},{key:"removeBarcode",value:function(e){return this.barcodes=this.barcodes.filter((function(t){return t!==e})),this}}]),e}(),O=Object(b.a)(w.prototype,"name",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Object(b.a)(w.prototype,"barcodes",[i.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(b.a)(w.prototype,"clear",[B],Object.getOwnPropertyDescriptor(w.prototype,"clear"),w.prototype),Object(b.a)(w.prototype,"addBarcode",[j],Object.getOwnPropertyDescriptor(w.prototype,"addBarcode"),w.prototype),w),S=function(){function e(){Object(v.a)(this,e)}return Object(f.a)(e,null,[{key:"saveProjects",value:function(t){localStorage.setItem(e.storageKey,JSON.stringify(t))}},{key:"getProjects",value:function(){var t=localStorage.getItem(e.storageKey),n=t?JSON.parse(t):[];if(!n||0===n.length)return[new k,new k,new k];var r=function(e){return new P(e.code,e.comment,e.id)};return n[0].code||n[0].comment?[new k("",n[0].map(r)),new k,new k]:n.map((function(e){return new k(e.name,e.barcodes.map(r),e.id)}))}}]),e}();S.storageKey="barcodes";var x=S,I=n(10),N=n(7),A=n.n(N),H=n(13),R=n.n(H);function W(e){var t=e.children,n=e.type,r=e.title,o=e.onClick,c=e.className,i=e.primary;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:n,onClick:o,className:A()(R.a.Button,i&&R.a.ButtonPrimary,c),title:r},t)," ")}W.defaultProps={type:"button",primary:!1};var z=W,M=n(9),J=n.n(M),T=n(14),L=n.n(T);var K=function(e){var t=e.onClick;return a.a.createElement("div",{className:L.a.AddButtonContainer},a.a.createElement(z,{className:"".concat(L.a.AddButton," ").concat(J.a.CircleButton),onClick:t,title:"Add barcode",primary:!0},"+"))},D=n(23),F=n(18),U=n.n(F),X=n(15),Q=n.n(X);function V(e){var t=e.value,n=e.id,r=e.name,o=void 0===r?n:r,c=e.onChange,i=e.label,l=e.className,d=e.visibleOnPrint,u=A()(Q.a.Input,d&&!!t&&Q.a.Printable,l);return a.a.createElement("label",{className:u},a.a.createElement("input",{type:"text",id:n,name:o,value:t,onChange:c,maxLength:25,placeholder:" "}),a.a.createElement("span",null,i))}V.defaultProps={value:"",visibleOnPrint:!1};var q=Object(r.memo)(V),G=n(19),Z=n.n(G),$=n(20),Y=n.n($),ee={encoder:Z.a,renderer:Y.a,width:1.2,height:100,fontSize:20,margins:16},te=n(5),ne=n.n(te);function re(e){var t=e.children,n=ee.height+2*ee.margins+ee.fontSize/2-32;return a.a.createElement("div",{style:{height:n,margin:16},className:ne.a.BarcodeSpace},t)}function ae(e){return{display:e?"block":"none"}}var oe=Object(I.a)((function(e){var t=e.barcode,n=e.onRemove,o=Object(r.useRef)(null),c=Object(r.useState)(""),i=Object(D.a)(c,2),l=i[0],d=i[1],u=!l&&(!o||o&&!!t.code);Object(r.useEffect)((function(){if(t.code)try{U()(o.current,t.code,ee),l&&d("")}catch(e){d("invalid input")}}),[t.code,l]);var s=A()(ne.a.Barcode,!u&&ne.a.Hidden);return a.a.createElement("div",{className:s},a.a.createElement(z,{className:"".concat(ne.a.BarcodeRemove," ").concat(J.a.CircleButton),onClick:function(){return n(t)},type:"button",title:"Remove barcode"},"+"),a.a.createElement("svg",{ref:o,className:ne.a.BarcodeSvg,style:ae(u)}),!u&&a.a.createElement(re,null,l||"empty"),a.a.createElement(q,{className:ne.a.BarcodeCodeInput,id:"bci_".concat(t.id),value:t.code,onChange:function(e){return t.code=e.target.value},label:"Code"}),a.a.createElement(q,{id:"bcc_".concat(t.id),value:t.comment,onChange:function(e){return t.comment=e.target.value},label:"Comment",visibleOnPrint:!0}))})),ce=n(21),ie=n.n(ce);var le=function(e){var t=e.children;return a.a.createElement("div",{className:ie.a.Container},t)},de=n(11),ue=n.n(de);var se=function(e){var t=e.children;return a.a.createElement("div",{className:ue.a.Header},a.a.createElement("h1",{className:ue.a.HeaderTitle},"Barcoder"),a.a.createElement("div",{className:ue.a.HeaderContent},t))},me=n(22),pe=n.n(me);var ve=function(e){var t=e.children;return a.a.createElement("div",{className:pe.a.ProjectsMenu},t)};var fe=Object(I.a)((function(e){var t=e.projectsList;return a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,a.a.createElement(z,{onClick:t.selectedProject.clear},"Clear"),a.a.createElement(z,{primary:!0,onClick:function(){return window.print()}},"Print")),a.a.createElement(le,null,a.a.createElement(ve,null,t.list.map((function(e,n){return a.a.createElement(z,{key:n,primary:n===t.selectedIndex,onClick:function(){return t.selectedIndex=n}},n+1)})))),a.a.createElement(le,null,t.selectedProject.barcodes.map((function(e){return a.a.createElement(oe,{key:e.id,barcode:e,onRemove:function(){return t.selectedProject.removeBarcode(e)}})}))),a.a.createElement(K,{onClick:t.selectedProject.addBarcode}))})),be=(n(39),new h(x.getProjects()));Object(i.e)((function(){return x.saveProjects(be.list)})),c.a.render(a.a.createElement(fe,{projectsList:be}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/barcoder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/barcoder","/service-worker.js");l?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}],[[24,1,2]]]);
//# sourceMappingURL=main.b5ea8705.chunk.js.map