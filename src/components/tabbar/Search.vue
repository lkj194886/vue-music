<template>
  <div id="search">
    <div class="d5">
      <input type="text" placeholder="输入 (歌手 歌曲) 搜索" v-model="value" />
      <a @click="search()">
        <span class="mui-icon mui-icon-search"></span>
      </a>
    </div>
    <div class="list-songs">
      <h3>歌曲列表</h3>
      <div v-for="item in songlist" :key="item.id">
        <a class="song" @click="play(item.id)">
          <div class="song-wrapper">
            <div class="song-info">
              <div class="song-title">
                {{ item.name }}
                <span></span>
              </div>
              <div class="song-detail">
                <i class="sq"></i>
                {{ item.artists[0].name }} - {{ item.album.name}}
              </div>
            </div>
            <div class="song-play">
              <span class="play-icon"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "@/api/Bus";
export default {
  data() {
    return {
      value: null,
      songlist: [],
      falg: false,
      songname: null,
      songimg: null,
      songuname: null
    };
  },
  methods: {
    search() {
      if (this.value == null || this.value == "") {
        alert("请输入要搜索的歌曲或歌手!!");
      } else {
        this.$axios
          .get("/search", { params: { keywords: this.value, limit: 20 } })
          .then(res => {
            this.falg = true;
            this.songlist = res.data.result.songs;
          });
      }
    },
    play(id) {
      this.$axios.get("/song/detail", { params: { ids: id } }).then(res => {
        this.songname = res.data.songs[0].name;

        this.songimg = res.data.songs[0].al.picUrl;

        this.songuname = res.data.songs[0].ar[0].name;
        this.$axios.get("/song/url", { params: { id: id } }).then(res => {
          Bus.$emit(
            "playurl",
            res.data.data,
            "true",
            this.songname,
            this.songuname,
            this.songimg
          );
        });
      });
    }
  }
};
</script>

<style>
.d5 {
  position: relative;
  width: 95%;
  margin-top: 5px;
}
.d5 input {
  outline: none;
  background: transparent;
}
.d5 input {
  width: 100%;
  height: 42px;
  padding-left: 15px;
  border: 3px solid red;
}
.d5 input:focus {
  border-color: #311c24;
}
.d5 a > span {
  width: 40px;
  height: 40px;
  left: 5px;
  float: right;
  position: relative;
  top: -48px;
}
.list-songs h3 {
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  background-color: #eeeff0;
}
.list-songs {
  margin-top: 20px;
}
</style>