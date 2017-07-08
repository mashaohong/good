<template>
  <div class="shixun">
    <div class="input-group">
      <input type="text" class="form-control">
      <div class="input-group-addon isa">搜索</div>
    </div>
    <span class="onh">课程类型：</span>
    <span class="onh1"><a>线下实训</a></span>
    <span class="onh1"><a>线上课程</a></span>
    <img src="../assets/success2.png">
    <span class="xs1">暂无课程</span>
  </div>
</template>
<script>
 export default {
   name: 'shixun'
 }
</script>
<style>
  .input-group {
    width:65%;
    margin-left:100px;
    margin-top:90px;
    border:4px solid dodgerblue;
  }
  .isa {
    background-color:dodgerblue;
    color:white;
  }
  .onh {
    float:left;
    margin-left:100px;
    margin-top:20px;
    font-weight:bold;
  }
  .onh1 {
    float:left;
    margin-left:20px;
    margin-top:20px;
    font-size:15px;
    margin-bottom:500px;
  }
  .shixun img {
    height:100px;
    margin-left:200px;
    margin-top:200px;
    float:left;
  }
  .onh1 :hover {
    background:dodgerblue;
    text-decoration:none;
    color:white;
    padding: 10px 15px;
  }
  </style>
  <style>
    a {
      color:black;
    }
    .xs1 {
      float:left;
      margin-left:-92px;
      margin-top:-240px;
      width:100%;
    }
    .input-group-addon {
      padding:10px 15px;
      background:dodgerblue;
    }
</style>
