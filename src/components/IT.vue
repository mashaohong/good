<template>
  <div>
    <div class="yuanq"></div>
    <h2>职业生涯</h2><br><br><br><br>
    <ul>
      <li>【任务闯关】、【每日练习】、【每日测试】三种模式，开启IT职业生涯的养成之道。</li>
      <li>您还可以【贡献闯关题目】噢，快点加入进来吧。</li>
    </ul>
    <div class="niu">
      <button class="btn btn-primary disabled">开放中</button>
      <h1>Java Web</h1>
      <div class="ews">
        <p class="df">Java后端研发工程师</p>
        <p>Web后端研发工程师，Java方向</p>
        <p>20人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>前端</h1>
      <div class="ews">
        <p class="df">前端研发工程师</p>
        <p>Web前端研发工程师</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>h5移动端</h1>
      <div class="ews">
        <p class="df">HTML5研发工程师</p>
        <p>移动端研发工程师，HTML5方向</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>Android</h1>
      <div class="ews">
        <p class="df">Android研发工程师</p>
        <p>移动端研发工程师，Android方向</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>iOS</h1>
      <div class="ews">
        <p class="df">iOS研发工程师</p>
        <p>移动端研发工程师，iOS方向</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>Python</h1>
      <div class="ews">
        <p class="df">Python研发工程师</p>
        <p>Python研发工程师</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>Linux运维</h1>
      <div class="ews">
        <p class="df">Linux运维工程师</p>
        <p>Linux运维工程师</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>测试</h1>
      <div class="ews">
        <p class="df">测试工程师</p>
        <p>测试工程师</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>产品</h1>
      <div class="ews">
        <p class="df">产品经理</p>
        <p>产品经理</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
    <div class="niu1">
      <button class="btn btn-primary disabled">准备中</button>
      <h1>构架</h1>
      <div class="ews">
        <p class="df">构架师</p>
        <p>构架师</p>
        <p>0人正在学习<span>0人完成</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'IT'
  }
</script>
<style scoped>
  .yuanq {
    width:40px;
    height:40px;
    float:left;
    margin-left:70px;
    border-radius:50%;
    background:dodgerblue;
    margin-top:17px;
  }
  h2 {
    float:left;
    margin-left:20px;
  }
  ul {
    list-style:none;
    float:left;
    margin-left:70px;
    width:100%;
  }
  ul li {
    line-height:30px;
    text-align:left;
  }
  .niu {
    height:350px;
    width:300px;
    float:left;
    border:4px solid dodgerblue;
    margin-left:50px;
    background:url(../assets/answerBackground.png);
    margin-top:10px;
  }
  .niu1 {
    height:350px;
    width:300px;
    float:left;
    border:4px solid dodgerblue;
    margin-left:20px;
    background:url(../assets/answerBackground.png);
    margin-top:10px;
  }
  .btn {
    float:right;
    border-radius:25px;
    background:white;
    color:dodgerblue;
    height:35px;
    margin-top:10px;
    margin-right:5px;
  }
  h1 {
    margin-top:100px;
    margin-left:20px;
    color:white;
  }
  .ews {
    height:120px;
    width:290px;
    float:bottom;
    background:lightskyblue;
    margin-left:1px;
    margin-top:80px;
  }
  p  {
    margin-top:5px;
    background:lightblue;
    margin-left:5px;
  }
  .df {
    font-size:18px;
    font-weight:bold;
  }
</style>
