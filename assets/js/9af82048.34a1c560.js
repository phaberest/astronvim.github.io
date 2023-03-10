"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[6618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},v=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},v),{},{components:t})):r.createElement(f,a({ref:n},v))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={id:"nvim_versions",title:"Using Old Versions of Neovim"},a=void 0,s={unversionedId:"Configuration/nvim_versions",id:"version-3.0.0/Configuration/nvim_versions",title:"Using Old Versions of Neovim",description:"If you need to use AstroNvim with a specific version of Neovim, you can use the",source:"@site/versioned_docs/version-3.0.0/Configuration/nvim_versions.md",sourceDirName:"Configuration",slug:"/Configuration/nvim_versions",permalink:"/Configuration/nvim_versions",draft:!1,tags:[],version:"3.0.0",frontMatter:{id:"nvim_versions",title:"Using Old Versions of Neovim"},sidebar:"docs",previous:{title:"Available User Options",permalink:"/Configuration/config_options"},next:{title:"Override Formats",permalink:"/Configuration/override_formats"}},l={},u=[{value:"Neovim v0.7",id:"neovim-v07",level:2},{value:"Neovim v0.8",id:"neovim-v08",level:2},{value:"Neovim v0.9",id:"neovim-v09",level:2}],v={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you need to use AstroNvim with a specific version of Neovim, you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," table in your user configuration to limit the versions that AstroNvim\nwill update to to maintain compatibility. These versions will not be receiving\nnew updates but with our pinned plugin commits, will guarantee that the old\nversion of AstroNvim will start using new plugin versions that have breaking\nchanges. Put these setting in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," table\nas described in the ",(0,i.kt)("a",{parentName:"p",href:"/Configuration/updater"},"Updater Documnetation"),":"),(0,i.kt)("h2",{id:"neovim-v07"},"Neovim v0.7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'updater = {\n  channel = "stable",\n  version = "v1.*"\n}\n')),(0,i.kt)("h2",{id:"neovim-v08"},"Neovim v0.8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'updater = {\n  channel = "stable",\n  version = "v2.*"\n}\n')),(0,i.kt)("h2",{id:"neovim-v09"},"Neovim v0.9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'updater = {\n  channel = "stable",\n  version = "v3.*"\n}\n')))}p.isMDXComponent=!0}}]);