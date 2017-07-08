<template>
  <div class="xian-xia">
    <div id="test" class="wrap">
      <ul>
        <li data-id="a" class="active">
          <span>热门专题</span>
        </li>
        <li data-id="b" class="active">
          <span>前端开发</span>
        </li>
        <li data-id="c" class="active">
          <span>后端开发</span>
        </li>
        <li data-id="d" class="active">
          <span>移动开发</span>
        </li>
        <li data-id="e" class="active">
          <span>其他领域</span>
        </li>
      </ul>
      <div id="sub" class="none">
        <div id="a" class="sub-content none">
          <div class="a1">
            <img src="../assets/xingxing.png"/>
            <div class="a11">
              <h4>Java基础（快班）现半价火热招生中</h4>
              <p class="wi6">Java基础班，讲解基本的Java基础知识，学员通过本课程的学习，可以基本掌握Java研发工程师的基础知识，开发出简单应用程序。</p>
              <span class="wi6">讲师：Gates Zhao</span>
              <span class="wi6">课程类别：Java基础【L1】</span>
              <span class="wi6">面授时间：2天</span>
              <span class="wi6">方式：面授+课后作业+技术指导</span>
            </div>
          </div>
          <div class="a2">
            <img src="../assets/xingxing.png"/>
            <div class="a22">
              <h4>J2EE基础（快班）现半价火热招生中</h4>
              <p class="wi6">JJ2EE基础快班，以实战为主，理论为辅，讲述目前主流的J2EE开发框架、开发流程、开发方法，通过本课程的学习，学员...</p>
              <span class="wi6">讲师：Gates Zhao</span>
              <span class="wi6">课程类别：J2EE基础【L2】</span>
              <span class="wi6">面授时间：5天</span>
              <span class="wi6">方式：面授+课后作业+技术指导</span>
            </div>
          </div>
          <div class="a2">
            <img src="../assets/xingxing.png"/>
            <div class="a22">
              <h4>J2EE进阶（快班）现半价火热招生中</h4>
              <p class="wi6">Java基础班，讲解基本的Java基础知识，学员通过本课程的学习，可以基本掌握Java研发工程师的基础知识，开发出简单应用程序。</p>
              <span class="wi6">讲师：Gates Zhao</span>
              <span class="wi6">课程类别：J2EE进阶【L3】</span>
              <span class="wi6">面授时间：5天</span>
              <span class="wi6">方式：面授+课后作业+技术指导</span>
            </div>
          </div>
          <div class="mi1"><a>更多课程<i>&gt;&gt;</i></a></div><br><br><br><br>
        </div>
        <div id="b" class="sub-content none">
          <h5 class="wi6">目录分类</h5>
          <ul>
            <a v-link="">HTML/HTML5</a><i>/</i>
            <a v-link="">CSS/CSS3</a>/
            <a v-link="">JavaScript</a>/
            <a v-link="">JQuery</a>/
            <a v-link="">AJAX</a>/
            <a v-link="">JSON</a><br>
            <a v-link="">JSP</a>/
            <a v-link="">Freemarker</a>/
            <a v-link="">Bootstrap</a>
          </ul><br><br><br><br><br><br>
          <h5 class="wi7">推荐课程</h5>
          <div class="zi">
            <img src="../assets/xingxing.png"/>
            <h3>Bootstrap专题</h3>
            <p>介绍Bootstrap框架的理论，软件，技术与实践</p>
            <span>课程类别：bootstrap</span>
            <span>适学者：中级</span>
          </div>
            <div class="yo">
              <img src="../assets/xingxing.png"/>
              <h3>CSS/CSS3专题</h3>
              <p>介绍CSS/CSS3的理论，软件，技术与实践</p>
              <span>课程类别：CSS/CSS3</span>
              <span>适学者：中级</span>
            </div>
        </div>
        <div id="e" class="sub-content none">
          <h5 class="wi6">目录分类</h5>
          <ul>
            <a v-link="">IaaS </a>
            <a v-link=""> PaaS</a>
            <a v-link="">  SaaS </a>
            <a v-link=""> 大数据框架与技术</a>
            <a v-link="">大数据挖掘 </a>
            <a v-link=""> 全文搜索</a>
            <a v-link=""> 分布式存储</a>
          </ul><br><br><br><br><br><br>
          <h5  class="wi7">推荐课程</h5>
          <div class="zi">
            <img src="../assets/xingxing.png"/>
            <h3>大数据基础</h3>
            <p>介绍大数据入门的相关理论，软件，技术与实践</p>
            <span>课程类别：大数据</span>
            <span>适学者：中级</span>
          </div>
          <div class="yo">
            <img src="../assets/xingxing.png"/>
            <h3>云计算基础</h3>
            <p>介绍云计算入门的相关理论，软件，技术与实践</p>
            <span>课程类别：云计算</span>
            <span>适学者：中级</span>
          </div>
        </div>
        <div id="d" class="sub-content none">
          <h5 class="wi6">目录分类</h5>
          <ul>
            <a v-link="">HTML移动开发</a>
            <a v-link="">  Android移动开发</a>
            <a v-link=""> iOS移动开发 </a>
            <a v-link=""> 微信开发</a>
          </ul><br><br><br><br><br><br>
          <h5 class="wi7">推荐课程</h5>
          <div class="zi">
            <img src="../assets/xingxing.png"/>
            <h3>HTML5移动开发</h3>
            <p>介绍HTML5移动开发的相关理论，软件，技术与实践</p>
            <span>课程类别：HTML5</span>
            <span>适学者：中级</span>
          </div>
        </div>
        <div id="c" class="sub-content none">
          <h5 class="wi6">目录分类</h5>
          <ul>
            <a v-link="">Python</a><i>/</i>
            <a v-link=""> Java</a>/
            <a v-link=""> J2EE </a>/
            <a v-link=""> Maven</a>/
            <a v-link=""> Tomcat </a>/
            <a v-link=""> Eclipse </a><br>
            <a v-link=""> WebService</a>/
            <a v-link="">SSM框架 </a>/
            <a v-link="">SQL</a>
            <a v-link=""> MySQL </a>
            <a v-link="">设计模式</a>
          </ul><br><br><br><br><br><br>
          <h5 class="wi7">推荐课程</h5>
          <div class="zi">
            <img src="../assets/xingxing.png"/>
            <h3>J2EE基础</h3>
            <p>介绍Java语言基础的相关理论，软件，技术与实践</p>
            <span>课程类别：J2EE</span>
            <span>适学者：初级</span>
          </div>
          <div class="yo">
            <img src="../assets/xingxing.png"/>
            <h3>J2EE进阶</h3>
            <p>介绍Java企业级的相关理论，软件，技术与实践</p>
            <span>课程类别：J2EE</span>
            <span>适学者：中级</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-undef */

  export default {
  }

  $(document).ready(function () {
    var sub = $('#sub')
    var activeRow
    var activeMenu
    $('#test')
      .on('mouseenter', function (e) {
        sub.removeClass('none')
      })
      .on('mouseleave', function (e) {
        sub.addClass('none')

        if (activeRow) {
          activeRow.removeClass('active')
          activeRow = null
        }
        if (activeMenu) {
          activeMenu.addClass('none')
          activeMenu = null
        }
      })
      .on('mouseenter', 'li', function (e) {
        if (!activeRow) {
          activeRow = $(e.target).addClass('active')
          activeMenu = $('#' + activeRow.data('id'))
          activeMenu.removeClass('none')
          return
        }

        activeRow.removeClass('active')
        activeMenu.addClass('none')

        activeRow = $(e.target)
        activeRow.addClass('active')
        activeMenu = $('#' + activeRow.data('id'))
        activeMenu.removeClass('none')
      })
  })
