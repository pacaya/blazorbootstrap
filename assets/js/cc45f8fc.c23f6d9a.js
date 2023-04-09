"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[3463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,c=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(c,i(i({ref:t},g),{},{components:n})):a.createElement(c,i({ref:t},g))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Blazor Badge Component",description:"The Blazor Bootstrap Badge component shows the small count and labels.",image:"https://i.imgur.com/ux0sTs9.png",sidebar_label:"Badge",sidebar_position:2},i="Blazor Badge",l={unversionedId:"components/badge",id:"components/badge",title:"Blazor Badge Component",description:"The Blazor Bootstrap Badge component shows the small count and labels.",source:"@site/docs/05-components/badge.md",sourceDirName:"05-components",slug:"/components/badge",permalink:"/docs/components/badge",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/badge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Blazor Badge Component",description:"The Blazor Bootstrap Badge component shows the small count and labels.",image:"https://i.imgur.com/ux0sTs9.png",sidebar_label:"Badge",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/docs/components/alerts"},next:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Background colors",id:"background-colors",level:3},{value:"Pill badges",id:"pill-badges",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Positioned",id:"positioned",level:3},{value:"Generic indicator",id:"generic-indicator",level:3}],g={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blazor-badge"},"Blazor Badge"),(0,o.kt)("p",null,"The Blazor Bootstrap ",(0,o.kt)("inlineCode",{parentName:"p"},"Badge")," component shows the small count and labels."),(0,o.kt)("img",{src:"https://i.imgur.com/ux0sTs9.png",alt:"Blazor Bootstrap: Badge Component"}),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside the badge."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Color"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgeColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgeColor.Secondary")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the badge color."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"IndicatorType"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgeIndicatorType")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgeIndicatorType.None")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the badge indicator."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Placement"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgePlacement")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BadgePlacement.None")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the badge placement."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Position"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Position")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the badge position."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"VisuallyHiddenText"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the visually hidden text."),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7.0")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"Badges scale to match the size of the immediate parent element by using relative font sizing and em units.\nAs of now, badges no longer have focus or hover styles for links."),(0,o.kt)("img",{src:"https://i.imgur.com/6aAV5Nb.png",alt:"Blazor Bootstrap: Badge Component - Basic usage"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"<h1>Example heading <Badge>New</Badge></h1>\n<h2>Example heading <Badge>New</Badge></h2>\n<h3>Example heading <Badge>New</Badge></h3>\n<h4>Example heading <Badge>New</Badge></h4>\n<h5>Example heading <Badge>New</Badge></h5>\n<h6>Example heading <Badge>New</Badge></h6>\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#examples"},"See demo here")),(0,o.kt)("h3",{id:"background-colors"},"Background colors"),(0,o.kt)("img",{src:"https://i.imgur.com/ux0sTs9.png",alt:"Blazor Bootstrap: Badge Component - Background colors"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Badge Color="BadgeColor.Primary" VisuallyHiddenText="Visually hidden text for Primary">Primary</Badge>\n<Badge Color="BadgeColor.Secondary" VisuallyHiddenText="Visually hidden text for Secondary">Secondary</Badge>\n<Badge Color="BadgeColor.Success" VisuallyHiddenText="Visually hidden text for Success">Success</Badge>\n<Badge Color="BadgeColor.Danger" VisuallyHiddenText="Visually hidden text for Danger">Danger</Badge>\n<Badge Color="BadgeColor.Warning" VisuallyHiddenText="Visually hidden text for Warning">Warning</Badge>\n<Badge Color="BadgeColor.Info" VisuallyHiddenText="Visually hidden text for Info">Info</Badge>\n<Badge Color="BadgeColor.Light" VisuallyHiddenText="Visually hidden text for Light">Light</Badge>\n<Badge Color="BadgeColor.Dark" VisuallyHiddenText="Visually hidden text for Dark">Dark</Badge>\n')),(0,o.kt)("admonition",{title:"Conveying meaning to assistive technologies",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the ",(0,o.kt)("inlineCode",{parentName:"p"},"VisuallyHiddenText")," parameter.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#background-colors"},"See demo here")),(0,o.kt)("h3",{id:"pill-badges"},"Pill badges"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"IndicatorType")," parameter to make badges more rounded with a larger ",(0,o.kt)("inlineCode",{parentName:"p"},"border-radius"),"."),(0,o.kt)("img",{src:"https://i.imgur.com/sSuSSJX.png",alt:"Blazor Bootstrap: Badge Component - Pill badges"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Badge Color="BadgeColor.Primary" IndicatorType="BadgeIndicatorType.RoundedPill">Primary</Badge>\n<Badge Color="BadgeColor.Secondary" IndicatorType="BadgeIndicatorType.RoundedPill">Secondary</Badge>\n<Badge Color="BadgeColor.Success" IndicatorType="BadgeIndicatorType.RoundedPill">Success</Badge>\n<Badge Color="BadgeColor.Danger" IndicatorType="BadgeIndicatorType.RoundedPill">Danger</Badge>\n<Badge Color="BadgeColor.Warning" IndicatorType="BadgeIndicatorType.RoundedPill">Warning</Badge>\n<Badge Color="BadgeColor.Info" IndicatorType="BadgeIndicatorType.RoundedPill">Info</Badge>\n<Badge Color="BadgeColor.Light" IndicatorType="BadgeIndicatorType.RoundedPill">Light</Badge>\n<Badge Color="BadgeColor.Dark" IndicatorType="BadgeIndicatorType.RoundedPill">Dark</Badge>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#pill-badges"},"See demo here")),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"Badges can be used as part of links or buttons to provide a counter."),(0,o.kt)("img",{src:"https://i.imgur.com/BO9dltp.png",alt:"Blazor Bootstrap: Badge Component - Buttons"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary">\n        Announcement <Badge Color="BadgeColor.Danger">2</Badge>\n    </Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary">\n        Notifications <Badge> 4</Badge>\n    </Button>\n</div>\n<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary">\n        Announcement <Badge Color="BadgeColor.Danger"><Icon Name="IconName.MegaphoneFill" /> 2</Badge>\n    </Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary">\n        Notifications <Badge><Icon Name="IconName.BellFill" /> 4</Badge>\n    </Button>\n</div>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#buttons"},"See demo here")),(0,o.kt)("h3",{id:"positioned"},"Positioned"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Position")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Placement")," parameters to position it in the corner of a link or button."),(0,o.kt)("img",{src:"https://i.imgur.com/1e7xDAr.png",alt:"Blazor Bootstrap: Badge Component - Positioned"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.TopLeft"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.TopCenter"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.TopRight"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n</div>\n<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.MiddleLeft"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.MiddleCenter"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.MiddleRight"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n</div>\n<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.BottomLeft"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.BottomCenter"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n        Inbox\n        <Badge Color="BadgeColor.Danger"\n               Position="Position.Absolute"\n               Placement="BadgePlacement.BottomRight"\n               IndicatorType="BadgeIndicatorType.RoundedPill"\n               VisuallyHiddenText="unread messages">99+</Badge>\n    </Button>\n</div>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#positioned"},"See demo here")),(0,o.kt)("h3",{id:"generic-indicator"},"Generic indicator"),(0,o.kt)("p",null,"You can also replace the badge with a generic indicator without the count."),(0,o.kt)("img",{src:"https://i.imgur.com/HVx7at0.png",alt:"Blazor Bootstrap: Badge Component - Generic indicator"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Position="Position.Relative">\n    Inbox\n    <Badge Color="BadgeColor.Danger"\n           Position="Position.Absolute"\n           Placement="BadgePlacement.TopRight"\n           IndicatorType="BadgeIndicatorType.RoundedPill"\n           VisuallyHiddenText="unread messages"></Badge>\n</Button>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/badge#generic-indicator"},"See demo here")))}p.isMDXComponent=!0}}]);