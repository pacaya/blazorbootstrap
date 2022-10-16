"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,b=u["".concat(s,".").concat(p)]||u[p]||l[p]||o;return r?a.createElement(b,m(m({ref:t},d),{},{components:r})):a.createElement(b,m({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,m=new Array(o);m[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,m[1]=i;for(var c=2;c<o;c++)m[c]=r[c];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Blazor Breadcrumb Component",description:"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Breadcrumb",sidebar_position:3},m="Blazor Breadcrumb",i={unversionedId:"components/breadcrumb",id:"components/breadcrumb",title:"Blazor Breadcrumb Component",description:"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators.",source:"@site/docs/components/breadcrumb.md",sourceDirName:"components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/breadcrumb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Blazor Breadcrumb Component",description:"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Breadcrumb",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"AutoComplete",permalink:"/docs/components/autocomplete"},next:{title:"Buttons",permalink:"/docs/components/buttons"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Breadcrumb",id:"breadcrumb",level:3},{value:"Dividers",id:"dividers",level:3},{value:"Embedded SVG icon",id:"embedded-svg-icon",level:3}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blazor-breadcrumb"},"Blazor Breadcrumb"),(0,n.kt)("p",null,"BlazorBootstrap's breadcrumb component indicates the current page's location within a navigational hierarchy that automatically adds separators."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Items"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"List<BreadcrumbItem>")),(0,n.kt)("td",{parentName:"tr",align:null},"List of all the items."),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"breadcrumb"},"Breadcrumb"),(0,n.kt)("img",{src:"https://i.imgur.com/hO90HoC.jpg",alt:"Blazor Bootstrap: Breadcrumb Component"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div>\n    <Breadcrumb Items="NavItems1"></Breadcrumb>\n    <Breadcrumb Items="NavItems2"></Breadcrumb>\n</div>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private List<BreadcrumbItem> NavItems1 { get; set; }\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems1 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#examples"},"See breadcrumb demo here.")),(0,n.kt)("h3",{id:"dividers"},"Dividers"),(0,n.kt)("p",null,"Dividers are automatically added in CSS through ",(0,n.kt)("inlineCode",{parentName:"p"},"::before")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"content"),". They can be changed by modifying a local CSS custom property ",(0,n.kt)("inlineCode",{parentName:"p"},"--bs-breadcrumb-divider.")),(0,n.kt)("img",{src:"https://i.imgur.com/oUqUOY1.jpg",alt:"Blazor Bootstrap: Breadcrumb Component - Dividers"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div>\n    <Breadcrumb style="--bs-breadcrumb-divider: \'>\';" Items="NavItems2"></Breadcrumb>\n</div>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#dividers"},"See breadcrumb with dividers demo here.")),(0,n.kt)("h3",{id:"embedded-svg-icon"},"Embedded SVG icon"),(0,n.kt)("p",null,"It's also possible to use an embedded SVG icon. Apply it via our CSS custom property"),(0,n.kt)("img",{src:"https://i.imgur.com/mZaXqgZ.jpg",alt:"Blazor Bootstrap: Breadcrumb Component - Embedded SVG icon"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},"<div>\n    <Breadcrumb style=\"--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);\" Items=\"NavItems2\"></Breadcrumb>\n</div>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private List<BreadcrumbItem> NavItems2 { get; set; }\n\n    protected override void OnInitialized()\n    {\n        NavItems2 = new List<BreadcrumbItem>\n        {\n            new BreadcrumbItem{ Text = "Home", Href ="/" },\n            new BreadcrumbItem{ Text = "Docs", Href ="/docs" },\n            new BreadcrumbItem{ Text = "Breadcrumb", IsCurrentPage = true }\n        };\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/breadcrumb#embedded-svg-icon"},"See breadcrumb with embedded svg icon demo here.")))}l.isMDXComponent=!0}}]);