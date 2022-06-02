"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[890],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6868:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Get Started with Enhancer",c={unversionedId:"Test Enhancer/Get Started",id:"Test Enhancer/Get Started",isDocsHomePage:!1,title:"Get Started with Enhancer",description:"What is Enhancer?",source:"@site/docs/Test Enhancer/Get Started.md",sourceDirName:"Test Enhancer",slug:"/Test Enhancer/Get Started",permalink:"/Quikly_docs/docs/Test Enhancer/Get Started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"View Test",permalink:"/Quikly_docs/docs/TG Smart Observer/view"},next:{title:"Enhancer Runs",permalink:"/Quikly_docs/docs/Test Enhancer/Enhancer Runs"}},d=[{value:"What is Enhancer?",id:"what-is-enhancer",children:[],level:2},{value:"What can Enhancer do?",id:"what-can-enhancer-do",children:[{value:"Try it out:",id:"try-it-out",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started-with-enhancer"},"Get Started with Enhancer"),(0,i.kt)("h2",{id:"what-is-enhancer"},"What is Enhancer?"),(0,i.kt)("h2",{id:"what-can-enhancer-do"},"What can Enhancer do?"),(0,i.kt)("p",null,"Tool for increasing coverage of your tests. It is able to intelligently alter your tests to find new paths in the application in order to detect new bugs."),(0,i.kt)("p",null,"Key features: ",(0,i.kt)("strong",{parentName:"p"},"step exploration, variables, verify actions.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each step of the test can be \u201cexplored\u201d. It means that during test enhancer runs, it will generate similar steps (will interact with similar elements)."),(0,i.kt)("li",{parentName:"ol"},"Test enhancer is able to generate new data using \u201cvariables\u201d concept. During initial test run, all data used in the test will be mapped to a specific type (e.g. \u201cJohn\u201d -> \u201cFirst name\u201d, ",(0,i.kt)("inlineCode",{parentName:"li"},"john@gmail.com")," -> \u201cemail\u201d). During test enhancer runs, new data will be generated according to parsed type."),(0,i.kt)("li",{parentName:"ol"},"In order to find specific bugs, verify action can be added as any step in your test. Verify action support complex operations with variables, so you can combine multiple variable in a single verify step. This allows test enhancer catch dependencies between different elements of the web-page")),(0,i.kt)("h3",{id:"try-it-out"},"Try it out:"),(0,i.kt)("p",null,"A sample test can be setup to use the test enhancer on ",(0,i.kt)("a",{parentName:"p",href:"https://dev.k8s.testgold.dev/dashboard"},"https://dev.k8s.testgold.dev/dashboard"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To start, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"Send test")," button from recorder testcase but you can upload an existing testcase too."),(0,i.kt)("li",{parentName:"ol"},"If you choose to upload a test (.side file) - You can run this test by uploading it from the test explorer tab - ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Test")," button."),(0,i.kt)("li",{parentName:"ol"},"Once the test is complete, click on the test and navigate to the enhancer tab.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(3086).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Easiest way to get started is to add a variable. Click the variable button - there you can find autogenerated variables ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(8121).Z})),(0,i.kt)("p",null,"or you can add a variable by yourself to generate values by selecting that as a type."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(1179).Z})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Find a step to edit and use the variable you created earlier by modifying the data field with the following format: ",(0,i.kt)("inlineCode",{parentName:"li"},"${var_name}"),"\nor\n5.1.  Find a step to edit and change ",(0,i.kt)("inlineCode",{parentName:"li"},"explore")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"No")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"select")," actions")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(975).Z})),(0,i.kt)("p",null,"5.2  Find a step to add a variable and try to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),",",(0,i.kt)("inlineCode",{parentName:"p"},"xpath"),"-",(0,i.kt)("em",{parentName:"p"},"manually"),",",(0,i.kt)("inlineCode",{parentName:"p"},"data"),",",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),",etc."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(2775).Z})),(0,i.kt)("p",null,"Here, you can see added variables that are modified."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quikly Dashboard",src:n(5447).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you are ready to press run.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select an agent and type the episode value."))),(0,i.kt)("p",null,"To check more on Enhancer Runs, please go to next document page."))}u.isMDXComponent=!0},8121:function(e,t,n){t.Z=n.p+"assets/images/add-36f96205a15ec86c809372aa87f56eb1.png"},5447:function(e,t,n){t.Z=n.p+"assets/images/add1-4f53881eec26d769c12704d6e27ad403.png"},2775:function(e,t,n){t.Z=n.p+"assets/images/addd-6f79cafa03123be65c188b50c1fcaee1.png"},975:function(e,t,n){t.Z=n.p+"assets/images/edit-ad697a9e624b58481a011a2192b6588e.png"},3086:function(e,t,n){t.Z=n.p+"assets/images/enhancer-ddbc0ed1ed96d462575f405b28ec011c.png"},1179:function(e,t,n){t.Z=n.p+"assets/images/variable-532af2f60e5a17ab78c5d710bb441cd1.png"}}]);