"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),p=function(e){var n=s.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||a;return t?s.createElement(d,i(i({ref:n},u),{},{components:t})):s.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=t(7462),r=(t(7294),t(3905));const a={id:"advanced_lsp",title:"Advanced LSP Setup"},i=void 0,l={unversionedId:"Recipes/advanced_lsp",id:"version-1.9.0/Recipes/advanced_lsp",title:"Advanced LSP Setup",description:"LSP Setup Without Installer",source:"@site/versioned_docs/version-1.9.0/Recipes/advanced_lsp.md",sourceDirName:"Recipes",slug:"/Recipes/advanced_lsp",permalink:"/Recipes/advanced_lsp",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"advanced_lsp",title:"Advanced LSP Setup"},sidebar:"docs",previous:{title:"Black Belt Example User Configs",permalink:"/Recipes/black_belt"},next:{title:"Dashboard Customizations",permalink:"/Recipes/alpha"}},o={},p=[{value:"LSP Setup Without Installer",id:"lsp-setup-without-installer",level:3},{value:"LSP Specific Plugins",id:"lsp-specific-plugins",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"lsp-setup-without-installer"},"LSP Setup Without Installer"),(0,r.kt)("p",null,"AstroNvim comes with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig")," as an easy interface for setting up and installing language servers, but this might not be adequate for all users. The LSP installer doesn't support all of the language servers that Neovim's LSP config supports and some users may already have the language servers installed on their machine and don't want to reinstall it separately. In these cases we have added an easy interface for setting up these servers. The following is a minimal ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that simply sets up ",(0,r.kt)("inlineCode",{parentName:"p"},"pyright")," language server for a user with ",(0,r.kt)("inlineCode",{parentName:"p"},"pyright")," already available on their system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n  },\n}\n')),(0,r.kt)("p",null,"If the user wants to configure server specific settings and configurations then they can do this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.server-settings")," table as well. For example if the user wants to use ",(0,r.kt)("inlineCode",{parentName:"p"},"pyright")," that is already available on their system and disable the single file support then can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n    ["server-settings"] = {\n      pyright = {\n        single_filesupport = false,\n      },\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"lsp-specific-plugins"},"LSP Specific Plugins"),(0,r.kt)("p",null,"There are some plugins available for doing advanced setup of language servers that require the user to not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup call and instead use their own plugin setup for handling this. AstroNvim provides a nice way to do this while still using ",(0,r.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," for installing the language servers. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.skip_setup")," table for specifying which language servers to guarantee AstroNvim will not automatically call the ",(0,r.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup for. We also provide a helper function for getting the AstroNvim default server configuration like our built in ",(0,r.kt)("inlineCode",{parentName:"p"},"capabilities"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"on_attach"),", as well as the user defined options in ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.server-settings"),". Here is a couple examples for some common LSP plugins:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "tsserver" },\n  },\n  plugins = {\n    init = {\n      {\n        "jose-elias-alvarez/typescript.nvim",\n        after = "mason-lspconfig.nvim",\n        config = function()\n          require("typescript").setup {\n            server = astronvim.lsp.server_settings "tsserver",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "tsserver" },\n    },\n  },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/p00f/clangd_extensions.nvim"},"clangd_extensions.nvim"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "clangd" },\n    ["server-settings"] = {\n      clangd = {\n        capabilities = {\n          offsetEncoding = "utf-8",\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "p00f/clangd_extensions.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("clangd_extensions").setup {\n            server = astronvim.lsp.server_settings "clangd",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "clangd" },\n    },\n  },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/akinsho/flutter-tools.nvim"},"flutter-tools.nvim"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "dartls" }, -- skip lsp setup because flutter-tools will do it itself\n    ["server-settings"] = {\n      dartls = {\n        -- any changes you want to make to the LSP setup, for example\n        color = {\n          enabled = true,\n        },\n        settings = {\n          showTodos = true,\n          completeFunctionCalls = true,\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "akinsho/flutter-tools.nvim",\n        requires = "nvim-lua/plenary.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("flutter-tools").setup {\n            lsp = astronvim.lsp.server_settings "dartls", -- get the server settings and built in capabilities/on_attach\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "dartls" }, -- install dartls\n    },\n  },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/simrat39/rust-tools.nvim"},"rust-tools.nvim"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "rust_analyzer" }, -- skip lsp setup because rust-tools will do it itself\n  },\n  plugins = {\n    init = {\n      {\n        "simrat39/rust-tools.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("rust-tools").setup {\n            server = astronvim.lsp.server_settings "rust_analyzer", -- get the server settings and built in capabilities/on_attach\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "rust_analyzer" }, -- install rust_analyzer\n    },\n  },\n}\n')))}c.isMDXComponent=!0}}]);