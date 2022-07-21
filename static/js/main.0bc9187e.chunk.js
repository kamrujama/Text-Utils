(this["webpackJsonptextutils-app"]=this["webpackJsonptextutils-app"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(8),l=s.n(n),o=(s(17),s(4)),r=(s(18),s(0));function i(e){return e.alertMsg&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alertMsg.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[e.alertMsg.type[0].toUpperCase()+e.alertMsg.type.slice(1)," !"]})," ",e.alertMsg.msg]})}var d=s.p+"static/media/pic.f48cfa95.jpg";function b(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("h2",{children:"About Me"})}),Object(r.jsxs)("div",{className:"details",children:[Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:d,alt:""})}),Object(r.jsxs)("div",{className:"information",children:[Object(r.jsx)("h2",{children:"Kamrujama Ansari"}),Object(r.jsx)("span",{children:"Software Developer"})]})]})]})})}var h=s(5);function j(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(h.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{class:"form-check form-switch",children:[Object(r.jsx)("input",{class:"form-check-input",type:"checkbox",onClick:e.setMode,role:"switch",id:"mode"}),Object(r.jsxs)("label",{class:"form-check-label text-".concat("light"===e.mode?"dark":"light"),for:"mode",children:["Enable ","light"===e.mode?"dark":"light"," Mode"]})]})]})]})})})}function m(e){var t=Object(c.useState)(""),s=Object(o.a)(t,2),a=s[0],n=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:a,id:"textForm",onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"light"===e.mode?"black":"white"},rows:"8"})}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"),onClick:function(){if(a===a.toUpperCase()&&a!==a.toLowerCase())e.showAlert("Texts are already converted to uppercase.","success");else if(0!==a.length){var t=a.toUpperCase();n(t),e.showAlert("Text Converted to UpperCase","success")}else e.showAlert("Box is empty, Nothing to convert in UpperCase","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," m-2"),onClick:function(){if(a===a.toLowerCase()&&a!==a.toUpperCase())e.showAlert("Texts are already in lowercase.","success");else if(0!==a.length){var t=a.toLowerCase();n(t),e.showAlert("Text Converted to LowerCase","success")}else e.showAlert("Box is empty. Nothing to convert in LowerCase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," m-2"),onClick:function(){if(0!==a.length){n(""),e.showAlert("All Text in the box is cleared","success")}else e.showAlert("Box is already cleared. Nothing to clear.","success")},children:"Clear"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," m-2"),onClick:function(){if(0!==a.length){var t=document.getElementById("textForm");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("All text in the box is copied to clipboard","success")}else e.showAlert("Box is empty. Nothing to copy.","success")},children:"Click to Copy"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," m-2"),onClick:function(){if(a.split(" ").length>1){var t=a.split(/[ ]+/);n(t.join(" ")),e.showAlert("All Spaces are removed","success")}else 1===a.split(" ").length?e.showAlert("There is only one word in the box. No Space can be removed.","success"):e.showAlert("Box is empty. No Spaces removed.","success")},children:"Remove Extra Space"})]}),Object(r.jsxs)("div",{className:"container my-2",children:[Object(r.jsx)("h3",{children:"Your Text Summary"}),Object(r.jsxs)("p",{className:"lead",children:[Object(r.jsx)("b",{children:a.split(" ").length-1})," word and ",Object(r.jsx)("b",{children:a.length})," characters"]}),Object(r.jsxs)("p",{className:"lead",children:[" ",Object(r.jsx)("b",{children:.008*a.split(" ").length})," minute it will take to read"]}),Object(r.jsxs)("p",{className:"lead",children:[Object(r.jsx)("b",{children:a.split(". ").length-1})," Sentences"]}),Object(r.jsxs)("p",{className:"lead",children:[Object(r.jsx)("b",{children:a.split("\n").length-1})," Paragraphs"]}),Object(r.jsx)("h3",{children:"Your Text Preview"}),Object(r.jsx)("p",{className:"lead",children:a.length>0?a:"Enter your text in the above box for preview"})]})]})}j.defaultProps={title:"Text Utils",aboutText:"About us"};var u=s(2);var x=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(null),l=Object(o.a)(n,2),d=l[0],h=l[1],x=Object(c.useState)(null),g=Object(o.a)(x,2),p=g[0],O=g[1],v=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{title:"Text Editor",txtColor:p,setColors:function(){"green"===p&&(O("green"),document.body.style.backgroundColor="green",document.body.style.color="white")},aboutText:"About",mode:s,setMode:function(){"green"===s?(a("green"),document.body.style.backgroundColor="green",document.body.style.color="white",v("Green mode has been enabled","success")):"light"===s?(a("dark"),document.body.style.backgroundColor="#042743",document.body.style.color="white",document.title="Utils - Dark Mode",v("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black",document.title="Utils - Light Mode",v("Light mode has been enabled","success"))}}),Object(r.jsx)(i,{alertMsg:d}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",element:Object(r.jsx)(m,{showAlert:v,heading:"Enter the text to analyze",mode:s})}),Object(r.jsx)(u.a,{path:"/about",element:Object(r.jsx)(b,{})})]})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),c(e),a(e),n(e),l(e)}))};l.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h.a,{children:Object(r.jsx)(x,{})})})),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.0bc9187e.chunk.js.map