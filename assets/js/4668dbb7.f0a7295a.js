"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5102],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),m=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=m(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||r;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8656:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Icons",sidebar_position:1},c="Icons",m={unversionedId:"content/icons",id:"content/icons",isDocsHomePage:!1,title:"Icons",description:"Documentation and examples for BlazorBootstrap Icons.",source:"@site/docs/content/icons.md",sourceDirName:"content",slug:"/content/icons",permalink:"/docs/content/icons",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/content/icons.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Icons",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Alerts",permalink:"/docs/components/alerts"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Icons",id:"icons-1",children:[],level:3},{value:"Icons with different Sizes",id:"icons-with-different-sizes",children:[],level:3},{value:"Inline text with icon",id:"inline-text-with-icon",children:[],level:3},{value:"Link with icon",id:"link-with-icon",children:[],level:3},{value:"Link with custom icon",id:"link-with-custom-icon",children:[],level:3},{value:"Button with icon and text",id:"button-with-icon-and-text",children:[],level:3},{value:"Button with icon only",id:"button-with-icon-only",children:[],level:3}],level:2},{value:"Articles",id:"articles",children:[],level:2}],s={toc:p};function u(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"icons"},"Icons"),(0,r.kt)("p",null,"Documentation and examples for BlazorBootstrap Icons."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Bootstrap Icons."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Refer: ",(0,r.kt)("a",{parentName:"li",href:"https://icons.getbootstrap.com/"},"Bootstrap Icons")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Include the icon fonts stylesheet in your website ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@import")," in CSS from CDN."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CustomIconName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify custom icons of your own, like ",(0,r.kt)("inlineCode",{parentName:"td"},"fontawesome"),". Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"fas fa-alarm-clock")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IconName")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the icon name."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IconSize")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the icon size."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IconSize.None"))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Either ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomIconName")," parameter is mandatory."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"icons-1"},"Icons"),(0,r.kt)("img",{src:"https://i.imgur.com/WClg4kQ.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm"></Icon>\n    <Icon Name="IconName.AlarmFill"></Icon>\n</p>\n')),(0,r.kt)("h3",{id:"icons-with-different-sizes"},"Icons with different Sizes"),(0,r.kt)("img",{src:"https://i.imgur.com/ko7c6k3.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm" Size="IconSize.x2"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x3"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x4"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x5"></Icon>\n</p>\n')),(0,r.kt)("h3",{id:"inline-text-with-icon"},"Inline text with icon"),(0,r.kt)("img",{src:"https://i.imgur.com/eNKFAKg.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    Inline text <Icon Name="IconName.Alarm" />\n</p>\n')),(0,r.kt)("h3",{id:"link-with-icon"},"Link with icon"),(0,r.kt)("img",{src:"https://i.imgur.com/pDpv29z.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon Name="IconName.Alarm" />\n    </a>\n</p>\n')),(0,r.kt)("h3",{id:"link-with-custom-icon"},"Link with custom icon"),(0,r.kt)("img",{src:"https://i.imgur.com/KNFvgiS.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon CustomIconName="bi bi-bootstrap" />\n    </a>\n</p>\n')),(0,r.kt)("h3",{id:"button-with-icon-and-text"},"Button with icon and text"),(0,r.kt)("img",{src:"https://i.imgur.com/Pkzbm1Q.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Success"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"><Icon Name="IconName.AlarmFill" /> Button </Button>\n</p>\n')),(0,r.kt)("h3",{id:"button-with-icon-only"},"Button with icon only"),(0,r.kt)("img",{src:"https://i.imgur.com/3WClQmS.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Secondary"><Icon Name="IconName.Alarm" /></Button>\n</p>\n')),(0,r.kt)("h2",{id:"articles"},"Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vikramlearning.com/dotnet/article/blazor-bootstrap-icon-component-examples/88/156"},"BlazorBootstrap: Icon Component Examples"))))}u.isMDXComponent=!0}}]);