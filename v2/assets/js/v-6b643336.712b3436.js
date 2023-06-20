"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[406],{493:function(a,t,n){n.r(t),n.d(t,{data:function(){return s}});const s=JSON.parse('{"key":"v-6b643336","path":"/zh/api/cropper-grid.html","title":"CropperGrid","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"基本","slug":"基本","link":"#基本","children":[]},{"level":3,"title":"自定义行和列","slug":"自定义行和列","link":"#自定义行和列","children":[]},{"level":3,"title":"在 CropperCanvas 中","slug":"在-croppercanvas-中","link":"#在-croppercanvas-中","children":[]},{"level":3,"title":"在 CropperSelection 中","slug":"在-cropperselection-中","link":"#在-cropperselection-中","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"git":{"updatedTime":1670149517000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"zh/api/cropper-grid.md"}')},3790:function(a,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(6252);const e=(0,s.uE)('<h1 id="croppergrid" tabindex="-1"><a class="header-anchor" href="#croppergrid" aria-hidden="true">#</a> CropperGrid</h1><p><code>CropperGrid</code> 接口提供了用于操作 <code>&lt;cropper-grid&gt;</code> 元素的布局和表示的属性和方法。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>',4),c=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-grid")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-grid")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),o=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s.Uk)("此元素的默认高度为 "),(0,s._)("code",null,"0"),(0,s.Uk)("。")])],-1),l=(0,s._)("h3",{id:"自定义行和列",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#自定义行和列","aria-hidden":"true"},"#"),(0,s.Uk)(" 自定义行和列")],-1),p=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-grid")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"rows"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("4"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"columns"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("18"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"theme-color"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("#39f"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token special-attr"},[(0,s._)("span",{class:"token attr-name"},"style"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s._)("span",{class:"token value css language-css"},[(0,s._)("span",{class:"token property"},"height"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 10rem"),(0,s._)("span",{class:"token punctuation"},";")]),(0,s._)("span",{class:"token punctuation"},'"')])]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-grid")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),r=(0,s._)("h3",{id:"在-croppercanvas-中",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#在-croppercanvas-中","aria-hidden":"true"},"#"),(0,s.Uk)(" 在 CropperCanvas 中")],-1),u=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-canvas")]),(0,s.Uk)(),(0,s._)("span",{class:"token special-attr"},[(0,s._)("span",{class:"token attr-name"},"style"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s._)("span",{class:"token value css language-css"},[(0,s._)("span",{class:"token property"},"background-color"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" #39f"),(0,s._)("span",{class:"token punctuation"},";")]),(0,s._)("span",{class:"token punctuation"},'"')])]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-grid")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"bordered"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"covered"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-grid")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-canvas")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),d=(0,s._)("h3",{id:"在-cropperselection-中",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#在-cropperselection-中","aria-hidden":"true"},"#"),(0,s.Uk)(" 在 CropperSelection 中")],-1),k=(0,s._)("div",{class:"language-html","data-ext":"html"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-selection")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"width"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("160"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"height"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("90"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token special-attr"},[(0,s._)("span",{class:"token attr-name"},"style"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s._)("span",{class:"token value css language-css"},[(0,s._)("span",{class:"token property"},"background-color"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" #39f"),(0,s._)("span",{class:"token punctuation"},";")]),(0,s._)("span",{class:"token punctuation"},'"')])]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("cropper-grid")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"bordered"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"covered"),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-grid")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("cropper-selection")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),i=(0,s._)("h2",{id:"属性",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),(0,s.Uk)(" 属性")],-1),_=(0,s._)("code",null,"CropperElement",-1),h=(0,s.uE)('<table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>可选值</th><th>描述</th></tr></thead><tbody><tr><td>rows</td><td><code>number</code></td><td><code>3</code></td><td>-</td><td>指示行的数量。</td></tr><tr><td>columns</td><td><code>number</code></td><td><code>3</code></td><td>-</td><td>指示列的数量。</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否有边框。</td></tr><tr><td>covered</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否覆盖其父元素。</td></tr><tr><td>slottable</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否启用默认插槽。</td></tr><tr><td>themeColor</td><td><code>string</code></td><td><code>&quot;rgba(238, 238, 238, 0.5)&quot;</code></td><td>-</td><td>指示元素的颜色。</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>此元素中没有可用的插槽。</p><blockquote><p>你可以通过将 <code>slottable</code> 属性设置为 <code>true</code> 来启用默认插槽：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-grid</span> <span class="token attr-name">slottable</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-grid</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></blockquote>',4),g={};var m=(0,n(3744).Z)(g,[["render",function(a,t){const n=(0,s.up)("LiveDemo"),g=(0,s.up)("ClientOnly"),m=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[e,(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[c])),_:1})])),_:1}),o,l,(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[p])),_:1})])),_:1}),r,(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[u])),_:1})])),_:1}),d,(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[k])),_:1})])),_:1}),i,(0,s._)("p",null,[(0,s.Uk)("从其父级 "),(0,s.Wm)(m,{to:"/zh/api/cropper-element.html"},{default:(0,s.w5)((()=>[_])),_:1}),(0,s.Uk)(" 继承属性，并实现以下属性：")]),h])}]])}}]);