(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{210:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"webpack专题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack专题"}},[a._v("#")]),a._v(" Webpack专题")]),a._v(" "),s("h2",{attrs:{id:"webpack的基础安装及概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的基础安装及概念"}},[a._v("#")]),a._v(" webpack的基础安装及概念")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("前端工程化")]),a._v("：是系统化、模块化、规范化的过程。主要解决：如何提高整个系统生产效率的问题。")]),a._v(" "),s("li",[s("strong",[a._v("工程化的主要改变")]),a._v("：工具（更多自动化工具，更多的脚手架）、人员（协作人员变多，有一定的机制保障合作的顺畅）、写代码方式（大量用到预制的模板，用组件化的工具）。")]),a._v(" "),s("li",[s("strong",[a._v("webpack的主要功能")]),a._v("：1、编译，包括JavaScript的编译，css的编译；2、文件的压缩，打包，合并，公共模块提取等；3、图片等资源的处理如压缩。合并雪碧图等。4、tree-shaking等优化JavaScript工具；5、"),s("code",[a._v("webpack-dev-server")]),a._v(","),s("code",[a._v("Eslint")]),a._v("，热更新等帮助开发的工具。")]),a._v(" "),s("li",[s("strong",[a._v("webpack的安装")]),a._v("：1、安装node，2、命令："),s("code",[a._v("npm install webpack -g")]),a._v(" 全局安装webpack；3、webpack -v检查是否安装成功。")]),a._v(" "),s("li",[s("strong",[a._v("使用")]),a._v("：开始一次打包。1、新建一个项目文件夹，2、通过npm命令（npm init -y）初始化package.json文件；3、创建编写一个配置文件。4、命令行运行打包。")])]),a._v(" "),s("h2",{attrs:{id:"前端模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化"}},[a._v("#")]),a._v(" 前端模块化")]),a._v(" "),s("ul",[s("li",[a._v("非模块化代码的不足：1、协同开发不方便，一不小心就污染了别人的代码；2、JavaScript之间无法相互引用，3、不方便分配工作；4、引入别的模块用script，需要特别注意顺序。")]),a._v(" "),s("li",[a._v("为什么要模块化：前端工程日益复杂，必须多人协作，模块化更适应多人协作。模块独立，方便后期维护。")]),a._v(" "),s("li",[a._v("模块化的方案：1、commonJS规范，2、amd/cmd/umd，3、ES6 module；")]),a._v(" "),s("li",[a._v("webpack支持的模块化规范：1、commonJS规范，2、AMD规范，3、ES6 module；")])]),a._v(" "),s("h2",{attrs:{id:"webpack的核心概念："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的核心概念："}},[a._v("#")]),a._v(" webpack的核心概念：")]),a._v(" "),s("ul",[s("li",[a._v("配置文件：1、是打包的依据，webpack如何打包，打包成什么样，全部都由配置文件来指定。2、对于webpack，我们主要工作也是编写、修改配置文件。")]),a._v(" "),s("li",[a._v("核心概念："),s("br"),a._v(" "),s("strong",[a._v("1、Entry和Output")]),a._v("：入口和出口。"),s("br"),a._v('\n    Entry是打包的入口，代码从这开始编译，程序开始的起点。Entry : "./app.js" ; 也可以是数组、对象形式。数组中包含多个数组项则全部打包到一个文件，为对象：有多个属性的话会有多个打包完的  的入口文件（多页面应用。）'),s("br"),a._v("\n    Output 是 webpack 的打包出口：  1、  最终的打包结果会根据 output 的定义输出（位置、名字等） 。2、会影响到资源的路径。属性为对象，常用的filename（文件名称、位置）；path：打包结果的绝对路径。"),s("br"),a._v(" "),s("strong",[a._v("2、loder")]),a._v(" ：加工的零件 ； 是webpack的编译方法：webpack自身只能处理JavaScript，所以对于别的资源需要loader，webpack自身职能负责打包，相关的编译等操作，需要loader，loader本质是一个方法，使用时大多需要额外安装。"),s("br"),a._v("\n    常用的loader：css-loader，style-loder等css处理loader；url-loader，image-loader等图片字体文件等资源处理loader，less-loader，sass-loader,babel-loader等编译loader。还有语法糖loader，如：vue-loader。"),s("br"),a._v(" "),s("strong",[a._v("3、plugin")]),a._v("：加工的零件插件。plugin是webpack的额外扩展：一些插件式的额外功能由plugin定义，帮助webpack优化代码，提供功能，plugin有的是webpack自带的，也有需要额外安装的。"),s("br"),a._v("\n    常用的plugin："),s("code",[a._v("commonsChunkPlugin")]),a._v(" ，"),s("code",[a._v("uglifyjsWebpackPlugin")]),a._v("，purifyCss等优化文件体积的插件。"),s("code",[a._v("htmlwebpackPlugin")]),a._v(", "),s("code",[a._v("HotModuleReplacementPlugin")]),a._v("等额外功能插件。")])]),a._v(" "),s("h2",{attrs:{id:"开始一次webpack打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始一次webpack打包"}},[a._v("#")]),a._v(" 开始一次webPack打包")]),a._v(" "),s("ul",[s("li",[a._v("1、不利用配置文件打包。")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("webpack-cli --entry <entry>  -- output <output>\n")])])]),s("ul",[s("li",[a._v('2、利用配置文件打包。默认的配置文件："Webpack.config.js" ； 也可以用"webpack --config <\\configname>"来指定配置文件。'),s("br"),a._v("\n全局webpack：通过npm  install webpack -g安装的是全局。"),s("br"),a._v("\n局部webpack ： 指在项目文件夹下安装的webpack，即安装在项目文件夹里的node_modules里。"),s("br"),a._v("\n作用：全局webpack只有一个，但在实际情况中，不同项目的webpack版本可能不同，项目需求的webpack与全局webpack不一致时，就需要安装局部webpack。 局部webpack安装方法：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install webpack@版本号 --save;\n")])])]),s("p",[a._v("利用局部的webpack打包：局部安装——配置package.json 文件——命令行执行package.json定义的命令。")]),a._v(" "),s("h2",{attrs:{id:"javascript的编译；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript的编译；"}},[a._v("#")]),a._v(" JavaScript的编译；")]),a._v(" "),s("h3",{attrs:{id:"_1、es6的编译。编译需要安装loader，"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、es6的编译。编译需要安装loader，"}},[a._v("#")]),a._v(" 1、ES6的编译。编译需要安装loader，")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install babel-loader @babel/core -save-dev ;\n")])])]),s("ul",[s("li",[s("strong",[a._v("babel-preset")]),a._v(" :Presets是储存JavaScript不同标准的插件，通过使用正确的presets，告诉babel按照哪个规范编译。")]),a._v(" "),s("li",[s("strong",[a._v("Babel的target配置")]),a._v("：Target是preset的核心配置，告诉preset编译的具体目标。可以：以browsers为目标，以node的版本为目标，以特定浏览器为目标。")]),a._v(" "),s("li",[s("strong",[a._v("ES6方法的编译")]),a._v("：\n1.babel-polyfill ：生效方式：生成一个全局对象，把所有的新的方法以某个标准按照ES5的方式实现一遍。一般用户项目开发。"),s("br"),a._v("\n    使用方式：通过import 引入到需要编译的js文件中。"),s("br"),a._v("\n2."),s("code",[a._v("babel-plugin-transform-runtime babel-runtime")]),a._v(" ；\n生效方式：生成一个局部对象，只对用到的新的方法进行实现，一般用于框架开发。")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v('"babel"的配置除了可以写到配置文件里，还可以单独提取出来，写到一个名为：.babelrc的文件中。')])]),a._v(" "),s("h3",{attrs:{id:"_2、语法糖的编译。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、语法糖的编译。"}},[a._v("#")]),a._v(" 2、语法糖的编译。")]),a._v(" "),s("p",[a._v("如Typescript的编译，Typescript是JavaScript的一个超集，让我们可以用强类型的写法写JavaScript，与之类似的还有jsx，vue等。"),s("br"),a._v("\n以Typescript为例。步骤：")]),a._v(" "),s("ul",[s("li",[a._v("安装loader，安装typescript和ts-loader，")]),a._v(" "),s("li",[a._v("写入配置文件：在webpack.config.js中写入ts-loader；")]),a._v(" "),s("li",[a._v("编写teconfig.json 类似于.babelrc ，ts-loader的额外配置。")])]),a._v(" "),s("h2",{attrs:{id:"css的编译。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css的编译。"}},[a._v("#")]),a._v(" css的编译。")]),a._v(" "),s("h3",{attrs:{id:"_1、如何引入css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何引入css"}},[a._v("#")]),a._v(" 1、如何引入css")]),a._v(" "),s("p",[a._v("css可以通过js文件引入，但必须使用loader。")]),a._v(" "),s("ul",[s("li",[a._v("1、css-loader，让css可以被js正确引入。")]),a._v(" "),s("li",[a._v("2、style-loader,让css被引入后可以被正确的以一个style标签插入页面。")]),a._v(" "),s("li",[a._v("3、两者顺序很重要，要先通过css-loader处理，再由style-loader处理。")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Style-loader 的核心配置：insertAt：style标签插入在哪一块区域。  insertInto ：插入指定的dom； singleton ：是否合并为一个style标签，transform：在浏览器环境下，插入style到页面前，用js对css进行操作。"),s("br"),a._v("\ncss-loader的核心配置：minimize：是否压缩css ,   module ：是否使用css模块化； alias css中的全局别名。")])]),a._v(" "),s("h3",{attrs:{id:"_2、less、sass等预处理语言的编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、less、sass等预处理语言的编译"}},[a._v("#")]),a._v(" 2、less、sass等预处理语言的编译")]),a._v(" "),s("p",[a._v("（1）less、sass是css预处理语言，用来帮助我们更方便的写css，更方便团队合作，less编译需要依赖less，less-loader。"),s("br"),a._v("\n（2）less，sass浏览器是无法直接识别的，需要编译成css才能被识别，所以我们用less，sass写的文件都要编译。编译用到sass-loader ，node-sass；")]),a._v(" "),s("h3",{attrs:{id:"_3、提取css代码作为一个单独的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、提取css代码作为一个单独的文件"}},[a._v("#")]),a._v(" 3、提取css代码作为一个单独的文件")]),a._v(" "),s("p",[s("strong",[a._v("步骤")]),a._v("：安装对应的插件："),s("code",[a._v("extract-text-webpack-plugin")]),a._v("，——改造loader处的写法，把use改为使用"),s("code",[a._v("extract-text-webpack-plugin")]),a._v(" ；——在plugin出添加  把"),s("code",[a._v("extract-text-webpack-plugin")]),a._v("加入到plugin里。")]),a._v(" "),s("h2",{attrs:{id:"html的编译。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html的编译。"}},[a._v("#")]),a._v(" HTML的编译。")]),a._v(" "),s("p",[a._v("1、HTML生成：需要用到plugin，")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install html-webpack-plugin --save -dev;\n")])])]),s("p",[a._v("相关配置：filename：打包生成后的HTML文件的名字。"),s("br"),a._v("\ntemplate：指定一个HTML文件为模板。"),s("br"),a._v("\nMinify ： 压缩HTML，"),s("br"),a._v("\ninject：是否把js，css文件插入到HTML，插入到哪。"),s("br"),a._v("\nchunks： 多入口是，指定引入chunks。")]),a._v(" "),s("h2",{attrs:{id:"webpack的环境。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的环境。"}},[a._v("#")]),a._v(" webpack的环境。")]),a._v(" "),s("h3",{attrs:{id:"webpack的环境系统："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的环境系统："}},[a._v("#")]),a._v(" webpack的环境系统：")]),a._v(" "),s("ul",[s("li",[a._v("为什么要区分环境：因为在不同场景下可能需要不同的配置，使用不同的功能，所以要区分环境。比如：")]),a._v(" "),s("li",[a._v("开发模式：会额外用到一些调试功能，比如webpack-dev-server，但是为了加快调试速度，可能不会去用上压缩，tree-shaking之类的功能。")]),a._v(" "),s("li",[a._v("生产模式：为了减少文件体积，会使用压缩，tree-shaking等功能，但是不要如webpac-dev-server或者eslint这样的调试工具")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("如何告诉webpack当前环境：webpack --env envname ；")])]),a._v(" "),s("h3",{attrs:{id:"不同环境下的配置编写。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同环境下的配置编写。"}},[a._v("#")]),a._v(" 不同环境下的配置编写。")]),a._v(" "),s("p",[a._v("步骤：编写一个开发环境下的配置文件 ——>编写一个生产环境下的配置文件 ——> 在基础配置引入开发和生产配置 ——> 判断env参数，合并对应的配置。")]),a._v(" "),s("div",{staticClass:"language-shel extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//Webpack4中的环境区分：\nwebpack --mode production/development/none;\n")])])]),s("h2",{attrs:{id:"webpack-dev-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server"}},[a._v("#")]),a._v(" webpack-dev-server")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("是什么")]),a._v("：项目最终都要打包上线，所以最好能模拟线上环境进行开发测试，webpack-dev-server就是一个让我们可以模拟线上环境进行项目调试的工具。")]),a._v(" "),s("li",[s("strong",[a._v("提供的常用额外功能")]),a._v("：路径重定向、浏览器中显示编译错误、接口代理、热更新。")]),a._v(" "),s("li",[s("strong",[a._v("使用步骤")]),a._v("：安装webpack-dev-server，配置dev-server字段，利用命令行开启服务。")]),a._v(" "),s("li",[s("strong",[a._v("常用配置")]),a._v("：inline：服务开启模式；port：代理接口（端口）；historyApiFallback：路径重定向；hot：热更新； lazy：懒编译 ； overlay：错误遮罩。proxy：代理请求。")])]),a._v(" "),s("h2",{attrs:{id:"source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[a._v("#")]),a._v(" source-map")]),a._v(" "),s("p",[a._v("为方便调试，我们需要知道打包后的代码对应于原文件的位置。如果代码有一处错误，无source-map只能追踪到错误发生在打包后文件的哪个位置，但是打包后的文件不方便阅读。有了source-map，就可以查看错误发生在原模块的哪个地方。"),s("br"),a._v(" "),s("strong",[a._v("source-map的模式")]),a._v("：开发模式有：eval（构建最快，只能定位到打包后的代码）、eval-source-map（构建较快，生成一个dataURL形式的sourcemap）、cheap-eval-source-map（构建快，重新构建慢，定位到转换后的代码）、cheap-module-source-map（构建慢，重构快，能定位到原始代码，开发中一般都用这个）；"),s("br"),a._v(" "),s("strong",[a._v("生产模式")]),a._v("：source-map（构建和重构都很慢，能定位原始代码。上线后一般用这个）、hidden-source-map（构建和重构都很慢，能定位原始代码，但不追加注释）、nosource-source-map（构建和重构都很慢，不能定位到源码）。")]),a._v(" "),s("h2",{attrs:{id:"webpack原理解析；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack原理解析；"}},[a._v("#")]),a._v(" webpack原理解析；")]),a._v(" "),s("p",[a._v("webpack依赖于node的环境与文件操作系统。webpack的打包过程，其实就是利用node去读取文件，然后进行一些字符串处理后，再利用node去写入文件。"),s("br"),a._v(" "),s("strong",[a._v("打包流程")]),a._v("：读取配置文件 ——> 注册内部插件与配置插件 ——> Loader编译 ——> 组织模块 ——> 生成最终文件导出。"),s("br"),a._v(" "),s("strong",[a._v("loader原理解析")]),a._v("：其实是一个方法，接受一个字符串，方法内部处理完后再返回字符串。"),s("br"),a._v(" "),s("strong",[a._v("Dev-server原理解析")]),a._v("：Dev-server利用express和一个中间件webpack-dev-minddleware来开启服务。然后开启的server会执行打包出来的代码。"),s("br"),a._v(" "),s("strong",[a._v("热更新原理")]),a._v("：开启服务，建立一个websocket链接，发生代码改变，服务通过websocket通知到客户端，客户端替换新代码；")]),a._v(" "),s("h2",{attrs:{id:"图片等资源的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片等资源的处理"}},[a._v("#")]),a._v(" 图片等资源的处理")]),a._v(" "),s("p",[a._v("css中的图片处理需要用到的loader：file-loader、url-loader、img-loader。HTML中的图片处理需要用到html-loader。")]),a._v(" "),s("h2",{attrs:{id:"代码分割-js代码大小控制——webpack实战演练"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码分割-js代码大小控制——webpack实战演练"}},[a._v("#")]),a._v(" 代码分割&js代码大小控制——webpack实战演练")]),a._v(" "),s("p",[a._v("一切为了优化,要解决的问题：减少加载代码的大小，提取公共资源，减少加载次数。"),s("br"),a._v("\n代码分割：")]),a._v(" "),s("ul",[s("li",[a._v("多页面应用：提取公共依赖，把几个页面之中都用到的依赖给打包为一个单独文件。")]),a._v(" "),s("li",[a._v("单页面应用：减少文件体积，拆分应用，把需要异步加载的内容改成异步加载。"),s("br"),a._v("\n为了业务代码的纯净，有时不希望把业务代码里混入第三方代码，或webpack配置代码，把第三方的代码个webpack配置代码拆分为单独文件。")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[s("strong",[a._v("所以一般这么打包")]),a._v("："),s("br"),a._v("\n多页面应用：主业务代码+公共依赖+第三方包+webpack运行代码；"),s("br"),a._v("\n单页应用：主业务代码+异步模块+第三方包+webpack运行代码。")])]),a._v(" "),s("p",[s("strong",[a._v("如何打包")]),a._v("：webpack3中：commonChunksPlugin  但该方法在webpack4版本中已经废弃。"),s("br"),a._v("\nWebpack4中：SplitChunksPlugin")]),a._v(" "),s("p",[s("strong",[a._v("代码体积控制")]),a._v("："),s("br"),a._v("\nWebpack3中：optimize.UglifyJsPlugin();  引入插件进行压缩。"),s("br"),a._v("\nWebpack4中：optimization.minimize:true;或者在mode中设置为production。")]),a._v(" "),s("p",[s("strong",[a._v("Tree-shaking")]),a._v("：用于删除一些没有使用到的代码。比如多个exports，只用到其中一个，则打包时候设置了只会打包其中一个，其余不打包进去。  原理即监听exports，如果有多个，则去除没有用到的。")]),a._v(" "),s("ul",[s("li",[a._v("webpack3中：optimize.UglifyJsPlugin();")]),a._v(" "),s("li",[a._v("Webpack4中：直接设置mode即可。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);