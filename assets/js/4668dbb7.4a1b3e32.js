"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Icons",sidebar_position:1},c="Icons",s={unversionedId:"content/icons",id:"content/icons",isDocsHomePage:!1,title:"Icons",description:"Documentation and examples for BlazorBootstrap Icons.",source:"@site/docs/content/icons.md",sourceDirName:"content",slug:"/content/icons",permalink:"/docs/content/icons",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/content/icons.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Icons",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Alerts",permalink:"/docs/components/alerts"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Icons",id:"icons-1",children:[],level:3},{value:"Icons with different Sizes",id:"icons-with-different-sizes",children:[],level:3},{value:"Inline text with icon",id:"inline-text-with-icon",children:[],level:3},{value:"Link with icon",id:"link-with-icon",children:[],level:3},{value:"Link with custom icon",id:"link-with-custom-icon",children:[],level:3},{value:"Button with icon and text",id:"button-with-icon-and-text",children:[],level:3},{value:"Button with icon only",id:"button-with-icon-only",children:[],level:3},{value:"Articles",id:"articles",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icons"},"Icons"),(0,a.kt)("p",null,"Documentation and examples for BlazorBootstrap Icons."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Bootstrap Icons."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Refer: ",(0,a.kt)("a",{parentName:"li",href:"https://icons.getbootstrap.com/"},"Bootstrap Icons")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include the icon fonts stylesheet in your website ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@import")," in CSS from CDN."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">\n')),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Descritpion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enum"),(0,a.kt)("td",{parentName:"tr",align:null},"Icon Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CustomIconName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify custom icons of your own, like ",(0,a.kt)("inlineCode",{parentName:"td"},"fontawesome"),". Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"fas fa-alarm-clock"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},"Enum"),(0,a.kt)("td",{parentName:"tr",align:null},"Icon Size")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"icons-1"},"Icons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm"></Icon>\n    <Icon Name="IconName.AlarmFill"></Icon>\n</p>\n')),(0,a.kt)("h3",{id:"icons-with-different-sizes"},"Icons with different Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Icon Name="IconName.Alarm" Size="IconSize.x2"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x3"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x4"></Icon>\n    <Icon Name="IconName.Alarm" Size="IconSize.x5"></Icon>\n</p>\n')),(0,a.kt)("h3",{id:"inline-text-with-icon"},"Inline text with icon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    Inline text <Icon Name="IconName.Alarm" />\n</p>\n')),(0,a.kt)("h3",{id:"link-with-icon"},"Link with icon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon Name="IconName.Alarm" />\n    </a>\n</p>\n')),(0,a.kt)("h3",{id:"link-with-custom-icon"},"Link with custom icon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <a href="#" class="text-decoration-none">\n        Example link text <Icon CustomIconName="bi bi-bootstrap" />\n    </a>\n</p>\n')),(0,a.kt)("h3",{id:"button-with-icon-and-text"},"Button with icon and text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Success"><Icon Name="IconName.Alarm" /> Button </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"><Icon Name="IconName.AlarmFill" /> Button </Button>\n</p>\n')),(0,a.kt)("h3",{id:"button-with-icon-only"},"Button with icon only"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Secondary"><Icon Name="IconName.Alarm" /></Button>\n</p>\n')),(0,a.kt)("h3",{id:"articles"},"Articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vikramlearning.com/dotnet/article/blazor-bootstrap-icon-component-examples/88/156"},"BlazorBootstrap: Icon Component Examples"))))}u.isMDXComponent=!0}}]);