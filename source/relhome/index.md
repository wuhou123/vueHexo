---
title: VIP电影解析
date: 2017-12-21 14:28:36
---
{% raw %}
<script src="http://at.alicdn.com/t/font_518669_3mrmx047ejpmbo6r.js"></script>
<div id="app">
    <span id="busuanzi_container_page_pv">
        <i class="fa fa-tree" aria-hidden="true"></i>已收集能量<span id="busuanzi_value_page_pv"></span>g
    </span>
    <div class="mobile" @mouseenter="showQR">
        <span><i class="fa fa-apple" aria-hidden="true"></i>扫码手机观看</span>
        <div class="getQrcode" id="qr"></div>
    </div>
    <a href="#instr" class='mobile'><i class="fa fa-exclamation-circle" aria-hidden="true"></i>还是不会点这里</a>
    <a href="#setIndex" class='mobile'><i class="fa fa-video-camera" aria-hidden="true"></i>视频网站(去复制)</a>
    <div class='title'>
            <select id="checks" v-model="changeType">
                <option :value="index" v-for="(item,index) in setUrl">{{index?('频道'+index):'默认频道'}}</option>
            </select>
            <input type="text" id="link" style="border:1px solid #00a0e9; width:calc(100% - 174px); line-height:30px; padding:6px; display:block; float:left;" v-model="getUrl" />
            <button type="submit" style="font-size:12px; line-height:40px; background-color:#00a0e9; border:1px solid #FFF; display:block; color:#fff;width:80px" @click="play">播放</button>
    </div>
    <div class="tip">上方粘贴视频地址,选择频道即可观看。VIP视频支持腾爱优乐芒等</div>
        <div class="video_box">
            <iframe id="video_iframe" src="">
            </iframe>
        </div>
    <div id="instr">
        <h4>一说明:</h4>
        <h5>复制爱奇艺腾讯vip视频网址（点击图片放大）</h5>
        <p>1.CTR+C复制vip视频网址（即点开vip视频只能观看6分钟的网址）：</p>
        <img src="http://osk1hpe2y.bkt.clouddn.com/17-12-22/66735916.jpg" alt="说明图片">
        <p>2.粘贴后如果无法观看，更换输入网址框左边频道,选择合适频道</p>
        <p>3.上述1,2无效请检查网址是否正确</p>
        <p>4.关于扫码手机观看：输入框输入复制的视频网址后，鼠标停留在扫码观看上就有二维码显示，手机浏览器扫一扫即可。</p>
        <a href="#app">看懂了点这里</a>
         <h4>二声明:</h4>
        <p>1.本网站只用于个人学习和测试接口，不得用于商业，请于各大视频网站购买VIP会员观看！！！</p>
        <p>2.如有发现侵犯版权问题删除请联系qq：2544839059</p>
        <p>3.切勿用于商业用途，谢谢</p>
         <h4>三学习:</h4>
        <p>1.需要挂简历和作品请联系qq</p>
        <h4>四视频网站:</h4>
        <ul id="setIndex">            
            <li class="setSvg"><a href="http://vip.iqiyi.com"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-aiqiyi"></use></svg></a></li>
            <li class="setSvg"><a href="http://www.youku.com/"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-youku"></use></svg></a></li>
            <li class="setSvg"><a href="https://v.qq.com/"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-tengxunshipin"></use></svg></a></li>
            <li class="setSvg"><a href="http://www.le.com/"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-leshi"></use></svg></a></li>
        </ul>    
    </div>

</div>
<script src="../js/static/lib/vue.js"></script>
<script src="../js/static/lib/qrcode.js"></script>
<script src="../js/static/relhome.js"></script>
{% endraw %}