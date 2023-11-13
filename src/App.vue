<template>
  <HeaderComp />
  <hr>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
  components: {
    MainPage,
    HeaderComp
  },
};
</script>


<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1F538D;
  background: #000000;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

hr {
  border: 0;
  height: 1px;
  background: #1F538D;
}

</style>