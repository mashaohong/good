<template>
  <div class="hello">
    <span id="myCarousel" class="carousel slide" data-ride="carousel" >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <span class="carousel-inner">
        <span class="active item"><img src="../assets/hehuoren.jpg"/></span>
        <span class="item"><img src="../assets/zhuce.jpg"/></span>
        <span class="item"><img src="../assets/chuangguan.jpg"/></span>
        <span class="item"><img src="../assets/liji.jpg"/></span>
      </span>
    </span>
    <h2>热点关注</h2><hr>
    <div id="opy"></div>
    <h3>Hot Concern</h3>
    <span id="k1">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag" >1</button></span>
      <h4>软件项目定制开发</h4><br><br><br><br>
      <p>微信商城开发、棋牌类游戏开发、移动开发、网站开发等，大数据、云计算、教育等领域，我们可以承担各种软件类项目的定制开发，欢迎咨询与联系。</p>
      <button type="btn" class="btn btn-info disabled zah" ><span class="zaj">前星</span></button>
      <button type="btn" class="btn btn-info disabled zak"><span class="zal">定制开发</span></button>
      <button type="btn" class="btn btn-info disabled zak"><span class="zal">微信</span></button>
      <button type="btn" class="btn btn-info disabled zak"><span class="zal">游戏</span></button>
      <button type="btn" class="btn btn-info disabled zak"><span class="zal">网站</span></button><br>
      <button type="btn" class="btn default xa">
        <a class="v-link" href="/yan#/yan">查看详情</a>
      </button>
    </span>
    <span id="k2">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag" >2</button></span>
      <h4>DevOps系统发布</h4><br><br><br><br>
      <p>DevOps系统，“让开发更专业，让运维更简单”，自动化一键部署开发、测试、生产环境，集成主流的开发、运维软件，操作可视化、简单化、专业化，释放生产力，解放生产力，节约成本，提高效率，为企业在线系统的开发与运维服务。</p>
      <button type="btn" class="btn btn-info disabled ca"><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled caa"><span class="zal">DevOps</span></button>
      <button type="btn" class="btn btn-info disabled caa"><span class="zal">发布</span></button>
      <button type="btn" class="btn btn-info disabled caa"><span class="zal">正式</span></button>
      <button type="btn" class="btn btn-info disabled caa"><span class="zal">1.0</span></button><br>
      <button type="btn" class="btn default cab"><router-link :to="{name: 'hey1'}">查看详情</router-link></button>
    </span>
    <span id="k3">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag">3</button></span>
      <h4>线下培训班招生</h4><br><br><br><br>
      <p>精品课程：前端/Java后端/移动端/Linux运维/游戏开发，4个月时间，让从零开始的你，成为IT行业中的一员。带作品毕业，让你掌握一门技术的同时，也完成了几个小项目。</p>
      <button type="btn" class="btn btn-info disabled cad"><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled cae"><span class="zal">培训</span></button>
      <button type="btn" class="btn btn-info disabled cae" ><span class="zal">线下</span></button><br>
      <button type="btn" class="btn default caf">
        <router-link :to="{name: 'hey'}">查看详情</router-link></button>
    </span>
    <span id="k4">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag">4</button></span>
      <h4>线下实训课程招生</h4><br><br><br><br>
      <p>线下实训课程，让你在最短时间内掌握IT技术，面向企业级应用，快快过来看看吧~</p>
      <button type="btn" class="btn btn-info disabled cag" ><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled cah"><span class="zal">实训</span></button>
      <button type="btn" class="btn btn-info disabled cah"><span class="zal">线下</span></button><br>
      <button type="btn" class="btn default caj"><router-link :to="{name: 'xian'}">查看详情</router-link></button>
    </span>
    <span id="k5">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag">5</button></span>
      <h4>实训课程免费学计划</h4><br><br><br><br>
      <p>实训课程免费学计划，每个月提供1门免费的实训课程，入职后才付费。名额有限，先到先学。</p>
      <button type="btn" class="btn btn-info disabled cak"><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled cah"><span class="zal">实训</span></button>
      <button type="btn" class="btn btn-info disabled cah"><span class="zal">免费</span></button><br>
      <button type="btn" class="btn default caj"><router-link :to="{name: 'shi'}">查看详情</router-link></button>
    </span>
    <span id="k6">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag">6</button></span>
      <h4>注册送大礼</h4><br><br><br><br>
      <p>注册前星学院平台的会员，送大礼噢。</p>
      <button type="btn" class="btn btn-info disabled caz"><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled cav"><span class="zal">注册</span></button>
      <button type="btn" class="btn btn-info disabled cav"><span class="za1">送礼</span></button><br>
      <button type="btn" class="btn default caj"><router-link :to="{name: 'zhu'}">查看详情</router-link></button>
    </span>
    <span id="k7">
      <span type="btn" class="btn btn-primary zaf"><button type="btn" class="btn btn-default zag">7</button></span>
      <h4>前星合伙人计划</h4><br><br><br><br>
      <p>前星合伙人计划，加入我们的运营推广合伙人，获得佣金提成。</p>
      <button type="btn" class="btn btn-info disabled can" ><span class="cac">前星</span></button>
      <button type="btn" class="btn btn-info disabled cam"><span class="zal">合伙人</span></button>
      <button type="btn" class="btn btn-info disabled cam"><span class="za1">计划</span></button>
      <button type="btn" class="btn btn-info disabled cam"><span class="za1">推广</span></button>
      <button type="btn" class="btn btn-info disabled cam"><span class="zal">提成</span></button><br>
      <button type="btn" class="btn default caj"><router-link :to="{name: 'qian'}">查看详情</router-link></button>
    </span>
    <h2 style="padding-top:1200px;">教学中心</h2><hr>
    <div id="opp"></div>
    <h3>Teaching Center</h3>
    <kai></kai>
    <span class="caq">
      <h2>研发中心</h2>
      <hr>
      <div id="opz"></div>
      <h3>R & D center</h3>
    </span>
    <span id="dhg">
      <div id="dh7">
        <img src="../assets/page03.png"/>
        <p class="caw">研发领域</p>
      </div>
      <p class="cay">大数据、云计算、移动互联网、互联网等领域</p>
    </span>
    <span id="dhh">
      <div id="dh8">
        <img src="../assets/advantage1.png"/>
        <p class="caw">服务对象</p>
      </div>
      <p class="car">主要服务于高校、政府、企业等</p>
    </span>
    <span id="dhj">
      <div id="dh9">
        <img src="../assets/page02.png"/>
        <p class="cat">研发委托</p>
      </div>
      <p class="car">接收研发需求，报价并制定研发周期与计划，签约后研发，测试与验收，项目收尾</p>
    </span>
    <span class="cau">
      <h2>应用中心</h2>
      <hr>
      <div id="opq"></div>
      <h3>Application Center</h3>
    </span>
    <span id="dhk">
      <div id="dh10">
        <img src="../assets/qrcode-android.png"/>
        <p class="cai">前星学院APP</p>
      </div>
      <p>已在百度、腾讯、360手机市场上线，让你可以利用好每一个碎片时间学技术。</p>
    </span>
    <span id="dhl">
      <div id="dh11">
        <a class="v-link" href="/yan#/IT">
          <img src="../assets/occupation-career3.png"/>
          <p class="cao">IT职业生涯</p>
        </a>
      </div>
      <p class="cap">闯关、练习、测试，每天进步一点点，逐步迈进IT的大门，PC端与移动端数据共享。</p>
    </span>
    <span class="cau">
      <h2>推荐课程</h2>
      <hr>
      <div id="opc"></div>
      <h3>Recommend Courses</h3>
    </span>
    <xiao></xiao>
    <span class="cal">
    <button type="btn" class="btn btn-default btn-danger bg">查看更多</button>
    </span>
    <span class="bh">
      <h2>合作伙伴</h2>
      <hr>
      <div id="opm"></div>
      <h3>Partners</h3>
    </span>
    <a href="https://ke.qq.com/" target="_blank" class="bh1">
      <img src="../assets/aa.png"/>
      <p>腾讯课堂</p>
    </a>
    <a href="https://www.aliyun.com/"  target="_blank" class="bh2">
      <img src="../assets/aliyun.png"/>
      <p>阿里云</p>
    </a>
    <a href="https://exmail.aliyun.com/"  target="_blank" class="bh3">
      <img src="../assets/m.png"/>
      <p>阿里邮箱</p>
    </a>
    <a href="https://www.lagou.com/"  target="_blank" class="bh4">
      <img src="../assets/lagou.png"/>
      <p>拉钩</p>
    </a>
    <a href="https://www.dingtalk.com/"  target="_blank" class="bh5">
      <img src="../assets/dingding.png"/>
      <p>钉钉</p>
    </a>
    <a href="https://www.baidu.com/"  target="_blank" class="bh6">
      <img src="../assets/baidu.png"/>
      <p>百度</p>
    </a>
    <a href="https://www.alipay.com/"  target="_blank" class="bh7">
      <img src="../assets/zhifubao.png"/>
      <p>支付宝</p>
    </a>
    <a href="https://www.360.cn/"  target="_blank" class="bh8">
      <img src="../assets/360.png"/>
      <p class="bj1">360</p>
    </a>
    <a href="http://gz.58.com/"  target="_blank" class="bh9">
      <img src="../assets/58.png"/>
      <p>58</p>
    </a>
    <a href="http://www.cib.com.cn/cn/index.html"  target="_blank" class="bh10">
      <img src="../assets/xingye.png"/>
      <p class="bj2">兴业银行</p>
    </a>
  </div>
