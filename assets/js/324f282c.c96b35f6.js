"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"colorscheme",title:"Custom Colorscheme"},a=void 0,c={unversionedId:"Recipes/colorscheme",id:"version-2.8.1/Recipes/colorscheme",title:"Custom Colorscheme",description:"Using a Custom Colorscheme",source:"@site/versioned_docs/version-2.8.1/Recipes/colorscheme.md",sourceDirName:"Recipes",slug:"/Recipes/colorscheme",permalink:"/Recipes/colorscheme",draft:!1,tags:[],version:"2.8.1",frontMatter:{id:"colorscheme",title:"Custom Colorscheme"},sidebar:"docs",previous:{title:"Customize cmp Completion",permalink:"/Recipes/cmp"},next:{title:"Custom Plugins",permalink:"/Recipes/custom_plugins"}},s={},l=[{value:"Using a Custom Colorscheme",id:"using-a-custom-colorscheme",level:2},{value:"Using a Custom Colorscheme Configured with Global Variables",id:"using-a-custom-colorscheme-configured-with-global-variables",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-a-custom-colorscheme"},"Using a Custom Colorscheme"),(0,r.kt)("p",null,"Example setting a custom colorscheme with ",(0,r.kt)("inlineCode",{parentName:"p"},"catppuccin")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "catppuccin",\n\n  plugins = {\n    init = {\n      {\n        "catppuccin/nvim",\n        as = "catppuccin",\n        config = function()\n          require("catppuccin").setup {}\n        end,\n      },\n    },\n  },\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There used to be a recommended trick to check for your colorscheme before setting it. We have improved the base installation to do this checking automatically. So no more need for user side checking.")),(0,r.kt)("h2",{id:"using-a-custom-colorscheme-configured-with-global-variables"},"Using a Custom Colorscheme Configured with Global Variables"),(0,r.kt)("p",null,"Some colorscheme plugins are configured through global variables rather than Lua functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"config()")," so they require a slightly different setup in Packer to get them working correctly. For example if we want to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sainnhe/sonokai"},"Sonokai"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "sonokai",\n  options = {\n    g = {\n      sonokai_style = "shusia"\n    }\n  },\n  plugins = {\n    init = {\n      { "sainnhe/sonokai" },\n    },\n  },\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This approach also handles the case when the colorscheme is not installed yet and AstroNvim will not try to set it.")))}p.isMDXComponent=!0}}]);