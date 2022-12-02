"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[9824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"disable_winbar",title:"Disable Winbar"},o=void 0,s={unversionedId:"Recipes/disable_winbar",id:"version-2.2.0/Recipes/disable_winbar",title:"Disable Winbar",description:"By default AstroNvim enables the new winbar that comes with Neovim v0.8+. Some users may not like this behavior and prefer to not have a winbar at the top of each window. You can do this by overriding the heirline plugin configuration.",source:"@site/versioned_docs/version-2.2.0/Recipes/disable_winbar.md",sourceDirName:"Recipes",slug:"/Recipes/disable_winbar",permalink:"/2.2.0/Recipes/disable_winbar",draft:!1,tags:[],version:"2.2.0",frontMatter:{id:"disable_winbar",title:"Disable Winbar"},sidebar:"docs",previous:{title:"Custom Colorscheme",permalink:"/2.2.0/Recipes/colorscheme"},next:{title:"Disable Global Statusbar",permalink:"/2.2.0/Recipes/globalstatus"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default AstroNvim enables the new winbar that comes with Neovim v0.8+. Some users may not like this behavior and prefer to not have a winbar at the top of each window. You can do this by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"heirline")," plugin configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  plugins = {\n    heirline = function(config)\n      -- the first item is the statusline\n      -- the second item is the winbar\n      config[2] = nil\n      return config\n    end,\n  },\n}\n")))}u.isMDXComponent=!0}}]);