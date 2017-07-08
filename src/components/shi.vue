<template>
  <div>
    <span id="shi">
      <h2 class="ji">实训免费学计划（目前仅限广州地区）</h2>
      <hr>
      <img src="../assets/实训免费.jpg"/>
      <ol>
        <p>好消息，好消息，前星学院在广州地区全面开展“实训免费学计划”，面向各位编程爱好者、技术新手，传授企业级的框架、技术、方法、技巧。</p>
        <p>全程免费，不收任何押金噢。</p>
        <p>完成课程学习找到相关工作并顺利入职后，才收取入职签订的劳动合同/实习协议中约定的一个月的薪水。</p>
        <p>换句话来讲：<span class="ji">不入职，不收费！</span> </p>
      </ol>
      <p class="hi1">本月课程</p>
       <ol>
        <p><span class="ji">J2EE基础</span>（点我查看课程介绍）</p>
        <p>多种课程总有一种适合您，赶快报名吧！</p>
      </ol>
      <p class="hi1">报名方式</p>
      <ol>
        <p>请发邮件并附带个人简历到service@forefrontstar.com参与报名，邮件内容可以作下自我简介，目前掌握的技术，对自己的职业规划等，邮件主题如下：</p>
        <p>申请参与【实训免费学计划】_{真实姓名}_{学历}_{专业}_{毕业时间}_{编程年限}</p>
      </ol>
      <p class="hi1">注意事项</p>
      <ol>
        <p>1.前置知识要求：Java基础。未掌握的学员请先自学或者报名本站的相关课程。</p>
        <p>2.本课程只接受有点基础的学员，0基础的学员，请先自学了解相关知识，达到10%-30%左右的熟悉程度，才可以报名参加本课程。</p>
        <p>3.名额有限，择优录取，先到先得，报名成功会发送邮件进行通知，如果报名日起1个月内未收到报名成功邮件，请重新报名。</p>
        <p>4.一旦报名成功，请务必坚持到最后，否则，3年内拒绝报名参与本站所有课程。 </p>
        <p>5.如有疑问，可以咨询本站Q群：474805483。 </p>
      </ol>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'shi'
  }
</script>
<style scoped>
  #shi{
    height:1450px;
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
  #shi img{
    height:285px;
  }
  #shi ol{
    text-align:left;
    width:95%;
    margin-left:20px;
  }
  #shi ol li{
    line-height:40px;
    font-size:16px;
    margin-top:10px;
  }
  #shi ol p{
    line-height:40px;
    font-size:17px;
    margin-top:10px;
    margin-left:-40px;
  }
  .btn{
    background-color:dodgerblue;
    width:120px;
    border-radius:8px;
    color:white;
    margin-top:50px;
    font-size:15px;
  }
  p{
    width:95%;
    margin-left:20px;
  }
  .ji {
    font-weight:bold;
  }
  .hi1 {
    font-size:17px;
    width:95%;
    height:35px;
    background-color:#5bc0de;
    margin-left:20px;
    color:white;
    padding-top:5px;
    margin-top:30px;
    text-align:left;
  }
</style>
