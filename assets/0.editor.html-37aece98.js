import{_ as t,E as s,Z as r,$ as l,a0 as e,a1 as a,a2 as i,a5 as d}from"./framework-bcda9434.js";const o={},c=d(`<h2 id="_1-vscode" tabindex="-1"><a class="header-anchor" href="#_1-vscode" aria-hidden="true">#</a> 1. VSCODE</h2><h3 id="_1-1-使用node启动调试" tabindex="-1"><a class="header-anchor" href="#_1-1-使用node启动调试" aria-hidden="true">#</a> 1.1 使用node启动调试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
            &quot;type&quot;: &quot;node&quot;,
            &quot;request&quot;: &quot;launch&quot;,
            &quot;name&quot;: &quot;启动程序&quot;,
            &quot;program&quot;: &quot;E:/cli.js&quot;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={href:"https://cnodejs.org/topic/58f376fec749f63d48fe9548",target:"_blank",rel:"noopener noreferrer"},h=d(`<h3 id="_1-2-保存时自动格式化" tabindex="-1"><a class="header-anchor" href="#_1-2-保存时自动格式化" aria-hidden="true">#</a> 1.2 保存时自动格式化</h3><p>File-&gt;Preferences-&gt;User Settings</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;editor.formatOnType&quot;: false,
  &quot;editor.formatOnSave&quot;: false
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=e("h3",{id:"_1-3-语言改为英文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-语言改为英文","aria-hidden":"true"},"#"),a(" 1.3 语言改为英文")],-1),m=e("p",null,"快捷键Command+Shift+P（Win下为Control）打开命令行工具,输入设置语言，会打开一个locale.json的文件，如下面所示",-1),_={href:"https://go.microsoft.com/fwlink/?LinkId=761051%EF%BC%8C%E4%BA%86%E8%A7%A3%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80%E5%88%97%E8%A1%A8%E3%80%82",target:"_blank",rel:"noopener noreferrer"},b=d(`<h3 id="_1-2-快捷键" tabindex="-1"><a class="header-anchor" href="#_1-2-快捷键" aria-hidden="true">#</a> 1.2 快捷键</h3><ul><li>列选择 alt+shift+左键</li><li>多点编辑 按alt点击左键</li><li>格式化 Alt+shift+f</li></ul><h2 id="_2-mac" tabindex="-1"><a class="header-anchor" href="#_2-mac" aria-hidden="true">#</a> 2.MAC</h2><h3 id="_2-1-杀死进程" tabindex="-1"><a class="header-anchor" href="#_2-1-杀死进程" aria-hidden="true">#</a> 2.1 杀死进程</h3><p>查看进程占用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsof -i tcp:8080 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令会显示占用8080端口的进程，有其 pid ,可以通过pid关掉该进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill pid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-查看端口占用" tabindex="-1"><a class="header-anchor" href="#_2-2-查看端口占用" aria-hidden="true">#</a> 2.2 查看端口占用</h3><h4 id="_2-2-1-lsof" tabindex="-1"><a class="header-anchor" href="#_2-2-1-lsof" aria-hidden="true">#</a> 2.2.1 lsof</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsof -i:port

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsof -i:8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-netstat" tabindex="-1"><a class="header-anchor" href="#_2-2-2-netstat" aria-hidden="true">#</a> 2.2.2 netstat</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -antp | grep port

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -antp | grep 8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),p={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},f={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"};function x(g,q){const n=s("ExternalLinkIcon");return r(),l("div",null,[c,e("ul",null,[e("li",null,[e("p",null,[e("a",u,[a("VSCODE"),i(n)])]),h])]),v,m,e("p",null,[a("{ // 定义 VSCode 的显示语言。 // 请参阅 "),e("a",_,[a("http://go.microsoft.com/fwlink/?LinkId=761051，了解支持的语言列表。"),i(n)]),a(' // 要更改值需要重启 VSCode。 "locale":"zh-CN" } 将locale的值改为en-US之后重启VSCode就恢复到英文版本的了!')]),b,e("p",null,[a("Powered by "),e("a",p,[a("idoc"),i(n)]),a(". Dependence "),e("a",f,[a("Node.js"),i(n)]),a(" run.")])])}const k=t(o,[["render",x],["__file","0.editor.html.vue"]]);export{k as default};