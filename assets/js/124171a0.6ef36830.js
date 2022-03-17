(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[752],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||l[d]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2035:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(1869);function o(e){var t=(0,r.useAllPluginInstancesData)("docusaurus-plugin-redoc");return e?t[e]:Object.values(t)[0]}t.Z=o},3542:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(7378),o=n(8948),s=n(6457),i=n(1869),a=n(5796),u=n(7725);function c(e){var t=e.spec,n=e.url,c=(0,o.Z)(n),p=(0,s.Z)(),l=(0,a.If)().isDarkTheme,m=(0,i.usePluginData)("docusaurus-theme-redoc");return(0,r.useMemo)((function(){var e,n=m.lightTheme,r=m.darkTheme,o=m.options,s={scrollYOffset:p?o.scrollYOffset:0},i=new u.AppStore(t,c,Object.assign({},o,s,{theme:n})),a=new u.AppStore(t,c,Object.assign({},o,s,{theme:r}));return{hasLogo:!(null==(e=t.info)||!e["x-logo"]),lightStore:i,darkStore:a,store:p&&l?a:i}}),[p,t,c,m,l])}},192:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return y},default:function(){return x},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var r=n(5773),o=n(808),s=n(7378),i=n(5318),a=n(8944),u=n(7468),c=n(7725),p=n(3542),l=n(2035),m=["id","example","pointer"],d=function(e){var t=e.id,n=e.example,i=e.pointer,d=(0,o.Z)(e,m),h=(0,l.u)(t),f=(0,p.U)(h).store;return s.createElement(u.ThemeProvider,{theme:f.options.theme},s.createElement("div",{className:(0,a.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},s.createElement(c.SchemaDefinition,(0,r.Z)({parser:f.spec.parser,options:f.options,schemaRef:i},d))))};d.defaultProps={example:!1};var h=d,f=["components"],g={title:"Schema Imports"},y=void 0,v={unversionedId:"guides/schema-imports",id:"guides/schema-imports",title:"Schema Imports",description:"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an .mdx file and import the React Component. Read more here about MDX in Docusaurus.",source:"@site/docs/guides/schema-imports.mdx",sourceDirName:"guides",slug:"/guides/schema-imports",permalink:"/redocusaurus/docs/guides/schema-imports",editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/docs/guides/schema-imports.mdx",tags:[],version:"current",frontMatter:{title:"Schema Imports"},sidebar:"defaultSidebar",previous:{title:"Build Time Rendering",permalink:"/redocusaurus/docs/guides/build-time-rendering"},next:{title:"Who is using Redocusaurus?",permalink:"/redocusaurus/docs/who-is-using-redocusaurus"}},k={},b=[{value:"Results",id:"results",level:3},{value:"Import Schema Model (with example) in Docs",id:"import-schema-model-with-example-in-docs",level:2},{value:"Results",id:"results-1",level:3},{value:"Importing Schema Model with multiple OpenAPI schemas",id:"importing-schema-model-with-multiple-openapi-schemas",level:2},{value:"Results",id:"results-2",level:3},{value:"For ID <code>id=&quot;using-spec-yaml&quot;</code>",id:"for-id-idusing-spec-yaml",level:4},{value:"For ID <code>id=&quot;using-spec-url&quot;</code>",id:"for-id-idusing-spec-url",level:4}],O={toc:b};function x(e){var t=e.components,n=(0,o.Z)(e,f);return(0,i.kt)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," file and import the React Component. Read more ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"here about MDX in Docusaurus"),"."),(0,i.kt)("h1",{id:"import-schema-model-in-docs"},"Import Schema Model in Docs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pointer")," prop is passed on to ",(0,i.kt)("a",{parentName:"p",href:"https://redoc.ly/docs/resources/ref-guide/#pointer"},"Redoc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema pointer=\"#/components/schemas/Pet\" />;\n")),(0,i.kt)("h3",{id:"results"},"Results"),(0,i.kt)(h,{pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,i.kt)("h2",{id:"import-schema-model-with-example-in-docs"},"Import Schema Model (with example) in Docs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema example pointer=\"#/components/schemas/Pet\" />;\n")),(0,i.kt)("h3",{id:"results-1"},"Results"),(0,i.kt)(h,{example:!0,pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,i.kt)("h2",{id:"importing-schema-model-with-multiple-openapi-schemas"},"Importing Schema Model with multiple OpenAPI schemas"),(0,i.kt)("p",null,"If you have multiple APIs loaded with redocusaurus, then it is recommended to add ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s to the config so that you can refer them when loading schema models."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  presets: [\n    [\n      'redocusaurus',\n      {\n        specs: [\n          {\n            id: 'using-spec-yaml',\n            spec: 'openapi.yaml',\n            url: `/openapi-page.yaml`,\n            route: '/examples/using-spec-yaml/',\n          },\n          {\n            id: 'using-spec-url',\n            spec: 'https://redocly.github.io/redoc/openapi.yaml',\n            route: '/examples/using-spec-url/',\n          },\n        ],\n        theme: {\n          /**\n           * Highlight color for docs\n           */\n          primaryColor: '#1890ff',\n          /**\n           * Options to pass to redoc\n           * @see https://github.com/redocly/redoc#redoc-options-object\n           */\n          options: { disableSearch: true },\n        },\n      },\n    ],\n    '@docusaurus/preset-classic',\n  ],\n  title: 'Redocusaurus',\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import ApiSchema from \'@theme/ApiSchema\';\n\n<ApiSchema id="using-spec-yaml" pointer="#/components/schemas/Pet" />;\n<ApiSchema id="using-spec-url" pointer="#/components/schemas/Pet" />;\n')),(0,i.kt)("h3",{id:"results-2"},"Results"),(0,i.kt)("h4",{id:"for-id-idusing-spec-yaml"},"For ID ",(0,i.kt)("inlineCode",{parentName:"h4"},'id="using-spec-yaml"')),(0,i.kt)(h,{id:"using-spec-yaml",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,i.kt)("h4",{id:"for-id-idusing-spec-url"},"For ID ",(0,i.kt)("inlineCode",{parentName:"h4"},'id="using-spec-url"')),(0,i.kt)(h,{id:"using-spec-url",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}))}x.isMDXComponent=!0},900:function(){},7878:function(){},4962:function(){}}]);