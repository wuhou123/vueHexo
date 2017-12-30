console.log('use初始化')
var vm = new Vue({
    el:'#app',
    data:{
    	isShow:false,
    	showText:'(点击展开+)',
    	use_key:'2dd481587a5902fa4cfc016a9872041a',
    	getStr:'',
    	use_text:'http:123.com?app_id=500558827&start_date=2017-12-05&end_date=2017-12-06&idx=pv',
    	sigStr:'',
    	md5:true,
    	items:[{
    		name:'app instruction',
    		url:'http://wuhou123.gitee.io/canvas/'
    	},
    	{
    		name:'test2',    		
			url:'http://wuhou123.gitee.io/'
    	}],
    	normalItems:[{
    		name:'mui-vue2说明文档',
    		href:'http://wuhou123.gitee.io/canvas/mui-vue2/'
    	}]
    },
    mounted:function(){
		var params = {
			app_id:500558827,
			start_date:"2017-12-05",
			end_date:"2017-12-06",
			idx:"pv"
		}
		console.log(this.getNowFormatDate())
    },
    methods:{
    	showPage:function(index){
    		console.log(index);
    		var mima = prompt('请输入密码：');
    		if(mima){
    			console.log()
	    		if(md5(this.getNowFormatDate())==md5(mima)){
	    			var page = document.getElementById('right'+index);
	    			page.href = this.items[index].url
	    		}    			
    		}

    	},
    	commit:function(){
    		if(this.use_text==''){
    			alert('请输入url')
    			return;
    		}
    		if(this.use_key==""){
    			alert('secret_key')
    			return;
    		}
    		//生成
		this.sigStr = md5(this.objKeySort(this.parseQueryString(this.use_text)))
		this.getStr = this.objKeySort(this.parseQueryString(this.use_text))
    	},
    	parseQueryString: function (url) {
			 var reg_url = /^[^\?]+\?([\w\W]+)$/,
			  reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
			  arr_url = reg_url.exec(url),
			  ret = {};
			 if (arr_url && arr_url[1]) {
			  var str_para = arr_url[1], result;
			  while ((result = reg_para.exec(str_para)) != null) {
			   ret[result[1]] = result[2];
			  }
			 }
			 return ret;
},
		objKeySort:function(obj){
			var sec = this.use_key;
			var newkey = Object.keys(obj).sort();
			var newObj = '';
			for(var i = 0;i<newkey.length;i++){
				sec=sec+(newkey[i]+'='+obj[newkey[i]])
			}
			return sec
},
		getNowFormatDate:function() {
		    var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//		            + " " + date.getHours() + seperator2 + date.getMinutes()
//		            + seperator2 + date.getSeconds();
		    return currentdate;
},
		changeShow:function(){
			this.isShow = !this.isShow;
			if(this.isShow) this.showText = '(点击收起-)';
			if(!this.isShow) this.showText = '(点击展开+)';
		}
    }
})