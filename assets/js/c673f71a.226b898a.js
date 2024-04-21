"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[86831],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(a),c=l,g=u["".concat(p,".").concat(c)]||u[c]||b[c]||o;return a?r.createElement(g,n(n({ref:e},m),{},{components:a})):r.createElement(g,n({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,n=new Array(o);n[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:l,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37777:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>n,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const o={title:"Blazor Bootstrap v1.11.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.11.0","blazor","bootstrap","bootstrap5","blazorbootstrap","autocomplete","badge","grid","pdfviewer","rangeinput","scriptloader","tabs","docs"]},n=void 0,i={permalink:"/blog/2024/02/04/blazorbootstrap-1.11.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2024-02-04-blazorbootstrap-1.11.0.md",source:"@site/blog/2024-02-04-blazorbootstrap-1.11.0.md",title:"Blazor Bootstrap v1.11.0",description:"We are excited to release version 1.11.0, featuring new PDF Viewer, Range Input, and Script Loader components, along with updates to Auto Complete, Badge, Grid, and Tabs.",date:"2024-02-04T00:00:00.000Z",formattedDate:"February 4, 2024",tags:[{label:"v1.11.0",permalink:"/blog/tags/v-1-11-0"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"bootstrap",permalink:"/blog/tags/bootstrap"},{label:"bootstrap5",permalink:"/blog/tags/bootstrap-5"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"autocomplete",permalink:"/blog/tags/autocomplete"},{label:"badge",permalink:"/blog/tags/badge"},{label:"grid",permalink:"/blog/tags/grid"},{label:"pdfviewer",permalink:"/blog/tags/pdfviewer"},{label:"rangeinput",permalink:"/blog/tags/rangeinput"},{label:"scriptloader",permalink:"/blog/tags/scriptloader"},{label:"tabs",permalink:"/blog/tags/tabs"},{label:"docs",permalink:"/blog/tags/docs"}],readingTime:1.015,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.11.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.11.0","blazor","bootstrap","bootstrap5","blazorbootstrap","autocomplete","badge","grid","pdfviewer","rangeinput","scriptloader","tabs","docs"]},prevItem:{title:"Upgrade to v2.x.x",permalink:"/blog/2024/02/25/upgrade-to-v2.0.0"},nextItem:{title:"Blazor Bootstrap v1.11.1",permalink:"/blog/2024/02/04/blazorbootstrap-1.11.1"}},p={authorsImageUrls:[void 0]},s=[{value:"What&#39;s New",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Links",id:"links",level:2}],m={toc:s},u="wrapper";function b(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We are excited to release version 1.11.0, featuring new PDF Viewer, Range Input, and Script Loader components, along with updates to Auto Complete, Badge, Grid, and Tabs."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/7Vz9Efi.png",alt:"image",title:"Blazor Bootstrap: PDF Viewer Component"})),(0,l.kt)("h2",{id:"whats-new"},"What's New"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PDF Viewer")," component",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allows users to view PDF files directly in the browser, eliminating the need for third-party browser tools or extensions."),(0,l.kt)("li",{parentName:"ul"},"Supports two callback events: OnDocumentLoaded and OnPageChanged"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Range Input")," component",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Disabled"),(0,l.kt)("li",{parentName:"ul"},"Min and Max"),(0,l.kt)("li",{parentName:"ul"},"Step"),(0,l.kt)("li",{parentName:"ul"},"Tick marks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Script Loader")," component",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allows users to load JS sctipt files dynamically on the fly.")))),(0,l.kt)("h2",{id:"whats-changed"},"What's changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Auto Complete")," component"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AutoComplete dispose issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/527"},"#527")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Badge")," component"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Badge: Demos update ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/497"},"#497")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Grid")," component"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GGrid: Filters - Support string NotEqual ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/issues/486"},"#486")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," component"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dynamic Tabs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/538"},"#538")),(0,l.kt)("li",{parentName:"ul"},"Vertical Tabs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/533"},"#533")),(0,l.kt)("li",{parentName:"ul"},"Vertical Pills Tabs",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/533"},"#533")),(0,l.kt)("li",{parentName:"ul"},"Vertical Underline Tabs",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/533"},"#533")),(0,l.kt)("li",{parentName:"ul"},"Underline Tabs",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/533"},"#533")),(0,l.kt)("li",{parentName:"ul"},"Tab: OnClick call back event ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/543"},"#543")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Other updates"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Upgrade bootstrap version to 5.3.2 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/498"},"#498")),(0,l.kt)("li",{parentName:"ul"},"Fix build warnings ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/534"},"#534")),(0,l.kt)("li",{parentName:"ul"},"Nuget update ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/520"},"#520")),(0,l.kt)("li",{parentName:"ul"},"Update docs to Bootstrap Icons 1.11.3 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/pull/541"},"#541"))))),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.blazorbootstrap.com/"},"Documentation"))))}b.isMDXComponent=!0}}]);