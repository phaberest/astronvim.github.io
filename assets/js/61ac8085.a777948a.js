"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[8105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"unattended_install",title:"Unattended Installation"},o=void 0,l={unversionedId:"Recipes/unattended_install",id:"version-2.3.0/Recipes/unattended_install",title:"Unattended Installation",description:"Instead of running nvim +PackerSync to initialize AstroNvim you can run the",source:"@site/versioned_docs/version-2.3.0/Recipes/unattended_install.md",sourceDirName:"Recipes",slug:"/Recipes/unattended_install",permalink:"/2.3.0/Recipes/unattended_install",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"unattended_install",title:"Unattended Installation"},sidebar:"docs",previous:{title:"NvChad Telescope Theme",permalink:"/2.3.0/Recipes/telescope_theme"},next:{title:"Acknowledgements",permalink:"/2.3.0/acknowledgements"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Instead of running ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim +PackerSync")," to initialize AstroNvim you can run the\nfollowing command to do a fully headless initialization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nvim  --headless -c 'autocmd User PackerComplete quitall' -c 'PackerSync'\n")),(0,a.kt)("p",null,"Full Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim")),(0,a.kt)("li",{parentName:"ol"},"(Optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone"),"/copy over user configuration to ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.config/nvim/user")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"nvim --headless -c 'autocmd User PackerComplete quitall' -c 'PackerSync'"))))}u.isMDXComponent=!0}}]);