import{_ as n,o as s,c as a,a as e}from"./app.46a536f5.js";const t={},p=e(`<h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2><ol><li>每个 promise 有三个状态，pending ,fulfilled,rejected,</li><li>每个 promise 需要有一个 then 方法，传入两个参数，一个成功的回调，一个失败的回调</li><li>new promise 会立即执行</li><li>一旦成功就不能失败，反之则不能成功</li><li>当 promise 抛出异常后会进入失败态</li></ol><ul><li><p>promise 是支持链式调用的</p><ol><li>无论成功还是塞拜，都可以返回结果。（1.出错了走失败的回调，2.返回一个普通值走陈工的回调。3.返回 promise。用 promise 解析后的结果传递给下一个）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="参考-promise-a-规范" tabindex="-1"><a class="header-anchor" href="#参考-promise-a-规范" aria-hidden="true">#</a> 参考 promise A+规范</h3>`,4),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","node.html.vue"]]);export{u as default};
