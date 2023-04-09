"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[4745],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),p=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(k,i(i({ref:e},s),{},{components:n})):o.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/8HcjpiK.png",sidebar_label:"Icons",sidebar_position:1},i="Blazor Icons",l={unversionedId:"content/icons",id:"content/icons",title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",source:"@site/docs/03-content/icons.md",sourceDirName:"03-content",slug:"/content/icons",permalink:"/docs/content/icons",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/03-content/icons.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/8HcjpiK.png",sidebar_label:"Icons",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Blazor Server",permalink:"/docs/layout/blazor-server"},next:{title:"Auto Complete",permalink:"/docs/forms/autocomplete"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Icons",id:"icons",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Inline text with icon",id:"inline-text-with-icon",level:3},{value:"Link with icon",id:"link-with-icon",level:3},{value:"Link with custom icon",id:"link-with-custom-icon",level:3},{value:"Button with icon and text",id:"button-with-icon-and-text",level:3},{value:"Button with icon only",id:"button-with-icon-only",level:3},{value:"Bootstrap Icons",id:"bootstrap-icons",level:3}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-icons"},"Blazor Icons"),(0,a.kt)("p",null,"Blazor Bootstrap icon component will display an icon from any icon font."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Bootstrap Icons or other."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Refer: ",(0,a.kt)("a",{parentName:"li",href:"https://icons.getbootstrap.com/"},"Bootstrap Icons")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include the icon fonts stylesheet in your website ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@import")," in CSS from CDN."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">\n')),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CustomIconName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify custom icons of your own, like ",(0,a.kt)("inlineCode",{parentName:"td"},"fontawesome"),". Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"fas fa-alarm-clock")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IconName")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets or sets the icon name."),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IconSize")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets or sets the icon size."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IconSize.None"))))),(0,a.kt)("admonition",{title:"NOTE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Either ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomIconName")," parameter is mandatory.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"icons"},"Icons"),(0,a.kt)("img",{src:"https://i.imgur.com/WClg4kQ.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm"></Icon>\n    <Icon Name="IconName.AlarmFill"></Icon>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#examples"},"See icons demo here.")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("img",{src:"https://i.imgur.com/ko7c6k3.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm" Size="IconSize.x2"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x3"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x4"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x5"></Icon>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#sizes"},"See icons with different size demo here.")),(0,a.kt)("h3",{id:"inline-text-with-icon"},"Inline text with icon"),(0,a.kt)("img",{src:"https://i.imgur.com/eNKFAKg.jpg",alt:"Blazor Bootstrap: Icon Component - Inline text with icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    Inline text <Icon Name="IconName.Alarm" />\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#inline-text-with-icon"},"See inline text with icon demo here.")),(0,a.kt)("h3",{id:"link-with-icon"},"Link with icon"),(0,a.kt)("img",{src:"https://i.imgur.com/pDpv29z.jpg",alt:"Blazor Bootstrap: Icon Component - Link with icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon Name="IconName.Alarm" />\n    </a>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#link-with-icon"},"See link with icon demo here.")),(0,a.kt)("h3",{id:"link-with-custom-icon"},"Link with custom icon"),(0,a.kt)("img",{src:"https://i.imgur.com/KNFvgiS.jpg",alt:"Blazor Bootstrap: Icon Component - Link with custom icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon CustomIconName="bi bi-bootstrap" />\n    </a>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#link-with-custom-icon"},"See link with custom icon demo here.")),(0,a.kt)("h3",{id:"button-with-icon-and-text"},"Button with icon and text"),(0,a.kt)("img",{src:"https://i.imgur.com/Pkzbm1Q.jpg",alt:"Blazor Bootstrap: Icon Component - Button with icon and text"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Success"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"><Icon Name="IconName.AlarmFill" /> Button </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#button-with-icon-and-text"},"See button with icon and text demo here.")),(0,a.kt)("h3",{id:"button-with-icon-only"},"Button with icon only"),(0,a.kt)("img",{src:"https://i.imgur.com/3WClQmS.jpg",alt:"Blazor Bootstrap: Icon Component - Button with icon only"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Secondary"><Icon Name="IconName.Alarm" /></Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#button-with-icon-only"},"See button with icon only demo here.")),(0,a.kt)("h3",{id:"bootstrap-icons"},"Bootstrap Icons"),(0,a.kt)("img",{src:"https://i.imgur.com/8HcjpiK.png",alt:"Blazor Bootstrap: Icon Component - Bootstrap Icons"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#bootstrap-icons"},"See all bootstrap icons demo here.")))}m.isMDXComponent=!0}}]);