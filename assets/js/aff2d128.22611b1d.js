"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[7511],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>c});var o=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,s=function(e,r){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=o.createContext({}),g=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},p=function(e){var r=g(e.components);return o.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=g(t),c=s,u=d["".concat(i,".").concat(c)]||d[c]||m[c]||a;return t?o.createElement(u,n(n({ref:r},p),{},{components:t})):o.createElement(u,n({ref:r},p))}));function c(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,n=new Array(a);n[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,n[1]=l;for(var g=2;g<a;g++)n[g]=t[g];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4795:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var o=t(7462),s=(t(7294),t(3905));const a={title:"Blazor Progress Component",description:"Documentation and examples for using the Blazor Bootstrap progress component featuring support for stacked bars, animated backgrounds, and text labels.",image:"https://i.imgur.com/MK142lQ.png",sidebar_label:"Progress",sidebar_position:14},n="Blazor Progress",l={unversionedId:"components/progress",id:"components/progress",title:"Blazor Progress Component",description:"Documentation and examples for using the Blazor Bootstrap progress component featuring support for stacked bars, animated backgrounds, and text labels.",source:"@site/docs/components/progress.md",sourceDirName:"components",slug:"/components/progress",permalink:"/docs/components/progress",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/progress.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Blazor Progress Component",description:"Documentation and examples for using the Blazor Bootstrap progress component featuring support for stacked bars, animated backgrounds, and text labels.",image:"https://i.imgur.com/MK142lQ.png",sidebar_label:"Progress",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Preload",permalink:"/docs/components/preload"},next:{title:"Sidebar",permalink:"/docs/components/sidebar"}},i={},g=[{value:"Progress Parameters",id:"progress-parameters",level:2},{value:"ProgressBar Parameters",id:"progressbar-parameters",level:2},{value:"ProgressBar Methods",id:"progressbar-methods",level:2},{value:"Examples",id:"examples",level:2},{value:"How it works",id:"how-it-works",level:3},{value:"Labels",id:"labels",level:3},{value:"Set width programmatically",id:"set-width-programmatically",level:3},{value:"Height",id:"height",level:3},{value:"Backgrounds",id:"backgrounds",level:3},{value:"Set background programmatically",id:"set-background-programmatically",level:3},{value:"Multiple bars",id:"multiple-bars",level:3},{value:"Striped",id:"striped",level:3},{value:"Animated stripes",id:"animated-stripes",level:3}],p={toc:g};function m(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"blazor-progress"},"Blazor Progress"),(0,s.kt)("p",null,"Documentation and examples for using the Blazor Bootstrap progress component featuring support for stacked bars, animated backgrounds, and text labels."),(0,s.kt)("img",{src:"https://i.imgur.com/MK142lQ.png",alt:"Blazor Progress"}),(0,s.kt)("h2",{id:"progress-parameters"},"Progress Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Descritpion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,s.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Height"),(0,s.kt)("td",{parentName:"tr",align:"left"},"double"),(0,s.kt)("td",{parentName:"tr",align:"left"},"16"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the height of the Progress. Height is measured in pixels, and the default height is 16 pixels.")))),(0,s.kt)("h2",{id:"progressbar-parameters"},"ProgressBar Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Descritpion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Color"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ProgressColor")),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the progress color.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Label"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the progress bar label.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ProgressType")),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the progress bar type.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Width"),(0,s.kt)("td",{parentName:"tr",align:"left"},"double"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},"Get or sets the progress bar width.")))),(0,s.kt)("h2",{id:"progressbar-methods"},"ProgressBar Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"DecreaseWidth"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Decrease the progress bar width.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"GetWidth"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Get the progress bar width.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"IncreaseWidth"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Increase the progress bar width.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"SetColor"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Set the progress bar color.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"SetLabel"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Set the progress bar label.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"SetWidth"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Set the progress bar width.")))),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"how-it-works"},"How it works"),(0,s.kt)("img",{src:"https://i.imgur.com/MK142lQ.png",alt:"Blazor Progress - How it works"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Width="20" Label="20%" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Success" Width="40" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Warning" Width="60" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Danger" Width="70" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Dark" Width="80" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Success" Width="20" />\n    <ProgressBar Color="ProgressColor.Info" Width="20" />\n    <ProgressBar Color="ProgressColor.Warning" Width="20" />\n    <ProgressBar Color="ProgressColor.Danger" Width="30" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#how-it-works"},"See demo here.")),(0,s.kt)("h3",{id:"labels"},"Labels"),(0,s.kt)("p",null,"Add labels to your Blazor ProgressBar component using the Label parameter or by calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"SetLabel(...)")," method."),(0,s.kt)("img",{src:"https://i.imgur.com/De7gSvL.png",alt:"Blazor Progress - Labels"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar Width="20" Label="20%" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#labels"},"See demo here.")),(0,s.kt)("h3",{id:"set-width-programmatically"},"Set width programmatically"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"IncreaseWidth()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"DecreaseProgressBar()")," methods to increase or decrease the Blazor ProgressBar width."),(0,s.kt)("img",{src:"https://i.imgur.com/ZDfpxN7.png",alt:"Blazor Progress - Set width programmatically"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar @ref="progressBar" />\n</Progress>\n\n<div class="mb-3">\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="IncreaseProgressBar">Increase by 10%</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="DecreaseProgressBar">Decrease by 10%</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="ResetProgressBar">Reset</Button>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    ProgressBar progressBar;\n\n    private void IncreaseProgressBar()\n    {\n        progressBar.IncreaseWidth(10);\n        progressBar.SetLabel($"{progressBar.GetWidth()}%");\n    }\n\n    private void DecreaseProgressBar()\n    {\n        progressBar.DecreaseProgressBar(10);\n        progressBar.SetLabel($"{progressBar.GetWidth()}%");\n    }\n\n    private void ResetProgressBar()\n    {\n        progressBar.SetWidth(0);\n        progressBar.SetLabel($"{progressBar.GetWidth()}%");\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#set-width-programmatically"},"See demo here.")),(0,s.kt)("h3",{id:"height"},"Height"),(0,s.kt)("p",null,"Set the height of the Blazor Progress by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Height")," parameter. Height is measured in pixels."),(0,s.kt)("img",{src:"https://i.imgur.com/GzPRWkS.png",alt:"Blazor Progress - Height"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3" Height="1">\n    <ProgressBar Width="20" />\n</Progress>\n<Progress Class="mb-3" Height="5">\n    <ProgressBar Width="20" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Width="40" />\n</Progress>\n<Progress Class="mb-3" Height="20">\n    <ProgressBar Width="40" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#height"},"See demo here.")),(0,s.kt)("h3",{id:"backgrounds"},"Backgrounds"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Color")," parameter or the ",(0,s.kt)("inlineCode",{parentName:"p"},"SetColor(ProgressColor color)")," method to change the appearance of individual Blazor ProgressBar components."),(0,s.kt)("img",{src:"https://i.imgur.com/QkG4fyX.png",alt:"Blazor Progress - Backgrounds"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Success" Width="10" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Info" Width="20" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Warning" Width="30" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Danger" Width="40" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Primary" Width="60" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Secondary" Width="70" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Dark" Width="80" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#backgrounds"},"See demo here.")),(0,s.kt)("h3",{id:"set-background-programmatically"},"Set background programmatically"),(0,s.kt)("p",null,"You can dynamically set the Blazor ProgressBar color by calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"SetColor()")," method."),(0,s.kt)("img",{src:"https://i.imgur.com/rXnCzk1.png",alt:"Blazor Progress - Set background programmatically"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar @ref="progressBar" Width="30" Label="30%" />\n</Progress>\n\n<div>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Success" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Success)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Info" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Info)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Warning" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Warning)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Danger" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Danger)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Primary)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Secondary" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Secondary)">Set Color</Button>\n    <Button Type="ButtonType.Button" Color="ButtonColor.Dark" Size="Size.Small" @onclick="() => SetColor(ProgressColor.Dark)">Set Color</Button>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    ProgressBar progressBar;\n    private void SetColor(ProgressColor color) => progressBar.SetColor(color);\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#set-background-programmatically"},"See demo here.")),(0,s.kt)("h3",{id:"multiple-bars"},"Multiple bars"),(0,s.kt)("p",null,"Include multiple Blazor ProgressBar components in a Blazor Progress component if needed."),(0,s.kt)("img",{src:"https://i.imgur.com/PCkUVYq.png",alt:"Blazor Progress - Multiple bars"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar Color="ProgressColor.Success" Width="20" />\n    <ProgressBar Color="ProgressColor.Info" Width="20" />\n    <ProgressBar Color="ProgressColor.Warning" Width="20" />\n    <ProgressBar Color="ProgressColor.Danger" Width="10" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#multiple-bars"},"See demo here.")),(0,s.kt)("h3",{id:"striped"},"Striped"),(0,s.kt)("p",null,"Add ",(0,s.kt)("inlineCode",{parentName:"p"},'Type="ProgressType.Striped"')," to any Blazor ProgressBar component to apply a stripe."),(0,s.kt)("img",{src:"https://i.imgur.com/Ggg3N6i.png",alt:"Blazor Progress - Striped"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Success" Width="10" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Info" Width="20" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Warning" Width="30" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Danger" Width="40" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Primary" Width="60" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Secondary" Width="80" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.Striped" Color="ProgressColor.Dark" Width="100" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#striped"},"See demo here.")),(0,s.kt)("h3",{id:"animated-stripes"},"Animated stripes"),(0,s.kt)("p",null,"The stripes can also be animated. Add ",(0,s.kt)("inlineCode",{parentName:"p"},'Type="ProgressType.StripedAndAnimated"')," to the Blazor ProgressBar component to animate the stripes right to the left."),(0,s.kt)("img",{src:"https://i.imgur.com/X4MpgJG.png",alt:"Blazor Progress - Animated stripes"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Success" Width="10" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Info" Width="20" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Warning" Width="30" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Danger" Width="40" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Primary" Width="60" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Secondary" Width="80" />\n</Progress>\n<Progress Class="mb-3">\n    <ProgressBar Type="ProgressType.StripedAndAnimated" Color="ProgressColor.Dark" Width="100" />\n</Progress>\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/progress#animated-stripes"},"See demo here.")))}m.isMDXComponent=!0}}]);