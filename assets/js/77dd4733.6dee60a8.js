"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5721],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>m});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},g=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),c=p(r),m=o,u=c["".concat(s,".").concat(m)]||c[m]||b[m]||n;return r?a.createElement(u,l(l({ref:e},g),{},{components:r})):a.createElement(u,l({ref:e},g))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4467:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={title:"Blazor Bootstrap v0.5.1",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.5.1","blazorbootstrap","blazorgrid","blazor-grid","blazor-grid-sorting","blazor-grid-filtering","blazor-grid-paging"]},l=void 0,i={permalink:"/blog/2022/10/22/blazorbootstrap-0.5.1",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-10-22-blazorbootstrap-0.5.1.md",source:"@site/blog/2022-10-22-blazorbootstrap-0.5.1.md",title:"Blazor Bootstrap v0.5.1",description:"We are excited to release 0.5.1 with blazor grid enhancements.",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[{label:"v0.5.1",permalink:"/blog/tags/v-0-5-1"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"blazorgrid",permalink:"/blog/tags/blazorgrid"},{label:"blazor-grid",permalink:"/blog/tags/blazor-grid"},{label:"blazor-grid-sorting",permalink:"/blog/tags/blazor-grid-sorting"},{label:"blazor-grid-filtering",permalink:"/blog/tags/blazor-grid-filtering"},{label:"blazor-grid-paging",permalink:"/blog/tags/blazor-grid-paging"}],readingTime:.3,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v0.5.1",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.5.1","blazorbootstrap","blazorgrid","blazor-grid","blazor-grid-sorting","blazor-grid-filtering","blazor-grid-paging"]},prevItem:{title:"Blazor Bootstrap v0.6.0",permalink:"/blog/2022/10/30/blazorbootstrap-0.6.0"},nextItem:{title:"BlazorBootstrap v0.5.0",permalink:"/blog/2022/10/16/blazorbootstrap-0.5.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Grid Enhancements",id:"grid-enhancements",level:3},{value:"Links",id:"links",level:3}],g={toc:p};function b(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are excited to release ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5.1")," with blazor grid enhancements."),(0,o.kt)("img",{src:"https://i.imgur.com/weFYVWA.png",alt:"Blazor Grid Component - Sorting, Filtering, and Paging"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"grid-enhancements"},"Grid Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for save/load Grid state. The state includes the ",(0,o.kt)("strong",{parentName:"li"},"page number"),", ",(0,o.kt)("strong",{parentName:"li"},"page size"),", and ",(0,o.kt)("strong",{parentName:"li"},"filters"),"."),(0,o.kt)("li",{parentName:"ul"},"Performance improvements by removing unnecessary conversions")),(0,o.kt)("h3",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/grid"},"Demo Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/grid"},"Blazor Grid Component Documentation"))))}b.isMDXComponent=!0}}]);