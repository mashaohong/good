<template>
  <div>
    <span class="zhu" >
      <h2 class="ji">注册送大礼</h2>
      <hr>
      <img src="../assets/zhuce.jpg"/>
      <ol>
        <p>好消息，好消息。</p>
        <p>为了答谢广大网友对本站的支持，即日起，凡注册本站会员，即送100红包，人人有份。</p>
        <p>心得不如行动，赶快点击下面的【注册】按钮，马上参与吧~~~</p>
      </ol><br>
      <span class="yns">温馨提示:</span><br><br>
      <ol>
        <p>1.红包会以星币的形式发放，星币可以在本站进行消费，购买本站的全部商品。</p>
        <p>2.星币不可取现，不可转让。</p>
      </ol>
      <button class="btn ynd">立即购买</button>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'shi'
  }
</script>
<style>
  .zhu{
    height:860px;
    width:60%;
    margin-left:80px;
    margin-top:20px;
    box-shadow:2px 2px 10px grey;
    float:left;
  }
  hr{
    width:97%;
    margin-left:12px;
  }
  .zhu img{
    height:285px;
  }
  .zhu ol{
    text-align:left;
    width:95%;
    margin-left:20px;
  }
  .zhu ol li{
    line-height:40px;
    font-size:16px;
    margin-top:10px;
  }
  .zhu ol p{
    line-height:40px;
    font-size:17px;
    margin-top:10px;
    margin-left:-40px;
  }
  p{
    width:95%;
    margin-left:20px;
  }
  .ji {
    font-weight:bold;
  }
  .yns {
    color:red;
    font-size:20px;
    margin-left:25px;
    float:left;
  }
  .ynd {
    background-color:dodgerblue;
    width:120px;
    border-radius:8px;
    color:white;
    margin-top:50px;
    font-size:15px;
  }
</style>

