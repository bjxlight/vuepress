const e=JSON.parse('{"key":"v-e2560e76","path":"/posts/apple/0.Async.html","title":"","lang":"en-US","frontmatter":{"description":"1. 异步 所谓\\"异步\\"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。 这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/apple/0.Async.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"1. 异步 所谓\\"异步\\"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。 这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-12T16:34:46.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-05-12T16:34:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-12T16:34:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"1. 异步","slug":"_1-异步","link":"#_1-异步","children":[]},{"level":2,"title":"2.高阶函数","slug":"_2-高阶函数","link":"#_2-高阶函数","children":[{"level":3,"title":"2.1 可以用于批量生成函数","slug":"_2-1-可以用于批量生成函数","link":"#_2-1-可以用于批量生成函数","children":[]},{"level":3,"title":"2.2 可以用于需要调用多次才执行的函数","slug":"_2-2-可以用于需要调用多次才执行的函数","link":"#_2-2-可以用于需要调用多次才执行的函数","children":[]}]},{"level":2,"title":"3. 异步编程的语法目标，就是怎样让它更像同步编程,有以下几种","slug":"_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种","link":"#_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种","children":[]},{"level":2,"title":"4. 回调","slug":"_4-回调","link":"#_4-回调","children":[]},{"level":2,"title":"5 回调的问题","slug":"_5-回调的问题","link":"#_5-回调的问题","children":[{"level":3,"title":"5.1 异常处理","slug":"_5-1-异常处理","link":"#_5-1-异常处理","children":[]}]},{"level":2,"title":"6. 异步流程解决方案","slug":"_6-异步流程解决方案","link":"#_6-异步流程解决方案","children":[{"level":3,"title":"6.1 事件发布/订阅模型","slug":"_6-1-事件发布-订阅模型","link":"#_6-1-事件发布-订阅模型","children":[]},{"level":3,"title":"6.2 哨兵变量","slug":"_6-2-哨兵变量","link":"#_6-2-哨兵变量","children":[]},{"level":3,"title":"6.3 Promise/Deferred模式","slug":"_6-3-promise-deferred模式","link":"#_6-3-promise-deferred模式","children":[]},{"level":3,"title":"6.4 生成器Generators/ yield","slug":"_6-4-生成器generators-yield","link":"#_6-4-生成器generators-yield","children":[]}]},{"level":2,"title":"6.5 Async/ await","slug":"_6-5-async-await","link":"#_6-5-async-await","children":[{"level":3,"title":"6.5.1 Async的优点","slug":"_6-5-1-async的优点","link":"#_6-5-1-async的优点","children":[]},{"level":3,"title":"6.5.2 async 函数的实现","slug":"_6-5-2-async-函数的实现","link":"#_6-5-2-async-函数的实现","children":[]}]}],"git":{"createdTime":1683909286000,"updatedTime":1683909286000,"contributors":[{"name":"ZC","email":"chuzhujun@foxmail.com","commits":1}]},"readingTime":{"minutes":4.61,"words":1383},"filePathRelative":"posts/apple/0.Async.md","localizedDate":"May 12, 2023","excerpt":"<h2> 1. 异步</h2>\\n<ul>\\n<li>所谓\\"异步\\"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。</li>\\n</ul>\\n<figure><img src=\\"http://img.zhufengpeixun.cn/asyncfunc1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。</p>\\n<figure><img src=\\"http://img.zhufengpeixun.cn/syncfunc.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
