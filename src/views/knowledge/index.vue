<template>
  <div>

    <Head :system="'科普小知识'"></Head>
    <div class="detail">
      <div class="card">
        <img src="../../assets/1.jpg" alt="">
      </div>
      <div class="title">
        标题
      </div>
<div class="content">{{ content }}</div>
    </div>
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
      content:'内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统内分泌系统',
    };
  },
  
}
</script>
  
<style lang="scss" scoped>
.detail {
  padding: 10px;
}

.card {
  text-align: left;
  padding: 10px;
  height: 100px;
  border-radius: 10px;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100px;
  }

}

.title {

  font-size: 20px;
  font-weight: 700;
}
.content{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
}
</style>