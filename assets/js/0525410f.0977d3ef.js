"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[193],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3642:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:3},s="Integrations",c={unversionedId:"tutorial-basics/Integrations",id:"tutorial-basics/Integrations",isDocsHomePage:!1,title:"Integrations",description:"Quikly offers a variety of integrations and connectors for popular apps and platforms. This is where you can add new integrations and manage existing integrations.",source:"@site/docs/tutorial-basics/Integrations.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Integrations",permalink:"/Quikly_docs/docs/tutorial-basics/Integrations",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Test Runs",permalink:"/Quikly_docs/docs/tutorial-basics/Test-Explorer"},next:{title:"Installation",permalink:"/Quikly_docs/docs/tutorial-basics/Installation"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Get Started",id:"get-started",children:[{value:"Github",id:"github",children:[],level:3},{value:"Gitlab",id:"gitlab",children:[],level:3},{value:"Slack",id:"slack",children:[],level:3},{value:"Jenkins",id:"jenkins",children:[],level:3},{value:"CircleCI",id:"circleci",children:[{value:"Creating a New Configuration",id:"creating-a-new-configuration",children:[],level:4},{value:"Adding Quikly to your Existing Configurations",id:"adding-quikly-to-your-existing-configurations",children:[],level:4}],level:3},{value:"Travis CI",id:"travis-ci",children:[],level:3}],level:2},{value:"Managing Your Integrations",id:"managing-your-integrations",children:[],level:2},{value:"Scheduled runs",id:"scheduled-runs",children:[],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"Quikly offers a variety of integrations and connectors for popular apps and platforms. This is where you can add new integrations and manage existing integrations."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The integrations page shows available integrations as cards located at the top of the integrations page. Below it, the table displays all active integrations for this user. You can use this table to manage user integrations. Different actions are available for different integrations."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations",src:n(8892).Z})),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("h3",{id:"github"},"Github"),(0,o.kt)("p",null,"The Quikly integration with Github enables fast and easy reporting to speed up issue creation. When a test that has been run on the Quikly platform, fails, you can be immediately notified in your teams Github. Quikly will open an issue with details about the test as well as the logs from the test run. This helps you stay on top of any errors and keep track of the progress."),(0,o.kt)("p",null,"To setup a Github integration, click on the Github card on. This will bring up a modal asking for some info to get started. "),(0,o.kt)("p",null,"Please provide the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Github repository name"),(0,o.kt)("li",{parentName:"ul"},"Github repository owner"),(0,o.kt)("li",{parentName:"ul"},"Github token")),(0,o.kt)("h3",{id:"gitlab"},"Gitlab"),(0,o.kt)("p",null,"The Quikly Gitlab integration can be used to keep track of your test runs in\nGitlab. To set this up you will need to provide a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gitlab Organization Name",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are a couple ways to get this. The organization name precedes the\nproject name in the list of projects. You can also get the organization\nname by selecting the project you want to integrate with and look in the url. This should contain the organization the project belongs to."))),(0,o.kt)("li",{parentName:"ul"},"Gitlab Project Name",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is the name of the project you want to integrate with."))),(0,o.kt)("li",{parentName:"ul"},"Gitlab Access Token",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is the personal access token that you can create in Gitlab. This is\nrequired to create an issue in the project. Gitlab offers personal\naccess tokens which are tied to a user or gives you the option to\ncreate a project access token. For more information, please visit the\nGitlab documentation linked here:\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"))))),(0,o.kt)("h3",{id:"slack"},"Slack"),(0,o.kt)("p",null,"The Quikly Reporter Slack app keeps your team up to date with the status of your tests to a slack channel. Get started by selecting the Slack card on the integrations page. This will redirect you to slack where you will be prompted to accept permissions and select a slack channel to receive notifications to. Once you select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow")," button on Slack, you will be redirected back to the integrations page."),(0,o.kt)("h3",{id:"jenkins"},"Jenkins"),(0,o.kt)("p",null,"Automate your tests with Jenkins while taking advantage of the advanced healing and intelligence offered by Quikly by integrating Jenkins with the Quikly Interceptor. To configure this, select your Jenkins job and add a new build step in the build environment. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\ngit clone git@github.com:your_github_username/your_repo_name.git\ncd /repo/\nsource .jenkins-secrets\nexport Quikly_ANALYZER=1\ncd /repo/testlocation\nwget https://vision.Quikly.dev/interceptor/download/secured/selenium-webdriver-20.11.0.Quiklyz?walToken=${WAL_TOKEN} -O selenium-webdriver-20.11.0.Quiklyz\nnpm install selenium-webdriver-20.11.0.Quiklyz\n# Run Tests Here\n")),(0,o.kt)("h3",{id:"circleci"},"CircleCI"),(0,o.kt)("p",null,"Use the Quikly Interceptor with your CircleCI builds! Getting Started with CircleCI is easy. "),(0,o.kt)("h4",{id:"creating-a-new-configuration"},"Creating a New Configuration"),(0,o.kt)("p",null,"If you are starting from scratch, we have a couple templates to help you get started. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml"',title:'"config.yml"'},"# Use the latest 2.1 version of CircleCI pipeline process engine.\n# See: https://circleci.com/docs/2.0/configuration-reference\nversion: 2.1\n\n# Orbs are reusable packages of CircleCI configuration that you may share across projects, enabling you to create encapsulated, parameterized commands, jobs, and executors that can be used across multiple projects.\n# See: https://circleci.com/docs/2.0/orb-intro/\norbs:\n  # See the orb documentation here: https://circleci.com/developer/orbs/orb/circleci/python\n  python: circleci/python@1.2\n  browser-tools: circleci/browser-tools@1.2.3\n\n# Define a job to be invoked later in a workflow.\n# See: https://circleci.com/docs/2.0/configuration-reference/#jobs\njobs:\n  build-and-test: # This is the name of the job, feel free to change it to better match what you're trying to do!\n    # These next lines defines a Docker executors: https://circleci.com/docs/2.0/executor-types/\n    # The executor is the environment in which the steps below will be executed - below will use a python 3.8 container\n    # Change the version below to your required version of python\n    docker:\n      - image: cimg/python:3.8\n    # Checkout the code as the first step. \n    # CircleCI will report the results back to your VCS provider.\n    steps:\n      - checkout\n      # This is where we install browsers which will be used later when running your tests. \n      - browser-tools/install-browser-tools:\n          chrome-version: 85.0.4183.102\n          firefox-version: 80.0.1\n      - run:\n          command: |\n            google-chrome --version\n            firefox --version\n          name: Check install\n      # From the browser-tools orb, we can install the necessary drivers to run tests on a browser.\n      # For more information on this orb, checkout this link: https://circleci.com/developer/orbs/orb/circleci/browser-tools\n      - browser-tools/install-chrome\n      - browser-tools/install-chromedriver\n      \n      # Now, we will configure the Quikly interceptor. Make sure to add your Quikly_TOKEN to your project secrets. \n      # For a full list of interceptor options check out the documentation: https://Quikly.readthedocs.io/en/latest/externaluse.html\n      - run:\n          name: Download and Configure Quikly Interceptor\n          command: |\n            wget https://Quiklyapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n            pip install selenium-20.11.0-py2.py3-none-any.whl -U\n            export Quikly_ANALYZER=1\n            export Quikly_TOKEN=$Quikly_TOKEN\n      - python/install-packages:\n          pkg-manager: pip\n          # app-dir: ~/project/package-directory/  # If your requirements.txt isn't in the root directory.\n          # pip-dependency-file: test-requirements.txt  # if you have a different name for your requirements file, maybe one that combines your runtime and test requirements.\n      - run:\n          name: Run tests\n          command: python reactbank_test_old.py\n\n# Invoke jobs via workflows\n# See: https://circleci.com/docs/2.0/configuration-reference/#workflows\nworkflows:\n  sample: # This is the name of the workflow, feel free to change it to better match your workflow.\n    # Inside the workflow, you define the jobs you want to run.\n    jobs:\n      - build-and-test\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will need to add a Quikly_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://circleci.com/docs/2.0/env-vars/"},"CircleCI Documentation"))))),(0,o.kt)("h4",{id:"adding-quikly-to-your-existing-configurations"},"Adding Quikly to your Existing Configurations"),(0,o.kt)("p",null,"If you already have a config with CircleCI to run your Selenium Scripts, then the only thing you need to do is add a new run to configure the Quikly Interceptor. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml"',title:'"config.yml"'},"- run:\n    name: Download and Configure Quikly Interceptor\n    command: |\n      wget https://Quiklyapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n      pip install selenium-20.11.0-py2.py3-none-any.whl -U\n      export Quikly_ANALYZER=1\n      export Quikly_TOKEN=$Quikly_TOKEN\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will need to add a Quikly_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://circleci.com/docs/2.0/env-vars/"},"CircleCI Documentation"))))),(0,o.kt)("p",null,"This will now use the Quikly interceptor as the default selenium package. To learn more about using the interceptor, see the documentation at: "),(0,o.kt)("h3",{id:"travis-ci"},"Travis CI"),(0,o.kt)("p",null,"Use the Quikly Interceptor with Travis CI in a couple simple steps. "),(0,o.kt)("p",null,"In this example, we setup the Quikly Interceptor for Selenium Python."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'sudo: required\nlanguage: python\npython:\n  "3.8"\naddons:\n  chrome: stable\n\nbefore_install:\n- wget https://Quiklyapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n\nbefore_script:\n  - LATEST_CHROMEDRIVER_VERSION=`curl -s "https://chromedriver.storage.googleapis.com/LATEST_RELEASE"`\n  - curl "https://chromedriver.storage.googleapis.com/${LATEST_CHROMEDRIVER_VERSION}/chromedriver_linux64.zip" -O\n  - unzip chromedriver_linux64.zip -d ~/bin\n  - export PATH=$PATH:$PWD/chromedriver\n\nenv:\n  global:\n  - export Quikly_ANALYZER=1\n\ninstall:\n  - pip install selenium-20.11.0-py2.py3-none-any.whl -U\n  - pip install -r requirements.txt\n\nscript:\n  python reactbank_test_old.py\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will need to add a Quikly_TOKEN to your project secrets on Travis CI. For more information, see the documentation provided by Travis CI here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.travis-ci.com/user/environment-variables/"},"Travis CI Documentation"))))),(0,o.kt)("h2",{id:"managing-your-integrations"},"Managing Your Integrations"),(0,o.kt)("p",null,"When you add an integration, ",(0,o.kt)("strong",{parentName:"p"},"this only applies to your user account"),". This offers flexibility for others on your team to select different integrations or set them up specific to their use case. "),(0,o.kt)("p",null,"You can manage your personal integrations which will be displayed in the integrations table on the integrations tab. Here, each integration be displayed along with a button to edit the integration. Each integration will have different fields that you can edit but they will all allow you to enable/disable the integration"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Changing the status of the integration here will apply to all tests regardless of test specific settings. "))),(0,o.kt)("p",null,"Some integrations can be deleted via our UI. This will remove your data from our database but please note any access tokens you may have generated on other platforms such as Github or Gitlab will ",(0,o.kt)("strong",{parentName:"p"},"need to be managed from those respective platforms"),"."),(0,o.kt)("p",null,"Other integrations such as Slack will need to be removed from those platforms. "),(0,o.kt)("h2",{id:"scheduled-runs"},"Scheduled runs"),(0,o.kt)("p",null,"Quikly allows you to schedule runs every time you want."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quikly Dashboard",src:n(2335).Z})),(0,o.kt)("p",null,"To schedule a run, you have to fill all the fields, so it can be a proper scheduled run. You can run a scheduled run ",(0,o.kt)("inlineCode",{parentName:"p"},"once"),",",(0,o.kt)("inlineCode",{parentName:"p"},"daily"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"weekly"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"monthly")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"use crontab expression")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quikly Dashboard",src:n(386).Z})),(0,o.kt)("p",null,"Schedule run provides two calendars ",(0,o.kt)("inlineCode",{parentName:"p"},"Simple")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple")," - Schedule one hour from your actual hour and it's available for three months."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Advanced")," - Program yourself the date and time of the start and end.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quikly Dashboard",src:n(8864).Z})),(0,o.kt)("p",null,"After you add a scheduled run, you will see the screen below."),(0,o.kt)("p",null,"If the test is scheduled with ",(0,o.kt)("inlineCode",{parentName:"p"},"Simple calendar")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations",src:n(3437).Z})),(0,o.kt)("p",null,"If the test is scheduled with ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced calendar")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations",src:n(115).Z})),(0,o.kt)("p",null,"When it runs in the process on Quikly, it will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations",src:n(1482).Z})))}d.isMDXComponent=!0},8892:function(e,t,n){t.Z=n.p+"assets/images/Integrations-30b862a9a3c7332eb84daf956430c8be.png"},8864:function(e,t,n){t.Z=n.p+"assets/images/advanced-c028ba7d05613ff976b935d9be91eced.png"},115:function(e,t,n){t.Z=n.p+"assets/images/advancedTest-4f2741d16bd9642e1927c40cb1c8a719.png"},386:function(e,t,n){t.Z=n.p+"assets/images/run-56f57965712c156b7412d801324e54cd.png"},2335:function(e,t,n){t.Z=n.p+"assets/images/scheduled-12dbb4f5aa56cc548dcdc712eb74d71b.png"},1482:function(e,t,n){t.Z=n.p+"assets/images/schrun-299d47d63196b1c1b20d1f3dcf00f446.png"},3437:function(e,t,n){t.Z=n.p+"assets/images/simplee-ba5e530c11a2556304cd3b64433a5289.png"}}]);