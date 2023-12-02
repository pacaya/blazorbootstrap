"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[171],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return n?o.createElement(c,l(l({ref:e},u),{},{components:n})):o.createElement(c,l({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58034:(t,e,n)=>{n.d(e,{ZP:()=>m});var o=n(87462),a=n(67294),r=n(3905),l=n(72389);function i(t){let{children:e,fallback:n}=t;return(0,l.Z)()?a.createElement(a.Fragment,null,e?.()):n??null}n(73935);function s(){let t=document.getElementById("divCarbonAd"),e=document.getElementById("_carbonads_js");return t&&(e||(e=document.createElement("script"),e.async=!0,e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom",e.type="text/javascript",e.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},t.appendChild(e))),null}const p={toc:[]},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{id:"divCarbonAd"}),(0,r.kt)(i,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,r.kt)(s,{mdxType:"RenderAd"}))))}m.isMDXComponent=!0},29566:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),r=n(58034);const l={title:"Blazor Button Component",description:"Use Blazor Bootstrap button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc.",image:"https://i.imgur.com/Ne7FJ5H.jpg",sidebar_label:"Buttons",sidebar_position:5},i="Blazor Buttons",s={unversionedId:"components/buttons",id:"components/buttons",title:"Blazor Button Component",description:"Use Blazor Bootstrap button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc.",source:"@site/docs/05-components/buttons.mdx",sourceDirName:"05-components",slug:"/components/buttons",permalink:"/components/buttons",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/buttons.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Blazor Button Component",description:"Use Blazor Bootstrap button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc.",image:"https://i.imgur.com/Ne7FJ5H.jpg",sidebar_label:"Buttons",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/components/breadcrumb"},next:{title:"Callout",permalink:"/components/callout"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Examples",id:"examples",level:2},{value:"Buttons",id:"buttons",level:3},{value:"Button tags",id:"button-tags",level:3},{value:"Outline Buttons",id:"outline-buttons",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Disabled State",id:"disabled-state",level:3},{value:"Disable and enable state dynamically",id:"disable-and-enable-state-dynamically",level:3},{value:"Block Buttons",id:"block-buttons",level:3},{value:"Toogle States",id:"toogle-states",level:3},{value:"Loading spinner",id:"loading-spinner",level:3},{value:"Show/Hide loading spinner",id:"showhide-loading-spinner",level:3},{value:"Show Tooltip",id:"show-tooltip",level:3},{value:"Dynamically update the tooltip text",id:"dynamically-update-the-tooltip-text",level:3},{value:"Events",id:"events",level:3},{value:"Click events",id:"click-events",level:4},{value:"Double click event",id:"double-click-event",level:4},{value:"Click event with arguments",id:"click-event-with-arguments",level:4}],m={toc:u},d="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-buttons"},"Blazor Buttons"),(0,a.kt)("p",null,"Use Blazor Bootstrap button styles for actions in forms, dialogs, and more with support for multiple sizes, states, etc."),(0,a.kt)(r.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Active"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", places the component in the active state with active styling."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Block"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Makes the button to span the full width of a parent."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this ",(0,a.kt)("inlineCode",{parentName:"td"},"Button"),"."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Color"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ButtonColor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the button color."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", disables the component's functionality and places it in a disabled state."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Loading"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows the loading spinner or a ",(0,a.kt)("inlineCode",{parentName:"td"},"LoadingTemplate"),"."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LoadingTemplate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the component loading template."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LoadingText"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the loadgin text."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Loading...")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Outline"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Makes the button to have the outlines."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Position"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Position")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the position."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Size")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Changes the size of a button."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TabIndex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If defined, indicates that its element can be focused and can participates in sequential keyboard navigation."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Target"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Target")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The target attribute specifies where to open the linked document for a ",(0,a.kt)("inlineCode",{parentName:"td"},"ButtonType.Link"),"."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Target.None")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"To"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Denotes the target route of the ",(0,a.kt)("inlineCode",{parentName:"td"},"ButtonType.Link")," button."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TooltipPlacement"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TooltipPlacement")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tooltip placement"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TooltipPlacement.Top")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TooltipTitle"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Displays informative text when users hover, focus, or tap an element."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TooltipColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TooltipColor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the tooltip color."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TooltipColor.None")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ButtonType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines the button type."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ButtonType.Button")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ShowLoading"),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the loading state and disables the button.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HideLoading"),(0,a.kt)("td",{parentName:"tr",align:null},"Hides the loading state and enables the button.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"buttons"},"Buttons"),(0,a.kt)("p",null,"Blazor Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."),(0,a.kt)("img",{src:"https://i.imgur.com/Ne7FJ5H.jpg",alt:"Blazor Bootstrap: Button Component"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary"> Primary </Button>\n    <Button Color="ButtonColor.Secondary"> Secondary </Button>\n    <Button Color="ButtonColor.Success"> Success </Button>\n    <Button Color="ButtonColor.Danger"> Danger </Button>\n    <Button Color="ButtonColor.Warning"> Warning </Button>\n    <Button Color="ButtonColor.Info"> Info </Button>\n    <Button Color="ButtonColor.Light"> Light </Button>\n    <Button Color="ButtonColor.Dark"> Dark </Button>\n    <Button Color="ButtonColor.Link"> Link </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#examples"},"See buttons demo here.")),(0,a.kt)("h3",{id:"button-tags"},"Button tags"),(0,a.kt)("img",{src:"https://i.imgur.com/ZscbcWh.jpg",alt:"Blazor Bootstrap: Button Component - Button tags"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" To="#"> Link </Button>\n    <Button Type="ButtonType.Submit" Color="ButtonColor.Primary" To="#"> Button </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#button-tags"},"See button tags demo here.")),(0,a.kt)("h3",{id:"outline-buttons"},"Outline Buttons"),(0,a.kt)("img",{src:"https://i.imgur.com/ta0Mgtk.jpg",alt:"Blazor Bootstrap: Button Component - Outline Buttons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" Outline="true"> Primary </Button>\n    <Button Color="ButtonColor.Secondary" Outline="true"> Secondary </Button>\n    <Button Color="ButtonColor.Success" Outline="true"> Success </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"> Danger </Button>\n    <Button Color="ButtonColor.Warning" Outline="true"> Warning </Button>\n    <Button Color="ButtonColor.Info" Outline="true"> Info </Button>\n    <Button Color="ButtonColor.Dark" Outline="true"> Dark </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#outline-buttons"},"See outline button demo here.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("p",null,"Fancy larger or smaller buttons? Add ",(0,a.kt)("inlineCode",{parentName:"p"},'Size="Size.Large"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'Size="Size.Small"')," for additional sizes."),(0,a.kt)("img",{src:"https://i.imgur.com/Vdiyg6q.jpg",alt:"Blazor Bootstrap: Button Component - Sizes"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large"> Large button </Button>\n</p>\n<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Small"> Small button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Small"> Small button </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#sizes"},"See buttons with different size demo here.")),(0,a.kt)("h3",{id:"disabled-state"},"Disabled State"),(0,a.kt)("p",null,"Make buttons look inactive by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},'Disabled="true"')," boolean parameter to any ",(0,a.kt)("inlineCode",{parentName:"p"},"<Button>")," component. Disabled buttons have ",(0,a.kt)("inlineCode",{parentName:"p"},"pointer-events: none")," applied to, preventing hover and active states from triggering."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Disabled buttons using the ",(0,a.kt)("inlineCode",{parentName:"p"},'Type="ButtonType.Link"')," parameter behave a bit different.")),(0,a.kt)("img",{src:"https://i.imgur.com/A0MlIha.jpg",alt:"Blazor Bootstrap: Button Component - Disable State"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Large button </Button>\n</p>\n<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Primary link </Button>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Link </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#disabled-state"},"See button disabled state demo here.")),(0,a.kt)("h3",{id:"disable-and-enable-state-dynamically"},"Disable and enable state dynamically"),(0,a.kt)("img",{src:"https://i.imgur.com/nKA9C8n.png",alt:"Blazor Bootstrap: Button Component - Disable and enable state dynamically"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Type="ButtonType.Link" Color="ButtonColor.Primary" Disabled="@disableButton" TooltipTitle="@tooltip">Link Button</Button>\n<Button Type="ButtonType.Submit" Color="ButtonColor.Primary" Disabled="@disableButton" TooltipTitle="@tooltip">Submit Button</Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Disabled="@disableButton" TooltipTitle="@tooltip">Button</Button>\n<Button Type="ButtonType.Reset" Color="ButtonColor.Primary" Disabled="@disableButton" TooltipTitle="@tooltip">Reset Button</Button>\n\n<Button Color="ButtonColor.Danger" @onclick="() => SwapDisable()">Swap Disable</Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} LineNumbers","{}":!0,LineNumbers:!0},'@code\n{\n    bool disableButton = true;\n    string tooltip = "";\n\n    public void SwapDisable()\n    {\n        disableButton = !disableButton;\n        tooltip = $"Updated at {DateTime.Now}";\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#disable-and-enable-state-dynamically"},"See disable and enable state dynamically demo here.")),(0,a.kt)("h3",{id:"block-buttons"},"Block Buttons"),(0,a.kt)("p",null,'Create responsive stacks of full-width, "block buttons" like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.'),(0,a.kt)("img",{src:"https://i.imgur.com/jB7joKv.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="d-grid gap-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,a.kt)("img",{src:"https://i.imgur.com/iSsEMgi.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="d-grid gap-2 d-md-block mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,a.kt)("img",{src:"https://i.imgur.com/20LuzVC.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="d-grid gap-2 col-6 mx-auto mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,a.kt)("img",{src:"https://i.imgur.com/bJXgFkF.jpg",alt:"Blazor Bootstrap: Button Component - Block Buttons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#block-buttons"},"See block buttons demo here.")),(0,a.kt)("h3",{id:"toogle-states"},"Toogle States"),(0,a.kt)("p",null,"If you''re pre-toggling a button, you must manually add the ",(0,a.kt)("inlineCode",{parentName:"p"},'Active="true"')," parameter."),(0,a.kt)("img",{src:"https://i.imgur.com/JH9SZxQ.jpg",alt:"Blazor Bootstrap: Button Component - Button Toogle States"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary"> Toggle button </Button>\n    <Button Color="ButtonColor.Primary" Active="true"> Active toggle button </Button>\n    <Button Color="ButtonColor.Primary" Disabled="true"> Disabled toggle button </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#toggle-states"},"See button toogle states demo here.")),(0,a.kt)("h3",{id:"loading-spinner"},"Loading spinner"),(0,a.kt)("p",null,"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."),(0,a.kt)("img",{src:"https://i.imgur.com/ENKhcXR.jpg",alt:"Blazor Bootstrap: Button Component - Button with Loading Spinner"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" Loading="true" />\n    <Button Color="ButtonColor.Primary" Loading="true" LoadingText="Saving..." />\n    <Button Color="ButtonColor.Primary" Loading="true">\n        <LoadingTemplate>\n            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>\n            Loading...\n        </LoadingTemplate>\n    </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#loading-spinner"},"See button with loading spinner demo here.")),(0,a.kt)("h3",{id:"showhide-loading-spinner"},"Show/Hide loading spinner"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowLoading()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HideLoading()")," methods to toggle the button state."),(0,a.kt)("img",{src:"https://i.imgur.com/WDjEylB.png",alt:"Blazor Bootstrap: Button Component - Show/Hide loading spinner"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Button @ref="saveButton" Color="ButtonColor.Primary" @onclick="async () => await OnSaveClick()">Save</Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{2,6,10} showLineNumbers","{2,6,10}":!0,showLineNumbers:!0},'@code {\n    private Button saveButton;\n\n    private async Task OnSaveClick()\n    {\n        saveButton?.ShowLoading("Saving details...");\n\n        await Task.Delay(5000); // API call\n\n        saveButton?.HideLoading();\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#show-hide-loading-spinner"},"See button with loading spinner demo here.")),(0,a.kt)("h3",{id:"show-tooltip"},"Show Tooltip"),(0,a.kt)("p",null,"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left."),(0,a.kt)("img",{src:"https://i.imgur.com/zp3G6pZ.jpg",alt:"Blazor Bootstrap: Button Component - Buttons with Tooltip"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Top"> Tooltip Top </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Right"> Tooltip Right </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Bottom"> Tooltip Bottom </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Left"> Tooltip Left </Button>\n</p>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#tooltip"},"See button with tooltip demo here.")),(0,a.kt)("admonition",{title:"NOTE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"HTML tooltips not supported at this moment.")),(0,a.kt)("h3",{id:"dynamically-update-the-tooltip-text"},"Dynamically update the tooltip text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="mb-3">\n    <Button Color="ButtonColor.Primary" TooltipTitle="@text" TooltipPlacement="TooltipPlacement.Top"> Tooltip Top </Button>\n</div>\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" @onclick="ChangeTooltip">Change Tooltip</Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'@code {\n    private string text = "Tooltip text";\n\n    private void ChangeTooltip() => text = $"Updated {DateTime.Now.ToLongTimeString()}";\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#dynamically-update-the-tooltip-text"},"See demo here.")),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("h4",{id:"click-events"},"Click events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="OnClick"> Click Event </Button>\n</p>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code{\n\n    protected void OnClick(EventArgs args)\n    {\n        Console.WriteLine("click event");\n    }\n\n}\n')),(0,a.kt)("h4",{id:"double-click-event"},"Double click event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" @ondblclick="OnDoubleClick"> Double Click Event </Button>\n</p>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code{\n\n    protected void OnDoubleClick(EventArgs args)\n    {\n        Console.WriteLine("double click event");\n    }\n\n}\n')),(0,a.kt)("h4",{id:"click-event-with-arguments"},"Click event with arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="((args) => OnClickWithArgs(args, message))"> Click   Args </Button>\n</p>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code{\n\n    public string message = "Test message";\n\n    protected void OnClickWithArgs(EventArgs args, string message)\n    {\n        Console.WriteLine($"message: {message}");\n    }\n\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/buttons#click-events"},"See button click events demo here.")))}g.isMDXComponent=!0}}]);