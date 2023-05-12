import{_ as l,E as s,Z as a,$ as r,a0 as n,a1 as e,a2 as d,a5 as c}from"./framework-bcda9434.js";const u={},v=c(`<h2 id="_1-模块化" tabindex="-1"><a class="header-anchor" href="#_1-模块化" aria-hidden="true">#</a> 1. 模块化</h2><p>模块化是指把一个复杂的系统分解到多个模块以方便编码。</p><h3 id="_1-1-命名空间" tabindex="-1"><a class="header-anchor" href="#_1-1-命名空间" aria-hidden="true">#</a> 1.1 命名空间</h3><p>开发网页要通过命名空间的方式来组织代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;jquery.js&quot;&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命名空间冲突，两个库可能会使用同一个名称</li><li>无法合理地管理项目的依赖和版本；</li><li>无法方便地控制依赖的加载顺序。</li></ul><h3 id="_1-2-commonjs" tabindex="-1"><a class="header-anchor" href="#_1-2-commonjs" aria-hidden="true">#</a> 1.2 CommonJS</h3><p>CommonJS 是一种使用广泛的<code>JavaScript</code>模块化规范，核心思想是通过<code>require</code>方法来同步地加载依赖的其他模块，通过 module.exports 导出需要暴露的接口。</p><h4 id="_1-2-1-用法" tabindex="-1"><a class="header-anchor" href="#_1-2-1-用法" aria-hidden="true">#</a> 1.2.1 用法</h4><p>采用 CommonJS 导入及导出时的代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入
const someFun= require(&#39;./moduleA&#39;);
someFun();

// 导出
module.exports = someFunc;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-原理" tabindex="-1"><a class="header-anchor" href="#_1-2-2-原理" aria-hidden="true">#</a> 1.2.2 原理</h4><p>a.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
let path = require(&#39;path&#39;);
let b = req(&#39;./b.js&#39;);
function req(mod) {
    let filename = path.join(__dirname, mod);
    let content = fs.readFileSync(filename, &#39;utf8&#39;);
    let fn = new Function(&#39;exports&#39;, &#39;require&#39;, &#39;module&#39;, &#39;__filename&#39;, &#39;__dirname&#39;, content + &#39;\\n return module.exports;&#39;);
    let module = {
        exports: {}
    };

    return fn(module.exports, req, module, __filename, __dirname);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;bbb&#39;);
exports.name = &#39;zfpx&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-amd" tabindex="-1"><a class="header-anchor" href="#_1-3-amd" aria-hidden="true">#</a> 1.3 AMD</h3><p>AMD 也是一种 JavaScript 模块化规范，与 CommonJS 最大的不同在于它采用异步的方式去加载依赖的模块。 AMD 规范主要是为了解决针对浏览器环境的模块化问题，最具代表性的实现是 requirejs。</p><p>AMD 的优点</p><ul><li>可在不转换代码的情况下直接在浏览器中运行</li><li>可加载多个依赖</li><li>代码可运行在浏览器环境和 Node.js 环境下</li></ul><p>AMD 的缺点</p><ul><li>JavaScript 运行环境没有原生支持 AMD，需要先导入实现了 AMD 的库后才能正常使用。</li></ul><h4 id="_1-3-1-用法" tabindex="-1"><a class="header-anchor" href="#_1-3-1-用法" aria-hidden="true">#</a> 1.3.1 用法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义一个模块
define(&#39;a&#39;, [], function () {
    return &#39;a&#39;;
});
define(&#39;b&#39;, [&#39;a&#39;], function (a) {
    return a + &#39;b&#39;;
});
// 导入和使用
require([&#39;b&#39;], function (b) {
    console.log(b);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-2-原理" tabindex="-1"><a class="header-anchor" href="#_1-3-2-原理" aria-hidden="true">#</a> 1.3.2 原理</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let factories = {};
function define(modName, dependencies, factory) {
    factory.dependencies = dependencies;
    factories[modName] = factory;
}
function require(modNames, callback) {
    let loadedModNames = modNames.map(function (modName) {
        let factory = factories[modName];
        let dependencies = factory.dependencies;
        let exports;
        require(dependencies, function (...dependencyMods) {
            exports = factory.apply(null, dependencyMods);
        });
        return exports;
    })
    callback.apply(null, loadedModNames);
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-es6-模块化" tabindex="-1"><a class="header-anchor" href="#_1-4-es6-模块化" aria-hidden="true">#</a> 1.4 ES6 模块化</h3><p>ES6 模块化是<code>ECMA</code>提出的<code>JavaScript</code>模块化规范，它在语言的层面上实现了模块化。浏览器厂商和<code>Node.j</code>s <code>都宣布要原生支持该规范。它将逐渐取代</code>CommonJS<code>和</code>AMD\`规范，成为浏览器和服务器通用的模块解决方案。 采用 ES6 模块化导入及导出时的代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入
import { name } from &#39;./person.js&#39;;
// 导出
export const name = &#39;zfpx&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6模块虽然是终极模块化方案，但它的缺点在于目前无法直接运行在大部分 JavaScript 运行环境下，必须通过工具转换成标准的 ES5 后才能正常运行。</p><h2 id="_2-自动化构建" tabindex="-1"><a class="header-anchor" href="#_2-自动化构建" aria-hidden="true">#</a> 2. 自动化构建</h2><p>构建就是做这件事情，把源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码，包括如下内容。</p><ul><li>代码转换：ECMASCRIPT6 编译成 ECMASCRIPT5、LESS 编译成 CSS 等。</li><li>文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。</li><li>代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。</li><li>模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。</li><li>自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。</li><li>代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。</li><li>自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。</li></ul><h2 id="_3-webpack" tabindex="-1"><a class="header-anchor" href="#_3-webpack" aria-hidden="true">#</a> 3. Webpack</h2><p>Webpack 是一个打包模块化 JavaScript 的工具，在 Webpack 里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 专注于构建模块化项目。</p><p>一切文件：JavaScript、CSS、SCSS、图片、模板，在 Webpack 眼中都是一个个模块，这样的好处是能清晰的描述出各个模块之间的依赖关系，以方便 Webpack 对模块进行组合和打包。 经过 Webpack 的处理，最终会输出浏览器能使用的静态资源。</p><h2 id="_3-1-安装-webpack" tabindex="-1"><a class="header-anchor" href="#_3-1-安装-webpack" aria-hidden="true">#</a> 3.1 安装 Webpack</h2><p>在用 Webpack 执行构建任务时需要通过 webpack 可执行文件去启动构建任务，所以需要安装 webpack 可执行文件</p><h2 id="_3-1-1-安装-webpack-到本项目" tabindex="-1"><a class="header-anchor" href="#_3-1-1-安装-webpack-到本项目" aria-hidden="true">#</a> 3.1.1 安装 Webpack 到本项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装最新稳定版
npm i -D webpack

# 安装指定版本
npm i -D [email protected]&lt;version&gt;

# 安装最新体验版本
npm i -D [email protected]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>npm i -D 是 <code>npm install --save-dev</code> 的简写，是指安装模块并保存到 <code>package.json</code> 的 <code>devDependencies</code></p></blockquote><h2 id="_3-1-2-安装-webpack-到全局" tabindex="-1"><a class="header-anchor" href="#_3-1-2-安装-webpack-到全局" aria-hidden="true">#</a> 3.1.2 安装 Webpack 到全局</h2><p>安装到全局后你可以在任何地方共用一个 Webpack 可执行文件，而不用各个项目重复安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -g webpack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>推荐安装到当前项目，原因是可防止不同项目依赖不同版本的 Webpack 而导致冲突</p></blockquote><h2 id="_3-1-2-使用-webpack" tabindex="-1"><a class="header-anchor" href="#_3-1-2-使用-webpack" aria-hidden="true">#</a> 3.1.2 使用 Webpack</h2><h2 id="_3-1-3-使用-webpack" tabindex="-1"><a class="header-anchor" href="#_3-1-3-使用-webpack" aria-hidden="true">#</a> 3.1.3 使用 Webpack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function (modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;

    }
    return require(&quot;./index.js&quot;);
})
    ({
        &quot;./index.js&quot;:
            (function (module, exports, require) {
                eval(&quot;console.log(&#39;hello&#39;);\\n\\n&quot;);
            })
    });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /usr/bin/env node
const pathLib = require(&#39;path&#39;);
const fs = require(&#39;fs&#39;);
let ejs = require(&#39;ejs&#39;);
let cwd = process.cwd();
let { entry, output: { filename, path } } = require(pathLib.join(cwd, &#39;./webpack.config.js&#39;));
let script = fs.readFileSync(entry, &#39;utf8&#39;);
let bundle = \`
(function (modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;

    }
    return require(&quot;&lt;%-entry%&gt;&quot;);
})
    ({
        &quot;&lt;%-entry%&gt;&quot;:
            (function (module, exports, require) {
                eval(&quot;&lt;%-script%&gt;&quot;);
            })
    });
\`
let bundlejs = ejs.render(bundle, {
    entry,
    script
});
try {
    fs.writeFileSync(pathLib.join(path, filename), bundlejs);
} catch (e) {
    console.error(&#39;编译失败 &#39;, e);
}
console.log(&#39;compile sucessfully!&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-4-依赖其它模块" tabindex="-1"><a class="header-anchor" href="#_3-1-4-依赖其它模块" aria-hidden="true">#</a> 3.1.4 依赖其它模块</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /usr/bin/env node
const pathLib = require(&#39;path&#39;);
const fs = require(&#39;fs&#39;);
let ejs = require(&#39;ejs&#39;);
let cwd = process.cwd();
let { entry, output: { filename, path } } = require(pathLib.join(cwd, &#39;./webpack.config.js&#39;));
let script = fs.readFileSync(entry, &#39;utf8&#39;);
let modules = [];
script.replace(/require\\([&#39;&quot;](.+?)[&#39;&quot;]\\)/g, function () {
    let name = arguments[1];
    let script = fs.readFileSync(name, &#39;utf8&#39;);
    modules.push({
        name,
        script
    });
});
let bundle = \`
(function (modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require(&quot;&lt;%-entry%&gt;&quot;);
})
    ({
        &quot;&lt;%-entry%&gt;&quot;:
            (function (module, exports, require) {
                eval(\\\`&lt;%-script%&gt;\\\`);
            })
       &lt;%if(modules.length&gt;0){%&gt;,&lt;%}%&gt;
        &lt;%for(let i=0;i&lt;modules.length;i++){
            let module = modules[i];%&gt;   
            &quot;&lt;%-module.name%&gt;&quot;:
            (function (module, exports, require) {
                eval(\\\`&lt;%-module.script%&gt;\\\`);
            })
        &lt;% }%&gt;    
    });
\`
let bundlejs = ejs.render(bundle, {
    entry,
    script,
    modules
});
try {
    fs.writeFileSync(pathLib.join(path, filename), bundlejs);
} catch (e) {
    console.error(&#39;编译失败 &#39;, e);
}
console.log(&#39;compile sucessfully!&#39;);





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),t={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"};function o(b,p){const i=s("ExternalLinkIcon");return a(),r("div",null,[v,n("p",null,[e("Powered by "),n("a",t,[e("idoc"),d(i)]),e(". Dependence "),n("a",m,[e("Node.js"),d(i)]),e(" run.")])])}const x=l(u,[["render",o],["__file","0.module.html.vue"]]);export{x as default};
