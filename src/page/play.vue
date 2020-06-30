<template>
  <div style="width: 100%">
    <aplayer :music="videoUpload.music" :autoplay="true" v-if="falg" :key="videoUpload.music.url"></aplayer>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import Bus from "@/api/Bus";
export default {
  components: {
    aplayer
  },
  data() {
    return {
      falg: false,
      url: null,
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: null,
          author: null,
          url: null,
          lrc: null,
          pic: null
        }
      }
    };
  },
  created() {
    Bus.$on("playurl", (val, val2, arname, alname, alimg) => {
      val.forEach(item => {
        this.url=item.url
        this.falg = val2;
      });
      this.videoUpload.music = {
        title: arname,
        author: alname,
        pic: alimg,
        url:this.url
      };
    });
  },
  methods: {}
};
</script>

<style >
</style>