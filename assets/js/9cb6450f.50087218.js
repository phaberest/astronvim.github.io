"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={id:"icons",title:"Customize Icons"},r=void 0,s={unversionedId:"Recipes/icons",id:"version-2.8.1/Recipes/icons",title:"Customize Icons",description:"Disable Icons",source:"@site/versioned_docs/version-2.8.1/Recipes/icons.md",sourceDirName:"Recipes",slug:"/Recipes/icons",permalink:"/Recipes/icons",draft:!1,tags:[],version:"2.8.1",frontMatter:{id:"icons",title:"Customize Icons"},sidebar:"docs",previous:{title:"Disable Global Statusbar",permalink:"/Recipes/globalstatus"},next:{title:"Custom VS Code Style Snippets",permalink:"/Recipes/snippets"}},l={},c=[{value:"Disable Icons",id:"disable-icons",level:3},{value:"Customize User Interface Icons",id:"customize-user-interface-icons",level:3},{value:"Text Icons",id:"text-icons",level:4},{value:"VS Code Style Icons",id:"vs-code-style-icons",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"disable-icons"},"Disable Icons"),(0,o.kt)("p",null,"Some users may want to disable icons across the entire user interface because they don't like icons or simply because they are using a machine that is unable to install a nerd font for whatever reason. To assist with this use case we have added a new option variable ",(0,o.kt)("inlineCode",{parentName:"p"},"vim.g.icons_enabled")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),") that lets you disable the icons entirely and just have a text based user interface. To opt into this text based UI, it does require a user configuration setting the appropriate option. Here is a minimal ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that just disables the icons. ",(0,o.kt)("em",{parentName:"p"},"Note:")," This does require the user to restart and run ",(0,o.kt)("inlineCode",{parentName:"p"},":PackerSync")," to remove the icon plugins as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = {\n    g = {\n      icons_enabled = false,\n    },\n  },\n}\n")),(0,o.kt)("h3",{id:"customize-user-interface-icons"},"Customize User Interface Icons"),(0,o.kt)("p",null,"AstroNvim uses a large set of icons across the entire user interface to maintain continuity between plugins and places where we display the same types of information. Because of this centralized icon management, we are able to allow the user to completely customize the user interface easily and let them change the icons in the ",(0,o.kt)("inlineCode",{parentName:"p"},"icons")," table in a ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file or in ",(0,o.kt)("inlineCode",{parentName:"p"},"user/icons.lua")," file. Here is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that sets all of the available user interface icons to what is currently the default in AstroNvim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  icons = {\n    MacroRecording = "\uf03d",\n    ActiveLSP = "\uf085",\n    ActiveTS = "\uf93d",\n    BufferClose = "\uf655",\n    NeovimClose = "\uf658",\n    DefaultFile = "\ue612",\n    Diagnostic = "\uf9a0",\n    DiagnosticError = "\uf057",\n    DiagnosticHint = "\uf834",\n    DiagnosticInfo = "\uf7fb",\n    DiagnosticWarn = "\uf071",\n    Ellipsis = "\u2026",\n    FileModified = "\uf444",\n    FileReadOnly = "\uf023",\n    FolderClosed = "\ue5ff",\n    FolderEmpty = "\uf414",\n    FolderOpen = "\ue5fe",\n    Git = "\uf7a1",\n    GitAdd = "\uf0fe",\n    GitBranch = "\ue725",\n    GitChange = "\uf14b",\n    GitConflict = "\ue727",\n    GitDelete = "\uf146",\n    GitIgnored = "\u25cc",\n    GitRenamed = "\u279c",\n    GitStaged = "\u2713",\n    GitUnstaged = "\u2717",\n    GitUntracked = "\u2605",\n    LSPLoaded = "\uf058",\n    LSPLoading1 = "\uf10c",\n    LSPLoading2 = "\uf519",\n    LSPLoading3 = "\uf192",\n  },\n}\n')),(0,o.kt)("h4",{id:"text-icons"},"Text Icons"),(0,o.kt)("p",null,"If you have ",(0,o.kt)("inlineCode",{parentName:"p"},"vim.g.icons_enabled = false"),", you can still customize the text based icons, but make modifications to the ",(0,o.kt)("inlineCode",{parentName:"p"},"text_icons")," table similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"icons")," described above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  text_icons = {\n    ActiveLSP = "LSP:",\n    ActiveTS = "",\n    BufferClose = "x",\n    DefaultFile = "[F]",\n    Diagnostic = "",\n    DiagnosticError = "X",\n    DiagnosticHint = "?",\n    DiagnosticInfo = "i",\n    DiagnosticWarn = "!",\n    Ellipsis = "...",\n    FileModified = "*",\n    FileReadOnly = "[lock]",\n    FolderClosed = "[D]",\n    FolderEmpty = "[E]",\n    FolderOpen = "[O]",\n    Git = "",\n    GitAdd = "[+]",\n    GitBranch = "",\n    GitChange = "[/]",\n    GitConflict = "[!]",\n    GitDelete = "[-]",\n    GitIgnored = "[I]",\n    GitRenamed = "[R]",\n    GitStaged = "[S]",\n    GitUnstaged = "[U]",\n    GitUntracked = "[?]",\n    LSPLoaded = "",\n    LSPLoading1 = "",\n    LSPLoading2 = "",\n    LSPLoading3 = "",\n    MacroRecording = "Recording:",\n    NeovimClose = "X",\n  },\n}\n')),(0,o.kt)("h3",{id:"vs-code-style-icons"},"VS Code Style Icons"),(0,o.kt)("p",null,"If you have the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode-codicons/tree/main/dist"},(0,o.kt)("inlineCode",{parentName:"a"},"codicon.ttf")," font")," installed then you can easily modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"lspkind")," options and the user interface ",(0,o.kt)("inlineCode",{parentName:"p"},"icons")," table in your ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file to match the icons used in VS Code. Here is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that sets the necessary values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  -- set up UI icons\n  icons = {\n    ActiveLSP = "\ueba2",\n    ActiveTS = "\ueba7 ",\n    BufferClose = "\uea76",\n    DefaultFile = "\uea7b",\n    Diagnostic = "\ueaac",\n    DiagnosticError = "\uea87",\n    DiagnosticHint = "\uea61",\n    DiagnosticInfo = "\uea74",\n    DiagnosticWarn = "\uea6c",\n    Ellipsis = "\uea7c",\n    FileModified = "\uea71",\n    FileReadOnly = "\uebe7",\n    FolderClosed = "\uea83",\n    FolderEmpty = "\ueaf7",\n    FolderOpen = "\ueaf7",\n    Git = "\uea84",\n    GitAdd = "\ueadc",\n    GitBranch = "\uea68",\n    GitChange = "\ueade",\n    GitConflict = "\ueafe",\n    GitDelete = "\ueadf",\n    GitIgnored = "\ueadd",\n    GitRenamed = "\ueae0",\n    GitStaged = "\ueab2",\n    GitUnstaged = "\ueab8",\n    GitUntracked = "\uea6a",\n    LSPLoaded = "\ueba4",\n    LSPLoading1 = "\ueb37",\n    LSPLoading2 = "\ueb37",\n    LSPLoading3 = "\ueb37",\n    MacroRecording = "\uead9",\n    NeovimClose = "\ueab8",\n  },\n  plugins = {\n    -- lspkind controls LSP icons\n    lspkind = function(config)\n      -- use codicons preset\n      config.preset = "codicons"\n      -- set some missing symbol types\n      config.symbol_map = {\n        Array = "\uea8a",\n        Boolean = "\uea8f",\n        Key = "\ueb11",\n        Namespace = "\uea8b",\n        Null = "\ueabd",\n        Number = "\uea90",\n        Object = "\ueb63",\n        Package = "\ueb29",\n        String = "\ueb8d",\n      }\n      return config\n    end,\n  },\n}\n')))}p.isMDXComponent=!0}}]);