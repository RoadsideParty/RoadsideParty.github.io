import{_ as i,c as s,a3 as t,o as e}from"./chunks/framework.DtMx7FFi.js";const c=JSON.parse('{"title":"other","description":"","frontmatter":{},"headers":[],"relativePath":"other/index.md","filePath":"other/index.md","lastUpdated":1737711049000}'),l={name:"other/index.md"};function n(h,a,p,r,o,k){return e(),s("div",null,a[0]||(a[0]=[t(`<h1 id="other" tabindex="-1">other <a class="header-anchor" href="#other" aria-label="Permalink to &quot;other&quot;">​</a></h1><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><h3 id="版本控制符" tabindex="-1">版本控制符 <a class="header-anchor" href="#版本控制符" aria-label="Permalink to &quot;版本控制符&quot;">​</a></h3><ul><li>^：兼容当前主版本，允许安装最新的次版本和补丁版本。</li><li>~：兼容当前次版本，允许安装最新的补丁版本。</li><li>没有符号：锁定特定版本。</li><li>*：安装任何版本。</li><li>范围符号（&gt;=, &lt;=, &lt;, &gt;）：指定版本的范围。</li><li>latest：安装最新版本。</li><li>next：安装下一个预发布版本。</li></ul><h2 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h2><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h3><p>如果代理端口是:7897</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 开启代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--global] http.proxy 127.0.0.1:7897</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--global] https.proxy 127.0.0.1:7897</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关闭代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--global] --unset http.proxy 127.0.0.1:7897</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--global] --unset https.proxy 127.0.0.1:7897</span></span></code></pre></div>`,8)]))}const g=i(l,[["render",n]]);export{c as __pageData,g as default};