"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[8478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:d,values:h,groupId:g,className:v}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[C,O]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==C&&f.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(E(t),O(a),null!=g&&w(g,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;n=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},5110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},u=void 0,s={unversionedId:"intro",id:"version-1.8.0/intro",title:"Getting Started",description:"AstroNvim Screenshot",source:"@site/versioned_docs/version-1.8.0/intro.md",sourceDirName:".",slug:"/",permalink:"/1.8.0/",draft:!1,tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"Basic Walkthrough",permalink:"/1.8.0/Basic Usage/walkthrough"}},p={},m=[{value:"\u26a1 Requirements",id:"-requirements",level:2},{value:"\ud83d\udee0\ufe0f Installation",id:"\ufe0f-installation",level:2},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder",level:4},{value:"Clean old plugins (Optional but recommended)",id:"clean-old-plugins-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder-1",level:4},{value:"Clean old plugins (Optional but recommended)",id:"clean-old-plugins-optional-but-recommended-1",level:4},{value:"Clone the repository",id:"clone-the-repository-1",level:4},{value:"\ud83d\udce6 Setup",id:"-setup",level:2},{value:"Install LSP",id:"install-lsp",level:4},{value:"Install language parser",id:"install-language-parser",level:4},{value:"Manage plugins",id:"manage-plugins",level:4},{value:"Update AstroNvim",id:"update-astronvim",level:4},{value:"\u2728 Features",id:"-features",level:2},{value:"\u2699\ufe0f Configuration",id:"\ufe0f-configuration",level:2}],c={toc:m};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AstroNvim Screenshot",src:n(5708).Z,width:"1920",height:"1080"})),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"AstroNvim v1.4.0 has added ",(0,l.kt)("inlineCode",{parentName:"p"},"stable")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"nightly")," update channels. For the time being we have kept the default update channel to ",(0,l.kt)("inlineCode",{parentName:"p"},"nightly")," so that the behavior of AstroNvim doesn't change (this could be considered a breaking change to some). We are planning to make the ",(0,l.kt)("inlineCode",{parentName:"p"},"stable"),' channel the default update channel when Neovim v0.8 is released and we tag AstroNvim v2.0.0 to incorporate this "breaking" change.')),(0,l.kt)("h2",{id:"-requirements"},"\u26a1 Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/v0.7.0"},"Neovim 0.7+")),(0,l.kt)("li",{parentName:"ul"},"Terminal with true color support (for the default theme, otherwise it is dependent on the theme you are using)"),(0,l.kt)("li",{parentName:"ul"},"Optional Requirements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," - live grep telescope search (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>fw"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jesseduffield/lazygit"},"lazygit")," - git ui toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tl")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>gg"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.yorhel.nl/ncdu"},"NCDU")," - disk usage toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tu"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://htop.dev/"},"Htop")," - process viewer toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tt"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")," - python repl toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tp"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," - node repl toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tn"),")")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"When using default theme: For MacOS, the default terminal does not have true color support. You wil need to use ",(0,l.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2")," or another ",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/XVilka/8346728#terminal-emulators"},"terminal emulator")," that has true color support.")),(0,l.kt)("h2",{id:"\ufe0f-installation"},"\ud83d\udee0\ufe0f Installation"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nix",label:"Linux/Mac OS (Unix)",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder"},"Make a backup of your current nvim folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.config/nvim ~/.config/nvim.bak\n")),(0,l.kt)("h4",{id:"clean-old-plugins-optional-but-recommended"},"Clean old plugins (Optional but recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.local/share/nvim/site ~/.local/share/nvim/site.bak\n")),(0,l.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\nnvim +PackerSync\n"))),(0,l.kt)(i.Z,{value:"windoze",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder-1"},"Make a backup of your current nvim folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv $HOME\\AppData\\Local\\nvim $HOME\\AppData\\Local\\nvim.bak\n")),(0,l.kt)("h4",{id:"clean-old-plugins-optional-but-recommended-1"},"Clean old plugins (Optional but recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv $HOME\\AppData\\Local\\nvim-data $HOME\\AppData\\Local\\nvim-data.bak\n")),(0,l.kt)("h4",{id:"clone-the-repository-1"},"Clone the repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim $HOME\\AppData\\Local\\nvim\nnvim +PackerSync\n"))),(0,l.kt)(i.Z,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"If you want to try AstroNvim before installing you can user the following Docker command to open a test instance without touching your current Neovim configuration. This also allows you to use ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall")," and ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall")," to load and evaluate language servers and treesitter parsers as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -w /root -it --rm alpine:edge sh -uelic \'\n  apk add git nodejs lazygit ncdu htop python3 neovim ripgrep alpine-sdk --update\n  git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\n  # Uncomment the line below and replace the link with your user config repo to load a user config\n  # git clone https://github.com/username/AstroNvim_user ~/.config/nvim/lua/user\n  nvim --headless -c "autocmd User PackerComplete quitall" -c "PackerSync"\n  nvim\n\'\n')))),(0,l.kt)("h2",{id:"-setup"},"\ud83d\udce6 Setup"),(0,l.kt)("h4",{id:"install-lsp"},"Install LSP"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall")," followed by the name of the server you want to install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall pyright"))),(0,l.kt)("h4",{id:"install-language-parser"},"Install language parser"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall")," followed by the name of the language you want to install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall python"))),(0,l.kt)("h4",{id:"manage-plugins"},"Manage plugins"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":PackerClean")," to remove any disabled or unused plugins"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":PackerSync")," to update and clean plugins"),(0,l.kt)("h4",{id:"update-astronvim"},"Update AstroNvim"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":AstroUpdate")," to get the latest updates from the repository"),(0,l.kt)("h2",{id:"-features"},"\u2728 Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File explorer with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"Neo-tree")),(0,l.kt)("li",{parentName:"ul"},"Autocompletion with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},"Cmp")),(0,l.kt)("li",{parentName:"ul"},"Git integration with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},"Gitsigns")),(0,l.kt)("li",{parentName:"ul"},"Statusline with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/feline-nvim/feline.nvim"},"Feline")),(0,l.kt)("li",{parentName:"ul"},"Terminal with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/akinsho/toggleterm.nvim"},"Toggleterm")),(0,l.kt)("li",{parentName:"ul"},"Fuzzy finding with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-telescope/telescope.nvim"},"Telescope")),(0,l.kt)("li",{parentName:"ul"},"Syntax highlighting with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"Treesitter")),(0,l.kt)("li",{parentName:"ul"},"Formatting and linting with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"Null-ls")),(0,l.kt)("li",{parentName:"ul"},"Language Server Protocol with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"Native LSP"))),(0,l.kt)("h2",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,l.kt)("p",null,"To begin making custom user configurations you must create a ",(0,l.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,l.kt)("p",null,"The provided example\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/AstroNvim/blob/main/lua/user_example"},"user_example"),"\ncontains an ",(0,l.kt)("inlineCode",{parentName:"p"},"init.lua")," file which can be used for all user configuration. After\nrunning the ",(0,l.kt)("inlineCode",{parentName:"p"},"cp")," command above this file can be found in\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua"),"."))}d.isMDXComponent=!0},5708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-10e85680b1d467fe27792aedeb271efa.png"}}]);