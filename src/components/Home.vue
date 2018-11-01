<template>
  <div>
    <div class="header">
      <drawer width="200px">

        <!-- drawer conent -->
        <div slot="drawer">
          <div>drawer conent</div>
        </div>

        <!-- main conent -->

      </drawer>
    </div>
    <swiper :list="swiperList" :show-desc-mask=false style="width:100%;margin:0;" height="230px" dots-position="center"></swiper>
    <div class="news-list">
      <div class="date-title">今日热闻</div>
      <div class="card-wrap" v-for="(item, index) in newsList" :key="index" @click="viewContent(item.id)">
        <div class="card">
          <div class="card-title">{{item.title}}</div>
          <div class="card-img-wrap">
            <img class="card-img" :src="item.image"></img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Drawer,
    Swiper,
    XHeader
  } from "vux";
  import {
    getLatestNews,
  } from '@/api/api'
  export default {
    name: "Home",
    components: {
      Drawer,
      Swiper,
      XHeader
    },
    data() {
      return {
        swiperList: [],
        newsList: []
      };
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        getLatestNews().then(res => {
          this.swiperList = res.top_stories.map((item, index) => {
            return {
              url: 'javascript:',
              img: item.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p'),
              title: item.title
            }
          })
          this.newsList = res.stories.map((item, index) => {
            return {
              id: item.id,
              image: item.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p'),
              title: item.title
            }
          });
        })
      },
      viewContent(id) {
        this.$router.push({
          name: 'Page',
          params: {
            id: id
          }
        })
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    height: 112px;
    background-color: #00a2ed;
  }

  .news-list {
    background-color: #f3f3f3;

    .date-title {
      height: 105px;
      line-height: 105px;
      padding-left: 30px;
      color: #757575;
      font-size: 28px;
      text-align: left;
    }

    .card-wrap {
      height: 200px;
      padding: 16px;

      .card {
        // width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
        display: flex;

        .card-title {
          width: 460px;
          font-size: 34px;
          color: #000;
          text-align: left;
          padding: 32px 36px;
        }

        .card-img-wrap {
          width: 228px;
          padding: 26px 32px;

          .card-img {
            width: 164px;
            height: 144px;
          }
        }
      }
    }
  }

</style>
<style>
  .vux-swiper-desc {
    font-size: 38px !important;
    padding-bottom: 45px !important;
  }

</style>
