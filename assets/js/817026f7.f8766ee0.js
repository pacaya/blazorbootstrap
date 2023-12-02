"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[96536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),u=n,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},58034:(e,t,o)=>{o.d(t,{ZP:()=>m});var a=o(87462),n=o(67294),r=o(3905),l=o(72389);function i(e){let{children:t,fallback:o}=e;return(0,l.Z)()?n.createElement(n.Fragment,null,t?.()):o??null}o(73935);function d(){let e=document.getElementById("divCarbonAd"),t=document.getElementById("_carbonads_js");return e&&(t||(t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom",t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},e.appendChild(t))),null}const s={toc:[]},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{id:"divCarbonAd"}),(0,r.kt)(i,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,r.kt)(d,{mdxType:"RenderAd"}))))}m.isMDXComponent=!0},53335:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=o(87462),n=(o(67294),o(3905)),r=o(58034);const l={title:"Blazor Modal Service",description:"Use Blazor Bootstrap modal service to show quick dialogs to your site for lightboxes, user notifications, or completely custom content.",image:"https://i.imgur.com/Tze7msN.png",sidebar_label:"Modal Service",sidebar_position:1},i="Blazor Modal Service",d={unversionedId:"services/modal",id:"services/modal",title:"Blazor Modal Service",description:"Use Blazor Bootstrap modal service to show quick dialogs to your site for lightboxes, user notifications, or completely custom content.",source:"@site/docs/07-services/modal.mdx",sourceDirName:"07-services",slug:"/services/modal",permalink:"/services/modal",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/07-services/modal.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blazor Modal Service",description:"Use Blazor Bootstrap modal service to show quick dialogs to your site for lightboxes, user notifications, or completely custom content.",image:"https://i.imgur.com/Tze7msN.png",sidebar_label:"Modal Service",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pie Chart",permalink:"/data-visualization/pie-chart"}},s={},c=[{value:"Methods",id:"methods",level:2},{value:"ModalOption Members",id:"modaloption-members",level:2},{value:"Examples",id:"examples",level:2},{value:"How it works",id:"how-it-works",level:3},{value:"Vertically Centered",id:"vertically-centered",level:3},{value:"Size",id:"size",level:3},{value:"Change footer button color and text",id:"change-footer-button-color-and-text",level:3},{value:"Hide footer button",id:"hide-footer-button",level:3},{value:"How to setup",id:"how-to-setup",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blazor-modal-service"},"Blazor Modal Service"),(0,n.kt)("p",null,"Use Blazor Bootstrap modal service to show quick dialogs to your site for lightboxes, user notifications, or completely custom content."),(0,n.kt)(r.ZP,{mdxType:"CarbonAd"}),(0,n.kt)("img",{src:"https://i.imgur.com/Tze7msN.png",alt:"Blazor Modal Service"}),(0,n.kt)("br",null),(0,n.kt)("a",{href:"https://demos.blazorbootstrap.com/modal-service"},"See blazor modal service demo here."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Return Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ShowAsync(",(0,n.kt)("strong",{parentName:"td"},"ModalOption")," modalOption)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Task")))),(0,n.kt)("h2",{id:"modaloption-members"},"ModalOption Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FooterButtonColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ButtonColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the footer button color."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ButtonColor.Secondary"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FooterButtonCSSClass"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the footer button custom CSS class."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FooterButtonText"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the footer button text."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"OK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IsVerticallyCentered"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the IsVerticallyCentered."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the modal message."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ShowFooterButton"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Shows or hides the footer button."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ModalSize")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the modal size."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ModalSize.Regular"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the modal title."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ModalType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the modal type."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ModalType.Light"))))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"how-it-works"},"How it works"),(0,n.kt)("img",{src:"https://i.imgur.com/vIELA4s.png",alt:"Blazor Modal Service: How it works"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="() => ShowModal(ModalType.Primary)">Show Primary Modal</Button>\n<Button Color="ButtonColor.Secondary" @onclick="() => ShowModal(ModalType.Secondary)">Show Secondary Modal</Button>\n<Button Color="ButtonColor.Success" @onclick="() => ShowModal(ModalType.Success)">Show Success Modal</Button>\n<Button Color="ButtonColor.Danger" @onclick="() => ShowModal(ModalType.Danger)">Show Danger Modal</Button>\n<Button Color="ButtonColor.Warning" @onclick="() => ShowModal(ModalType.Warning)">Show Warning Modal</Button>\n<Button Color="ButtonColor.Info" @onclick="() => ShowModal(ModalType.Info)">Show Info Modal</Button>\n<Button Color="ButtonColor.Light" @onclick="() => ShowModal(ModalType.Light)">Show Light Modal</Button>\n<Button Color="ButtonColor.Dark" @onclick="() => ShowModal(ModalType.Dark)">Show Dark Modal</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task ShowModal(ModalType modalType)\n    {\n        var modalOption = new ModalOption\n                          {\n                              Title = "Modal title",\n                              Message = "Modal body text goes here.",\n                              Type = modalType,\n                          };\n\n        await ModalService.ShowAsync(modalOption);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modal-service#how-it-works"},"See demo here.")),(0,n.kt)("h3",{id:"vertically-centered"},"Vertically Centered"),(0,n.kt)("img",{src:"https://i.imgur.com/j1GeDQ3.png",alt:"Blazor Modal Service: Vertically Centered"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="() => ShowModal(ModalType.Primary)">Show Primary Modal</Button>\n<Button Color="ButtonColor.Secondary" @onclick="() => ShowModal(ModalType.Secondary)">Show Secondary Modal</Button>\n<Button Color="ButtonColor.Success" @onclick="() => ShowModal(ModalType.Success)">Show Success Modal</Button>\n<Button Color="ButtonColor.Danger" @onclick="() => ShowModal(ModalType.Danger)">Show Danger Modal</Button>\n<Button Color="ButtonColor.Warning" @onclick="() => ShowModal(ModalType.Warning)">Show Warning Modal</Button>\n<Button Color="ButtonColor.Info" @onclick="() => ShowModal(ModalType.Info)">Show Info Modal</Button>\n<Button Color="ButtonColor.Light" @onclick="() => ShowModal(ModalType.Light)">Show Light Modal</Button>\n<Button Color="ButtonColor.Dark" @onclick="() => ShowModal(ModalType.Dark)">Show Dark Modal</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task ShowModal(ModalType modalType)\n    {\n        var modalOption = new ModalOption\n                          {\n                              Title = "Modal title",\n                              Message = "Modal body text goes here.",\n                              Type = modalType,\n                              IsVerticallyCentered = true\n                          };\n\n        await ModalService.ShowAsync(modalOption);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modal-service#vertically-centered"},"See demo here.")),(0,n.kt)("h3",{id:"size"},"Size"),(0,n.kt)("img",{src:"https://i.imgur.com/HDBtQDf.png",alt:"Blazor Modal Service: Size"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="() => ShowModal(ModalSize.Regular)">Show Regular Modal</Button>\n<Button Color="ButtonColor.Secondary" @onclick="() => ShowModal(ModalSize.Small)">Show Small Modal</Button>\n<Button Color="ButtonColor.Success" @onclick="() => ShowModal(ModalSize.Large)">Show Large Modal</Button>\n<Button Color="ButtonColor.Danger" @onclick="() => ShowModal(ModalSize.ExtraLarge)">Show ExtraLarge Modal</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task ShowModal(ModalSize modalSize)\n    {\n        var modalOption = new ModalOption\n                          {\n                              Title = "Modal title",\n                              Message = "Modal body text goes here.",\n                              Size = modalSize\n                          };\n\n        await ModalService.ShowAsync(modalOption);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modal-service#size"},"See demo here.")),(0,n.kt)("h3",{id:"change-footer-button-color-and-text"},"Change footer button color and text"),(0,n.kt)("img",{src:"https://i.imgur.com/4Hwfj3P.png",alt:"Blazor Modal Service: Change footer button color and text"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="ShowModal">Show Modal</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task ShowModal()\n    {\n        var modalOption = new ModalOption\n                          {\n                              Title = "Modal title",\n                              Message = "Modal body text goes here.",\n                              FooterButtonColor = ButtonColor.Primary,\n                              FooterButtonText = "Got it!"\n                          };\n\n        await ModalService.ShowAsync(modalOption);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modal-service#change-footer-button-color-and-text"},"See demo here.")),(0,n.kt)("h3",{id:"hide-footer-button"},"Hide footer button"),(0,n.kt)("img",{src:"https://i.imgur.com/NwMP5MT.png",alt:"Blazor Modal Service: Hide footer button"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="ShowModal">Show Modal</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task ShowModal()\n    {\n        var modalOption = new ModalOption\n                          {\n                              Title = "Modal title",\n                              Message = "Modal body text goes here.",\n                              ShowFooterButton = false\n                          };\n\n        await ModalService.ShowAsync(modalOption);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modal-service#hide-footer-button"},"See demo here.")),(0,n.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the ",(0,n.kt)("strong",{parentName:"li"},"Modal")," component in ",(0,n.kt)("strong",{parentName:"li"},"MainLayout.razor")," page as shown below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{9} showLineNumbers","{9}":!0,showLineNumbers:!0},'@inherits LayoutComponentBase\n\n...\n\n... MainLayour.razor code goes here ...\n\n...\n\n<Modal IsServiceModal="true" />\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Inject ",(0,n.kt)("strong",{parentName:"li"},"ModalService"),", then call the ",(0,n.kt)("inlineCode",{parentName:"li"},"ShowAsync(...)")," method as shown below. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ShowAsync")," method accepts ",(0,n.kt)("strong",{parentName:"li"},"ModalOption")," object as a parameter.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,10-15,17,23-28,30} showLineNumbers","{2,10-15,17,23-28,30}":!0,showLineNumbers:!0},'@code {\n    [Inject] ModalService ModalService { get; set; } = default!;\n\n    private async Task SaveEmployeeAsync()\n    {\n        try\n        {\n            // call the service/api to save the employee details\n\n            var modalOption = new ModalOption\n                              {\n                                  Title = "Save Employee",\n                                  Message = "Employee details saved.",\n                                  Type = ModalType.Success\n                              };\n\n            await ModalService.ShowAsync(modalOption);\n        }\n        catch(Exception ex)\n        {\n            // handle exception\n\n            var modalOption = new ModalOption\n                              {\n                                  Title = "Save Employee",\n                                  Message = $"Error: {ex.Message}.",\n                                  Type = ModalType.Danger\n                              };\n\n            await ModalService.ShowAsync(modalOption);\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);