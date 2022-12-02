"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[7920],{2027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(7294),r=n(2263),l=n(3929),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902);const i=["zero","one","two","few","many","other"];function h(e){return i.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function g(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function d(){const e=g();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}var f=n(143),E=n(6550),y=n(412);const S=function(){const e=(0,E.k6)(),t=(0,E.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:y.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var w=n(22),I=n(8202),b=n(2539),v=n(726),F=n(1073),P=n(311),R=n(3926),_=n(1029);const k="searchQueryInput_CFBF",C="searchResultItem_U687",q="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr";function Z(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,f.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)(t?.pluginId??_.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(R){if(_.l9&&!(R instanceof m.i6))throw R}const{selectMessage:l}=d(),{searchValue:c,updateSearchPath:i}=S(),[h,p]=(0,a.useState)(c),[g,E]=(0,a.useState)(),[y,b]=(0,a.useState)(),v=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{i(h),g&&(h?g(h,(e=>{b(e)})):b(void 0))}),[h,g]);const F=(0,a.useCallback)((e=>{p(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==h&&p(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,w.w)(n);E((()=>(0,I.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,v)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,v),a.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:F,value:h,autoComplete:"off",autoFocus:!0}),!g&&h&&a.createElement("div",null,a.createElement(P.Z,null)),y&&(y.length>0?a.createElement("p",null,l(y.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:y.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,y&&y.map((e=>a.createElement($,{key:e.document.i,searchResult:e}))))))}function $(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:C},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,b.C)(i,l):(0,v.o)(i,(0,F.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:q},(0,R.e)(m)),u&&a.createElement("p",{className:T,dangerouslySetInnerHTML:{__html:(0,v.o)(t.t,(0,F.m)(s,"t"),l,100)}}))}const x=function(){return a.createElement(l.Z,null,a.createElement(Z,null))}}}]);