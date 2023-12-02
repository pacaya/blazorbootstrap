"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[79557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(b,s(s({ref:t},c),{},{components:r})):a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58034:(e,t,r)=>{r.d(t,{ZP:()=>m});var a=r(87462),n=r(67294),o=r(3905),s=r(72389);function l(e){let{children:t,fallback:r}=e;return(0,s.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}r(73935);function i(){let e=document.getElementById("divCarbonAd"),t=document.getElementById("_carbonads_js");return e&&(t||(t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom",t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},e.appendChild(t))),null}const p={toc:[]},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{id:"divCarbonAd"}),(0,o.kt)(l,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,o.kt)(i,{mdxType:"RenderAd"}))))}m.isMDXComponent=!0},75640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(58034);const s={id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},l="Getting started - Blazor WebAssembly",i={unversionedId:"getting-started/blazor-webassembly",id:"getting-started/blazor-webassembly",title:"Blazor WebAssembly",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework.",source:"@site/docs/01-getting-started/getting-started-webassembly.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/blazor-webassembly",permalink:"/getting-started/blazor-webassembly",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/01-getting-started/getting-started-webassembly.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},sidebar:"tutorialSidebar",next:{title:"Blazor Server",permalink:"/getting-started/blazor-server"}},p={},c=[{value:"Install Nuget Package",id:"install-nuget-package",level:2},{value:"Add CSS references",id:"add-css-references",level:2},{value:"Add script references",id:"add-script-references",level:2},{value:"Register services",id:"register-services",level:2},{value:"Remove default references",id:"remove-default-references",level:2},{value:"Starter templates",id:"starter-templates",level:2},{value:".NET 6",id:"net-6",level:3},{value:".NET 7",id:"net-7",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started---blazor-webassembly"},"Getting started - Blazor WebAssembly"),(0,n.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework."),(0,n.kt)(o.ZP,{mdxType:"CarbonAd"}),(0,n.kt)("h2",{id:"install-nuget-package"},"Install Nuget Package"),(0,n.kt)("p",null,"Looking to quickly add ",(0,n.kt)("strong",{parentName:"p"},"Blazor Bootstrap")," to your project? Use NuGet package manager."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 1.10.4\n")),(0,n.kt)("h2",{id:"add-css-references"},"Add CSS references"),(0,n.kt)("p",null,"Add the following references to the ",(0,n.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,n.kt)("strong",{parentName:"p"},"wwwroot/index.html"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" rel="stylesheet" />\n<link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you use the ",(0,n.kt)("strong",{parentName:"p"},"Blazor WebAssembly App Empty*")," template (without demonstration code and Bootstrap), add the following references to the ",(0,n.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,n.kt)("strong",{parentName:"p"},"wwwroot/index.html"),".\nThere is a known GitHub issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/43975"},"Blazor empty template doesn't load scoped CSS"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="_content/Blazor.Bootstrap/Blazor.Bootstrap.bundle.scp.css" rel="stylesheet" />\n')),(0,n.kt)("h2",{id:"add-script-references"},"Add script references"),(0,n.kt)("p",null,"Add the following references to the ",(0,n.kt)("inlineCode",{parentName:"p"},"body")," section in the ",(0,n.kt)("strong",{parentName:"p"},"wwwroot/index.html")," after the ",(0,n.kt)("strong",{parentName:"p"},"_framework/blazor.webassembly.js")," reference."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>\n\x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n\x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n<script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"chart.js")," reference is optional. Add when the ",(0,n.kt)("strong",{parentName:"p"},"Chart")," components are used in the application.")),(0,n.kt)("h2",{id:"register-services"},"Register services"),(0,n.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,n.kt)("strong",{parentName:"p"},"Program.cs")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"builder.Services.AddBlazorBootstrap(); // Add this line\n")),(0,n.kt)("p",null,"Register tag helpers in ",(0,n.kt)("strong",{parentName:"p"},"_Imports.razor")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-razor",metastring:"showLineNumbers",showLineNumbers:!0},"@using BlazorBootstrap;\n")),(0,n.kt)("h2",{id:"remove-default-references"},"Remove default references"),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file, the default blazor template includes demonstration code, icons, and Bootstrap.\nThese files are no longer needed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />\n<link href="css/app.css" rel="stylesheet" />\n')),(0,n.kt)("p",null,"Delete the default ",(0,n.kt)("strong",{parentName:"p"},"bootstrap")," and ",(0,n.kt)("strong",{parentName:"p"},"open-iconic")," folders from the ",(0,n.kt)("strong",{parentName:"p"},"wwwroot")," folder."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"wwwroot/css/bootstrap"),(0,n.kt)("li",{parentName:"ol"},"wwwroot/css/open-iconic")),(0,n.kt)("p",null,"Either remove or keep the ",(0,n.kt)("strong",{parentName:"p"},"app.css")," file but make sure you clear it out of any content when the ",(0,n.kt)("a",{parentName:"p",href:"/components/sidebar#full-layout-with-sidebar"},"Sidebar")," component with full layout is used."),(0,n.kt)("h2",{id:"starter-templates"},"Starter templates"),(0,n.kt)("h3",{id:"net-6"},".NET 6"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET6.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/aRV3rJm.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"}))),(0,n.kt)("h3",{id:"net-7"},".NET 7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/4P8u0HR.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyAppEmpty"},"Blazor Bootstrap - Blazor Empty WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/CBEoZ6P.png",alt:"Blazor Bootstrap - Blazor Empty WebAssembly App"}))))}u.isMDXComponent=!0}}]);