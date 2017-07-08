<template>
  <div>
    <span id="siren">
    <h2 class="ji">私人定制</h2>
    <hr>
    <img src="../assets/私人定制为你.jpg"/>
      <h3 class="wi">什么是私人定制：</h3><br><br><br><br>
      <ol>
        <p>私人定制，从字面上来讲，是根据个人需求而针对个人进行专门的特殊服务。</p>
        <p>前星学院的私人定制包括个人的私人定制与企业的私人定制。</p>
      </ol>
      <h3 class="wi">前星学院的私人定制：</h3><br><br><br><br>
      <ol>
        <p>对于个人：为个人打造并包装成你想成为的技术人才。个人会员可以根据企业招聘的技术要求，个人的职业规划、兴趣爱好等，定制自己的学习计划与培养方向，我们提供学习与教学方案并监督学员实现既定目标。</p>
        <p>对于企业：为企业发掘与培养技术高匹配度的员工。企业会员可以根据自身招聘的技术要求，定制某个领域的技术人才，以分级别的技术标签形式来区分，我们负责人才的发掘与培养，以最短的时间交付企业使用。</p>
        <p>私人定制，以IT技术标签的形式来体现，每个标签都会被划分等级，按需收费。</p>
      </ol>
      <button class="btn">马上进行私人定制</button>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'siren'
  }
</script>
<style scoped>
  #siren{
    height:1150px;
    width: 60%;
    margin-left:80px;
    margin-top:20px;
    box-shadow:2px 2px 10px grey;
    float:left;
  }
  hr{
    width:97%;
    margin-left:12px;
  }
  #siren img{
    height:285px;
  }
  #siren ol{
    text-align:left;
    width:95%;
    margin-left:20px;
  }
  #siren ol li{
    line-height:40px;
    font-size:16px;
    margin-top:10px;
  }
  #siren ol p{
    line-height:40px;
    font-size:17px;
    margin-top:10px;
    margin-left:-20px;
    text-align:left;
  }
  .btn{
    background-color:dodgerblue;
    border-radius:8px;
    color:white;
    margin-top:50px;
    font-size:15px;
  }
  .ji {
    font-weight:bold;
  }
  .wi {
    float:left;
    margin-left:25px;
  }
</style>
