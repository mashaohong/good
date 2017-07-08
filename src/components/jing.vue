<template>
  <div id="jing">
    <span id="hh">
      <img src="../assets/竞技中心.jpg"/>
      <span class="ao"><div class="ao1"></div>竞技中心</span>
      <span class="ao2"><div class="ao3"></div>大赛类型</span>
      <img src="../assets/游戏设计大赛.png"/>
      <img src="../assets/软件设计大赛.png"/>
      <img src="../assets/产品设计大赛.png"/>
      <img src="../assets/软件测试大赛.png"/>
      <img src="../assets/文档撰写大赛.png"/>
    </span>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  #jing {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #hh{
    width:90%;
    margin-left:5%;
    float:left;
    text-align:left;
  }
  #hh img{
    margin-top:15px;
  }
  .ao {
    font-size:25px;
    font-weight:400;
    width:100%;
    float:left;
    margin-top:50px;
  }
  .ao1 {
    width:10px;
    height:26px;
    background-color:#2E6CFF;
    float:left;
    margin-top:5px;
    margin-right:20px;
  }
  .ao2 {
    width:100%;
    float:left;
    margin-top:50px;
  }
  .ao3 {
    width:10px;
    height:20px;
    background-color:#2E6CFF;
    float:left;
    margin-top:1px;
    margin-right:20px;
  }
</style>