</template>

<script>
  /* eslint-disable semi,indent */
  import xiao from './xiao'
  import kai from './kai'
  export default {
    name: 'hello',
    components: {
       xiao,
      'xiao-1': xiao,
      kai,
      'kai-1': kai
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }


  a {
    color: black;
  }
  a:hover {
    color:black;
    text-decoration:none;
  }
  #opp{
    height:3px;
    width:150px;
    background-color:blue;
    margin-left:44%;
    margin-top:-20px;
  }
  #opy{
    height:3px;
    width:150px;
    background-color:blue;
    margin-top:-20px;
    margin-left:44.5%;
  }
  #myCarousel {
    z-index:-5;
    background:rgba(0,6,0,0.01);
    margin-left:0;
  }
  .carousel-indicators {
    top:95%;
    right: 50%;
  }
  .item img {
    margin-top:15px;
    margin-left:70px;
  }
.zaf {
  float:left;
  margin-top:15px;
  margin-left:15px;
}
.zag {
  border-radius:50%;
  margin-left:10px;
}
.zah {
  border-radius:10px;
  padding:1px 1px;
  margin-top:24px;
  margin-left:-260px;
}
.zaj {
  font-size:0.5px;
}
.zak {
  border-radius:10px;
  padding:1px 1px;
  margin-top:24px;
}
.zal {
  font-size:1px;
}
.xa {
  border-radius:50px;
  margin-bottom:-20px;
  margin-top:-4px;
}
.ca {
  border-radius:10px;
  padding:1px 1px;
  margin-left:-280px;
  margin-top:-5px;
}
.caa {
  border-radius:10px;
  padding:1px 1px;
  margin-top:-5px;
}
.cab {
  border-radius:50px;
  margin-top:-4px;
}
.cac {
  font-size:0.5px;
}
.cad {
  border-radius:10px;
  padding:1px 1px;
  margin-top:16px;
  margin-left:-350px;
}
.cae {
  border-radius:10px;
  padding:1px 1px;
  margin-top:16px;
}
.caf {
  border-radius:50px;
  margin-top:5px;
}
.cag {
  border-radius:10px;
  padding:1px 1px;
  margin-left:-350px;
  margin-top:40px;
}
.cah {
  border-radius:10px;
  padding:1px 1px;
  margin-top:40px
}
.caj {
  border-radius:50px;
  margin-top:10px;
}
.cak {
  border-radius:10px;
  padding:1px 1px;
  margin-left:-350px;
  margin-top:40px;
}
.cal {
  border-radius:10px;
  padding:1px 1px;
  margin-top:40px;
}
.caz {
  border-radius:10px;
  padding:1px 1px;
  margin-left:-350px;
  margin-top:70px;
}
.cav {
  border-radius:10px;
  padding:1px 1px;
  margin-top:70px;
}
.can {
  border-radius:10px;
  padding:1px 1px;
  margin-left:-280px;
  margin-top:70px;
}
.cam {
  border-radius:10px;
  padding:1px 1px;
  margin-top:70px;
}
.caq {
  float:left;
  width:100%;
  height:100px;
  margin-top:20px;
}
.bg {
  flaot:left;
  width:150px;
  height:40px;
  margin-top:50px;
}
a{
  color:black;
}
a:hover{
  text-decoration:none;
  color:black;
}
</style>
<style>
  .container ul li {
    padding-top:15px;
  }
  a{
    text-decoration:none;
    color:black;
  }
  hr{
    width:50%;
    margin-left:25%;
  }
  #opy{
    height:3px;
    width:150px;
    background-color:blue;
  }
  h4{
    float:left;
    padding-top:15px;
    padding-left:10px;
  }
  #k1{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:120px;
  }
  p{
    font-size:15px;
    line-height:30px;
    padding-left:10px;
    text-indent:28px;
  }
  #k2{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:100px;
  }
  #k3{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:120px;
    margin-top:20px;
  }
  #k4{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:100px;
    margin-top:20px;
  }
  #k5{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:120px;
    margin-top:20px;
  }
  #k6{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:100px;
    margin-top:20px;
  }
  #k7{
    float:left;
    height:270px;
    width:500px;
    border:solid 2px #727171;
    margin-left:120px;
    margin-top:20px;
  }
  a{
    color:black;
  }
  a:hover{
    text-decoration:none;
    color:black;
  }
  #opz{
    height:3px;
    width:150px;
    background-color:blue;
    margin-left:44.5%;
    margin-top:-22px;
  }
  #dhg{
    width:350px;
    height:330px;
    margin-left:100px;
    float:left;
    margin-top:50px;
  }
  #dh7{
    width:200px;
    height:220px;
    margin-left:78px;
  }
  #dh7 img {
    height:115px;
    padding-top:20px;
  }
  #dhh{
    width:350px;
    height:330px;
    margin-left:50px;
    float:left;
    margin-top:50px;
  }
  #dh8{
    width:200px;
    height:220px;
    margin-left:55px;
  }
  #dh8 img {
    height:115px;
    padding-top:20px;
  }
  #dhj{
    width:350px;
    height:330px;
    margin-left:50px;
    float:left;
    margin-top:50px;
  }
  #dh9{
    width:200px;
    height:220px;
    margin-left:75px;
  }
  #dh9 img {
    height:110px;
    padding-top:15px;
  }
  #opq{
    height:3px;
    width:150px;
    background-color:blue;
    margin-left:44.5%;
    margin-top:-22px;
  }
  #dhk{
    width:350px;
    height:330px;
    margin-left:200px;
    float:left;
    margin-top:20px;
  }
  #dh10{
    width:200px;
    height:220px;
    margin-left:80px;
  }
  #dh10 img {
    height:100px;
    margin-top:20px;
  }
  #dhl{
    width:350px;
    height:330px;
    margin-left:200px;
    float:left;
    margin-top:20px;
  }
  #dh11{
    width:150px;
    height:180px;
    margin-left:100px;
  }
  #dh11 img {
    height:100px;
    padding-top:23px;
  }
  #dh11:hover{
    box-shadow:0px 8px 15px #333333;
  }
  #dh11 a{
    color:black;
  }
  #dh11 a:hover {
    text-decoration:none;
  }
  #opc{
    height:3px;
    width:150px;
    background-color:blue;
    margin-left:44.5%;
    margin-top:-22px;
  }
  #opm{
    height:3px;
    width:150px;
    background-color:blue;
    margin-left:44.5%;
    margin-top:-22px;
  }
  .caw {
    font-size:20px;
    padding-top:20px;
    margin-left:-16px;
  }
  .car {
    margin-left:-20px;
  }
  .cat {
    font-size:20px;
    padding-top:20px;
    margin-left:-16px;
  }
  .cay {
    margin-left:-10px;
  }
  .cau {
    float:left;
    width:100%;
    height:100px;
  }
  .cai {
    font-size:20px;
    padding-top:30px;
    margin-left:-12px;
  }
  .cao {
    font-size:20px;
    padding-top:25px;
    margin-left:-20px;
  }
  .cap {
    padding-top:35px
  }
  .cal {
    float:left;
    width:100%;
  }
  .bh {
    float:left;
    width:100%;
    height:100px;
    margin-top:80px;
  }
  .bh1 {
    float:left;
    margin-left:100px;
    margin-top:20px;
  }
  .bh1 img {
    height:150px;
  }
  .bh2 {
    float:left;
    margin-top:20px;
    margin-left:20px;
  }
  .bh2 img {
    height:150px;
  }
  .bh3 {
    float:left;
    margin-top:50px;
    margin-left:20px;
  }
  .bh3 img {
    height:120px;
    width:150px;
  }
  .bh4 {
    float:left;
    margin-left:15px;
    margin-top:20px;
  }
  .bh4 img {
    height:150px;
  }
  .bh5 {
    float:left;
    margin-top:50px;
  }
  .bh5 img {
    height:110px;
  }
  .bh6 {
    float:left;
    margin-top:300px;
    margin-left:-1130px;
  }
  .bh6 img {
    height:100px;
  }
  .bh7 {
    float:left;
    margin-top:280px;
    margin-left:-900px;
  }
  .bh7 img {
    height:120px;
  }
  .bh8 {
    float:left;
    margin-top:310px;
    margin-left:-660px;
  }
  .bh8 img {
    height:60px;
  }
  .bh9 {
    float:left;
    margin-top:300px;
    margin-left:-430px;
  }
  .bh9 img {
    height:100px;
  }
  .bh10 {
    float:left;
    margin-top:70px;
    margin-left:30px;
  }
  .bh10 img {
    height:170px;
  }
  .bj1 {
    margin-top:30px;
  }
  .bj2 {
    margin-top:-40px;
  }
</style>
