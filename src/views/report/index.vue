<template>
  <div class="aaa">

 
  <div class="aaa" v-if="!isshowend">

    <Head :system="`第${index}题`"></Head>
    <div class="box">
      <div v-if="index == 1">
        <div class="title">第{{ index }}题(填空题):</div>
        <div class="content">屋内一间房，有门没有窗，春风吹不进，四季冰凉凉.</div>
        <van-cell-group>
          <van-field v-model="anser" label="答案:" placeholder="请输入答案" />
        </van-cell-group>
      </div>
      <div v-if="index == 2">
        <div class="title">第{{ index }}题(选择题):</div>
        <div class="content">三国演义中,刘备没发迹前,是干什么行业的?</div>
        <van-radio-group v-model="radio">
          <van-radio name="1">杂货</van-radio>
          <van-radio name="2">草鞋</van-radio>
          <van-radio name="3">丝织品</van-radio>
          <van-radio name="4">酒</van-radio>
        </van-radio-group>
      </div>
      <div v-if="index == 3">
        <div class="title">第{{ index }}题(判断题):</div>
        <div class="content">电视剧《狂飙》中,徐江的儿子徐磊是被高启强杀害的.</div>
        <van-radio-group v-model="radio">
          <van-radio name="1">对</van-radio>
          <van-radio name="2">错</van-radio>
        </van-radio-group>
      </div>
      <div v-if="index == 4">
        <div class="title">第{{ index }}题(选择题):</div>
        <div class="content">以下哪种草药是真的?</div>
        <van-radio-group v-model="radio">
          <van-radio name="1">犀牛血</van-radio>
          <van-radio name="2">骆驼屎</van-radio>
          <van-radio name="3">老虎尿</van-radio>
          <van-radio name="4">马骝肝</van-radio>
          <van-radio name="5">鳄鱼泪</van-radio>
          <van-radio name="6">狐狸精</van-radio>
        </van-radio-group>

      </div>
      <div v-if="index == 5">
        <div class="title">第{{ index }}题(选择题):</div>
        <div class="content">春种一粒粟,秋收万颗子.______,农夫犹饿死.请选择第三句古诗是什么?</div>
        <van-radio-group v-model="radio">
          <van-radio name="1">只缘五斗米</van-radio>
          <van-radio name="2">少年何处去</van-radio>
          <van-radio name="3">四海无闲田</van-radio>
          <van-radio name="4">盎中无米储</van-radio>
        </van-radio-group>

      </div>
      <div v-if="index == 6">
        <div class="title">第{{ index }}题(脑筋急转弯):</div>
        <div class="content">人在草木中,打一字</div>
        <van-cell-group>
          <van-field v-model="anser" label="答案:" placeholder="请输入答案" />
        </van-cell-group>

      </div>
      <div v-if="index == 7">
        <div class="title">第{{ index }}题(脑筋急转弯):</div>
        <div class="content">长了四条腿，走路却不会</div>
        <van-cell-group>
          <van-field v-model="anser" label="答案:" placeholder="请输入答案" />
        </van-cell-group>

      </div>
      <div v-if="index == 8">
        <div class="title">第{{ index }}题(选择题):</div>
        <div class="content">电影《食神》中,濑尿牛肉丸号称'好吃，好玩，又新奇",分别是?</div>
        <van-checkbox-group v-model="checkboxGroup1">
          <van-checkbox v-for="item in list" :name="item.key" :key="item.key">{{ item.value }}</van-checkbox>
        </van-checkbox-group>
      </div>
      <div v-if="index == 9">
        <div class="title">第{{ index }}题(填空题):</div>
        <div class="content">牛顿是因为哪种物品启发万有引力定律的?</div>
        <van-cell-group>
          <van-field v-model="anser" label="答案:" placeholder="请输入答案" />
        </van-cell-group>
      </div>
      <div v-if="index == 10">
        <div class="title">第{{ index }}题(填空题):</div>
        <div class="content">除加冰外,热奶茶加什么可以变成冻奶茶?</div>
        <van-cell-group>
          <van-field v-model="anser" label="答案:" placeholder="请输入答案" />
        </van-cell-group>
      </div>

      <div class="btn">
        <van-button type="primary" @click="go">提交答案</van-button>
      </div>
      <div class="btn">
        <van-button type="info" @click="next" :disabled="index == 10 ">下一题</van-button>
      </div>
      <div class="tip">
        线索: <span class="tips">{{ tip }}</span>
      </div>
      <div class="btn" v-if="index==10">
      <van-button type="info" @click="get">获取生日礼物</van-button>
    </div>
    </div>
  </div>
  <div>
    <van-dialog @confirm="confirm" v-model="show" title="请输入密码" show-cancel-button>
      <van-cell-group>
        <van-field v-model="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </van-dialog>
    
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
      show: false,
      password: '',
      isshowend: false,
      checkboxGroup1: [],
      list: [
        {
          key: 0,
          value: '治好厌食症'
        },
        {
          key: 9,
          value: '治好糖尿病'
        },
        {
          key: 10,
          value: '治好高血压'
        },
        {
          key: 1,
          value: '打乒乓球'
        },
        {
          key: 2,
          value: '打桌球'
        },
        {
          key: 3,
          value: '弹波珠球'
        },
        {
          key: 4,
          value: '增加智商,考试100分'
        },
        {
          key: 5,
          value: '变壮'
        },
        {
          key: 6,
          value: '变矮'
        },
        {
          key: 7,
          value: '变高'
        },
        {
          key: 8,
          value: '变靓'
        },
      ],
      index: 1,
      anser: '',
      radio: '1',
      isShowTip: false,
      tip: '',
      isshowimg:false
    };
  },
  methods: {
    confirm() {
      console.log(this.password);
      if (this.password == 1328163191) {
        this.$toast({
          message: '密码正确',
          position: 'top',
          icon: 'success',
          onClose:(()=>{
            this.$router.push(`/img`);
          })
        });
      } else{
        this.$toast.fail('对不起,密码错误.')
      }
    },
    sorting(a) {
      return a.sort((a, b) => {
        // a - b正序 b - a倒序
        return a - b;
      })
    },
    next() {
      this.index++
      this.isShowTip = false
      this.tip = ''
      this.radio = '1'
      this.anser =''
    },
    get() {
      this.show = true
    },
    go() {
      if (this.index == 1) {
        if (this.anser == '冰箱') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '冰箱'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 2) {
        if (this.radio == '2') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '鞋'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 3) {
        if (this.radio == '2') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '高启强开始送什么礼物给小龙和小虎要求摊位不变'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 4) {
        if (this.radio == '3') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '老虎属于猫科动物'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 5) {
        if (this.radio == '3') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '米'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 6) {
        if (this.anser == '茶') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '茶叶'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 7) {
        if (this.anser == '凳子') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '凳子'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 8) {
        let arr = []
        this.sorting(this.checkboxGroup1)
        this.checkboxGroup1.forEach((item) => {
          arr.push(item)
        });
        console.log(arr.toString());
        if (arr.toString() == '0,1,4,5,8') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '厨房'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 9) {
        if (this.anser == '苹果') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '苹果'
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      } else if (this.index == 10) {
        if (this.anser == '2块') {
          this.$toast.success('恭喜你,答对了')
          this.isShowTip = true
          this.tip = '存放钱的地方'
          // this.isshowend = true
        } else {
          this.$toast.fail('对不起,答案错误.')
          this.isShowTip = false
        }
      }
    }
  }
}
</script>
  
<style lang="scss" scoped>
.aaa {
  height: 100%;
}

.box {
  height: 100%;
  padding: 15px;
  text-align: left;
  background: #eee;

  .title {
    font-size: 20px;
    margin: 20px 0;

  }

  .content {
    text-indent: 15px;
    font-size: 18px;
    margin: 20px;
  }
}

.btn {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tips {
  color: #df1616;
}
</style>