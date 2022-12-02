"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[9907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const r={id:"override_formats",title:"Override Formats"},o=void 0,l={unversionedId:"Configuration/override_formats",id:"version-2.8.0/Configuration/override_formats",title:"Override Formats",description:"This applies to all init.lua fields except those that expect specific",source:"@site/versioned_docs/version-2.8.0/Configuration/override_formats.md",sourceDirName:"Configuration",slug:"/Configuration/override_formats",permalink:"/2.8.0/Configuration/override_formats",draft:!1,tags:[],version:"2.8.0",frontMatter:{id:"override_formats",title:"Override Formats"},sidebar:"docs",previous:{title:"Available User Options",permalink:"/2.8.0/Configuration/config_options"},next:{title:"Default Plugin Configurations",permalink:"/2.8.0/Configuration/plugin_defaults"}},s={},p=[{value:"Override Table",id:"override-table",level:3},{value:"Override Function",id:"override-function",level:3}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This applies to all ",(0,a.kt)("inlineCode",{parentName:"p"},"init.lua")," fields except those that expect specific\nfunction definitions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.on_attach"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.server_registration"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"polish"),"."),(0,a.kt)("p",null,"Anywhere where you want to override a default provided lua table such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," (specifying user plugins) or ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.X")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," is a default\nplugin where you want to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup()")," call."),(0,a.kt)("h3",{id:"override-table"},"Override Table"),(0,a.kt)("p",null,"For most use cases, supplying a table is more than enough for supplying your\nown configuration changes to a default table. This is done by simply providing\na new table and we merge the table with the default table where the user table\ntakes precedence."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," table can be used to add new plugins to be\ninstalled along side the default plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  init = {\n    { "andweeb/presence.nvim" }, -- each table entry is a plugin using the Packer syntax without the "use"\n    {\n      "ray-x/lsp_signature.nvim",\n      event = "BufRead",\n      config = function()\n        require("lsp_signature").setup()\n      end,\n    },\n  },\n},\n')),(0,a.kt)("p",null,"For adding new key mappings and updating which-key menu, ",(0,a.kt)("inlineCode",{parentName:"p"},"mapping")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},'["which-key"]')," table are used to extend existing configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'mappings = {\n  -- first key is the mode\n  -- desc setting is stored by vim.keymap.set() as a part of opts table in vim lua module\n  n = {\n    -- second key is the lefthand side of the map\n    -- BUffer\n    ["<leader>bb"] = { "<cmd>tabnew<cr>", desc = "New tab" },\n    ["<leader>bc"] = { "<cmd>BufferLinePickClose<cr>", desc = "Pick to close" },\n    ["<leader>bj"] = { "<cmd>BufferLinePick<cr>", desc = "Pick to jump" },\n    -- quick save\n    -- ["<C-s>"] = { ":w!<cr>", desc = "Save File" },  -- change description but the same command\n  },\n  t = {\n    -- setting a mapping to false will disable it\n    -- ["<esc>"] = false,\n  },\n},\n-- Modify which-key registration (this is parsed after mapping)\n["which-key"] = {\n  -- Add bindings which show up as group name\n  -- \n  -- Don\'t create settings for key mapping here.  Such mapping becomes usable\n  -- only via slow which-key interface (not usable via native fast vim key\n  -- mapping)\n  --\n  -- which-key will pick up defined vim key mappings, if defined with desc.\n  register_mappings = {\n    -- first key is the mode, n == normal mode\n    n = {\n      -- second key is the prefix, <leader> prefixes\n      ["<leader>"] = {\n        -- third key is the key to bring up next level and its displayed name in which-key top level\n        ["b"] = { name = "Buffer" },\n      },\n    },\n  },\n},\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please pay attention to the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"desc")," used in the above.")),(0,a.kt)("h3",{id:"override-function"},"Override Function"),(0,a.kt)("p",null,"There may be cases where you want to have more control over the default tables\nwhen overriding them. For these situations we also provide the ability to use a\n",(0,a.kt)("inlineCode",{parentName:"p"},"function")," that takes one parameter (the default table) and returns a new table\nto be used in it's place. This method is a lot more advanced and requires\nknowledge of the Lua programming language."),(0,a.kt)("p",null,"For example with ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init"),", you may want to disable lazy-loading for a default plugin while also providing your own plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  init = function(default_plugins)\n    -- A table for your own plugins to load\n    local my_plugins = {\n      { "andweeb/presence.nvim" },\n      {\n        "ray-x/lsp_signature.nvim",\n        event = "BufRead",\n        config = function()\n          require("lsp_signature").setup()\n        end,\n      },\n    }\n\n    -- The default plugin table is indexable by the package github username/repository\n    -- You can directly modify the default table and remove the Packer "cmd" configuration\n    default_plugins["akinsho/nvim-toggleterm.lua"]["cmd"] = nil\n\n    -- Finally  you will want to add the my_plugins table to the default table and return it\n    return vim.tbl_deep_extend("force", plugins, my_plugins)\n  end,\n},\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": These functions are called when they are needed are are lazy-loaded, so\nfor example if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.cmp")," with a function\n(",(0,a.kt)("inlineCode",{parentName:"p"},"function(table)...end"),"), this will be run after ",(0,a.kt)("inlineCode",{parentName:"p"},"cmp")," is loaded and you will\nbe able to do ",(0,a.kt)("inlineCode",{parentName:"p"},'cmp = require("cmp")')," within the function."))}d.isMDXComponent=!0}}]);