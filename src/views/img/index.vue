<template>
    <div class="aaa">
        <img src="../../assets/1.jpg" alt="" class="img" >
    </div>
  </template>
    
  <script>
  import Head from '../../components/head.vue'
  export default {
    components: {
      Head
    },
    data() {
      return {
      };
    },
    methods:{
      go(){
        this.$router.push(`/report`);
      },
    }
  }
  </script>
    
  <style lang="scss" scoped>
  .aaa{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
.img{
  width: 300px;
  height: 300px;
}
  </style>