import{_ as s,E as l,Z as r,$ as t,a0 as e,a1 as n,a2 as a,a5 as d}from"./framework-bcda9434.js";const c={},v=e("h1",{id:"ecmascript6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ecmascript6","aria-hidden":"true"},"#"),n(" ECMAScript6")],-1),o=e("p",null,"ECMAScript简称就是ES,你可以把它看成是一套标准,JavaScript就是实施了这套标准的一门语言,现在主流浏览器使用的是ECMAScript5。",-1),u={href:"https://babeljs.io/repl",target:"_blank",rel:"noopener noreferrer"},b=d(`<h2 id="_1-作用域变量" tabindex="-1"><a class="header-anchor" href="#_1-作用域变量" aria-hidden="true">#</a> 1. 作用域变量</h2><p>作用域就是一个变量的作用范围。也就是你声明一个变量以后,这个变量可以在什么场合下使用 以前的_JavaScript_只有全局作用域，还有一个函数作用域</p><h3 id="_1-1-var的问题" tabindex="-1"><a class="header-anchor" href="#_1-1-var的问题" aria-hidden="true">#</a> 1.1 var的问题</h3><ol><li><p>var没有块级作用域，定义后在当前闭包中都可以访问，如果变量名重复，就会覆盖前面定义的变量，并且也有可能被其他人更改。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (true) {
     var a = &quot;a&quot;; // 期望a是某一个值
 }
console.log(a);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>var在for循环标记变量共享，一般在循环中使用的i会被共享，其本质上也是由于没有块级作用域造成的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (var i = 0; i &lt; 3; i++) {
     setTimeout(function () {
         alert(i);
     }, 0);
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果 弹窗三次 <code>3</code></p></blockquote></li></ol><h3 id="_1-2-块级作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-块级作用域" aria-hidden="true">#</a> 1.2 块级作用域</h3><p>在用var定义变量的时候，变量是通过闭包进行隔离的，现在用了let，不仅仅可以通过闭包隔离，还增加了一些块级作用域隔离。 块级作用用一组大括号定义一个块,使用 let 定义的变量在大括号的外面是访问不到的</p><h4 id="_1-2-1-实现块级作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-1-实现块级作用域" aria-hidden="true">#</a> 1.2.1 实现块级作用域</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(true){
    let name = &#39;zfpx&#39;;
}
console.log(name);// ReferenceError: name is not defined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-不会污染全局对象" tabindex="-1"><a class="header-anchor" href="#_1-2-2-不会污染全局对象" aria-hidden="true">#</a> 1.2.2 不会污染全局对象</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(true){
    let name = &#39;zfpx&#39;;
}
console.log(window.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果 undefined</p></blockquote><h4 id="_1-2-3-for循环中也可以使用i" tabindex="-1"><a class="header-anchor" href="#_1-2-3-for循环中也可以使用i" aria-hidden="true">#</a> 1.2.3 for循环中也可以使用i</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 嵌套循环不会相互影响
    for (let i = 0; i &lt; 3; i++) {
        console.log(&quot;out&quot;, i);
        for (let i = 0; i &lt; 2; i++) {
            console.log(&quot;in&quot;, i);
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果 out 0 in 0 in 1 out 1 in 0 in 1 out 2 in 0 in 1</p></blockquote><h4 id="_1-2-4-重复定义会报错" tabindex="-1"><a class="header-anchor" href="#_1-2-4-重复定义会报错" aria-hidden="true">#</a> 1.2.4 重复定义会报错</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(true){
    let a = 1;
    let a = 2; //Identifier &#39;a&#39; has already been declared
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-5-不存在变量的预解释" tabindex="-1"><a class="header-anchor" href="#_1-2-5-不存在变量的预解释" aria-hidden="true">#</a> 1.2.5 不存在变量的预解释</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (let i = 0; i &lt; 2; i ++){
    console.log(&#39;inner&#39;,i);
    let i = 100;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果 <strong>i is not defined</strong></p></blockquote><h4 id="_1-2-6-闭包的新写法" tabindex="-1"><a class="header-anchor" href="#_1-2-6-闭包的新写法" aria-hidden="true">#</a> 1.2.6 闭包的新写法</h4><p>以前</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>;(function () {

})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-常量" tabindex="-1"><a class="header-anchor" href="#_2-常量" aria-hidden="true">#</a> 2. 常量</h2><p>使用 <code>const</code>我们可以去声明一个常量，常量一旦赋值就不能再修改了</p><h3 id="_2-1-常量不能重新赋值" tabindex="-1"><a class="header-anchor" href="#_2-1-常量不能重新赋值" aria-hidden="true">#</a> 2.1 常量不能重新赋值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const MY_NAME = &#39;zfpx&#39;;
MY_NAME = &#39;zfpx2&#39;;//Assignment to constant variable

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-变量值可改变" tabindex="-1"><a class="header-anchor" href="#_2-2-变量值可改变" aria-hidden="true">#</a> 2.2 变量值可改变</h3><blockquote><p>注意 <code>const</code>限制的是不能给变量重新赋值，而变量的值本身是可以改变的,下面的操作是可以的</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const names = [&#39;zfpx1&#39;];
names.push(&#39;zfpx2&#39;);
console.log(names);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-不同的块级作用域可以多次定义" tabindex="-1"><a class="header-anchor" href="#_2-3-不同的块级作用域可以多次定义" aria-hidden="true">#</a> 2.3 不同的块级作用域可以多次定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const A = &quot;0&quot;;
{
    const A = &quot;A&quot;;
    console.log(A)
}
{
    const A = &quot;B&quot;;
    console.log(A)
}
console.log(A)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果 A B 0</p></blockquote><h2 id="_3-解构" tabindex="-1"><a class="header-anchor" href="#_3-解构" aria-hidden="true">#</a> 3. 解构</h2><h3 id="_3-1-解析数组" tabindex="-1"><a class="header-anchor" href="#_3-1-解析数组" aria-hidden="true">#</a> 3.1 解析数组</h3><p>解构意思就是分解一个东西的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则赋值过去。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var [name,age] = [&#39;zfpx&#39;,8];
console.log(name,age);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-嵌套赋值" tabindex="-1"><a class="header-anchor" href="#_3-2-嵌套赋值" aria-hidden="true">#</a> 3.2 嵌套赋值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let [x, [y], z] = [1, [2.1, 2.2]];
    console.log(x, y, z);

    let [x, [y,z]] = [1, [2.1, 2.2]];
    console.log(x,y,z);

    let [json,arr,num] = [{name:&#39;zfpx&#39;},[1,2],3];
    console.log(json,arr,num);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>1 2.1 undefined 1 2.1 2.2 { name: &#39;zfpx&#39; } [ 1, 2 ] 3</p></blockquote><h3 id="_3-3-省略赋值" tabindex="-1"><a class="header-anchor" href="#_3-3-省略赋值" aria-hidden="true">#</a> 3.3 省略赋值</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let [, , x] = [1, 2, 3];
console.log(x);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-解构对象" tabindex="-1"><a class="header-anchor" href="#_3-4-解构对象" aria-hidden="true">#</a> 3.4 解构对象</h3><p>对象也可以被解构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {name:&#39;zfpx&#39;,age:8};
//对象里的name属性的值会交给name这个变量，age的值会交给age这个变量
var {name,age} = obj;
//对象里的name属性的值会交给myname这个变量，age的值会交给myage这个变量
let {name: myname, age: myage} = obj;
console.log(name,age,myname,myage);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-默认值" tabindex="-1"><a class="header-anchor" href="#_3-5-默认值" aria-hidden="true">#</a> 3.5 默认值</h3><p>在赋值和传参的时候可以使用默认值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let [a = &quot;a&quot;, b = &quot;b&quot;, c =new Error(&#39;C必须指定&#39;)] = [1, , 3];
console.log(a, b, c);

function ajax (options) {
    var method = options.method || &quot;get&quot;;
    var data = options.data || {};
    //.....
}
function ajax ({method = &quot;get&quot;, data}) {
    console.log(arguments);
}
ajax({
    method: &quot;post&quot;,
    data: {&quot;name&quot;: &quot;zfpx&quot;}
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-字符串" tabindex="-1"><a class="header-anchor" href="#_4-字符串" aria-hidden="true">#</a> 4. 字符串</h2><h3 id="_4-1-模板字符串" tabindex="-1"><a class="header-anchor" href="#_4-1-模板字符串" aria-hidden="true">#</a> 4.1 模板字符串</h3><p>模板字符串用反引号(数字1左边的那个键)包含，其中的变量用 <code>\${}</code>括起来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &#39;zfpx&#39;,age = 8;
let desc = \`\${name} is \${age} old!\`;
console.log(desc);

//所有模板字符串的空格和换行，都是被保留的
var str = \`&lt;ul&gt;
&lt;li&gt;a&lt;/li&gt;
&lt;li&gt;b&lt;/li&gt;
&lt;/ul&gt;\`;
console.log(str);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>其中的变量会用变量的值替换掉</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function replace(desc){
  return desc.replace(/\\$\\{([^}]+)\\}/g,function(matched,key){
    return eval(key);
  });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-带标签的模板字符串" tabindex="-1"><a class="header-anchor" href="#_4-2-带标签的模板字符串" aria-hidden="true">#</a> 4.2 带标签的模板字符串</h3><p>可以在模板字符串的前面添加一个标签，这个标签可以去处理模板字符串 标签其实就是一个函数,函数可以接收两个参数,一个是 <code>strings</code>,就是模板字符串里的每个部分的字符 还有一个参数可以使用 <code>rest</code>的形式 <code>values</code>,这个参数里面是模板字符串里的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &#39;zfpx&#39;,age = 8;
function desc(strings,...values){
    console.log(strings,values);
}
desc\`\${name} is \${age} old!\`;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-字符串新方法" tabindex="-1"><a class="header-anchor" href="#_4-3-字符串新方法" aria-hidden="true">#</a> 4.3 字符串新方法</h3><ul><li>includes()：返回布尔值，表示是否找到了参数字符串。</li><li>startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。</li><li>endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &#39;zfpx&#39;;
s.startsWith(&#39;z&#39;) // true
s.endsWith(&#39;x&#39;) // true
s.includes(&#39;p&#39;) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个参数，表示开始搜索的位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &#39;zfpx&#39;;
console.log(s.startsWith(&#39;p&#39;,2)); // true
console.log(s.endsWith(&#39;f&#39;,2)); // true
console.log(s.includes(&#39;f&#39;,2)); // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束</p></blockquote><h3 id="_4-4-repeat" tabindex="-1"><a class="header-anchor" href="#_4-4-repeat" aria-hidden="true">#</a> 4.4 repeat</h3><p>repeat方法返回一个新字符串，表示将原字符串重复n次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;x&#39;.repeat(3);
&#39;x&#39;.repeat(0);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-函数" tabindex="-1"><a class="header-anchor" href="#_5-函数" aria-hidden="true">#</a> 5. 函数</h2><h3 id="_5-1-默认参数" tabindex="-1"><a class="header-anchor" href="#_5-1-默认参数" aria-hidden="true">#</a> 5.1 默认参数</h3><p>可以给定义的函数接收的参数设置默认的值 在执行这个函数的时候，如果不指定函数的参数的值，就会使用参数的这些默认的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function ajax(url,method=&#39;GET&#39;,dataType=&quot;json&quot;){
  console.log(url);
  console.log(method);
  console.log(dataType);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-展开操作符" tabindex="-1"><a class="header-anchor" href="#_5-2-展开操作符" aria-hidden="true">#</a> 5.2 展开操作符</h3><p>把...放在数组前面可以把一个数组进行展开,可以把一个数组直接传入一个函数而不需要使用 <code>apply</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//传入参数
let print = function(a,b,c){
    console.log(a,b,c);
}
print([1,2,3]);
print(...[1,2,3]);

// 可以替代apply
var m1 = Math.max.apply(null, [8, 9, 4, 1]);
var m2 = Math.max(...[8, 9, 4, 1]);

// 可以替代concat
var arr1 = [1, 3];
var arr2 = [3, 5];
var arr3 = arr1.concat(arr2);
var arr4 = [...arr1, ...arr2];
console.log(arr3,arr4);

//类数组的转数组
function max(a,b,c) {
    console.log(Math.max(...arguments));
}
max(1, 3, 4);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-剩余操作符" tabindex="-1"><a class="header-anchor" href="#_5-3-剩余操作符" aria-hidden="true">#</a> 5.3 剩余操作符</h3><p>剩余操作符可以把其余的参数的值都放到一个叫 <code>b</code>的数组里面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let rest = function(a,...rest){
    console.log(a,rest);
}
rest(1,2,3);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-解构参数" tabindex="-1"><a class="header-anchor" href="#_5-4-解构参数" aria-hidden="true">#</a> 5.4 解构参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let destruct = function({name,age}){
    console.log(name,age);
}
destruct({name:&#39;zfpx&#39;,age:6});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-函数的名字" tabindex="-1"><a class="header-anchor" href="#_5-5-函数的名字" aria-hidden="true">#</a> 5.5 函数的名字</h3><p>ECMAScript 6 给函数添加了一个 <code>name</code>属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var desc = function descname(){}
console.log(desc.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-箭头函数" tabindex="-1"><a class="header-anchor" href="#_5-6-箭头函数" aria-hidden="true">#</a> 5.6 箭头函数</h3><p>箭头函数简化了函数的的定义方式，一般以 &quot;=&gt;&quot; 操作符左边为输入的参数，而右边则是进行的操作以及返回的值 <code>inputs=&gt;output</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,2,3].forEach(val =&gt; console.log(val)););

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输入参数如果多于一个要用()包起来，函数体如果有多条语句需要用{}包起来</p></blockquote><p>箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。 正是因为它没有this，从而避免了this指向的问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = {
    name:&#39;zfpx&#39;,
    getName:function(){
-        setTimeout(function(){console.log(this);},1000); //在浏览器执行的话this指向window
+        setTimeout(() =&gt; console.log(this),1000);//在浏览器执行的话this指向person
    }
}
person.getName();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-数组的新方法" tabindex="-1"><a class="header-anchor" href="#_5-7-数组的新方法" aria-hidden="true">#</a> 5.7 数组的新方法</h3><h4 id="_5-7-1-from" tabindex="-1"><a class="header-anchor" href="#_5-7-1-from" aria-hidden="true">#</a> 5.7.1 from</h4><p>将一个数组或者类数组变成数组,会复制一份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let newArr = Array.from(oldArr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-2-array-of" tabindex="-1"><a class="header-anchor" href="#_5-7-2-array-of" aria-hidden="true">#</a> 5.7.2 Array.of</h4><p>of是为了将一组数值,转换为数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(Array(3), Array(3).length);
console.log(Array.of(3), Array.of(3).length);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-3-copywithin" tabindex="-1"><a class="header-anchor" href="#_5-7-3-copywithin" aria-hidden="true">#</a> 5.7.3 copyWithin</h4><p>Array.prototype.copyWithin(target, start = 0, end = this.length) 覆盖目标的下标 开始的下标 结束的后一个的下标</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].copyWithin(0, 1, 2);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-4-find" tabindex="-1"><a class="header-anchor" href="#_5-7-4-find" aria-hidden="true">#</a> 5.7.4 find</h4><p>查到对应的元素和索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1, 2 ,3, 3, 4, 5];
    let find = arr.find((item, index, arr) =&gt; {
        return item === 3;
    });
    let findIndex = arr.findIndex((item, index, arr) =&gt; {
        return item === 3;
    });

    console.log(find, findIndex);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-5-fill" tabindex="-1"><a class="header-anchor" href="#_5-7-5-fill" aria-hidden="true">#</a> 5.7.5 fill</h4><p>就是填充数组的意思 会更改原数组 Array.prototype.fill(value, start, end = this.length);</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> let arr = [1, 2, 3, 4, 5, 6];
 arr.fill(&#39;a&#39;, 1, 2);
 console.log(arr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-7-5-map" tabindex="-1"><a class="header-anchor" href="#_5-7-5-map" aria-hidden="true">#</a> 5.7.5 map</h4><h4 id="_5-7-6-reduce" tabindex="-1"><a class="header-anchor" href="#_5-7-6-reduce" aria-hidden="true">#</a> 5.7.6 reduce</h4><h4 id="_5-7-7-filter" tabindex="-1"><a class="header-anchor" href="#_5-7-7-filter" aria-hidden="true">#</a> 5.7.7 filter</h4><h4 id="_5-7-8-foreach" tabindex="-1"><a class="header-anchor" href="#_5-7-8-foreach" aria-hidden="true">#</a> 5.7.8 forEach</h4><h2 id="_6-对象" tabindex="-1"><a class="header-anchor" href="#_6-对象" aria-hidden="true">#</a> 6. 对象</h2><h3 id="_6-1-对象字面量" tabindex="-1"><a class="header-anchor" href="#_6-1-对象字面量" aria-hidden="true">#</a> 6.1 对象字面量</h3><p>如果你想在对象里添加跟变量名一样的属性，并且属性的值就是变量表示的值就可以直接在对象里加上这些属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let name = &#39;zfpx&#39;;
let age = 8;
let getName = function(){
    console.log(this.name);
}
let person = {
    name,
    age,
    getName
}
person.getName();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,112),m={id:"_6-2-object-is",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_6-2-object-is","aria-hidden":"true"},"#",-1),p={href:"http://Object.is",target:"_blank",rel:"noopener noreferrer"},g=d(`<p>对比两个值是否相等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(Object.is(NaN,NaN));


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-object-assign" tabindex="-1"><a class="header-anchor" href="#_6-3-object-assign" aria-hidden="true">#</a> 6.3 Object.assign</h3><p>把多个对象的属性复制到一个对象中,第一个参数是复制的对象,从第二个参数开始往后,都是复制的源对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var nameObj = {name:&#39;zfpx&#39;};
var ageObj = {age:8};
var obj = {};
Object.assign(obj,nameObj,ageObj);
console.log(obj);

//克隆对象
function clone (obj) {
  return Object.assign({}, obj);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-object-setprototypeof" tabindex="-1"><a class="header-anchor" href="#_6-4-object-setprototypeof" aria-hidden="true">#</a> 6.4 Object.setPrototypeOf</h3><p>将一个指定的对象的原型设置为另一个对象或者null</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj1  = {name:&#39;zfpx1&#39;};
var obj2 =  {name:&#39;zfpx2&#39;};
var obj = {};
Object.setPrototypeOf(obj,obj1);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj,obj2);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-proto" tabindex="-1"><a class="header-anchor" href="#_6-5-proto" aria-hidden="true">#</a> 6.5 proto</h3><p>直接在对象表达式中设置prototype</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj1  = {name:&#39;zfpx1&#39;};
var obj3 = {
    __proto__:obj1
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-super" tabindex="-1"><a class="header-anchor" href="#_6-6-super" aria-hidden="true">#</a> 6.6 super</h3><p>通过super可以调用prototype上的属性或方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let person ={
    eat(){
        return &#39;milk&#39;;
    }
}
let student = {
    __proto__:person,
    eat(){
        return super.eat()+&#39; bread&#39;
    }
}
console.log(student.eat());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-类" tabindex="-1"><a class="header-anchor" href="#_7-类" aria-hidden="true">#</a> 7. 类</h2><h3 id="_7-1-class" tabindex="-1"><a class="header-anchor" href="#_7-1-class" aria-hidden="true">#</a> 7.1 class</h3><p>使用 <code>class</code>这个关键词定义一个类,基于这个类创建实例以后会自动执行 <code>constructor</code>方法,此方法可以用来初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
let person = new Person(&#39;zfpx&#39;);
person.getName();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-get与set" tabindex="-1"><a class="header-anchor" href="#_7-2-get与set" aria-hidden="true">#</a> 7.2 get与set</h3><p><code>getter</code>可以用来得获取属性，<code>setter</code>可以去设置属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person {
    constructor(){
        this.hobbies = [];
    }
    set hobby(hobby){
        this.hobbies.push(hobby);
    }
    get hobby(){
        return this.hobbies;
    }
}
let person = new Person();
person.hobby = &#39;basketball&#39;;
person.hobby = &#39;football&#39;;
console.log(person.hobby);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-静态方法-static" tabindex="-1"><a class="header-anchor" href="#_7-3-静态方法-static" aria-hidden="true">#</a> 7.3 静态方法-static</h3><p>在类里面添加静态的方法可以使用 <code>static</code>这个关键词，静态方法就是不需要实例化类就能使用的方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person {
   static add(a,b){
       return a+b;
   }
}
console.log(Person.add(1,2));


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-继承extends" tabindex="-1"><a class="header-anchor" href="#_7-4-继承extends" aria-hidden="true">#</a> 7.4 继承extends</h3><p>一个类可以去继承其它的类里的东西</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person {
   constructor(name){
     this.name = name;
   }
}
class Teacher extends Person{
    constructor(name,age){
        super(name);
        this.age = age;
    }
}
var teacher = new Teacher(&#39;zfpx&#39;,8);
console.log(teacher.name,teacher.age);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-生成器-generator-与迭代器-iterator" tabindex="-1"><a class="header-anchor" href="#_8-生成器-generator-与迭代器-iterator" aria-hidden="true">#</a> 8.生成器(Generator)与迭代器(Iterator)</h2><p>Generator是一个特殊的函数，执行它会返回一个Iterator对象。 通过遍历迭代器， <code>Generator</code>函数运行后会返回一个遍历器对象，而不是普通函数的返回值。</p><h3 id="_8-1-iterators模拟" tabindex="-1"><a class="header-anchor" href="#_8-1-iterators模拟" aria-hidden="true">#</a> 8.1 Iterators模拟</h3><p>迭代器有一个next方法，每次执行的时候会返回一个对象 对象里面有两个属性，一个是 <code>value</code>表示返回的值，还有就是布尔值 <code>done</code>,表示是否迭代完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function buy(books) {
    let i = 0;
    return {
        next(){
            let done = i == books.length;
            let value = !done ? books[i++] : undefined;
            return {
                value: value,
                done: done
            }
        }
    }
}

