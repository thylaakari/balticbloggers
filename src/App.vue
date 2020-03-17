<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import "~bootstrap/dist/css/bootstrap.min.css";

  html, body {
    height: 100%;
  }
  #app {
    height: 100%;
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
    position: absolute;
    bottom: 10px;
    transform: translateX(-50%);
    left: 50%;
  }
</style>