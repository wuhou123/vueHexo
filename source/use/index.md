---
title: 使用说明
date: 2017-12-21 14:28:36
---
{% raw %}
  <style>
      .title{overflow:hidden;width:800px;}
      .tip{width:800px; line-height:30px; background-color:#63b3ff;color:#fff;text-align:center;}
      .video_box{overflow:hidden;height:40vw;width:70vw;}
      #video_iframe{frameborder:0;marginheight:0px;marginwidth:0px;background:#000000;border:2px solid #00a0e9;height:40vw;width:70vw;}
      .routes{padding:5px 0;}.routes>button{padding:2px 15px;}
  </style>
</head>
<body>    
    <div class='title'>
            <input type="text" id="link" style="border:1px solid #00a0e9; width:600px; line-height:30px; padding:6px; display:block; float:left;" />
            <button type="submit" style="font-size:12px; line-height:40px; background-color:#00a0e9; border:1px solid #FFF; display:block; color:#fff;" onclick="Close()">点HTML可快速关闭</button>
    </div>
    <div class="tip">上方粘贴视频地址,点按钮1-6即可观看。VIP视频支持腾爱优乐芒等</div>
        <div class='routes'>
            <button onclick='route(1)'>1</button>
            <button onclick='route(2)'>2</button>
            <button onclick='route(3)'>3</button>
            <button onclick='route(4)'>4</button>
            <button onclick='route(5)'>5</button>
            <button onclick='route(6)'>6</button>
        </div>
        <div class="video_box">
            <iframe id="video_iframe" src="">
            </iframe>
        </div>
    <script>
        var num = 0;
        var api = {
            "jiekou1":"http://www.wmxz.wang/video.php?url=",
        }    
        function Close() {
            document.getElementById("video_iframe").src = "";
        }    
        function route(btn){
            if (btn == 1) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://www.wmxz.wang/video.php?url=' + link;
                num = 0;
            }        
            if (btn == 2) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://mt2t.com/yun?url=' + link;
                num = 0;
            }        
            if (btn == 3) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://vip.sdyhy.cn/ckflv/?url=' + link;
                num = 0;
            }        
            if (btn == 4) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://player.gakui.top/?url=' + link;
                num = 0;
            }        
            if (btn == 5) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://www.vipjiexi.com/yun.php?url=' + link;
                num = 0;
            }        
            if (btn == 6) {
                var link = document.getElementById('link').value;
                document.getElementById("video_iframe").src = 'http://www.xiguaso.com/api/index.php?url=' + link;
                num = 0;
            }
        }
    </script>    
{% endraw %}

