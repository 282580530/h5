<template>
  <div>

    <Head :system="'内分泌系统'"></Head>
    <van-tabs v-model="active">
      <van-tab title="检查">
        <div v-for="(item,index) in checkList" :key="index" >
          <div class="checkContent" @click="go">
            <div>{{ item.title }}</div>
            <div class="bottom">
              <div>{{ item.title2 }}</div>
              <div>{{ item.date }}</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="检验">
        <div v-for="(item,index) in checkoutList" :key="index" >
          <div class="checkContent" @click="goList(item)">
            <div>{{ item.title }}</div>
            <div class="bottom">
              <div>{{ item.title2 }}</div>
              <div>{{ item.date }}</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
      active: 2,
      checkList:[
        {
          title:'甲状腺彩超',
          title2:'超声科',
          date:'2023/03/10'
        },
        {
          title:'外科',
          title2:'外科',
          date:'2023/03/10'
        }
      ],
      checkoutList:[
      {
          title:'检验甲状腺彩超',
          title2:'检验超声科',
          date:'2023/03/10',
          type:1
        },
        {
          title:'检验外科',
          title2:'检验外科',
          date:'2023/03/10',
          type:2
        }
      ]
    };
  },
  methods:{
    go(){
      console.log(123456)
      this.$router.push(`/report`);
    },
    goList(item){
      console.log(7777)
      item.type ==1 ?this.$router.push(`/resultList`):this.$router.push(`/history`);
    }
  }
}
</script>
  
<style lang="scss" scoped>
.checkContent{
  text-align: left;
  padding:20px 10px;
  font-size: 16px;
  border-bottom: 1px solid #e6e6e6;
  height: 50px;
  .bottom{
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>