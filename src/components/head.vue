<template>
    <div>
        <div class="head">
            <van-icon name="arrow-left"  @click="go"/>
            <div>{{ system }}</div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        system: {
            type: String,
            default: ''
        },
    },
    methods:{
        go(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    height: 40px;
    padding: 10px 20px 0 20px;
    border-bottom: 1px solid #e6e6e6;
}
</style>