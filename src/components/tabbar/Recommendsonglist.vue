<template>
  <div id="rec">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.imageUrl">
        <img :src="item.imageUrl" class="banners" />
        <em class="typeTitle">{{item.typeTitle}}</em>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBrannerList();
  },
  methods: {
    getBrannerList() {
      this.$addr.get("/banner").then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.bannerList = res.data.banners;
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
</style>