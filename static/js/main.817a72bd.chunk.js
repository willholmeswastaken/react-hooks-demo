(this["webpackJsonpreact-hooks-demo"]=this["webpackJsonpreact-hooks-demo"]||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(34),a(35),a(36),a(10)),u=a(9),m=a(8),i=a(5),E=a(12),s=a(7),d=function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(void 0),d=Object(o.a)(c,2),f=d[0],p=d[1];return l.a.createElement(u.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Group,{controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Name"),l.a.createElement(i.a.Control,{placeholder:"Enter name",onKeyUp:function(e){return r(e.target.value)}}),l.a.createElement(i.a.Text,{className:"text-muted"},"We'll never share your name with anyone else.")),l.a.createElement(i.a.Group,{controlId:"formBasicPassword"},l.a.createElement(i.a.Label,null,"Age"),l.a.createElement(i.a.Control,{placeholder:"Enter age",onKeyUp:function(e){return p(e.target.value)}})),l.a.createElement(E.a,{variant:"primary",type:"button",onClick:function(){return alert("".concat(a," : ").concat(f))}},"Submit")))))},f=function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(void 0),d=Object(o.a)(c,2),f=d[0],p=d[1];return Object(n.useEffect)((function(){alert("hi this is the use effect hook being hit on mount!")}),[]),l.a.createElement(u.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Group,{controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Name"),l.a.createElement(i.a.Control,{placeholder:"Enter name",onKeyUp:function(e){return r(e.target.value)}}),l.a.createElement(i.a.Text,{className:"text-muted"},"We'll never share your name with anyone else.")),l.a.createElement(i.a.Group,{controlId:"formBasicPassword"},l.a.createElement(i.a.Label,null,"Age"),l.a.createElement(i.a.Control,{placeholder:"Enter age",onKeyUp:function(e){return p(e.target.value)}})),l.a.createElement(E.a,{variant:"primary",type:"button",onClick:function(){return alert("".concat(a," : ").concat(f))}},"Submit")))))},p=a(16),v={name:"will",age:23},h=function(e,t){switch(t.type){case"NAME_UPDATE":return Object(p.a)(Object(p.a)({},e),{},{name:t.val});case"AGE_UPDATE":return Object(p.a)(Object(p.a)({},e),{},{age:t.val});default:throw new Error}},b=function(){var e=Object(n.useReducer)(h,v),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(u.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Group,{controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Name"),l.a.createElement(i.a.Control,{placeholder:"Enter name",onKeyUp:function(e){return r({type:"NAME_UPDATE",val:e.target.value})}}),l.a.createElement(i.a.Text,{className:"text-muted"},"We'll never share your name with anyone else.")),l.a.createElement(i.a.Group,{controlId:"formBasicPassword"},l.a.createElement(i.a.Label,null,"Age"),l.a.createElement(i.a.Control,{placeholder:"Enter age",onKeyUp:function(e){return r({type:"AGE_UPDATE",val:e.target.value})}})),l.a.createElement(E.a,{variant:"primary",type:"button",onClick:function(){return alert("".concat(a.name," : ").concat(a.age))}},"Submit")))))},y=a(28),g=a(23);var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h1",null,"Welcome to the form playground!"))),l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h4",null,"Pick your form type below..."))),l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(y.a,{defaultActiveKey:"useState",id:"uncontrolled-tab-example"},l.a.createElement(g.a,{eventKey:"useState",title:"UseState"},l.a.createElement(d,null)),l.a.createElement(g.a,{eventKey:"useReducer",title:"UseReducer"},l.a.createElement(b,null)),l.a.createElement(g.a,{eventKey:"useStateEffect",title:"UseStateEffect"},l.a.createElement(f,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.817a72bd.chunk.js.map