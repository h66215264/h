<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{name: 'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'seller'}">商家</router-link>
      </div>
    </div>
    <!--留坑-->
    <keep-alive><router-view :seller="seller"></router-view></keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    import {urlParse} from './common/js/util.js';

    export default {
        data() {
            return {
                seller: {
                    id: (() => {
                        let queryParm = urlParse();
                        return queryParm.id;
                    })()
                }
            };
        },
        components: {
            'v-header': header
        },
        created() {
            this.$axios.get('/api/seller?id=' + this.seller.id).then(response => {
                response = response.data;
                if (response.errno === 0) {
                    this.seller = Object.assign({}, this.seller, response.data);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))

      .tab-item
        flex: 1
        text-align: center

        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)

          &.active
            color: rgb(240, 20, 20)
</style>
