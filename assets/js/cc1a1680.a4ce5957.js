"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[8964],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var o=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),m=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=m(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),b=m(a),d=r,u=b["".concat(s,".").concat(d)]||b[d]||c[d]||l;return a?o.createElement(u,n(n({ref:e},p),{},{components:a})):o.createElement(u,n({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,n=new Array(l);n[0]=b;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,n[1]=i;for(var m=2;m<l;m++)n[m]=a[m];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2935:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var o=a(7462),r=(a(7294),a(3905));const l={title:"Blazor Bootstrap v1.4.1",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.4.1","blazor","bootstrap","bootstrap5","blazorbootstrap","modal","blazormodal","confirmmodal","blazorconfirmmodal","dialog","blazordialog"]},n=void 0,i={permalink:"/blog/2023/01/23/blazorbootstrap-1.4.1",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2023-01-23-blazorbootstrap-1.4.1.md",source:"@site/blog/2023-01-23-blazorbootstrap-1.4.1.md",title:"Blazor Bootstrap v1.4.1",description:"We are excited to release 1.4.1, with modal updates and more examples!!!",date:"2023-01-23T00:00:00.000Z",formattedDate:"January 23, 2023",tags:[{label:"v1.4.1",permalink:"/blog/tags/v-1-4-1"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"bootstrap",permalink:"/blog/tags/bootstrap"},{label:"bootstrap5",permalink:"/blog/tags/bootstrap-5"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"modal",permalink:"/blog/tags/modal"},{label:"blazormodal",permalink:"/blog/tags/blazormodal"},{label:"confirmmodal",permalink:"/blog/tags/confirmmodal"},{label:"blazorconfirmmodal",permalink:"/blog/tags/blazorconfirmmodal"},{label:"dialog",permalink:"/blog/tags/dialog"},{label:"blazordialog",permalink:"/blog/tags/blazordialog"}],readingTime:.55,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.4.1",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.4.1","blazor","bootstrap","bootstrap5","blazorbootstrap","modal","blazormodal","confirmmodal","blazorconfirmmodal","dialog","blazordialog"]},nextItem:{title:"Blazor Bootstrap v1.4.0",permalink:"/blog/2023/01/15/blazorbootstrap-1.4.0"}},s={authorsImageUrls:[void 0]},m=[{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Demos site updates",id:"demos-site-updates",level:2},{value:"Links",id:"links",level:2}],p={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are excited to release 1.4.1, with modal updates and more examples!!!"),(0,r.kt)("b",null,"Blazor modal component"),(0,r.kt)("img",{src:"https://i.imgur.com/dQMxYxw.png",alt:"Blazor Bootstrap: Blazor modal component"}),(0,r.kt)("h2",{id:"whats-changed"},"What's changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Modal")," component",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Render different components dynamically within the modal without iterating through possible types or using conditional logic."),(0,r.kt)("li",{parentName:"ul"},"If dynamically-rendered components have component parameters, pass them as an ",(0,r.kt)("inlineCode",{parentName:"li"},"IDictionary<string, object>"),"."),(0,r.kt)("li",{parentName:"ul"},"Pass event callbacks to a dynamic component.")))),(0,r.kt)("h2",{id:"demos-site-updates"},"Demos site updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New examples for ",(0,r.kt)("inlineCode",{parentName:"li"},"Blazor Modal Component")),(0,r.kt)("li",{parentName:"ul"},"New examples for ",(0,r.kt)("inlineCode",{parentName:"li"},"Blazor Confirm Dialog Component"))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/modal"},"Blazor Modal Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/confirm-dialog"},"Blazor Confirm Dialog Documentation"))))}c.isMDXComponent=!0}}]);