</script>
<style scoped>
  .wrap{
    position:relative;
    width:200px;
    left:62px;
    top:-5px;
    margin-top:-470px;
  }
  #test ul{
    padding:15px 0;
    margin: 9px;
    list-style:none;
    background-color:diaphanous;
    color:black;
    border-right-width:0;
  }
  li{
    display:block;
    height:89.9px;
    line-height:80px;
    padding-left:12px;
    cursor:pointer;
    font-size:14px;
    position:relative;
  }
  li.active{
    background:grey;
  }
  li span:hover{
    color:red;
  }
  #sub{
    width:870px;
    position:absolute;
    border:1px solid #f7f7f7;
    background:#f7f7f7;
    box-shadow:2px 0 5px rgba(0,0,0,.3);
    left:200px;
    top:0;
    box-sizing:border-box;
    margin:0;
    padding:10px;
  }
  .none{
    display:none;
  }
  .a1{
    width:100%;
    height:120px;
    background:lightblue;
    float:left;
  }
  .a1 img{
    width:120px;
    background:blue;
    margin-top:20px;
    float:left;
    margin-left:10px;
  }
  .a1 p{
    font-size:14px;
    line-height:16px;
    text-align:left;
  }
  .a11{
    float:left;
    margin-left:5px;
    width:70%;
  }
  .a2{
    width:100%;
    height:120px;
    background:lightblue;
    float:left;
    margin-top:10px;
  }
  .a2 img{
    width:120px;
    background:blue;
    margin-top:20px;
    float:left;
    margin-left:10px;
  }
  .a2 p{
    font-size:14px;
    line-height:16px;
    text-align:left;
  }
  .a22{
    float:left;
    margin-left:5px;
    width:70%;
  }
 .mi1{
   background:lightblue;
   width:870px;
   height:25px;
   float:left;
   margin-top:15px;
   margin-left:-11px;
   padding-top:3px;
 }
 .mi1 a:hover{
   text-decoration:none;
 }
  #b ul{
    float:left;
    background:white;
    margin-top:40px;
    margin-left:-50px;
  }
  #b ul a{
    float:left;
    width:100px;
  }
  #b ul a:hover{
    text-decoration:none;
  }
  .zi{
    width:49%;
    height:150px;
    float:left;
    background:lightblue;
  }
  .yo{
    width:49%;
    height:150px;
    float:left;
    background:lightblue;
    margin-left:10px;
  }
  .zi img{
    width:150px;
    background:blue;
    float:left;
    margin-top:15px;
    margin-left:10px;
  }
  .yo img{
    width:150px;
    background:blue;
    float:left;
    margin-top:15px;
    margin-left:10px;
  }
  #c ul{
    float:left;
    background:white;
    margin-top:40px;
    margin-left:-50px;
  }
  #c ul a{
    float:left;
    width:100px;
  }
  #c ul a:hover{
    text-decoration:none;
  }
  #d ul{
    float:left;
    background:white;
    margin-top:40px;
    margin-left:-50px;
  }
  #d ul a{
    float:left;
    width:150px;
  }
  #d ul a:hover{
    text-decoration:none;
  }
  #e ul{
    float:left;
    background:white;
    margin-top:40px;
    margin-left:-50px;
  }
  #e ul a{
    float:left;
    width:100px;
  }
  #e ul a:hover{
    text-decoration:none;
  }
  .wi6 {
    float:left;
  }
  .wi7 {
    text-align:left;
    margin-top:120px;
  }
</style>
