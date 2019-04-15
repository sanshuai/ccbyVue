<template>
  <div id="tabNav">
    <ul>
      <li>
        <router-link to="/home">
          <div class="iconfont icon-shouye1"></div>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <div class="iconfont icon-shangdian"></div>
          <span>车商户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/singleCard">
          <div class="iconfont icon-mingpian"></div>
          <span>车宝贝</span>
        </router-link>
      </li>
      <li>
        <router-link to="/center">
          <div class="iconfont icon-wode"></div>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "tabNav"
    }
</script>

<style scoped>
  @import "../style/base.css";
  @import "../style/font/iconfont.css";
  #tabNav{
    width:100%;
    height:auto;
    position:fixed;
    left:0;
    bottom:0;
  }
  #tabNav>ul{
    display:flex;
    width: 100%;
    height:auto;
    overflow: hidden;
    border-top:1px solid #ccc;
    padding:5px 0;
  }
  #tabNav > ul > li{
    flex:3;
    height: auto;
    text-align:center;
    color: #1d1d26;
  }
  #tabNav > ul > li div{
    font-size:20px;
  }
  #tabNav > ul > li span{
    font-size: 15px;
    color: #1d1d26;
  }
</style>
