<template>
  <div class="page_wrapper">
    <div class="content-wrapper">
      <div class="top">
        <div class="top_up">
          <el-button type="text" class="top_btn1">to be better</el-button>
          <el-button type="text" class="top_btn2">come on!!!</el-button>
        </div>
        <div class="top_down">wellcome!</div>
      </div>
      <div class="middle">
        <div class="mid_top">
          <p class="line1">这是一个个人网站</p>
          <p class="line2">—— 来自胜龙</p>
        </div>
        <div class="mid_mid">
          <el-button plain icon="el-icon-search" size="mini" round class="csl_btn"></el-button>
        </div>
        <div class="mid_bottom"></div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*手机样式*/
  @media screen and (max-width:500px){
    .page_wrapper{
      background-image:url(../../static/images/1.jpg);
    }
    .top_down{font-size:20px !important;}
    .mid_top{font-size:15px;}
  }
  /*pc样式*/
  @media screen and (min-width:500px){
    .page_wrapper{
      background-image:url(../../static/images/2.jpg);
    }
    .top_down{font-size:30px !important;}
    .mid_top{font-size:20px;}
  }
  .page_wrapper{
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-size:100% 100%;
    color:white;
  }
  .content-wrapper{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
  }
  .top{
    width:100%;
    height:30%;
    position:relative;
  }
  .top_up{
    padding:0 10px;
    overflow:hidden;
  }
  .top_up .el-button{
    color:white;
  }
  .top_btn1{
    float:left;
  }
  .top_btn2{
    float:right;
  }
  .top_down{
    width:70%;
    position:absolute;
    bottom:0;
    left:15%;
    border-bottom:1px solid white;
    color:white;
    text-align:center;
  }
  .middle{
    width:100%;
    height:40%;
    position:relative;
  }
  .mid_top{
    padding:20px 10px;
    width:80%;
    max-width:500px;
    margin:0 auto;
  }
  .mid_top p{
    text-align:center;
    line-height:30px;
  }
  .mid_top .line2{
    text-align:right;
  }
  .mid_mid{
    width:100%;
    max-width:600px;
  }
  .csl_btn{
    background-color:rgba(0,0,0,0);
    color:white;
  }
  .csl_btn:linked{
    background-color:rgba(0,0,0,0);
  }
  .csl_btn:active{
    background-color:rgba(0,0,0,0);
  }
  .bottom{
    width:100%;
    height:30%;
    position:relative;
  }
</style>
