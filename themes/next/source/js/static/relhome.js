        console.log('初始化')
var vm = new Vue({
    el:'#app',
    data:{
        changeType:0,
        getUrl:'http://www.iqiyi.com/v_19rr8fp85k.html?fc=87bbded392d221f5',
        setUrl:['http://jx.vgoodapi.com/jx.php?url=','http://www.wmxz.wang/video.php?url=','http://player.gakui.top/?url=']
    },
    methods:{
        play:function(){
            console.log(this.changeType);
            document.getElementById("video_iframe").src = this.setUrl[this.changeType]+this.getUrl

        },
        showQR:function(){
            var el = document.getElementById('qr');
            if(this.getUrl==''){
                el.innerHTML="还没有输入网址,还没有二维码额！请在下方输入视频网址！"
            }else{
                el.innerHTML = '';
                var qrcode1 = new QRCode('qr', {
                    text:this.setUrl[this.changeType]+this.getUrl,
                    width: 100,
                    height: 100
                });               
            }

        }

    }
})