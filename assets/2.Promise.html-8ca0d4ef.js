import{_ as l,E as d,Z as r,$ as a,a0 as e,a1 as i,a2 as s,a5 as v}from"./framework-bcda9434.js";const c={},u=v(`<h2 id="_1-异步回调" tabindex="-1"><a class="header-anchor" href="#_1-异步回调" aria-hidden="true">#</a> 1. 异步回调</h2><h3 id="_1-1-回调地狱" tabindex="-1"><a class="header-anchor" href="#_1-1-回调地狱" aria-hidden="true">#</a> 1.1 回调地狱</h3><p>在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱</p><h3 id="_1-2-并行结果" tabindex="-1"><a class="header-anchor" href="#_1-2-并行结果" aria-hidden="true">#</a> 1.2 并行结果</h3><p>如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间</p><h2 id="_2-promise" tabindex="-1"><a class="header-anchor" href="#_2-promise" aria-hidden="true">#</a> 2. Promise</h2><p>Promise本意是承诺，在程序中的意思就是承诺我<strong>过一段时间后</strong>会给你一个结果。 什么时候会用到<strong>过一段时间</strong>？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等 <img src="http://7xjf2l.com1.z0.glb.clouddn.com/zhufengpromise.png" alt="" loading="lazy"></p><h2 id="_3-promise的三种状态" tabindex="-1"><a class="header-anchor" href="#_3-promise的三种状态" aria-hidden="true">#</a> 3. Promise的三种状态</h2><ul><li>Pending Promise对象实例创建时候的初始状态</li><li>Fulfilled 可以理解为成功的状态</li><li>Rejected 可以理解为失败的状态</li></ul><blockquote><p>then 方法就是用来指定Promise 对象的状态改变时确定执行的操作，resolve 时执行第一个函数（onFulfilled），reject 时执行第二个函数（onRejected）</p></blockquote><h2 id="_4-构造一个promise" tabindex="-1"><a class="header-anchor" href="#_4-构造一个promise" aria-hidden="true">#</a> 4. 构造一个Promise</h2><h3 id="_4-1-使用promise" tabindex="-1"><a class="header-anchor" href="#_4-1-使用promise" aria-hidden="true">#</a> 4.1 使用Promise</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let promise = new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
        if(Math.random()&gt;0.5)
            resolve(&#39;This is resolve!&#39;);
        else
            reject(&#39;This is reject!&#39;);
    }, 1000);
});
promise.then(Fulfilled,Rejected)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>构造一个Promise实例需要给Promise构造函数传入一个函数。</li><li>传入的函数需要有两个形参，两个形参都是function类型的参数。 <ul><li>第一个形参运行后会让Promise实例处于resolve状态，所以我们一般给第一个形参命名为resolve,使 Promise 对象的状态改变成成功，同时传递一个参数用于后续成功后的操作</li><li>第一个形参运行后会让Promise实例处于reject状态，所以我们一般给第一个形参命名为reject,将 Promise 对象的状态改变为失败，同时将错误的信息传递到后续错误处理的操作</li></ul></li></ul><h3 id="_4-2-es5模拟promise" tabindex="-1"><a class="header-anchor" href="#_4-2-es5模拟promise" aria-hidden="true">#</a> 4.2 es5模拟Promise</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Promise(fn) {
    fn((data)=&gt; {
        this.success(data);
    }, (error)=&gt; {
        this.error();
    });
}

Promise.prototype.resolve = function (data) {
    this.success(data);
}

Promise.prototype.reject = function (error) {
    this.error(error);
}

Promise.prototype.then = function (success, error) {
    this.success = success;
    this.error = error;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-es6模拟promise" tabindex="-1"><a class="header-anchor" href="#_4-3-es6模拟promise" aria-hidden="true">#</a> 4.3 es6模拟Promise</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Promise {
    constructor(fn) {
        fn((data)=&gt; {
            this.success(data);
        }, (error)=&gt; {
            this.error();
        });
    }

    resolve(data) {
        this.success(data);
    }

    reject(error) {
        this.error(error);
    }

    then(success, error) {
        this.success = success;
        this.error = error;
        console.log(this);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-promise-做为函数的返回值" tabindex="-1"><a class="header-anchor" href="#_5-promise-做为函数的返回值" aria-hidden="true">#</a> 5. promise 做为函数的返回值</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function ajaxPromise (queryUrl) {
  return new Promise((resolve, reject) =&gt; {
    let xhr = new XMLHttpRequest();
    xhr.open(&#39;GET&#39;, queryUrl, true);
    xhr.send(null);
    xhr.onreadystatechange = () =&gt; {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      }
    }
  });
}

ajaxPromise(&#39;http://www.baidu.com&#39;)
  .then((value) =&gt; {
    console.log(value);
  })
  .catch((err) =&gt; {
    console.error(err);
  });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-promise的链式调用" tabindex="-1"><a class="header-anchor" href="#_6-promise的链式调用" aria-hidden="true">#</a> 6.promise的链式调用</h2><ul><li>每次调用返回的都是一个新的Promise实例</li><li>链式调用的参数通过返回值传递</li></ul><p><code>then</code>可以使用链式调用的写法原因在于，每一次执行该方法时总是会返回一个<code>Promise</code>对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>readFile(&#39;1.txt&#39;).then(function (data) {
    console.log(data);
    return data;
}).then(function (data) {
    console.log(data);
    return readFile(data);
}).then(function (data) {
    console.log(data);
}).catch(function(err){
 console.log(err);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-promise-api" tabindex="-1"><a class="header-anchor" href="#_7-promise-api" aria-hidden="true">#</a> 7.promise API</h2><h3 id="_7-1-promise-all" tabindex="-1"><a class="header-anchor" href="#_7-1-promise-all" aria-hidden="true">#</a> 7.1 Promise.all</h3><ul><li><p><strong>参数</strong>：接受一个数组，数组内都是<code>Promise</code>实例</p></li><li><p><strong>返回值</strong>：返回一个<code>Promise</code>实例，这个<code>Promise</code>实例的状态转移取决于参数的<code>Promise</code>实例的状态变化。当参数中所有的实例都处于<code>resolve</code>状态时，返回的<code>Promise</code>实例会变为<code>resolve</code>状态。如果参数中任意一个实例处于<code>reject</code>状态，返回的<code>Promise</code>实例变为<code>reject</code>状态。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.all([p1, p2]).then(function (result) {
  console.log(result); // [ &#39;2.txt&#39;, &#39;2&#39; ]
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不管两个promise谁先完成，Promise.all 方法会按照数组里面的顺序将结果返回</p></blockquote></li></ul><h3 id="_7-2-promise-race" tabindex="-1"><a class="header-anchor" href="#_7-2-promise-race" aria-hidden="true">#</a> 7.2 Promise.race</h3><ul><li><p><strong>参数</strong>：接受一个数组，数组内都是<code>Promise</code>实例</p></li><li><p><strong>返回值</strong>：返回一个<code>Promise</code>实例，这个<code>Promise</code>实例的状态转移取决于参数的<code>Promise</code>实例的状态变化。当参数中任何一个实例处于<code>resolve</code>状态时，返回的<code>Promise</code>实例会变为<code>resolve</code>状态。如果参数中任意一个实例处于<code>reject</code>状态，返回的<code>Promise</code>实例变为<code>reject</code>状态。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.race([p1, p2]).then(function (result) {
  console.log(result); // [ &#39;2.txt&#39;, &#39;2&#39; ]
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-promise-resolve" tabindex="-1"><a class="header-anchor" href="#_7-3-promise-resolve" aria-hidden="true">#</a> 7.3 Promise.resolve</h3><p>返回一个<code>Promise</code>实例，这个实例处于<code>resolve</code>状态。</p></li></ul><p>根据传入的参数不同有不同的功能：</p><ul><li>值(对象、数组、字符串等)：作为<code>resolve</code>传递出去的值</li><li><code>Promise</code>实例：原封不动返回</li></ul><h3 id="_7-4-promise-reject" tabindex="-1"><a class="header-anchor" href="#_7-4-promise-reject" aria-hidden="true">#</a> 7.4 Promise.reject</h3><p>返回一个<code>Promise</code>实例，这个实例处于<code>reject</code>状态。</p><ul><li>参数一般就是抛出的错误信息。</li></ul><h2 id="_8-q" tabindex="-1"><a class="header-anchor" href="#_8-q" aria-hidden="true">#</a> 8. q</h2><p>Q是一个在Javascript中实现promise的模块</p><h3 id="_8-1-q的基本用法" tabindex="-1"><a class="header-anchor" href="#_8-1-q的基本用法" aria-hidden="true">#</a> 8.1 q的基本用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Q = require(&#39;q&#39;);
var fs = require(&#39;fs&#39;);
function read(filename) {
    var deferred = Q.defer();
    fs.readFile(filename,&#39;utf8&#39;, function (err, data) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

read(&#39;1.txt1&#39;).then(function(data){
    console.log(data);
},function(error){
    console.error(error);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-q的简单实现" tabindex="-1"><a class="header-anchor" href="#_8-2-q的简单实现" aria-hidden="true">#</a> 8.2 q的简单实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    defer(){
        var _success,_error;
        return {
            resolve(data){
                _success(data);
            },
            reject(err){
                _error(err);
            },
            promise:{
                then(success,error){
                    _success = success;
                    _error = error;
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-q的实现" tabindex="-1"><a class="header-anchor" href="#_8-3-q的实现" aria-hidden="true">#</a> 8.3 q的实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var defer = function () {
    var pending = [], value;
    return {
        resolve: function (_value) {
            if (pending) {
                value = _value;
                for (var i = 0, ii = pending.length; i &lt; ii; i++) {
                    var callback = pending[i];
                    callback(value);
                }
                pending = undefined;
            }
        },
        promise: {
            then: function (callback) {
                if (pending) {
                    pending.push(callback);
                } else {
                    callback(value);
                }
            }
        }
    };
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-bluebird" tabindex="-1"><a class="header-anchor" href="#_9-bluebird" aria-hidden="true">#</a> 9. bluebird</h2><p>实现 promise 标准的库是功能最全，速度最快的一个库</p><h3 id="_9-1-bluebird经典使用" tabindex="-1"><a class="header-anchor" href="#_9-1-bluebird经典使用" aria-hidden="true">#</a> 9.1 bluebird经典使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Promise = require(&#39;./bluebird&#39;);

var readFile = Promise.promisify(require(&quot;fs&quot;).readFile);
readFile(&quot;1.txt&quot;, &quot;utf8&quot;).then(function(contents) {
    console.log(contents);
})

var fs = Promise.promisifyAll(require(&quot;fs&quot;));

fs.readFileAsync(&quot;1.txt&quot;, &quot;utf8&quot;).then(function (contents) {
    console.log(contents);
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-bluebird简单实现" tabindex="-1"><a class="header-anchor" href="#_9-2-bluebird简单实现" aria-hidden="true">#</a> 9.2 bluebird简单实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    promisify(fn){
        return function () {
            var args = Array.from(arguments);
            return new Promise(function (resolve, reject) {
                fn.apply(null, args.concat(function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(arguments[1])
                    }
                }));
            })
        }
    },
    promisifyAll(obj){
        for(var attr in obj){
            if(obj.hasOwnProperty(attr) &amp;&amp; typeof obj[attr] ==&#39;function&#39;){
                obj[attr+&#39;Async&#39;] = this.promisify(obj[attr]);
            }
        }
        return obj;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-动画" tabindex="-1"><a class="header-anchor" href="#_10-动画" aria-hidden="true">#</a> 10. 动画</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;move&lt;/title&gt;
    &lt;style&gt;
        .square{
            width:40px;
            height:40px;
            border-radius: 50%;
        }
        .square1{
            background-color: red;
        }
        .square2{
            background-color: yellow;
        }
        .square3{
            background-color: blue;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class=&quot;square square1&quot; style=&quot;margin-left: 0&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;square square2&quot; style=&quot;margin-left: 0&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;square square3&quot; style=&quot;margin-left: 0&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;script&gt;
  var square1 = document.querySelector(&#39;.square1&#39;);
  var square2 = document.querySelector(&#39;.square2&#39;);
  var square3 = document.querySelector(&#39;.square3&#39;);

  /*function move(element,target,resolve){
    let timer = setInterval(function(){
      var marginLeft = parseInt(element.style.marginLeft, 10);
      if(marginLeft == target){
        resolve();
      }else{
        element.style.marginLeft = ++marginLeft+&#39;px&#39;;
      }
    },13);
  }*/
  function move(element,target,resolve){
    let current = 0;
    let timer = setInterval(function(){
      element.style.transform=\`translateX(\${++current}px)\`;
      if(current&gt;target){
        clearInterval(timer);
        resolve();
      };
    },13);
  }
  function animate(element,target){
    return new Promise(function(resolve,reject){
      move(element,target,resolve);
    });
  }
  animate(square1,100)
    .then(function(){
      return animate(square2,100);
    })
    .then(function(){
      return animate(square3,100);
    });
&lt;/script&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-co" tabindex="-1"><a class="header-anchor" href="#_11-co" aria-hidden="true">#</a> 11. co</h2><h3 id="_11-1-co初体验" tabindex="-1"><a class="header-anchor" href="#_11-1-co初体验" aria-hidden="true">#</a> 11.1 co初体验</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
function getNumber(){
  return new Promise(function (resolve,reject) {
    setTimeout(function(){
      let number = Math.random();
      if(number &gt;.5){
        resolve(number);
      }else{
        reject(&#39;数字太小&#39;);
      }
    },1000);
  });
}
function *read(){
  let a = yield getNumber();
  console.log(a);
  let b = yield &#39;b&#39;;
  console.log(b);
  let c = yield getNumber();
  console.log(c);
}

function co(gen){
  return new Promise(function(resolve,reject){
    let g = gen();
    function next(lastValue){
      let {done,value} = g.next(lastValue);
      if(done){
         resolve(lastValue);
      }else{
        if(value instanceof Promise){
          value.then(next,function(val){
            reject(val);
          });
        }else{
          next(value);
        }
      }
    }
    next();
  });
}
co(read).then(function(data){
  console.log(data);
},function(reason){
  console.log(reason);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-co连续读文件" tabindex="-1"><a class="header-anchor" href="#_11-2-co连续读文件" aria-hidden="true">#</a> 11.2 co连续读文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs = require(&#39;fs&#39;);
function readFile(filename){
  return new Promise(function (resolve,reject) {
    fs.readFile(filename,&#39;utf8&#39;,function(err,data){
      if(err)
        reject(err);
      else
        resolve(data);
    })
  });
}
function *read(){
  let a = yield readFile(&#39;./1.txt&#39;);
  console.log(a);
  let b = yield readFile(&#39;./2.txt&#39;);
  console.log(b);
}

function co(gen){
  let g = gen();
  function next(val){
    let {done,value} = g.next(val);
    if(!done){
      value.then(next);
    }
  }
  next();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-promise-a-完整实现" tabindex="-1"><a class="header-anchor" href="#_12-promise-a-完整实现" aria-hidden="true">#</a> 12. Promise/A+完整实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Promise(executor) {
  let self = this;
  self.status = &quot;pending&quot;;
  self.value = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject)
    }
    setTimeout(function () { // 异步执行所有的回调函数
      if (self.status == &#39;pending&#39;) {
        self.value = value;
        self.status = &#39;resolved&#39;;
        self.onResolvedCallbacks.forEach(item =&gt; item(value));
      }
    });

  }

  function reject(value) {
    setTimeout(function () {
      if (self.status == &#39;pending&#39;) {
        self.value = value;
        self.status = &#39;rejected&#39;;
        self.onRejectedCallbacks.forEach(item =&gt; item(value));
      }
    });
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError(&#39;循环引用&#39;));
  }
  let then, called;

  if (x != null &amp;&amp; ((typeof x == &#39;object&#39; || typeof x == &#39;function&#39;))) {
    try {
      then = x.then;
      if (typeof then == &#39;function&#39;) {
        then.call(x, function (y) {
          if (called)return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, function (r) {
          if (called)return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called)return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  onFulfilled = typeof onFulfilled == &#39;function&#39; ? onFulfilled : function (value) {
    return value
  };
  onRejected = typeof onRejected == &#39;function&#39; ? onRejected : function (value) {
    throw value
  };
  let promise2;
  if (self.status == &#39;resolved&#39;) {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });

    });
  }
  if (self.status == &#39;rejected&#39;) {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onRejected(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (self.status == &#39;pending&#39;) {
    promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallbacks.push(function (value) {
        try {
          let x = onFulfilled(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallbacks.push(function (value) {
        try {
          let x = onRejected(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  return promise2;
}
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}
Promise.all = function (promises) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let count = 0;
    for (let i = 0; i &lt; promises.length; i++) {
      promises[i].then(function (data) {
        result[i] = data;
        if (++count == promises.length) {
          resolve(result);
        }
      }, function (err) {
        reject(err);
      });
    }
  });
}

Promise.deferred = Promise.defer = function () {
  var defer = {};
  defer.promise = new Promise(function (resolve, reject) {
    defer.resolve = resolve;
    defer.reject = reject;
  })
  return defer;
}
/**
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */
try {
  module.exports = Promise
} catch (e) {
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-资源" tabindex="-1"><a class="header-anchor" href="#_13-资源" aria-hidden="true">#</a> 13. 资源</h2>`,58),t={href:"http://bluebirdjs.com/docs/api-reference.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://liubin.github.io/promises-book/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://segmentfault.com/a/1190000002452115",target:"_blank",rel:"noopener noreferrer"},b={href:"https://promisesaplus.com/",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"_14-作业",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_14-作业","aria-hidden":"true"},"#"),i(" 14.作业")],-1),f=e("p",null,"1.自己实现promise的all、race、resolve和reject方法",-1),p={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},g={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"};function x(_,P){const n=d("ExternalLinkIcon");return r(),a("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[e("a",t,[i("bluebirdAPI"),s(n)])])]),e("li",null,[e("p",null,[e("a",m,[i("JavaScript Promise迷你书(中文版)"),s(n)])])]),e("li",null,[e("p",null,[e("a",o,[i("Promise/A+规范"),s(n)])])]),e("li",null,[e("p",null,[e("a",b,[i("Promise/A+"),s(n)])]),h])]),f,e("p",null,[i("Powered by "),e("a",p,[i("idoc"),s(n)]),i(". Dependence "),e("a",g,[i("Node.js"),s(n)]),i(" run.")])])}const q=l(c,[["render",x],["__file","2.Promise.html.vue"]]);export{q as default};
