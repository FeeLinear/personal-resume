<template>
  <div class="wrapper">
    <div class="pape_container">
      <header class="clearfix">
        <div class="head_left">
          <img class="head_img" src="../assets/logo.png" alt="">
        </div>
        <div class="head_right">
          <div class="line_wrap clearfix">
            <div v-for="(item, index) in baseInformation" :key="index" class="wrap_item clearfix">
              <span class="label">{{item.label}}</span>
              <span class="value">{{item.value}}</span>
            </div>
          </div>
        </div>
      </header>
      <section class="">{{$t("index.test")}}</section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'indexPC',
  data(){
    return {
      baseInformation: [
        {
          label: '姓名：',
          value: this.$t('index.title')
        },
        {
          label: '性别：',
          value: '男'
        },
        {
          label: '出生年月：',
          value: '1990-12'
        },
        {
          label: '学历：',
          value: '统招本科'
        },
        {
          label: '工作经验：',
          value: '六年'
        },
        {
          label: '手机号码：',
          value: '186 6458 5334'
        },
        {
          label: '邮箱：',
          value: '444730413@qq.com'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .pape_container{
    margin: 0 auto;
    background: pink;
    width: 700px;
    height: 1000px;
  }
  .head_left{
    float: left;
    width: 200px;
    height: 200px;
    position: relative;
    .head_img{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      transform: translate(-50%, -50%);
    }
  }
  .head_right{
    margin-left: 200px;
    .line_wrap{
      line-height: 50px;
      text-align: left;
      .wrap_item{
        float: left;
        width: 50%;
        .label{
          
        }
        .value{

        }
      }
    }
  }
</style>