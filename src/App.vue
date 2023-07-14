<template>
  <div id="app">
    <router-view>
      <checkList>
    </checkList>
    </router-view>
  
  </div>
</template>

<script>
import checkList from './views/checkList'

export default {
  name: 'App',
  components: {
    checkList
  },
  mounted() {
      // this.initVconsole();
    },
  methods: {
      //初始化vconsole
      initVconsole() {
        import('vconsole')
          .then(VConsole => {
            return new VConsole.default()
          })
          .then(() => {

          })
          .catch(err => {
            console.error(err);
          });
      },
    },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
<style>
html, body, #app {

  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
