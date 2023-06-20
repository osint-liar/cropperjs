"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[623],{2632:function(a,t,n){n.r(t),n.d(t,{data:function(){return s}});const s=JSON.parse('{"key":"v-74fcbd6e","path":"/zh/api/cropper-shade.html","title":"CropperShade","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"基本","slug":"基本","link":"#基本","children":[]},{"level":3,"title":"指定位置和大小","slug":"指定位置和大小","link":"#指定位置和大小","children":[]},{"level":3,"title":"自定义颜色","slug":"自定义颜色","link":"#自定义颜色","children":[]},{"level":3,"title":"当指针按下/松开时动态切换可见性","slug":"当指针按下-松开时动态切换可见性","link":"#当指针按下-松开时动态切换可见性","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"$change","slug":"change","link":"#change","children":[]},{"level":3,"title":"$reset","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"$render","slug":"render","link":"#render","children":[]}]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"git":{"updatedTime":1670149517000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"zh/api/cropper-shade.md"}')},906:function(a,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(6252);const e=(0,s.uE)('<h1 id="croppershade" tabindex="-1"><a class="header-anchor" href="#croppershade" aria-hidden="true">#</a> CropperShade</h1><p><code>CropperShade</code> 接口提供了用于操作 <code>&lt;cropper-shade&gt;</code> 元素的布局和表示的属性和方法。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>',4),l=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-shade")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-shade")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),c=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s.Uk)("此元素的默认宽度和高度为 "),(0,s._)("code",null,"0"),(0,s.Uk)("。")])],-1),o=(0,s._)("h3",{id:"指定位置和大小",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#指定位置和大小","aria-hidden":"true"},"#"),(0,s.Uk)(" 指定位置和大小")],-1),p=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-canvas")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"background"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-shade")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"x"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("265"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"y"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("5"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"width"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("160"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"height"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("90"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-shade")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-canvas")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),u=(0,s._)("h3",{id:"自定义颜色",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#自定义颜色","aria-hidden":"true"},"#"),(0,s.Uk)(" 自定义颜色")],-1),r=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-canvas")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"background"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-shade")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"x"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("265"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"y"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("5"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"width"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("160"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"height"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("90"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"theme-color"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("rgba(0, 0, 0, 0.35)"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-shade")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-canvas")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),i=(0,s._)("h3",{id:"当指针按下-松开时动态切换可见性",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#当指针按下-松开时动态切换可见性","aria-hidden":"true"},"#"),(0,s.Uk)(" 当指针按下/松开时动态切换可见性")],-1),d=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-canvas")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"background"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-image")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"src"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("/cropperjs/v2/picture.jpg"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"alt"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("Picture"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-image")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-shade")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"hidden"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-shade")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-handle")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"action"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("select"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"plain"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-handle")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-selection")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"movable"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"resizable"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"zoomable"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"hidden"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-handle")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"action"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("move"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"plain"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-handle")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-selection")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-canvas")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),k=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s._)("code",null,"<cropper-shade>"),(0,s.Uk)(" 元素将自动同步当前活动的 "),(0,s._)("code",null,"<cropper-selection>"),(0,s.Uk)(" 元素的位置和大小。")])],-1),_={class:"custom-container tip"},h=(0,s._)("p",{class:"custom-container-title"},"提示",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/hidden",target:"_blank",rel:"noopener noreferrer"},m=(0,s._)("code",null,"hidden",-1),U=(0,s._)("h2",{id:"属性",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),(0,s.Uk)(" 属性")],-1),v=(0,s._)("code",null,"CropperElement",-1),b=(0,s.uE)('<table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>可选值</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的 x 轴坐标。</td></tr><tr><td>y</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的 y 轴坐标。</td></tr><tr><td>width</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的宽度。</td></tr><tr><td>height</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的高度。</td></tr><tr><td>slottable</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否启用默认插槽。</td></tr><tr><td>themeColor</td><td><code>string</code></td><td><code>&quot;rgba(0, 0, 0, 0.65)&quot;</code></td><td>-</td><td>指示此元素的颜色。</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change" aria-hidden="true">#</a> $change</h3><ul><li><strong>语法</strong>： <ul><li><code>$change(x, y)</code></li><li><code>$change(x, y, width, height)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的新位置。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的新位置。</li></ul></li><li><code>width</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>this.width</code></li><li>新宽度。</li></ul></li><li><code>height</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>this.height</code></li><li>新高度。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>用于链接的元素实例。</li></ul></li></ul><p>变更阴影的位置和/或大小。</p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> $reset</h3><ul><li><strong>语法</strong>：<code>$reset()</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>元素实例。</li></ul></li></ul><p>将阴影重置为其初始位置和大小。</p><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> $render</h3><ul><li><strong>语法</strong>：<code>$render()</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>元素实例。</li></ul></li></ul><p>刷新阴影的位置或大小。</p><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>此元素中只有一个默认插槽。</p><blockquote><p>你可以通过将 <code>slottable</code> 属性设置为 <code>false</code> 来禁用它：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-shade</span> <span class="token attr-name">slottable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-shade</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></blockquote>',14),f={};var x=(0,n(3744).Z)(f,[["render",function(a,t){const n=(0,s.up)("LiveDemo"),f=(0,s.up)("ClientOnly"),x=(0,s.up)("ExternalLinkIcon"),q=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[e,(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[l])),_:1})])),_:1}),c,o,(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[p])),_:1})])),_:1}),u,(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[r])),_:1})])),_:1}),i,(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[d])),_:1})])),_:1}),k,(0,s._)("div",_,[h,(0,s._)("p",null,[(0,s._)("a",g,[m,(0,s.Wm)(x)]),(0,s.Uk)(" 属性是原生全局属性。")])]),U,(0,s._)("p",null,[(0,s.Uk)("从其父级 "),(0,s.Wm)(q,{to:"/zh/api/cropper-element.html"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Uk)(" 继承属性，并实现以下属性：")]),b])}]])}}]);