let iterators = buy([&#39;js&#39;, &#39;html&#39;]);
var curr;
do {
    curr = iterators.next();
    console.log(curr);
} while (!curr.done);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-generators" tabindex="-1"><a class="header-anchor" href="#_8-2-generators" aria-hidden="true">#</a> 8.2 Generators</h3><p>生成器用于创建迭代器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* buy(books){
    for(var i=0;i&lt;books.length;i++){
        yield books[i];
    }
}
let buying = buy([&#39;js&#39;,&#39;html&#39;]);
var curr;
do {
    curr = buying.next();
    console.log(curr);
} while (!curr.done);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-集合" tabindex="-1"><a class="header-anchor" href="#_9-集合" aria-hidden="true">#</a> 9.集合</h2><h3 id="_9-1-set" tabindex="-1"><a class="header-anchor" href="#_9-1-set" aria-hidden="true">#</a> 9.1 Set</h3><p>一个 <code>Set</code>是一堆东西的集合,<code>Set</code>有点像数组,不过跟数组不一样的是，<code>Set</code>里面不能有重复的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var books = new Set();
books.add(&#39;js&#39;);
books.add(&#39;js&#39;);//添加重复元素集合的元素个数不会改变
books.add(&#39;html&#39;);
books.forEach(function(book){//循环集合
    console.log(book);
})
console.log(books.size);//集合中元数的个数
console.log(books.has(&#39;js&#39;));//判断集合中是否有此元素
books.delete(&#39;js&#39;);//从集合中删除此元素
console.log(books.size);
console.log(books.has(&#39;js&#39;));
books.clear();//清空 set
console.log(books.size);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-map" tabindex="-1"><a class="header-anchor" href="#_9-2-map" aria-hidden="true">#</a> 9.2 Map</h3><p>可以使用 Map 来组织这种名值对的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var books = new Map();
books.set(&#39;js&#39;,{name:&#39;js&#39;});//向map中添加元素
books.set(&#39;html&#39;,{name:&#39;html&#39;});
console.log(books.size);//查看集合中的元素
console.log(books.get(&#39;js&#39;));//通过key获取值
books.delete(&#39;js&#39;);//执照key删除元素
console.log(books.has(&#39;js&#39;));//判断map中有没有key
books.forEach((value, key) =&gt; { //forEach可以迭代map
    console.log( key + &#39; = &#39; + value);
});
books.clear();//清空map

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-模块" tabindex="-1"><a class="header-anchor" href="#_10-模块" aria-hidden="true">#</a> 10.模块</h2><p>可以根据应用的需求把代码分成不同的模块 每个模块里可以导出它需要让其它模块使用的东西 在其它模块里面可以导入这些模块导出的东西</p><h3 id="_10-1-模块" tabindex="-1"><a class="header-anchor" href="#_10-1-模块" aria-hidden="true">#</a> 10.1 模块</h3><p>在浏览器中使用模块需要借助 导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export var name = &#39;zfpx&#39;;
export var age = 8;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//import {name,age} from &#39;./school.js&#39;;
import * as school from &#39;./school.js&#39;;
console.log(school.name,school.age);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面中引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;https://google.github.io/traceur-compiler/bin/traceur.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://google.github.io/traceur-compiler/bin/BrowserSystem.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://google.github.io/traceur-compiler/src/bootstrap.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;module&quot; src=&quot;index.js&quot;&gt;&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-重命名" tabindex="-1"><a class="header-anchor" href="#_10-2-重命名" aria-hidden="true">#</a> 10.2 重命名</h3><p>导出时重命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function say(){
    console.log(&#39;say&#39;);
}
export {say as say2};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入时重命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {say2 as say3} from &#39;./school.js&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-默认导出" tabindex="-1"><a class="header-anchor" href="#_10-3-默认导出" aria-hidden="true">#</a> 10.3 默认导出</h3><p>每个模块都可以有一个默认要导出的东西 导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function say(){
    console.log(&#39;say&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import say from &#39;./school.js&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-深度克隆" tabindex="-1"><a class="header-anchor" href="#_11-深度克隆" aria-hidden="true">#</a> 11 深度克隆</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var parent = {
  age: 5,
  hobby: [1, 2, 3],
  home: {city: &#39;北京&#39;},
};

var child = extendDeep(parent);
child.age = 6;
child.hobby.push(&#39;4&#39;);
child.home.city = &#39;广东&#39;;
console.log(&#39;child &#39;, child); //[1, 2, 3, 4]
console.log(&#39;parent &#39;, parent);
function extend(parent) {
  let child;
  if (Object.prototype.toString.call(parent) == &#39;[object Object]&#39;) {
    child = {};
    for (let key in parent) {
      child[key] = extend(parent[key])
    }
  } else if (Object.prototype.toString.call(parent) == &#39;[object Array]&#39;) {
    child = parent.map(item =&gt; extend(item));
  } else {
    return parent;
  }
  return child;
}

function extendDeep(parent, child) {
  child = child || {};
  for (var key in parent) {
    if (typeof parent[key] === &quot;object&quot;) {
      child[key] = (Object.prototype.toString.call(parent[key]) === &quot;[object Array]&quot;) ? [] : {};
      extendDeep(parent[key], child[key]);
    } else {
      child[key] = parent[key];
    }
  }
  return child;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2><ol><li>自己实现一个跟原来默认功能一样的标签字符串方法</li></ol>`,65),x={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},f={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"};function _(y,j){const i=l("ExternalLinkIcon");return r(),t("div",null,[v,o,e("p",null,[e("a",u,[n("http://babeljs.io/repl"),a(i)])]),b,e("h3",m,[h,n(" 6.2 "),e("a",p,[n("Object.is"),a(i)])]),g,e("p",null,[n("Powered by "),e("a",x,[n("idoc"),a(i)]),n(". Dependence "),e("a",f,[n("Node.js"),a(i)]),n(" run.")])])}const q=s(c,[["render",_],["__file","5.html.vue"]]);export{q as default};
