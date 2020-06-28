<template>
  <div id="rec">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.imageUrl">
        <img :src="item.imageUrl" class="banners" />
        <em class="typeTitle">{{item.typeTitle}}</em>
      </mt-swipe-item>
    </mt-swipe>

    <div class="square">
      <div class="square-inner grid">
        <div v-for="play in PlayList" :key="play.id">
          <div>
            <img :src="play.picUrl" />
          </div>
          <div>{{play.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [],
      PlayList: []
    };
  },
  created() {
    this.getBrannerList();
    this.getPlayList(0);
  },
  methods: {
    getBrannerList() {
      this.$addr.get("/banner").then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.bannerList = res.data.banners;
        }
      });
    },
    getPlayList() {
      this.$addr.get("/personalized", { params: { limit: 18 } }).then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.PlayList = res.data.result;
        }
      });
    }
  }
};
</script>


<style>
.banners {
  width: 100%;
  height: 100%;
}
.typeTitle {
  position: absolute;
  right: 0;
  bottom: 0px;
  background: red;
  color: rgb(255, 255, 255);
  padding: 5px 5px;
  border-radius: 10px 0 0 0;

  font-size: 18px;
  font-style: normal;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 相当于 1fr 1fr 1fr */
  grid-template-rows: repeat(3, 1fr); /* fr单位可以将容器分为几等份 */
  grid-gap: 1%; /* grid-column-gap 和 grid-row-gap的简写 */
  grid-auto-flow: row;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.grid > div {
  color: #000;
  line-height: 2;
  text-align: center;

  word-break: break-all;
}
.grid > div > div {
  margin: 0 auto;
  width: 120px;
  font-size: 13px;
}
.grid > div > div > img {
  width: 120px;
  height: 120px;
  border-radius: 15%;
}

</style>