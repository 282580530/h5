<template>
  <div>

    <Head :system="'内分泌系统'"></Head>
    <div class="detail">
      <div class="card">
        <div class="title">甲状腺彩超</div>
        <div>超声科</div>
        <div class="doctor">
          <div>检查医生:&nbsp;梁志远
          </div>
          <div>检查日期:&nbsp;2022-02-02
          </div>
        </div>
      </div>
      <div class="checkresult">
        <div class="result">
          <div class="icon"></div>
          <div>检查结果</div>
        </div>
        <div class="resultContent">
          新闻，也叫消息、资讯，是通过报纸、电台、广播、电视台等媒体途径所传播信息的一种称谓。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分，就其广义新闻，也叫消息、资讯，是通过报纸、电台、广播、电视台等媒体途径所传播信息的一种称谓。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分，就其广义新闻，也叫消息、资讯，是通过报纸、电台、广播、电视台等媒体途径所传播信息的一种称谓。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分，就其广义新闻，也叫消息、资讯，是通过报纸、电台、广播、电视台等媒体途径所传播信息的一种称谓。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分，就其广义 新闻，也叫消息、资讯，是通过报纸、电台、广播、电视台等媒体途径所传播信息的一种称谓。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分，就其广义而言，除了发表于报刊、广播、互联网、电视上的评论与专文外的常用文本都属于新闻之列...
        </div>
      </div>
      <div class="checkresult">
        <div class="result">
          <div class="icon"></div>
          <div>医生建议</div>
        </div>
        <div class="resultContent">
           医生建议斤斤计较就军军
        </div>
      </div>
      <div class="checkresult" >
        <div class="result" @click="goknowledge">
          <div class="icon"></div>
          <div class="report">科普小知识</div>
        </div>
      </div>

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
    };
  },
  methods:{
    goknowledge(){
      console.log(123);
      this.$router.push(`/knowledge`);
    }
  }
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

  .title {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .doctor {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
}
.checkresult{
margin-top: 10px;
.result {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;

  .icon {
    width: 5px;
    height: 10px;
    background: skyblue;
    margin-right: 5px;
  }
}
.resultContent{
  text-align: left;
  font-size: 14px;
  max-height: 200px;
  overflow: auto;
}
.report{
  color:skyblue;
  text-decoration: underline;
}
}

</style>