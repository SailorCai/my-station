<template>
  <section>
    <div class="mid_mid">
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-home" aria-hidden="true"></i></span>
        </div>
        <span class="icon_text">首页</span>
      </div>
      
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-pagelines" aria-hidden="true"></i></span>
        </div>
        <span class="icon_text">技术站</span>
      </div>
      
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle" style="color:red !important;"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
        </div>
        <span class="icon_text">生活记</span>
      </div>
      
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-paper-plane" aria-hidden="true"></i></i></span>
        </div>
        <span class="icon_text">csdn博客</span>
      </div>
      
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-github" aria-hidden="true"></i></span>
        </div>
        <span class="icon_text">github</span>
      </div>
      
      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-coffee" aria-hidden="true"></i></i></span>
        </div>
        <span class="icon_text">码云</span>
      </div>

      <div class="icon_item">
        <div class="icon_box">
          <span class="icon_circle"><i class="fa fa-user" aria-hidden="true"></i></span>
        </div>
        <span class="icon_text">站长信息</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
  .mid_mid{
    padding:0 10%;
    width:80%;
    max-width:500px;
    margin:0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
  }
  .mid_mid .icon_item{
    box-sizing: border-box;
    width:55px;
    text-align:center;
    font-size:17px;
    cursor:pointer;
    margin:10px 0;
  }
  .icon_item .icon_box{
    width:100%;
    text-align:center;
    float:left;
  }
  .icon_item .icon_circle{
    width:25px;
    height:25px;
    display:inline-block;
    border:1px solid white;
    border-radius:50%;
    text-align:center;
    margin:0 auto;
  }
  .mid_mid .icon_text{
    display:inline-block;
    width:100%;
    font-size:12px;
    float:left;
    visibility: hidden;
  }
  .icon_item:hover .icon_text{
    visibility: visible;
    color:#3DB8F5;
  }
  .icon_item:hover .icon_circle{
    border-color:#3DB8F5;
    color:#3DB8F5;
  }
</style>
