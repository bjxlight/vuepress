import{_ as l,E as d,Z as s,$ as r,a0 as n,a1 as e,a2 as a,a5 as t}from"./framework-bcda9434.js";const c={},v=t(`<h2 id="_1-异步" tabindex="-1"><a class="header-anchor" href="#_1-异步" aria-hidden="true">#</a> 1. 异步</h2><ul><li>所谓&quot;异步&quot;，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。</li></ul><figure><img src="http://img.zhufengpeixun.cn/asyncfunc1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。</p><figure><img src="http://img.zhufengpeixun.cn/syncfunc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-高阶函数" tabindex="-1"><a class="header-anchor" href="#_2-高阶函数" aria-hidden="true">#</a> 2.高阶函数</h2><p>函数作为一等公民，可以作为参数和返回值</p><h3 id="_2-1-可以用于批量生成函数" tabindex="-1"><a class="header-anchor" href="#_2-1-可以用于批量生成函数" aria-hidden="true">#</a> 2.1 可以用于批量生成函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let toString = Object.prototype.toString;
let isString = function (obj) {
  return toString.call(obj) == \`[object String]\`;
}
let isFunction = function (obj) {
  return toString.call(obj) == \`[object Function]\`;
}
let isType = function (type) {
  return function (obj) {
    return toString.call(obj) == \`[object \${type}]\`;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-可以用于需要调用多次才执行的函数" tabindex="-1"><a class="header-anchor" href="#_2-2-可以用于需要调用多次才执行的函数" aria-hidden="true">#</a> 2.2 可以用于需要调用多次才执行的函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let after = function(times,task){
  return function(){
    if(times--==1){
      return task.apply(this,arguments);
    }
  }
}
let fn = after(3,function(){
  console.log(3);});
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种" tabindex="-1"><a class="header-anchor" href="#_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种" aria-hidden="true">#</a> 3. 异步编程的语法目标，就是怎样让它更像同步编程,有以下几种</h2><ul><li>回调函数实现</li><li>事件监听</li><li>发布订阅</li><li>Promise/A+ 和生成器函数</li><li>async/await</li></ul><h2 id="_4-回调" tabindex="-1"><a class="header-anchor" href="#_4-回调" aria-hidden="true">#</a> 4. 回调</h2><p>所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fs.readFile(&#39;某个文件&#39;, function (err, data) {
  if (err) throw err;
  console.log(data);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个错误优先的回调函数(error-first callbacks),这也是Node.js本身的特点之一。</p><h2 id="_5-回调的问题" tabindex="-1"><a class="header-anchor" href="#_5-回调的问题" aria-hidden="true">#</a> 5 回调的问题</h2><h3 id="_5-1-异常处理" tabindex="-1"><a class="header-anchor" href="#_5-1-异常处理" aria-hidden="true">#</a> 5.1 异常处理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
  //xxx
}catch(e){//TODO}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步代码时<code>try catch</code>不再生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let async = function(callback){
  try{
    setTimeout(function(){
      callback();
    },1000)
  }catch(e){
    console.log(&#39;捕获错误&#39;,e);
  }
}

async(function(){
  console.log(t);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为这个回调函数被存放了起来，直到下一个事件环的时候才会取出,try只能捕获当前循环内的异常，对callback异步无能为力。</p><p>Node在处理异常有一个约定，将异常作为回调的第一个实参传回，如果为空表示没有出错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async(function(err,callback){
  if(err){
    console.log(err);
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步方法也要遵循两个原则</p><ul><li><p>必须在异步之后调用传入的回调函数</p></li><li><p>如果出错了要向回调函数传入异常供调用者判断</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let async = function(callback){
try{
  setTimeout(function(){
    if(success)
      callback(null);
    else
      callback(&#39;错误&#39;);
  },1000)
}catch(e){
  console.log(&#39;捕获错误&#39;,e);
}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-回调地狱" tabindex="-1"><a class="header-anchor" href="#_5-2-回调地狱" aria-hidden="true">#</a> 5.2 回调地狱</h3><p>异步多级依赖的情况下嵌套非常深，代码难以阅读的维护</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){
fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){
  console.log(template+&#39; &#39;+data);
})
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_6-异步流程解决方案" tabindex="-1"><a class="header-anchor" href="#_6-异步流程解决方案" aria-hidden="true">#</a> 6. 异步流程解决方案</h2><h3 id="_6-1-事件发布-订阅模型" tabindex="-1"><a class="header-anchor" href="#_6-1-事件发布-订阅模型" aria-hidden="true">#</a> 6.1 事件发布/订阅模型</h3><p>订阅事件实现了一个事件与多个回调函数的关联</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
let EventEmitter = require(&#39;events&#39;);
let eve = new EventEmitter();
let html = {};
eve.on(&#39;ready&#39;,function(key,value){
  html[key] = value;
  if(Object.keys(html).length==2){
    console.log(html);
  }
});
function render(){
  fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){
    eve.emit(&#39;ready&#39;,&#39;template&#39;,template);
  })
  fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){
    eve.emit(&#39;ready&#39;,&#39;data&#39;,data);
  })
}
render();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-哨兵变量" tabindex="-1"><a class="header-anchor" href="#_6-2-哨兵变量" aria-hidden="true">#</a> 6.2 哨兵变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);

let after = function(times,callback){
  let result = {};
  return function(key,value){
    result[key] = value;
    if(Object.keys(result).length==times){
      callback(result);
    }
  }
}
let done = after(2,function(result){
  console.log(result);
});

function render(){
  fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){
    done(&#39;template&#39;,template);
  })
  fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){
    done(&#39;data&#39;,data);
  })
}
rende

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-promise-deferred模式" tabindex="-1"><a class="header-anchor" href="#_6-3-promise-deferred模式" aria-hidden="true">#</a> 6.3 Promise/Deferred模式</h3><h3 id="_6-4-生成器generators-yield" tabindex="-1"><a class="header-anchor" href="#_6-4-生成器generators-yield" aria-hidden="true">#</a> 6.4 生成器Generators/ yield</h3><ul><li>当你在执行一个函数的时候，你可以在某个点暂停函数的执行，并且做一些其他工作，然后再返回这个函数继续执行， 甚至是携带一些新的值，然后继续执行。</li><li>上面描述的场景正是JavaScript生成器函数所致力于解决的问题。当我们调用一个生成器函数的时候，它并不会立即执行， 而是需要我们手动的去执行迭代操作（next方法）。也就是说，你调用生成器函数，它会返回给你一个迭代器。迭代器会遍历每个中断点。</li><li>next 方法返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，这是向 Generator 函数体内输入数据</li></ul><h4 id="_6-4-1-生成器的使用" tabindex="-1"><a class="header-anchor" href="#_6-4-1-生成器的使用" aria-hidden="true">#</a> 6.4.1 生成器的使用</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* foo () {
  var index = 0;
  while (index &lt; 2) {
    yield index++; //暂停函数执行，并执行yield后的操作
  }
}
var bar =  foo(); // 返回的其实是一个迭代器

console.log(bar.next());    // { value: 0, done: false }
console.log(bar.next());    // { value: 1, done: false }
console.log(bar.next());    // { value: undefined, done: true }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-2-co" tabindex="-1"><a class="header-anchor" href="#_6-4-2-co" aria-hidden="true">#</a> 6.4.2 Co</h4><p><code>co</code>是一个为<code>Node.js</code>和浏览器打造的基于生成器的流程控制工具，借助于Promise，你可以使用更加优雅的方式编写非阻塞代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}
function *read() {
  let template = yield readFile(&#39;./template.txt&#39;);
  let data = yield readFile(&#39;./data.txt&#39;);
  return template + &#39;+&#39; + data;
}
co(read).then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function co(gen) {
  let it = gen();
  return new Promise(function (resolve, reject) {
    !function next(lastVal) {
      let {value, done} = it.next(lastVal);
      if (done) {
        resolve(value);
      } else {
        value.then(next, reason =&gt; reject(reason));
      }
    }();
  });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-async-await" tabindex="-1"><a class="header-anchor" href="#_6-5-async-await" aria-hidden="true">#</a> 6.5 Async/ await</h2><p>使用<code>async</code>关键字，你可以轻松地达成之前使用生成器和co函数所做到的工作</p><h3 id="_6-5-1-async的优点" tabindex="-1"><a class="header-anchor" href="#_6-5-1-async的优点" aria-hidden="true">#</a> 6.5.1 Async的优点</h3><ul><li>内置执行器</li><li>更好的语义</li><li>更广的适用性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, &#39;utf8&#39;, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}

async function read() {
  let template = await readFile(&#39;./template.txt&#39;);
  let data = await readFile(&#39;./data.txt&#39;);
  return template + &#39;+&#39; + data;
}
let result = read();
result.then(data=&gt;console.log(data));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-2-async-函数的实现" tabindex="-1"><a class="header-anchor" href="#_6-5-2-async-函数的实现" aria-hidden="true">#</a> 6.5.2 async 函数的实现</h3><p>async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function read() {
  let template = await readFile(&#39;./template.txt&#39;);
  let data = await readFile(&#39;./data.txt&#39;);
  return template + &#39;+&#39; + data;
}

// 等同于
function read(){
  return co(function*() {
    let template = yield readFile(&#39;./template.txt&#39;);
    let data = yield readFile(&#39;./data.txt&#39;);
    return template + &#39;+&#39; + data;
  });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.ruanyifeng.com/blog/2015/04/generator.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},b={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"};function h(f,p){const i=d("ExternalLinkIcon");return s(),r("div",null,[v,n("ul",null,[n("li",null,[n("a",u,[e("async_function"),a(i)]),e("- "),n("a",m,[e("generator"),a(i)])])]),n("p",null,[e("Powered by "),n("a",o,[e("idoc"),a(i)]),e(". Dependence "),n("a",b,[e("Node.js"),a(i)]),e(" run.")])])}const x=l(c,[["render",h],["__file","0.Async.html.vue"]]);export{x as default};
