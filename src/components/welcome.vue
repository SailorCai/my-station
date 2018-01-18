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
        <v-nav></v-nav>
        <div class="mid_bottom"></div>
      </div>
      <div class="bottom">
        <div class="bottom_word">If you do not learn to think when you are young, you may never learn. &nbsp;&nbsp;&nbsp;&nbsp;——Edison</div>
        <div class="bottom_text">友情链接：<a href="http://www.gnnu.cn/" target="_blank">赣南师范大学</a><a href="http://dz.cppfoto.com/activity/home.aspx?activity=309" target="_blank">围屋之乡</a><a href="http://www.jxln.ccoo.cn/" target="_blank">龙南信息网</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from '@/components/nav/nav'
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-nav': nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*手机样式*/
  @media screen and (max-width:500px){
    .page_wrapper{
      /* background-image:url(../../static/images/1.jpg); */
    }
    .top_down{font-size:20px !important;}
    .mid_top{font-size:15px;}
  }
  /*pc样式*/
  @media screen and (min-width:500px){
    .page_wrapper{
      /* background-image:url(../../static/images/2.jpg); */
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
    height:20%;
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
    height:50%;
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
  .bottom_word{
    width:80%;
    padding:30px 10%;
    font-size:14px;
    font-weight:normal;
    text-align:center;
    position:absolute;
    top:0px;
  }
  .bottom_text{
    width:80%;
    padding:30px 10%;
    font-size:12px;
    font-weight:normal;
    text-align:center;
    position:absolute;
    bottom:0px;
  }
  .bottom_text a{
    color:#3DB8F5;
    display:inline-block;
    padding:0 5px;
    cursor:pointer;
  }
</style>
