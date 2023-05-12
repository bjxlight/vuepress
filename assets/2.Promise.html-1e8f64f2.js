const e=JSON.parse('{"key":"v-58f086c4","path":"/posts/apple/2.Promise.html","title":"","lang":"en-US","frontmatter":{"description":"1. 异步回调 1.1 回调地狱 在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱 1.2 并行结果 如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间 2. Promise Promise本意是承诺，在程序中的意思就是承诺我过一段时间后会给你一个结果。 什么时候会用到过一段时间？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress/posts/apple/2.Promise.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"1. 异步回调 1.1 回调地狱 在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱 1.2 并行结果 如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间 2. Promise Promise本意是承诺，在程序中的意思就是承诺我过一段时间后会给你一个结果。 什么时候会用到过一段时间？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-12T16:49:35.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-05-12T16:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-12T16:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"1. 异步回调","slug":"_1-异步回调","link":"#_1-异步回调","children":[{"level":3,"title":"1.1 回调地狱","slug":"_1-1-回调地狱","link":"#_1-1-回调地狱","children":[]},{"level":3,"title":"1.2 并行结果","slug":"_1-2-并行结果","link":"#_1-2-并行结果","children":[]}]},{"level":2,"title":"2. Promise","slug":"_2-promise","link":"#_2-promise","children":[]},{"level":2,"title":"3. Promise的三种状态","slug":"_3-promise的三种状态","link":"#_3-promise的三种状态","children":[]},{"level":2,"title":"4. 构造一个Promise","slug":"_4-构造一个promise","link":"#_4-构造一个promise","children":[{"level":3,"title":"4.1 使用Promise","slug":"_4-1-使用promise","link":"#_4-1-使用promise","children":[]},{"level":3,"title":"4.2 es5模拟Promise","slug":"_4-2-es5模拟promise","link":"#_4-2-es5模拟promise","children":[]},{"level":3,"title":"4.3 es6模拟Promise","slug":"_4-3-es6模拟promise","link":"#_4-3-es6模拟promise","children":[]}]},{"level":2,"title":"5. promise 做为函数的返回值","slug":"_5-promise-做为函数的返回值","link":"#_5-promise-做为函数的返回值","children":[]},{"level":2,"title":"6.promise的链式调用","slug":"_6-promise的链式调用","link":"#_6-promise的链式调用","children":[]},{"level":2,"title":"7.promise API","slug":"_7-promise-api","link":"#_7-promise-api","children":[{"level":3,"title":"7.1 Promise.all","slug":"_7-1-promise-all","link":"#_7-1-promise-all","children":[]},{"level":3,"title":"7.2 Promise.race","slug":"_7-2-promise-race","link":"#_7-2-promise-race","children":[]},{"level":3,"title":"7.4 Promise.reject","slug":"_7-4-promise-reject","link":"#_7-4-promise-reject","children":[]}]},{"level":2,"title":"8. q","slug":"_8-q","link":"#_8-q","children":[{"level":3,"title":"8.1 q的基本用法","slug":"_8-1-q的基本用法","link":"#_8-1-q的基本用法","children":[]},{"level":3,"title":"8.2 q的简单实现","slug":"_8-2-q的简单实现","link":"#_8-2-q的简单实现","children":[]},{"level":3,"title":"8.3 q的实现","slug":"_8-3-q的实现","link":"#_8-3-q的实现","children":[]}]},{"level":2,"title":"9. bluebird","slug":"_9-bluebird","link":"#_9-bluebird","children":[{"level":3,"title":"9.1 bluebird经典使用","slug":"_9-1-bluebird经典使用","link":"#_9-1-bluebird经典使用","children":[]},{"level":3,"title":"9.2 bluebird简单实现","slug":"_9-2-bluebird简单实现","link":"#_9-2-bluebird简单实现","children":[]}]},{"level":2,"title":"10. 动画","slug":"_10-动画","link":"#_10-动画","children":[]},{"level":2,"title":"11. co","slug":"_11-co","link":"#_11-co","children":[{"level":3,"title":"11.1 co初体验","slug":"_11-1-co初体验","link":"#_11-1-co初体验","children":[]},{"level":3,"title":"11.2 co连续读文件","slug":"_11-2-co连续读文件","link":"#_11-2-co连续读文件","children":[]}]},{"level":2,"title":"12. Promise/A+完整实现","slug":"_12-promise-a-完整实现","link":"#_12-promise-a-完整实现","children":[]},{"level":2,"title":"13. 资源","slug":"_13-资源","link":"#_13-资源","children":[]}],"git":{"createdTime":1683910175000,"updatedTime":1683910175000,"contributors":[{"name":"nujuhzuhc","email":"chuzhujun@foxmail.com","commits":1}]},"readingTime":{"minutes":6.87,"words":2061},"filePathRelative":"posts/apple/2.Promise.md","localizedDate":"May 12, 2023","excerpt":"<h2> 1. 异步回调</h2>\\n<h3> 1.1 回调地狱</h3>\\n<p>在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱</p>\\n<h3> 1.2 并行结果</h3>\\n<p>如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间</p>\\n<h2> 2. Promise</h2>\\n<p>Promise本意是承诺，在程序中的意思就是承诺我<strong>过一段时间后</strong>会给你一个结果。 什么时候会用到<strong>过一段时间</strong>？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等 <img src=\\"http://7xjf2l.com1.z0.glb.clouddn.com/zhufengpromise.png\\" alt=\\"\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};