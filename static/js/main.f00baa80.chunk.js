(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),o=n.n(i),s=(n(12),n(4)),r=n(5),l=n(7),d=n(6),u=(n(13),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={firstOption:!1,secondOption:!1},e.handleFirstInputChange=function(t){e.setState({firstOption:t})},e.handleSecondInputChange=function(t){e.setState({secondOption:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return console.log(this.state),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(h,{groupName:"firstGroup",selectedOption:this.state.firstOption,handleInputChange:this.handleFirstInputChange}),Object(u.jsx)(h,{groupName:"secondGroup",selectedOption:this.state.secondOption,handleInputChange:this.handleSecondInputChange})]})})}}]),n}(a.Component),h=function(e){return Object(u.jsxs)("div",{className:"radioGroup",children:[Object(u.jsx)("div",{className:"selectedSlider ".concat(e.selectedOption)}),Object(u.jsx)(g,{id:"".concat(e.groupName,"firstRadio"),group:e.groupName,value:"left",label:"First",isSelected:"left"===e.selectedOption,handleInputChange:e.handleInputChange}),Object(u.jsx)(g,{id:"".concat(e.groupName,"SecondRadio"),group:e.groupName,value:"right",label:"Second",isSelected:"right"===e.selectedOption,handleInputChange:e.handleInputChange})]})},g=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"radio",id:e.id,name:e.group,value:e.value,onChange:function(){return e.handleInputChange(e.value)},checked:e.isSelected}),Object(u.jsx)("label",{htmlFor:e.id,children:e.label})]})},j=p,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.f00baa80.chunk.js.map