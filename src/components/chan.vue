<template>
  <div id="chan">
    <span id="wr">
      <h1 class="bk">前星DevOps系统</h1>
      <button type="btn" class="bk1"><a href="">了解详情</a></button>
      <div id="we">
        <div id="we1">
          <div id="we11">
            <img src="../assets/自动化一键部署.png"/>
          </div>
          <p class="bk2">自动化一键部署</p>
          <p class="bk3">一键部署主流开发环境（JDK+Maven+SVN+<br>Tomcat+Nexus+MySQL等），30分钟内部署完毕</p>
        </div>
        <div id="we2">
          <div id="we22">
            <img src="../assets/配置重置.png"/>
          </div>
          <p class="bk2">配置重置</p>
          <p class="bk4">每一次对配置文件的修改，都是会自动进行备份记录的。如果发生配置失误可以及时进行恢复。如果确实恢复不了，还可以重置为系统默认值。（基础版不提供自动备份功能）</p>
        </div>
        <div id="we3">
          <div id="we33">
            <img src="../assets/安全稳定.png"/>
          </div>
          <p class="bk2">安全稳定</p>
          <p class="bk4">系统基于J2EE架构，可以使用HTTPS协议来启动，一定程度上保证了系统的安全稳定</p>
        </div>
        <div id="we4">
          <div id="we44">
            <img src="../assets/智能监控.png"/>
          </div>
          <p class="bk2">智能监控</p>
          <p class="bk4">对集群、主机、服务的健康状况进行监控</p>
        </div>
        <div id="we5">
          <div id="we55">
            <img src="../assets/阀值告警.png"/>
          </div>
          <p class="bk2">阀值告警</p>
          <p class="bk4">对监控指标进行阀值设置，一旦达到阀值，就可以发送邮件/短信进行告警</p>
        </div>
        <div id="we6">
          <div id="we66">
            <img src="../assets/操作简单.png"/>
          </div>
          <p class="bk2">操作简单</p>
          <p class="bk4">专业的功能，可视化的界面，让入门级技术人员也会操作</p>
        </div>
      </div>
    </span>
    <span id="wy">
      <p class="wy1">IT职业生涯</p>
      <p class="wy2">随时随地轻松掌握新知识</p>
      <div id="zuo">
		<div id="zuo1">
			 <img src="../assets/趣味闯关.png"/>
				<p class="wy3">趣味闯关</p>
				<p class="wy5">IT职业生涯闯关，每一关一个知识的，让你一边享受做题的乐趣一边学习不同的知识点，让你每天进步一点！</p>
		</div>
		<div id="zuo2">
			<img src="../assets/每日练习.png"/>
				<p class="wy4">每日练习</p>
				<p class="wy5">每日练习，让你回头看看你学了什么，回头越多，知识在你脑海里越是走不了，温故而知新可以为师矣，还不来练一练！</p>
		</div>
		<div id="zuo3">
			<img src="../assets/每日测试.png"/>
				<p class="wy4">每日测试</p>
				<p class="wy5">想知道自己走到了哪里，那就来测一测吧，让你知道你在哪里，哪里不足，IT大神离你不远了！</p>
		</div>
	</div>
      <div id="you">
		<p class="wy6">电脑在线做题，点开便做，快速方便！</p>
		<button type="btn" class="wy7">立即参与</button>
		<p class="wy8">前星学院app，随时随地学IT</p>
		<img src="../assets/扫码下载app.png"/>
		<button type="btn" class="wy9">Android下载</button>
		<p class="wy10">扫码下载app</p>
	</div>
    </span>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  #chan {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #wr{
    width:90%;
    height:640px;
    background-color:#4162E1;
    margin-top:20px;
    float:left;
    margin-left:5%;
  }
  #we{
    width:100%;
    height:360px;
    margin-top:40px;
    float:left;
  }
  #we1{
    width:170px;
    height:300px;
    margin-left:20px;
    float:left;
    margin-top:20px;
  }
  #we11{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#2CBB7B;
  }
  #we1 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:7px;
  }
  #we2{
    width:160px;
    height:300px;
    margin-left:30px;
    float:left;
    margin-top:20px;
  }
  #we22{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#F1EC5F;
  }
  #we2 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:7px;
  }
  #we3{
    width:160px;
    height:300px;
    margin-left:30px;
    float:left;
    margin-top:20px;
  }
  #we33{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#AA19B3;
  }
  #we3 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:7px;
  }
  #we4{
    width:160px;
    height:300px;
    margin-left:30px;
    float:left;
    margin-top:20px;
  }
  #we44{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#AF7E23;
  }
  #we4 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:8px;
  }
  #we5{
    width:160px;
    height:300px;
    margin-left:30px;
    float:left;
    margin-top:20px;
  }
  #we55{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#E44B19;
  }
  #we5 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:7px;
  }
  #we6{
    width:160px;
    height:300px;
    margin-left:30px;
    float:left;
    margin-top:20px;
  }
  #we66{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-left:58px;
    background-color:#074FB1;
  }
  #we6 img{
    height:65px;
    width:65px;
    padding-top:8px;
    padding-left:7px;
  }
  #wy{
    width:90%;
    height:630px;
    background-color:#455FF8;
    margin-top:20px;
    float:left;
    margin-left:5%;
  }
  .btn a{
    color:black;
    text-decoration:none;
  }
  .btn a:hover{
    color:white;
    text-decoration:none;
  }
  #zuo{
    width:60%;
    height:515px;
    float:left;
  }
  #zuo1{
    width:100%;
    height:170px;
    float:left;
    text-align:left;
  }
  #zuo1 img {
    width:110px;
    height:110px;
    margin-top:20px;
    float:left;
    margin-left:15px;
  }
  #zuo2{
    width:100%;
    height:170px;
    float:left;
    text-align:left;
  }
  #zuo2 img {
    width:100px;
    height:100px;
    margin-top:20px;
    float:left;
    margin-left:20px;
  }
  #zuo3{
    width:100%;
    height:170px;
    float:left;
    text-align:left;
  }
  #zuo3 img {
    width:110px;
    height:110px;
    float:left;
    margin-left:15px;
  }
  #you{
    width:39.5%;
    height:405px;
    float:left;
    text-align:left;
  }
  #you img{
    width:140px;
    height:100px;
    float:left;
    padding-left:50px;
  }
  a {
    color:black;
  }
  a:hover {
    color:black;
    text-decoration:none;
  }
  .bk {
    color:white;
    width:100%;
    font-size:40px;
    padding-top:20px;
  }
  .bk1 {
    width:150px;
    height:50px;
    border:2px solid white;
    border-radius:15px;
    background-color:#4162E1;
    margin-left:44%;
    font-size:25px;
    margin-top:50px;
    float:left;
  }
  .bk1 a {
    color:white;
  }
  .bk1 a:hover {
    text-decoration:none;
  }
  .bk2 {
    font-size:18px;
    color:white;
  }
  .bk3 {
    color:white;
    padding-left:0px;
  }
  .bk4 {
    color:white;
    padding-left:7px;
  }
  .wy1 {
    color:#BDBC00;
    font-size:40px;
    float:left;
    width:100%;
    font-weight:500;
    margin-top:35px;
    margin-left:-450px;
  }
  .wy2 {
    color:white;
    font-size:20px;
    float:left;
    width:100%;
    margin-left:-450px;
  }
  .wy3 {
    color:#BDBC00;
    font-size:20px;
    margin-top:30px;
  }
  .wy4 {
    color:#BDBC00;
    font-size:20px;
    margin-top:20px;
  }
  .wy5 {
    color:white;
    font-size:14px;
    text-align:left;
  }
  .wy6 {
    color:white;
    padding-left:0px;
    font-size:20px;
    float:left;
    width:100%;
    margin-top:10px;
  }
  .wy7 {
    width:150px;
    height:50px;
    border:2px solid white;
    border-radius:15px;
    color:white;
    background-color:#455FF8;
    font-size:25px;
    margin-top:40px;
    float:left;
    margin-left:14%;
  }
  .wy8 {
    color:white;
    font-size:20px;
    float:left;
    width:100%;
    margin-top:80px;
  }
  .wy9 {
    color:white;
    border:2px solid white;
    background-color:#455FF8;
    border-radius:25px;
    float:left;
    margin-top:60px;
    margin-left:50px;
    width:100px;
    height:35px;
  }
  .wy10 {
    color:white;
    font-size:14px;
    float:left;
    width:100%;
    padding-left:20px;
  }
</style>
