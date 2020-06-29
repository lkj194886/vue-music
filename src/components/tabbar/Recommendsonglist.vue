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
        <div v-for="play in PlayList" :key="play.id" @click="playdetails(play.id)">
          <div>
            <img :src="play.picUrl" />
          </div>
          <div class="playname">{{play.name}}</div>
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
      this.$axios.get("/banner").then(res => {
        if (res.data.code == 200) {
          this.bannerList = res.data.banners;
        }
      });
    },
    getPlayList() {
      this.$axios.get("/personalized", { params: { limit: 12 } }).then(res => {
        if (res.data.code == 200) {
          this.PlayList = res.data.result;
        }
      });
    },
    playdetails(id) {
      console.log(id);
      this.$router.push({
        name: "playlist",
        params:{
          playid:id
        }
      });
    }
  }
};
</script>


<style>
#rec {
  height: auto;
  width: auto;
  margin: 0 auto;
}
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
  margin: 0 auto;
  width: 100px;
}
.playname {
  text-align: center;
  width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 auto;
  font-size: 12px;
}
.grid > div > div > img {
  height: 100px;
  border-radius: 15%;
}
.grid > div:hover {
  opacity: 0.7;
}
</style>