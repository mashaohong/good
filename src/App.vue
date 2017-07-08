<template>
  <div id="app">
    <div class="heading"><span class="zx" >前星学院欢迎你</span>
    </div>
    <nav>
    <ul class="nav nav-pills nav-fixed-top">
      <li class="zas"><img src="./assets/tou.png"/></li>
      <li class="zad"> <router-link :to="{name: 'Hello'}">首页</router-link></li>
      <li class="zad"> <router-link :to="{name: 'jiao'}">教学中心</router-link></li>
      <li class="zad"> <router-link :to="{name: 'yan'}">研发中心</router-link></li>
      <li class="zad"> <router-link :to="{name: 'chan'}">产品中心</router-link></li>
      <li class="zad"> <router-link :to="{name: 'jing'}">竞技中心</router-link></li>
      <li class="zad"> <router-link :to="{name: 'xin'}">信息中心</router-link></li>
    </ul>
    </nav>
    <router-view></router-view>
    <span id="z">
      <div id="z1">
        <h4 class="zv">企业招聘</h4>
        <div class="zb"></div>
        <h4 class="zn">人才招聘</h4>
        <div class="zb"></div>
        <h4 class="zn">讲师招募</h4>
        <div class="zb"></div>
        <h4 class="zn">联系我们</h4>
        <div class="zb"></div>
        <h4 class="zn">意见反馈</h4>
        <div class="zb"></div>
        <h4 class="zn">网站地图</h4>
      </div>
      <div id="z2">
        <img src="./assets/qianxing.png"/>
        <div id="z22">
			<span class="zma">Copyright © 2016, 广州前星信息科技有限公司
				粤ICP备16066731号</span><br>
          <span class="zma">地址：广州市天河区黄村大观南路26号D210室</span><br>
          <span class="zma">邮箱：service@forefrontstar.com</span><br>
          <span class="zma">电话：020-28161380</span>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars,indent,eqeqeq */

  export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.heading{
  height:30px;
  width:100%;
  background:black;
  color:white;
}
#z{
  float:left;
  width:100%;
  height:300px;
  margin-top:30px;
}
#z1{
  float:left;
  width:100%;
  height:50px;
  background-color:#010000;
}
#z2{
  float:left;
  width:100%;
  height:250px;
  background-color:#222222;
}
#z22{
  float:left;
  height:200px;
  width:300px;
  color:white;
  margin-top:60px;
  margin-left:200px;
}
.zx {
  margin-left:-1030px;
}
  .btn-group {
    float:right;
  }
  .zc {
    margin-right:70px;
  }
  .icon-align-justify {
    margin-right:6px;
    margin-top:-3px;
  }
  .zad {
    padding-top:10px;
    font-size:18px;
  }
  .zv {
    padding-left:200px;
    color:white;
    padding-top:5px;
    float:left;
  }
  .zb{
    width:2px;
    height:20px;
    background-color:white;
    float:left;
    margin-left:50px;
    margin-top:15px;
  }
  .zn {
    padding-left:50px;
    color:white;
    padding-top:5px;
    float:left;
  }
  #z2 img {
    float:left;
    padding-top:60px;
    padding-left:300px;
  }
  .zma {
    line-height:15px;
    margin-top:10px;
  }
  .zas img {
    height:50px;
    padding-top:5px;
  }
</style>
