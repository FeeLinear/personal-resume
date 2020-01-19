<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
      <span @click="toggleLanguage">toggle</span>
    <router-view />
  </div>
</template>
<script>
import enStyle from './assets/style/en.useable.scss';
console.log('enStyle')
setTimeout(() => {
console.log(enStyle)
},3000)
// import cnStyle from './assets/style/cn.css';
export default {
  data(){
    return {
      obj: null
    }
  },
  methods: {
    toggleLanguage() {
      if (this.$i18n.locale === "zh-CN") {
        // cnStyle.unuse()
        //enStyle.use()
        this.$i18n.locale = "en-US";
        localStorage.setItem("lang", "en-US");
      } else {
        //enStyle.unuse()
        // cnStyle.use()
        this.$i18n.locale = "zh-CN";
        localStorage.setItem("lang", "zh-CN");
      }
    }
  }
};
</script>
<style lang="scss">
html {
  height: 100%;
  width: 800px;
  margin: 0 auto;
}
body {
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(75, 150, 150, 1),
    rgba(75, 150, 150, 0)
  );
  background-repeat-y: no-repeat;
}

.clearfix {
  /* IE */
  zoom: 1;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

