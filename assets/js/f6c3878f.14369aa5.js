"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[9888],{3905:(t,e,r)=>{r.d(e,{Zo:()=>b,kt:()=>c});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},b=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,p=t.parentName,b=s(t,["components","mdxType","originalType","parentName"]),u=m(r),c=o,g=u["".concat(p,".").concat(c)]||u[c]||i[c]||l;return r?a.createElement(g,n(n({ref:e},b),{},{components:r})):a.createElement(g,n({ref:e},b))}));function c(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,n=new Array(l);n[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,n[1]=s;for(var m=2;m<l;m++)n[m]=r[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9793:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>n,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),o=(r(67294),r(3905));const l={title:"Blazor Bootstrap v1.4.2",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.4.2","blazor","bootstrap","bootstrap5","bootstrap-5","blazorbootstrap","autocomplete","blazor-autocomplete","blazor-templates","blazor-starter-templates","blazorbootstrap-starter-templates"]},n=void 0,s={permalink:"/blog/2023/01/30/blazorbootstrap-1.4.2",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2023-01-30-blazorbootstrap-1.4.2.md",source:"@site/blog/2023-01-30-blazorbootstrap-1.4.2.md",title:"Blazor Bootstrap v1.4.2",description:"We are excited to release 1.4.2, with Auto Complete updates and new starter templates for blazor webassembly and blazor server!!!",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"v1.4.2",permalink:"/blog/tags/v-1-4-2"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"bootstrap",permalink:"/blog/tags/bootstrap"},{label:"bootstrap5",permalink:"/blog/tags/bootstrap-5"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"autocomplete",permalink:"/blog/tags/autocomplete"},{label:"blazor-autocomplete",permalink:"/blog/tags/blazor-autocomplete"},{label:"blazor-templates",permalink:"/blog/tags/blazor-templates"},{label:"blazor-starter-templates",permalink:"/blog/tags/blazor-starter-templates"},{label:"blazorbootstrap-starter-templates",permalink:"/blog/tags/blazorbootstrap-starter-templates"}],readingTime:.49,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.4.2",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.4.2","blazor","bootstrap","bootstrap5","bootstrap-5","blazorbootstrap","autocomplete","blazor-autocomplete","blazor-templates","blazor-starter-templates","blazorbootstrap-starter-templates"]},prevItem:{title:"Blazor Bootstrap v1.4.3",permalink:"/blog/2023/02/07/blazorbootstrap-1.4.3"},nextItem:{title:"Blazor Bootstrap v1.4.1",permalink:"/blog/2023/01/23/blazorbootstrap-1.4.1"}},p={authorsImageUrls:[void 0]},m=[{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Starter Templates",id:"starter-templates",level:2},{value:"Links",id:"links",level:2}],b={toc:m};function i(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are excited to release 1.4.2, with Auto Complete updates and new starter templates for blazor webassembly and blazor server!!!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blazor Bootstrap: Blazor WebAssembly and Server starter templates")),(0,o.kt)("img",{src:"https://i.imgur.com/4P8u0HR.png",alt:"Blazor Bootstrap: Blazor WebAssembly and Server starter templates"}),(0,o.kt)("h2",{id:"whats-changed"},"What's changed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Auto Complete")," component",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bug fix")))),(0,o.kt)("h2",{id:"starter-templates"},"Starter Templates"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Blazor Bootstrap: Blazor WebAssembly Template"),(0,o.kt)("li",{parentName:"ol"},"Blazor Bootstrap: Blazor WebAssembly Empty Template"),(0,o.kt)("li",{parentName:"ol"},"Blazor Bootstrap: Blazor Server Template"),(0,o.kt)("li",{parentName:"ol"},"Blazor Bootstrap: Blazor Server Empty Template")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/autocomplete"},"Blazor Auto Complete Documentation"))))}i.isMDXComponent=!0}}]);