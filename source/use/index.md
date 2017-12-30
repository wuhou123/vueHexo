---
title: 文档中心
date: 2017-12-21 14:28:36
---
###### 文档说明：文档集中管理，关于业务文档需要sig密码
{% raw %}
<div id="app">
<h6>一、js生成sig工具<span v-text="showText" @click="changeShow" style="color:#fb0707;cursor:pointer"><span>:</h6>
<div v-show="isShow">
<label class="setLabel">输入secret_key：</label>
<input type="text" v-model="use_key" class="setInput"/><br/>
<label class="setLabel">输入拼接url：</label>
<input type="text" v-model="use_text" class="setInput"/>
<button @click="commit" class="use_submit">生成</button>
<div><span class="setFontColor">参数数组key排序处理后字符串：</span>{{getStr}}</div>
<div><span class="setFontColor">md5生成sig参数：</span>{{sigStr}}</div>
</div>
<h6>二、工具说明<span v-text="showText" @click="changeShow" style="color:#fb0707;cursor:pointer"><span>：</h6>
<div v-show="isShow">
<p>1.本例secret_key：2dd481587a5902fa4cfc016a9872041a</p>
<p>2.本例拼接参数url：http:123.com?app_id=500558827&start_date=2017-12-05&end_date=2017-12-06&idx=pv</p>
<p>3.最终生成md5加密sig参数：fa2c8c326a7108a6e9b1f6d27b4249cc</p>
<p>4.参照示例输入即可生成sig参数</p>
</div>
<h6>三、文档列表：</h6>
<div style="overflow:hidden;zoom:1;color:#428bca">
	<div class="use_left">
		<div>一般文档：</div>
		<ul>
			<li v-for="(item,index) in normalItems"><a :href="item.href" target="_blank">{{item.name}}</a></li>
		</ul>
	</div>
	<div class="use_right">
		<div>业务文档：</div>
		<ul>
			<li v-for="(item,index) in items" @click="showPage(index)"><a href="javascript:void(0)" :id="'right'+index">{{item.name}}</a></li>
		</ul>
	</div>
</div>

</div>
<script src="../js/static/lib/vue.js"></script>
<script src="http://cdn.bootcss.com/blueimp-md5/1.1.0/js/md5.js"></script>
<script src="../js/static/use.js"></script>

{% endraw %}


