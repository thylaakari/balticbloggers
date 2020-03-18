<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import "~bootstrap/dist/css/bootstrap.min.css";

  html, body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
  }
  #app {
    height: 100%;
  }
  body {
    background-color: #fffcfc;
  }
  .btn-light {
    background-color: #ed4e81;
    color: #fff;
  }
  .btn-primary {
    background-color: #3f53b2;
    color: #fff;
  }
  .bottom-sep {
    width: 40%;
    height: 5px;
    background-color: #000000;
    border-radius: 100px;
    position: fixed;
    bottom: 10px;
    transform: translateX(-50%);
    left: 50%;
  }
  .arrow-back  {
    margin-top: 30px;
  }
  .rect {
    width: 93px;
    height: 195px;
    transform: rotate(34deg);
    border-radius: 44px;
    background-color: #ffe2e2;
    position: fixed;
    right: -73px;
  }
  .rect2 {
    width: 93px;
    height: 195px;
    transform: rotate(34deg);
    border-radius: 44px;
    background-color: #ffe2e2;
    position: fixed;
    left: -109px;
    bottom: 126px;
  }
</style>