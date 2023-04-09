"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[3394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),c=n,g=b["".concat(p,".").concat(c)]||b[c]||m[c]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},28996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Blazor Bootstrap v1.0.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.0.0","blazor","blazorbootstrap","blazor-bootstrap","blazor-tabs","blazor-input","blazor-input-number","blazor-number-input","input","input-number"]},l=void 0,i={permalink:"/blog/2022/11/18/blazorbootstrap-1.0.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-11-18-blazorbootstrap-1.0.0.md",source:"@site/blog/2022-11-18-blazorbootstrap-1.0.0.md",title:"Blazor Bootstrap v1.0.0",description:"We are excited to release our major version, 1.0.0, with new components, enhancements to existing ones, and more!!!",date:"2022-11-18T00:00:00.000Z",formattedDate:"November 18, 2022",tags:[{label:"v1.0.0",permalink:"/blog/tags/v-1-0-0"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"blazor-bootstrap",permalink:"/blog/tags/blazor-bootstrap"},{label:"blazor-tabs",permalink:"/blog/tags/blazor-tabs"},{label:"blazor-input",permalink:"/blog/tags/blazor-input"},{label:"blazor-input-number",permalink:"/blog/tags/blazor-input-number"},{label:"blazor-number-input",permalink:"/blog/tags/blazor-number-input"},{label:"input",permalink:"/blog/tags/input"},{label:"input-number",permalink:"/blog/tags/input-number"}],readingTime:.705,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.0.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.0.0","blazor","blazorbootstrap","blazor-bootstrap","blazor-tabs","blazor-input","blazor-input-number","blazor-number-input","input","input-number"]},prevItem:{title:"Blazor Bootstrap v1.0.1",permalink:"/blog/2022/11/22/blazorbootstrap-1.0.1"},nextItem:{title:"Blazor Bootstrap v0.6.0",permalink:"/blog/2022/10/30/blazorbootstrap-0.6.0"}},p={authorsImageUrls:[void 0]},u=[{value:"New Components",id:"new-components",level:2},{value:"Blazor NumberInput component features",id:"blazor-numberinput-component-features",level:3},{value:"Blazor Tabs component features",id:"blazor-tabs-component-features",level:2},{value:"Demos site enhancements",id:"demos-site-enhancements",level:2},{value:"Links",id:"links",level:3}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are excited to release our major version, ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.0"),", with new components, enhancements to existing ones, and more!!!"),(0,n.kt)("img",{src:"https://i.imgur.com/iUNBkki.png",alt:"Blazor NumberInput component"}),(0,n.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Blazor Tabs component"}),(0,n.kt)("h2",{id:"new-components"},"New Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NumberInput")," component")),(0,n.kt)("h3",{id:"blazor-numberinput-component-features"},"Blazor NumberInput component features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generic type support"),(0,n.kt)("li",{parentName:"ul"},"Enable min and max"),(0,n.kt)("li",{parentName:"ul"},"Step"),(0,n.kt)("li",{parentName:"ul"},"Text alignment"),(0,n.kt)("li",{parentName:"ul"},"Allow negative numbers"),(0,n.kt)("li",{parentName:"ul"},"Disable"),(0,n.kt)("li",{parentName:"ul"},"Validations"),(0,n.kt)("li",{parentName:"ul"},"Events: ValueChanged")),(0,n.kt)("img",{src:"https://i.imgur.com/iUNBkki.png",alt:"Blazor NumberInput component"}),(0,n.kt)("h2",{id:"blazor-tabs-component-features"},"Blazor Tabs component features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fade effect"),(0,n.kt)("li",{parentName:"ul"},"Title with Icon"),(0,n.kt)("li",{parentName:"ul"},"Disable Tab"),(0,n.kt)("li",{parentName:"ul"},"Pills"),(0,n.kt)("li",{parentName:"ul"},"Activate individual tabs"),(0,n.kt)("li",{parentName:"ul"},"Events")),(0,n.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Blazor Tabs component"}),(0,n.kt)("h2",{id:"demos-site-enhancements"},"Demos site enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Brand new landing page"),(0,n.kt)("li",{parentName:"ul"},"The demo example and source code are split into two tabs for easy access.")),(0,n.kt)("h3",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/form/number-input"},"Demo Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/number-input"},"Blazor NumberInput Component Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/tabs"},"Blazor Tabs Component Documentation"))))}m.isMDXComponent=!0}}]);