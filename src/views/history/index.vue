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
        <div class="listTile">
          <div class="rank">项目</div>
          <div class="agent">结果</div>
          <div class="commission">
            单位
          </div>
        </div>
        <div class="resultContent">
          <van-list v-model="loading" :finished="finished" >
            <div v-for="(item, index) in dataList" :key="index" class="listData">
              <span class="rank">
                <div>{{ item.title }}</div>
                <div class="scope">参考范围{{item.scope}}</div>
              </span>
              <span class="agent">{{ item.result }}<van-icon name="arrow-up" class="up" /></span>
              <span class="commission">{{ item.unit }}</span>
            </div>
            <div class="total" v-if="finished">
              <span>共{{ dataList.length }}條</span>
            </div>
          </van-list>
        </div>
      </div>
      <div class="checkresult" >
        <div class="result" @click="goknowledge">
          <div class="icon"></div>
          <div class="report">科普小知识</div>
        </div>
      </div>
      <div class="checkresult">
        <div class="result">
          <div class="icon"></div>
          <div>历史报告</div>
        </div>
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
      dataList: [{ title: '血蛋白血蛋白血蛋白血蛋白血蛋白血蛋白血蛋白血蛋白血蛋白血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' }, { title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' }, { title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },{ title: '血蛋白', result: '500', isUp: true, unit: 'g/L',scope:'316-354' },],
      loading: false,
      finished: true,
    };
  },
  methods:{
    goknowledge(){
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

.checkresult {
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

  .resultContent {
    max-height: 300px;
    overflow: auto;
  }

  .report {
    color: skyblue;
    text-decoration: underline;
  }
}

.listTile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  height: 35px;

  .rank {
    width: 150px;
    text-align: center;
  }

  .agent {
    width: 50px;
    text-align: center;
  }

  .commission {
    width: 30px;
    text-align: center;
  }
}
.listData {
        font-family:inherit;
        font-size: 13px;
        text-align: center;
        font-weight: 500;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eee;
        min-height: 50px;
        padding: 5px 0;
        height: auto ;
        .up{
          margin-left: 5px;
        }
        .rank {
          display: inline-block;
          width: 150px;
          color: #333333;
           text-align: center;
           .scope{
            font-size: 8px;
            width: 100%;
           }
        }
        .agent {
          width: 50px;
          display: inline-block;
          color: #333333;
           text-align: center;
        }
        .commission {
          display: inline-block;
           text-align: center;
          width: 30px;
          color: #fd9207;
        }

      }
</style>