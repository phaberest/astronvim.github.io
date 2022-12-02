"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[3853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=p,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:p,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),p=(n(7294),n(3905));const s={id:"snippets",title:"Custom VS Code Style Snippets"},a=void 0,o={unversionedId:"Recipes/snippets",id:"version-1.8.0/Recipes/snippets",title:"Custom VS Code Style Snippets",description:"user/init.lua:",source:"@site/versioned_docs/version-1.8.0/Recipes/snippets.md",sourceDirName:"Recipes",slug:"/Recipes/snippets",permalink:"/1.8.0/Recipes/snippets",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"snippets",title:"Custom VS Code Style Snippets"},sidebar:"docs",previous:{title:"Disable Global Statusbar",permalink:"/1.8.0/Recipes/globalstatus"},next:{title:"NvChad Telescope Theme",permalink:"/1.8.0/Recipes/telescope_theme"}},i={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  luasnip = {\n    vscode_snippet_paths = {\n      "./lua/user/snippets",\n    },\n  },\n}\n')),(0,p.kt)("p",null,"Create a folder inside of your ",(0,p.kt)("inlineCode",{parentName:"p"},"user/")," folder called ",(0,p.kt)("inlineCode",{parentName:"p"},"snippets"),". Add snippets to that folder that follow the vscode style as described in the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#vscode-snippets-loader"},"Documentation")),(0,p.kt)("p",null,"Necessary configuration file in ",(0,p.kt)("inlineCode",{parentName:"p"},"user/snippets/package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "user snippets",\n  "engines": {\n    "vscode": "^1.11.0"\n  },\n  "contributes": {\n    "snippets": [\n      {\n        "language": "vue",\n        "path": "./vue.json"\n      }\n    ]\n  }\n}\n')),(0,p.kt)("p",null,"Example Vue snippet in ",(0,p.kt)("inlineCode",{parentName:"p"},"user/snippets/vue.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "setup": {\n    "prefix": ["setup", "template"],\n    "body": [\n      "<template>",\n      "\\t$1",\n      "</template>",\n      "",\n      "<script lang=\\"ts\\" setup>",\n      "\\t$2",\n      "<\/script>",\n      "",\n      "<style lang=\\"sass\\">",\n      "\\t$3",\n      "</style>",\n      ""\n    ],\n    "description": "My standard setup Vue3 + TS"\n  }\n}\n')))}u.isMDXComponent=!0}}]);