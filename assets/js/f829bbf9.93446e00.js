"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[1536],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),N=l,s=u["".concat(d,".").concat(N)]||u[N]||k[N]||i;return n?a.createElement(s,r(r({ref:e},m),{},{components:n})):a.createElement(s,r({ref:e},m))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=N;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},73277:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={id:"config_options",title:"Available User Options"},r=void 0,o={unversionedId:"Configuration/config_options",id:"version-3.0.0/Configuration/config_options",title:"Available User Options",description:"| user/init.lua table key  | Expected Format            | Use Case                                                                                                                   | Alternate File Path (in user/ folder) |",source:"@site/versioned_docs/version-3.0.0/Configuration/config_options.md",sourceDirName:"Configuration",slug:"/Configuration/config_options",permalink:"/Configuration/config_options",draft:!1,tags:[],version:"3.0.0",frontMatter:{id:"config_options",title:"Available User Options"},sidebar:"docs",previous:{title:"Configuration Mechanism",permalink:"/Configuration/config_mechanism"},next:{title:"Using Old Versions of Neovim",permalink:"/Configuration/nvim_versions"}},d={},p=[],m={toc:p},u="wrapper";function k(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"user/init.lua")," table key"),(0,l.kt)("th",{parentName:"tr",align:null},"Expected Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternate File Path (in ",(0,l.kt)("inlineCode",{parentName:"th"},"user/")," folder)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"colorscheme")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The colorscheme to be set"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"colorscheme.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diagnostics")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default vim diagnostics options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diagnostics.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the section hightlight attributes used by Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/attributes.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.colors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the section colors used by Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/colors.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.icon_highlights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify which components should do dynamic icon highlighting Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/icon_highlights.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.separators")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the section separators used by Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/separators.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights.init")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom highlight groups for the all colorschemes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights/init.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights.<colorscheme>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom highlight groups for the specified theme, replace ",(0,l.kt)("inlineCode",{parentName:"td"},"<colorscheme>")," with colorscheme name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights/<colorscheme>.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the icons used in the user interface"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icons.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lazy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default lazy.nvim ",(0,l.kt)("inlineCode",{parentName:"td"},"setup")," configuration table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lazy.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.capabilities")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"capabilities")," table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/capabilities.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.config.<lsp>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the LSP server settings, replace ",(0,l.kt)("inlineCode",{parentName:"td"},"<lsp>")," with server name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/config/<lsp>.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.flags")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"flags")," table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/flags.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.formatting")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the formatting options described in the ",(0,l.kt)("a",{parentName:"td",href:"/Recipes/advanced_lsp#controlling-formatting"},"LSP Configuration Page")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/formatting.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.on_attach")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(client, bufnr)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"on_attach")," function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/on_attach.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.servers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to be set up that are already installed without ",(0,l.kt)("inlineCode",{parentName:"td"},"mason")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/servers.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.setup_handlers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lspconfig")," setup handler for a given language server, each key in the table should be a language server"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/setup_handlers.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.skip_setup")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to guarantee the ",(0,l.kt)("inlineCode",{parentName:"td"},"lspconfig")," setup is never called on automatically"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/skip_setup.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"vim.x.y")," variables to be set"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lazy.nvim")," plugin specifications"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/<any_files>.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polish")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function()")),(0,l.kt)("td",{parentName:"tr",align:null},"Lua function to be run last. Good place for setting vim options and adding mappings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polish.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text_icons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the text based icons used in the user interface when ",(0,l.kt)("inlineCode",{parentName:"td"},"vim.g.icons_enabled = false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text_icons.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updater")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)")),(0,l.kt)("td",{parentName:"tr",align:null},"The configuration for the AstroNvim updater"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updater.lua"))))))}k.isMDXComponent=!0}}]);