<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import '../../node_modules/swiper/dist/css/swiper.min.css';
  
/*   @media (min-width: 1200px) {
    .container {
      width: 1200px;
      margin: 0 auto;
    }
  }

  @media (min-width: 980px) and (max-width: 1199px) {
    .container {
      width: 980px;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) and (max-width: 979px) {
    .container {
      width: 760px;
      margin: 0 auto;
    }
  }

  @media (max-width: 767px) {
    .container {
      width: 100%;
    }
  } */

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .container-fluid {
    width: 100%;
  }
  
  .row {
    display: flex;
  }

  .col-12 {
    width: 100%;
  }
  
  .col-11 {
    width: 91.6666%;
  }

  .col-10 {
    width: 83.3333%;
  }

  .col-9 {
    width: 75%;
  }

  .col-8 {
    width: 66.6666%;
  }

  .col-7 {
    width: 58.3333%;
  }

  .col-6 {
    width: 50%;
  }

  .col-5 {
    width: 41.6666%;
  }

  .col-4 {
    width: 33.3333%;
  }

  .col-3 {
    width: 25%;
  }

  .col-2 {
    width: 16.6666%;
  }

  .col-1 {
    width: 8.3333%;
  }

  .col-offset-1 {
    padding-left: 8.3333%;
  }

  .col-offset-2 {
    padding-left: 16.6666%;
  }

  .col-offset-3 {
    padding-left: 25%;
  }

  .col-offset-4 {
    padding-left: 33.3333%;
  }

  .col-offset-5 {
    padding-left: 41.6666%;
  }

  .col-offset-6 {
    padding-left: 50%;
  }

  .col-offset-7 {
    padding-left: 58.3333%;
  }

  .col-offset-8 {
    padding-left: 66.6666%;
  }

  .col-offset-9 {
    padding-left: 75%;
  }

  .col-offset-10 {
    padding-left: 83.3333%;
  }

  .col-offset-11 {
    padding-left: 91.6666%;
  }
   
  .direction-column {
    flex-direction: column;
  }    
  
  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-end {
    justify-content: flex-end;
  }

  .flex-center {
    justify-content: center;
  }

  .flex-between {
    justify-content: space-between;
  }

  .flex-around {
    justify-content: space-around;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,html {
    font-family: PingFangSC-Light, Helvetica, '微软雅黑', sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
  }

  ul, ol {
    list-style: none;
  }

  .img-responsive {
    max-width: 100%;
    height: auto;
  }

  .img-circle {
    border-radius: 50%;
  }

  .list-unstyled {
    list-style: none;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .text-white {
    color: #fff;
  }

  .text-muted {
    color: #999;
  }

  .text-dark {
    color: #333;
  }

  .bg-theme {
    background: #31c27c;
  }
  
  .center {
    margin-left: auto;
    margin-right: auto;
  }
      
  .small {
    font-size: 85% !important;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .relative {
    position: relative;
  }

  .text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }


</style>
