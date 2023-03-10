"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[7021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={id:"status",title:"Customizing Statusline"},r=void 0,s={unversionedId:"Recipes/status",id:"version-2.10.0/Recipes/status",title:"Customizing Statusline",description:"AstroNvim uses Heirline.nvim for both the custom statusline and winbar. Heirline is an extremely minimal statusline plugin that does not come with any preconfigured elements but focuses on speed and extensibility. To build our statusline, we have built an internal lua module of statusline elements that we use to build our own statusline, but can in turn be used in your user configuration to customize the statusline.",source:"@site/versioned_docs/version-2.10.0/Recipes/status.md",sourceDirName:"Recipes",slug:"/Recipes/status",permalink:"/2.10.0/Recipes/status",draft:!1,tags:[],version:"2.10.0",frontMatter:{id:"status",title:"Customizing Statusline"},sidebar:"docs",previous:{title:"Custom VS Code Style Snippets",permalink:"/2.10.0/Recipes/snippets"},next:{title:"NvChad Telescope Theme",permalink:"/2.10.0/Recipes/telescope_theme"}},l={},u=[{value:"Basic Options",id:"basic-options",level:2},{value:"Using <code>astronvim.status</code> Module",id:"using-astronvimstatus-module",level:2},{value:"Building a Component From Scratch",id:"building-a-component-from-scratch",level:3},{value:"Using the Predefined Components in <code>astronvim.status.component</code>",id:"using-the-predefined-components-in-astronvimstatuscomponent",level:3},{value:"Heirline Based Bufferline",id:"heirline-based-bufferline",level:2},{value:"Default Heirline Configuration",id:"default-heirline-configuration",level:2},{value:"Default Statusline With Mode Text",id:"default-statusline-with-mode-text",level:2},{value:"Replicate NvChad Statusline",id:"replicate-nvchad-statusline",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AstroNvim uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rebelot/heirline.nvim"},(0,a.kt)("inlineCode",{parentName:"a"},"Heirline.nvim"))," for both the custom statusline and winbar. Heirline is an extremely minimal statusline plugin that does not come with any preconfigured elements but focuses on speed and extensibility. To build our statusline, we have built an internal lua module of statusline elements that we use to build our own statusline, but can in turn be used in your user configuration to customize the statusline."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Customizing the statusline can be very manual and require a lot of knowledge of the API that we have provided. It is ",(0,a.kt)("strong",{parentName:"p"},"highly")," recommended to only do this if you are comfortable with programming Lua and reading the source code of AstroNvim."),(0,a.kt)("p",{parentName:"admonition"},"We have provided a couple recipes below for common use cases that can be copy/pasted without needing to worry about the API.")),(0,a.kt)("h2",{id:"basic-options"},"Basic Options"),(0,a.kt)("p",null,"There are some basic options that we have exposed outside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.heirline")," table for overriding the Heirline ",(0,a.kt)("inlineCode",{parentName:"p"},"setup(...)")," function. These options are used to easily change the colors of sections and the separators used for sections. These would be in a top level ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline")," table in your ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file or split up into files ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline/separators.lua"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline/colors.lua"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline/attributes.lua"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline/icon_highlights.lua")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"user/")," folder."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heirline.separators")," provides an easy way to change the character that surrounds your statusline components. The key is the side of the component and the two characters are the characters to be put on the left and right of the component respectively.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heirline.colors")," provides an easy way to override the color of each component that we provide in the statusline. We have provided the default options for these which are derived from the current theme that is loaded. The values that we show are the highlight group name and the property that they are using. If you are curious how these values are evaluated, please check out the source code in ",(0,a.kt)("inlineCode",{parentName:"p"},"lus/configs/heirline.lua"),". Also we set values for ",(0,a.kt)("inlineCode",{parentName:"p"},"git_branch_fg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"treesitter_fg")," correspond to the names of components in ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.component"),". Any component can be given a color here followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"_fg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"_bg")," to control the foreground and background colors. If a value is not provided then it defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"section_fg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"section_bg"),". We don't use custom colors for the other sections by default which is why only ",(0,a.kt)("inlineCode",{parentName:"p"},"git_branch_fg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"treesitter_fg")," are set.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heirline.attributes")," provides an easy way to override the highlight attributes for each component that we provide in the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," API. The available options here can be found with ",(0,a.kt)("inlineCode",{parentName:"p"},":h attr-list"),". Similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"heirline.colors")," table, we have set the key values corresponding to the names of the components in ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.component")," Any component can be given attributes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heirline.icon_highlights")," lets you easily control when breadcrumbs and filetype icons should be dynamically or statically colored. By default, LSP breadcrumbs have highlighting disabled and the filetype icon is colored in the statusline, colored for active and visible buffers in the tabline, and disabled in the winbar. These values can either be ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to enable/disable them always, or a function where the first component is the Heirline component for doing dynamic changing when to color the icon."))),(0,a.kt)("p",null,"Default Options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'heirline = {\n  separators = {\n    none = { "", "" },\n    left = { "", "  " },\n    right = { "  ", "" },\n    center = { "  ", "  " },\n    tab = { "", " " },\n  },\n  colors = {\n    fg = StatusLine.fg,\n    bg = StatusLine.bg,\n    section_fg = StatusLine.fg,\n    section_bg = StatusLine.bg,\n    git_branch_fg = Conditional.fg,\n    treesitter_fg = String.fg,\n    scrollbar = TypeDef.fg,\n    git_added = GitSignsAdd.fg,\n    git_changed = GitSignsChange.fg,\n    git_removed = GitSignsDelete.fg,\n    diag_ERROR = DiagnosticError.fg,\n    diag_WARN = DiagnosticWarn.fg,\n    diag_INFO = DiagnosticInfo.fg,\n    diag_HINT = DiagnosticHint.fg,\n    winbar_fg = WinBar.fg,\n    winbar_bg = WinBar.bg,\n    winbarnc_fg = WinBarNC.fg,\n    winbarnc_bg = WinBarNC.bg,\n    tabline_bg = StatusLine.bg,\n    tabline_fg = StatusLine.bg,\n    buffer_fg = Comment.fg,\n    buffer_path_fg = WinBarNC.fg,\n    buffer_close_fg = Comment.fg,\n    buffer_bg = StatusLine.bg,\n    buffer_active_fg = Normal.fg,\n    buffer_active_path_fg = WinBarNC.fg,\n    buffer_active_close_fg = Error.fg,\n    buffer_active_bg = Normal.bg,\n    buffer_visible_fg = Normal.fg,\n    buffer_visible_path_fg = WinBarNC.fg,\n    buffer_visible_close_fg = Error.fg,\n    buffer_visible_bg = Normal.bg,\n    buffer_overflow_fg = Comment.fg,\n    buffer_overflow_bg = StatusLine.bg,\n    buffer_picker_fg = Error.fg,\n    tab_close_fg = Error.fg,\n    tab_close_bg = StatusLine.bg,\n    tab_fg = TabLine.fg,\n    tab_bg = TabLine.bg,\n    tab_active_fg = TabLineSel.fg,\n    tab_active_bg = TabLineSel.bg,\n    inactive = HeirlineInactive.fg,\n    normal = HeirlineNormal.fg,\n    insert = HeirlineInsert.fg,\n    visual = HeirlineVisual.fg,\n    replace = HeirlineReplace.fg,\n    command = HeirlineCommand.fg,\n    terminal = HeirlineTerminal.fg,\n  },\n  attributes = {\n    buffer_active = { bold = true, italic = true },\n    buffer_picker = { bold = true },\n    macro_recording = { bold = true },\n    git_branch = { bold = true },\n    git_diff = { bold = true },\n  }\n  icon_highlights = {\n    breadcrumbs = false,\n    file_icon = {\n      tabline = function(self) return self.is_active or self.is_visible end,\n      statusline = true,\n      winbar = false,\n    },\n  }\n}\n')),(0,a.kt)("h2",{id:"using-astronvimstatus-module"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"astronvim.status")," Module"),(0,a.kt)("p",null,"AstroNvim provides a module loaded as ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status")," for building components in Heirline for both the statusline and winbar. It has several submodules:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the complete documentation on this API checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://astronvim.github.io/AstroNvim/modules/core.utils.status.html"},"AstroNvim Lua API docs"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Module"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.component")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of methods to assist in building entire components. This is the main piece to interact with when building custom statuslines")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.hl")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of methods to assist in setting the color of a component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.provider")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of methods that can be set as Heirline providers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.condition")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of methods that can be use as Heirline conditions for controlling when components are enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.init")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of methods that can be set as Heirline init functions for building components with dynamic subcomponents such as LSP breadcrumbs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.utils")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of miscellaneous helper functions that ",(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status")," uses such as surroundig components and getting buffers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.env")),(0,a.kt)("td",{parentName:"tr",align:null},"A place to store globally accessible variables such as separators, mode text, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"astronvim.status.heirline")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of tools specific for Heirline as well as a few aliases for easily interfacing with Heirline utilities")))),(0,a.kt)("p",null,"Heirline is built through building up components in a nested way, where each component either has it's own sub components or a provider to tell what content should be displayed. For a detailed description on the basic concepts of configuring Heirline, please check out their extremely well written ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rebelot/heirline.nvim/blob/master/cookbook.md"},"cookbook"),"."),(0,a.kt)("h3",{id:"building-a-component-from-scratch"},"Building a Component From Scratch"),(0,a.kt)("p",null,"To build a component from the ground up, we can first start by selecting a ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.provider")," module, for example we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.provider.mode_text")," provider to get the text for the current mode (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"NORMAL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),", etc.). Each provider takes a single argument table with options. Some providers have their own options, but all have a common set of options for stylizing the string they provide. These options include padding, separator characters, and an icon to be used."),(0,a.kt)("p",null,"Using these options we can start building our component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local component = {\n  provider = astronvim.status.provider.mode_text({ padding = { left = 1, right = 1 } }),\n}\n")),(0,a.kt)("p",null,"This will give us a component where the text will be the current mode displayed as text. But now we want to be able to have the background of the mode to change colors along with the mode. This is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.hl")," module comes into play. There is a method there for getting the highlight for a mode with ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.hl.mode"),". Each of these ",(0,a.kt)("inlineCode",{parentName:"p"},"hl")," methods are designed to be passed in by name instead of resolving the function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hl")," field in a Heirline component. For example, we can add the mode highlighting to our component as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local component = {\n  provider = astronvim.status.provider.mode_text({ padding = { left = 1, right = 1 } }),\n  hl = astronvim.status.hl.mode,\n}\n")),(0,a.kt)("p",null,"This will give us a simple component where the background changes colors with each mode and displays the text of the current mode. If we want to make this component a bit prettier and add surrounding characters, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status.utils.surround")," function with our component to do this. This surround method also handles setting the highlight group so we no longer need to set that inside of our component. An example of this would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local component = {\n  provider = astronvim.status.provider.mode_text({ padding = { left = 1, right = 1 } }),\n}\nlocal surrounded_component = astronvim.status.utils.surround({ "", "\ue0bc "}, astronvim.status.hl.mode_bg, component)\n')),(0,a.kt)("p",null,"This function takes three parameters: the first parameter (left and right side respectively), the second parameter is the function for setting the color for the background of the component and the foreground of the separators, and the third parameter is the component that should be surrounded. In turn it gives us our final component that can be used inside of Heirline."),(0,a.kt)("h3",{id:"using-the-predefined-components-in-astronvimstatuscomponent"},"Using the Predefined Components in ",(0,a.kt)("inlineCode",{parentName:"h3"},"astronvim.status.component")),(0,a.kt)("p",null,"Building components from scratch is a powerful method that gives users complete control, but for the most part it's nice to have fully built components without having to think as much about what's going on internally. For this we have created several out of the box component building functions for things such as the mode, file details, git information, etc. With these, it becomes much easier to build components that you would want in your statusline. For example, to recreate our previous mode text component we can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local component = astronvim.status.component.mode({\n  mode_text = { padding = { left = 1, right = 1 } },\n})\n")),(0,a.kt)("p",null,"This will automatically set up the surrounding and colors that we want and defaults to it being a left aligned component. If you are going to place the component on the right side and want it to have the right side separators instead, you can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local component = astronvim.status.component.mode({\n  mode_text = { padding = { left = 1, right = 1 } },\n  surround = { separator = "right" },\n})\n')),(0,a.kt)("h2",{id:"heirline-based-bufferline"},"Heirline Based Bufferline"),(0,a.kt)("p",null,"AstroNvim now has a Heirline based bufferline implementation that uses our ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status")," API for creating a highly performant and customizable bufferline. This will be made default with AstroNvim v3 (whenever that ends up being), but in the mean time we have included an option that will allow users to opt into using this feature early. This can be easily toggled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," table like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = {\n    g = {\n      heirline_bufferline = true\n    }\n  }\n}\n")),(0,a.kt)("p",null,"After setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.g.heirline_bufferline")," variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you will need to restart and run ",(0,a.kt)("inlineCode",{parentName:"p"},":PackerSync")," to fully remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"bufferline.nvim")," plugin and start using the new and improved bufferline."),(0,a.kt)("h2",{id:"default-heirline-configuration"},"Default Heirline Configuration"),(0,a.kt)("p",null,"This is a code block that redefines the default statusline and winbar that are used in AstroNvim inside of the user configuration file for reference and a starting point to make modifications:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    heirline = function(config)\n      -- statusline\n      config[1] = {\n        hl = { fg = "fg", bg = "bg" },\n        astronvim.status.component.mode(),\n        astronvim.status.component.git_branch(),\n        astronvim.status.component.file_info(\n          (astronvim.is_available "bufferline.nvim" or vim.g.heirline_bufferline)\n              and { filetype = {}, filename = false, file_modified = false }\n            or nil\n        ),\n        astronvim.status.component.git_diff(),\n        astronvim.status.component.diagnostics(),\n        astronvim.status.component.fill(),\n        astronvim.status.component.cmd_info(),\n        astronvim.status.component.fill(),\n        astronvim.status.component.lsp(),\n        astronvim.status.component.treesitter(),\n        astronvim.status.component.nav(),\n        astronvim.status.component.mode { surround = { separator = "right" } },\n      }\n\n      -- winbar\n      config[2] = {\n        static = {\n          -- define static disabled table for winbar\n          disabled = {\n            buftype = { "terminal", "prompt", "nofile", "help", "quickfix" },\n            filetype = { "NvimTree", "neo%-tree", "dashboard", "Outline", "aerial" },\n          },\n        },\n        -- set winbar bufnr\n        init = function(self) self.bufnr = vim.api.nvim_get_current_buf() end,\n        fallthrough = false,\n        -- if the buffer matches a disabled buffer, disable winbar\n        {\n          condition = function(self)\n            return vim.opt.diff:get() or astronvim.status.condition.buffer_matches(self.disabled or {})\n          end,\n          init = function() vim.opt_local.winbar = nil end,\n        },\n        -- use file_info if winbar is in a buffer that is not active\n        astronvim.status.component.file_info {\n          condition = function() return not astronvim.status.condition.is_active() end,\n          unique_path = {},\n          file_icon = { hl = astronvim.status.hl.file_icon "winbar" },\n          file_modified = false,\n          file_read_only = false,\n          hl = astronvim.status.hl.get_attributes("winbarnc", true),\n          surround = false,\n          update = "BufEnter",\n        },\n        -- use breadcrumbs if winbar is in a buffer that is active\n        astronvim.status.component.breadcrumbs { hl = astronvim.status.hl.get_attributes("winbar", true) },\n      }\n\n      -- bufferline (only used if vim.g.heirline_bufferline = true)\n      config[3] = {\n        { -- file tree padding\n          condition = function(self)\n            self.winid = vim.api.nvim_tabpage_list_wins(0)[1]\n            return astronvim.status.condition.buffer_matches(\n              { filetype = { "neo%-tree", "NvimTree" } },\n              vim.api.nvim_win_get_buf(self.winid)\n            )\n          end,\n          provider = function(self) return string.rep(" ", vim.api.nvim_win_get_width(self.winid)) end,\n          hl = { bg = "tabline_bg" },\n        },\n        -- Create a list of components for each buffer using the tabline_file_info component for each buffer\n        astronvim.status.heirline.make_buflist(astronvim.status.component.tabline_file_info()),\n        -- Fill the rest of the tabline with empty space\n        astronvim.status.component.fill { hl = { bg = "tabline_bg" } }, -- fill the rest of the tabline with background color\n        -- tab list\n        {\n          -- if there are more than 1 tab pages, enable this\n          condition = function() return #vim.api.nvim_list_tabpages() >= 2 end,\n          -- Create a list of components for each tab and create a simple component for each\n          astronvim.status.heirline.make_tablist {\n            provider = astronvim.status.provider.tabnr(),\n            -- set the highlight based on the type of tab\n            hl = function(self)\n              return astronvim.status.hl.get_attributes(astronvim.status.heirline.tab_type(self, "tab"), true)\n            end,\n          },\n          -- button to close current tab\n          {\n            provider = astronvim.status.provider.close_button { kind = "TabClose", padding = { left = 1, right = 1 } },\n            hl = astronvim.status.hl.get_attributes("tab_close", true),\n            on_click = { callback = astronvim.close_tab, name = "heirline_tabline_close_tab_callback" },\n          },\n        },\n      }\n\n      -- return the final configuration table\n      return config\n    end,\n  },\n}\n')),(0,a.kt)("h2",{id:"default-statusline-with-mode-text"},"Default Statusline With Mode Text"),(0,a.kt)("p",null,"Some users want to be able to add the mode text to their statusline easily, AstroNvim's new ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status")," lua module as well as Heirline make that very easy to do in their user configuration file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the statusline with mode text",src:n(7318).Z,width:"917",height:"630"})),(0,a.kt)("p",null,"Minimal ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," that adds the mode text to the statusline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    heirline = function(config)\n      -- the first element of the default configuration table is the statusline\n      config[1] = {\n        -- set the fg/bg of the statusline\n        hl = { fg = "fg", bg = "bg" },\n        -- when adding the mode component, enable the mode text with padding to the left/right of it\n        astronvim.status.component.mode { mode_text = { padding = { left = 1, right = 1 } } },\n        -- add all the other components for the statusline\n        astronvim.status.component.git_branch(),\n        astronvim.status.component.file_info(),\n        astronvim.status.component.git_diff(),\n        astronvim.status.component.diagnostics(),\n        astronvim.status.component.fill(),\n        astronvim.status.component.cmd_info(),\n        astronvim.status.component.fill(),\n        astronvim.status.component.lsp(),\n        astronvim.status.component.treesitter(),\n        astronvim.status.component.nav(),\n      }\n      -- return the final configuration table\n      return config\n    end,\n  },\n}\n')),(0,a.kt)("h2",{id:"replicate-nvchad-statusline"},"Replicate NvChad Statusline"),(0,a.kt)("p",null,"NvChad comes with a very specific statusline configuration that a lot of people like, so we figured it would be a nice exercise of the extensibility of our ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.status")," API to show how to build that statusline in AstroNvim. ",(0,a.kt)("em",{parentName:"p"},"Warning:")," This is a fairly complicated example and is meant to be used by people who want it and to demonstrate how much you can customize the statusline."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the NvChad style statusline",src:n(91232).Z,width:"1288",height:"756"})),(0,a.kt)("p",null,"Minimal ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," that recreates the NvChad statusline in AstroNvim:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  -- add new user interface icon\n  icons = {\n    VimIcon = "\ue7c5",\n    ScrollText = "\ue612",\n    GitBranch = "\uf408",\n    GitAdd = "\uf055",\n    GitChange = "\uf459",\n    GitDelete = "\uf056",\n  },\n  -- modify variables used by heirline but not defined in the setup call directly\n  heirline = {\n    -- define the separators between each section\n    separators = {\n      left = { "", "\ue0bc " }, -- separator for the left side of the statusline\n      right = { " \ue0b6", "" }, -- separator for the right side of the statusline\n    },\n    -- add new colors that can be used by heirline\n    colors = function(hl)\n      -- use helper function to get highlight group properties\n      local comment_fg = astronvim.get_hlgroup("Comment").fg\n      hl.git_branch_fg = comment_fg\n      hl.git_added = comment_fg\n      hl.git_changed = comment_fg\n      hl.git_removed = comment_fg\n      hl.blank_bg = astronvim.get_hlgroup("Folded").fg\n      hl.file_info_bg = astronvim.get_hlgroup("Visual").bg\n      hl.nav_icon_bg = astronvim.get_hlgroup("String").fg\n      hl.nav_fg = hl.nav_icon_bg\n      hl.folder_icon_bg = astronvim.get_hlgroup("Error").fg\n      return hl\n    end,\n    attributes = {\n      mode = { bold = true },\n    },\n    icon_highlights = {\n      file_icon = {\n        statusline = false,\n      },\n    },\n  },\n  plugins = {\n    -- override the heirline setup call\n    heirline = function(config)\n      -- the first element of the configuration table is the statusline\n      config[1] = {\n        -- default highlight for the entire statusline\n        hl = { fg = "fg", bg = "bg" },\n        -- each element following is a component in astronvim.status module\n\n        -- add the vim mode component\n        astronvim.status.component.mode {\n          -- enable mode text with padding as well as an icon before it\n          mode_text = { icon = { kind = "VimIcon", padding = { right = 1, left = 1 } } },\n          -- surround the component with a separators\n          surround = {\n            -- it\'s a left element, so use the left separator\n            separator = "left",\n            -- set the color of the surrounding based on the current mode using astronvim.status module\n            color = function() return { main = astronvim.status.hl.mode_bg(), right = "blank_bg" } end,\n          },\n        },\n        -- we want an empty space here so we can use the component builder to make a new section with just an empty string\n        astronvim.status.component.builder {\n          { provider = "" },\n          -- define the surrounding separator and colors to be used inside of the component\n          -- and the color to the right of the separated out section\n          surround = { separator = "left", color = { main = "blank_bg", right = "file_info_bg" } },\n        },\n        -- add a section for the currently opened file information\n        astronvim.status.component.file_info {\n          -- enable the file_icon and disable the highlighting based on filetype\n          file_icon = { padding = { left = 0 } },\n          filename = { fallback = "Empty" },\n          -- add padding\n          padding = { right = 1 },\n          -- define the section separator\n          surround = { separator = "left", condition = false },\n        },\n        -- add a component for the current git branch if it exists and use no separator for the sections\n        astronvim.status.component.git_branch { surround = { separator = "none" } },\n        -- add a component for the current git diff if it exists and use no separator for the sections\n        astronvim.status.component.git_diff { padding = { left = 1 }, surround = { separator = "none" } },\n        -- fill the rest of the statusline\n        -- the elements after this will appear in the middle of the statusline\n        astronvim.status.component.fill(),\n        -- add a component to display if the LSP is loading, disable showing running client names, and use no separator\n        astronvim.status.component.lsp { lsp_client_names = false, surround = { separator = "none", color = "bg" } },\n        -- fill the rest of the statusline\n        -- the elements after this will appear on the right of the statusline\n        astronvim.status.component.fill(),\n        -- add a component for the current diagnostics if it exists and use the right separator for the section\n        astronvim.status.component.diagnostics { surround = { separator = "right" } },\n        -- add a component to display LSP clients, disable showing LSP progress, and use the right separator\n        astronvim.status.component.lsp { lsp_progress = false, surround = { separator = "right" } },\n        -- NvChad has some nice icons to go along with information, so we can create a parent component to do this\n        -- all of the children of this table will be treated together as a single component\n        {\n          -- define a simple component where the provider is just a folder icon\n          astronvim.status.component.builder {\n            -- astronvim.get_icon gets the user interface icon for a closed folder with a space after it\n            { provider = astronvim.get_icon "FolderClosed" },\n            -- add padding after icon\n            padding = { right = 1 },\n            -- set the foreground color to be used for the icon\n            hl = { fg = "bg" },\n            -- use the right separator and define the background color\n            surround = { separator = "right", color = "folder_icon_bg" },\n          },\n          -- add a file information component and only show the current working directory name\n          astronvim.status.component.file_info {\n            -- we only want filename to be used and we can change the fname\n            -- function to get the current working directory name\n            filename = { fname = function(nr) return vim.fn.getcwd(nr) end, padding = { left = 1 } },\n            -- disable all other elements of the file_info component\n            file_icon = false,\n            file_modified = false,\n            file_read_only = false,\n            -- use no separator for this part but define a background color\n            surround = { separator = "none", color = "file_info_bg", condition = false },\n          },\n        },\n        -- the final component of the NvChad statusline is the navigation section\n        -- this is very similar to the previous current working directory section with the icon\n        { -- make nav section with icon border\n          -- define a custom component with just a file icon\n          astronvim.status.component.builder {\n            { provider = astronvim.get_icon "ScrollText" },\n            -- add padding after icon\n            padding = { right = 1 },\n            -- set the icon foreground\n            hl = { fg = "bg" },\n            -- use the right separator and define the background color\n            -- as well as the color to the left of the separator\n            surround = { separator = "right", color = { main = "nav_icon_bg", left = "file_info_bg" } },\n          },\n          -- add a navigation component and just display the percentage of progress in the file\n          astronvim.status.component.nav {\n            -- add some padding for the percentage provider\n            percentage = { padding = { right = 1 } },\n            -- disable all other providers\n            ruler = false,\n            scrollbar = false,\n            -- use no separator and define the background color\n            surround = { separator = "none", color = "file_info_bg" },\n          },\n        },\n      }\n\n      -- a second element in the heirline setup would override the winbar\n      -- by only providing a single element we will only override the statusline\n      -- and use the default winbar in AstroNvim\n\n      -- return the final confiuration table\n      return config\n    end,\n  },\n}\n')))}p.isMDXComponent=!0},7318:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mode_text_statusline-151d63106be999f3ac1ec3147b4e4f5a.png"},91232:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/nvchad_statusline-2f9774bde37a66c33f2cc80dcf4189e0.png"}}]);