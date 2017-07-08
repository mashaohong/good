<template>
  <div class="zuo-1">
    <div id="okk" class="cicl">
      <ul>
        <li data-id="g" ><span>行业动态</span></li>
        <li data-id="h"><span>公司动态</span></li>
        <li data-id="j" class="active"><span>产品动态</span></li>
      </ul>
      <div id="su">
        <div id="j" class="su-content">
          <div id="zuo1">
            <img src="../assets/星.png"/>
            <div id="zuo11">
              <h3><a class="v-link" href="/yan#/xin1">前星DevOps系统 V1.0正式版</a></h3>
              <span>2017年2月20日，广州前星信息科技有限公司（简称：前星科技）将发布前星DevOps系统V1.0正式版。</span>
            </div>
          </div>
          <div id="zuo2">
            <img src="../assets/星.png"/>
            <div id="zuo22">
              <h3><a class="v-link" href="/yan#/xin2">前星学院APP V1.0正式上线</a></h3>
              <span>前星学院APP V1.0正式上线</span>
            </div>
          </div>
          <div id="zuo3">
            <img src="../assets/星.png"/>
            <div id="zuo33">
              <h3><a class="v-link" href="/yan#/xin3">前星学院官网正式上线</a></h3>
              <span>前星学院官网正式上线</span>
            </div>
          </div>
        </div>
        <div id="h" class="su-content none"><h1>暂无动态</h1></div>
        <div id="g" class="su-content none"><h1>暂无动态</h1></div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-undef,no-unused-vars */

  export default {
  }

  $(document).ready(function () {
// eslint-disable-next-line no-unused-vars
    var sub = $('#su')
    var activeRow
    var activeMenu
    $('#okk')
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
    $('li.active').addClass('display', 'block')
  })

</script>
<style scoped>
  .cicl {
    position:relative;
    width:400px;
    top:0;
    left:850px;
  }
  #okk ul {
    list-style:none;
  }
  #okk ul li {
    float:right;
    width:80px;
    height:50px;
    line-height:50px;
    position:relative;
    cursor:pointer;
    display:block;
    margin-right:25px;
    padding-left:2px;
    margin-bottom:640px;
  }
  #okk li.active{
    border-bottom:2px solid lightblue;
  }
  #okk li span:hover {
    color:lightblue;
  }
  #okk li:hover {
    border-bottom:2px solid lightblue;
  }
  #su {
    width:2000px;
    padding-top:20px;
    position:absolute;
    top:130px;
    left:-860px;
    box-sizing:border-box;
    font-size:14px;
    background:#f7f7f7;
  }
  .none {
    display:none;
  }
  #zuo1{
    width:90%;
    height:180px;
    float:left;
    margin-top:50px;
    border-bottom: 1px solid #E9E9E9;
  }
  #zuo1 img{
    width:150px;
    height:150px;
    float:left;
    margin-left:200px;
  }
  #zuo11{
    width:70%;
    margin-left:400px;
    height:100px;
    text-align:left;
  }
  a{
    text-decoration:none;
    color:black;
  }
  a:hover{
    color:#2E6CFF;
  }
  #zuo2{
    width:90%;
    height:180px;
    float:left;
    border-bottom: 1px solid #E9E9E9;
    margin-top:20px;
  }
  #zuo2 img{
    width:150px;
    height:150px;
    float:left;
    margin-left:200px;
  }
  #zuo22{
    width:70%;
    height:100px;
    text-align:left;
    margin-left:400px;
  }
  #zuo3{
    width:90%;
    height:180px;
    float:left;
    margin-top:20px;
  }
  #zuo3 img{
    width:150px;
    height:150px;
    float:left;
    margin-left:200px;
  }
  #zuo33{
    width:70%;
    text-align:left;
    height:100px;
    margin-left:400px;
  }
  h1{
    margin-left:-600px;
    margin-top:200px;
  }
</style>
