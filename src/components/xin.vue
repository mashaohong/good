<template>
  <div id="xin">
    <span id="jj">
      <img src="../assets/信息中心.jpg"/>
      <span class="ynv"><div class="ynb"></div>信息中心</span>
    </span>
    <zuo></zuo>
  </div>
</template>
<script>
  import zuo from './zuo'
  export default {
    name: 'xin',
    components: {
      zuo,
      'zuo-1': zuo
    }
  }
</script>
<style>
  #xin {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #jj{
    width:90%;
    text-align:left;
  }
  .ynv {
    font-size:25px;
    font-weight:400;
    width:100%;
    float:left;
    margin-top:50px;
  }
  .ynb {
    width:10px;
    height:26px;
    background-color:#2E6CFF;
    float:left;
    margin-top:5px;
    margin-left:46px;
    margin-right:20px;
  }
</style>
