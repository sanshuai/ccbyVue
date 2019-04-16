<template>
    <div id="home">
      <div class="homeOne">
        <img src="https://wx.chechebaby.cn/images/small-images/index-7.png">
        <div class="downBtn">
          <img src="https://wx.chechebaby.cn/images/small-images/index-8.png" />
          <div class="downView">
            <div class="downVip">
              <img src="https://wx.chechebaby.cn/images/small-images/index-9.png"/>
              <span class="joinMember">加入会员</span>
              <span class="vipDescribe">多重优惠轻松享</span>
            </div>
            <div class="downServe">
              <span class="joinMember">车辆服务</span>
              <spam class="vipDescribe">查车险 查违章</spam>
              <img src="https://wx.chechebaby.cn/images/small-images/index-10.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="homeTwo"></div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
  @import "../../style/base.css";
  .homeOne{
    width:100%;
    height:100%;
  }
  .homeOne > img{
    width:100%;
    height:10.38rem;
  }
  .downBtn{
    position:absolute;
    top:8.7rem;
    left:0;
    width:100%;
  }
  .downBtn > img{
    width:0.8rem;
    height:1.29rem;
    position:relative;
    left:50%;
    top:0;
    transform: translateX(-50%);
    z-index:99;
  }
  .downView{
    width:7.08rem;
    height:1.13rem;
    border:1px solid #ccc;
    position: relative;
    left:50%;
    top:-.55rem;
    transform:translateX(-50%);
    padding:.56rem 0 .53rem 0;
    border-radius:.25rem;
    box-shadow:0 0 .1rem #aaa;
    background: #fff;
  }
  .downVip{
    width:3.1rem;
    padding-left:0.4rem;
    border-right:1px solid #ccc ;
    float: left;
  }
  .downVip > img{
    width:.92rem;
    height:.95rem;
    float: left;
    margin-right:.3rem;
    margin-top:.1rem;
  }

 .joinMember{
    font-size:.30rem;
    font-weight:bold;
    color:#1d1d26;
    float:left;
    width:1.80rem;
    text-align:left;
    margin-top:.17rem;
  }
  .vipDescribe{
    font-size:.24rem;
    color:#666666;
    float:left;
    width:1.80rem;
    text-align:left;
    margin-top:.10rem;

  }
  .downServe{
    padding-left:.30rem;
    width:3.2rem;
    float: left;
  }
  .downServe > img{
    width:.94rem;
    height:.74rem;
    float:left;
    margin-left:.20rem;
    position:relative;
    top:-.40rem;
  }
</style>
