"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[742],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(n),N=r,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4632:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={id:"config_options",title:"Available User Options"},o=void 0,p={unversionedId:"configuration/config_options",id:"configuration/config_options",title:"Available User Options",description:"| init.lua table key              | Expected Format                    | Use Case                                                                                      |",source:"@site/docs/configuration/config_options.md",sourceDirName:"configuration",slug:"/configuration/config_options",permalink:"/configuration/config_options",tags:[],version:"current",frontMatter:{id:"config_options",title:"Available User Options"},sidebar:"docs",previous:{title:"Default Plugin Configurations",permalink:"/configuration/plugin_defaults"},next:{title:"Override Formats",permalink:"/configuration/override_formats"}},m={},u=[],k={toc:u};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"init.lua")," table key"),(0,l.kt)("th",{parentName:"tr",align:null},"Expected Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Use Case"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updater")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"The configuration for the AstroNvim updater")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"colorscheme")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The colorscheme to be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"vim.x.y")," variables to be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"table of ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"s"),(0,l.kt)("td",{parentName:"tr",align:null},"The header to be displayed on the Dashboard")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ui.nui_input")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to enable using NUI for vim.ui.input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ui.telescope_select")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to enable using Telescope for vim.ui.select")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polish")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function()...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Lua function to be run last. Good place for setting vim options and adding mappings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.diagnostics_style")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Set highlight style options for virtual text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.colors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's color table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.highlights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's highlight groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's enabled plugin highlight groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diagnostics")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default vim diagnostics options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"luasnip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify available ",(0,l.kt)("inlineCode",{parentName:"td"},"luasnip")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.init")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default plugins table such as adding new plugins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.aerial")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"aerial.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.autopairs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"autopairs.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.better_escape")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"better_escape.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.bufferline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"bufferline.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.cmp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"cmp.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.colorizer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"colorizer.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.Comment")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"Comment.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.gitsigns")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"gitsigns.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.nvim-web-devicons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"nvim-web-devicons.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.indent_blankline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"indent_blankline.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.indent-o-matic")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"indent-o-matic.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.lualine")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lualine.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.cinnamon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"cinnamon.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.neo-tree")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"neo-tree.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.null-ls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"null-ls.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.telescope")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"telescope.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.toggleterm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"toggleterm.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.treesitter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"treesitter.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.which-key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"which-key.setup()")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key.register_mappings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default which-key bindings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key.show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(orig_show)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default ",(0,l.kt)("inlineCode",{parentName:"td"},"which-key.show()")," method. Must return ",(0,l.kt)("inlineCode",{parentName:"td"},"function(key, opts)...end"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cmp.source_priority")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default cmp sources and their priorities")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key.setup")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the extended ",(0,l.kt)("inlineCode",{parentName:"td"},"cmp")," setup calls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.servers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to be set up that are already installed without ",(0,l.kt)("inlineCode",{parentName:"td"},"nvim-lsp-installer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.skip_setup")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to guarantee the lspconfig setup is never called on automatically")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.server-settings.<lsp>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the LSP server settings, replace ",(0,l.kt)("inlineCode",{parentName:"td"},"<lsp>")," with server name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.on_attach")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(client, bufnr)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the lsp ",(0,l.kt)("inlineCode",{parentName:"td"},"on_attach")," function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.server_registration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(server, opts)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lsp-installer")," ",(0,l.kt)("inlineCode",{parentName:"td"},"server_registration")," function")))))}N.isMDXComponent=!0}}]);