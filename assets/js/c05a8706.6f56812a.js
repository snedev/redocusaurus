"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[562],{6384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(2685),i=r(1244),a=(r(7378),r(5318)),o=["components"],s={title:"Build Time Rendering",description:"Parse the OpenAPI schema at build time and skip the loading screen",sidebar_position:3},u=void 0,c={unversionedId:"guides/build-time-rendering",id:"guides/build-time-rendering",title:"Build Time Rendering",description:"Parse the OpenAPI schema at build time and skip the loading screen",source:"@site/docs/guides/build-time-rendering.md",sourceDirName:"guides",slug:"/guides/build-time-rendering",permalink:"/redocusaurus/docs/guides/build-time-rendering",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/guides/build-time-rendering.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Build Time Rendering",description:"Parse the OpenAPI schema at build time and skip the loading screen",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Showing Multiple APIs",permalink:"/redocusaurus/docs/guides/multiple-apis"},next:{title:"Migrating to V1",permalink:"/redocusaurus/docs/guides/migrating-to-v1"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Try it out",id:"try-it-out",level:2}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," This is now enabled by default for everyone. Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/discussions/88"},"add your feedback here"),"."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Nothing to be done as a user. The package uses a custom webpack config to server render Redoc and add the relevant stylesheets at build time."),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"Disable javascript in your browser and open one of the example pages \u26a1\ufe0f"))}m.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);