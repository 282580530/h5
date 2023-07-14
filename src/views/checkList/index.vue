<template>
  <div >
    <Head :system="'超级无敌答题系统'"></Head>
    <div class="title">欢迎来到超级无敌答题系统</div>
    <div class="box">
      <div class="content">&nbsp&nbsp 首先提前祝小林同学生日快乐,希望你天天开心,身体健康!现在我们进入游戏主题,当游戏进行完毕,就可以获得生日礼物一份.游戏规则如下:</div>
    <div class="rule">
      <div>
        1.系统每次会生成一条题目,每次答对会获得一个线索,线索可以寻找到对应的物品,物品里面存放的数字可以组合成密码,当获取密码后便可以解锁生日礼物.
      </div>
      <div>
      2.每个问题只有一次答题机会,答错则需要花费5元购买一个重新答题机会.
    </div>
    <div>
      3.题目类型分别分选择题,判断题,脑筋急转弯和填空题.
    </div>
    </div>
   
    <van-button type="info" class="go" @click="go">进入答题系统</van-button>
    <div class="remark">
      备注:最终解释权归开发者
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
    go(){
      this.$router.push(`/report`);
    },
  }
}
</script>
  
<style lang="scss" scoped>
.box{
  padding: 0px 15px;
}
.title{
  color: rgb(26, 219, 219);
  font-size: 30px;
  font-weight: 700;
  margin: 20px 0;
}
.content{
  color: rgb(228, 25, 25);
  text-align: left;
  font-size: 20px;
  font-weight: 20px;
  margin: 20px 0;
}
.rule{
  text-align: left;
  font-size: 16px;
}
.go{
  margin: 20px 0;
}
.remark{
  font-size: 10px;
  color: rgb(185, 240, 82);
}
</style>