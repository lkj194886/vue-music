<template>
  <div id="playlist">
    <div id="listheader">
      <div id="synopsisimg">
        <img :src="song" class="songimg" />
      </div>

      <div id="synopsis">
        <h4>{{playlist.name}}</h4>
        <img :src="user.avatarUrl" class="userimg" />
        <span class="username">{{user.nickname}}</span>
        <span v-for="i in playlist.tags" :key="i" class="tags">
          <span>{{i}}</span>
        </span>
      </div>
    </div>

    <div class="abstract">
      <h4>简介:</h4>
      <p>{{playlist.description}}</p>
    </div>
    <div class="list-song">
      <h3>歌曲列表</h3>
      <div v-for="item in songlist" :key="item.al.id">
        <a class="song" @click="play(item.id,item.name,item.ar[0].name,item.al.picUrl)">
          <div class="song-wrapper">
            <div class="song-info">
              <div class="song-title">
                {{ item.name }}
                <span></span>
              </div>
              <div class="song-detail">
                <i class="sq"></i>
                {{ item.ar[0].name }} - {{ item.al.name}}
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
import Bus from '@/api/Bus'
export default {
  data() {
    return {
      id: this.$route.params.playid,
      songlist: [],
      song: null,
      playlist: {},
      user: {}
    };
  },
  created() {
    this.getSongList();
  },
  methods: {
    getSongList() {
      this.$axios
        .get("/playlist/detail", { params: { id: this.id } })
        .then(res => {
          console.log(this.show);
          console.log(res.data.playlist.tracks);
          this.songlist = res.data.playlist.tracks;
          this.song = res.data.playlist.coverImgUrl;
          this.playlist = res.data.playlist;
          this.user = res.data.playlist.creator;
        });
    },
    play(playid,arname,alname,alimg) {
      this.$axios.get('/song/url',{params:{id:playid}}).then(res=>{
        Bus.$emit('playurl',res.data.data,"true",arname,alname,alimg)
      })
  
    }
  }
};
</script>

<style>
#playlist {
  height: 100%;
}
.songimg {
  width: 150px;
  height: 150px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 5%;
}
#synopsisimg {
  float: left;
  width: 150px;
}
#synopsis {
  width: 180px;
  height: 150px;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.userimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 5px;
}
.username {
  position: absolute;
  margin-top: 28px;
  margin-left: 5px;
  font-size: 16px;
}
.tags {
  position: relative;
  top: 40px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  font-size: 13px;
  opacity: 0.7;
  padding: 2px;
  margin: 3px;
  left: -30px;
}
.abstract {
  margin-top: 10px;
  width: 98%;
  border-radius: 3%;
}
#listheader {
  height: 200px;
  width: 98%;
  margin-top: 5px;
  border-radius: 3%;
}
.abstract p {
  text-indent: 25px;
  font-size: 15px;
  color: #000;
}
.abstract h4 {
  text-indent: 2px;
  color: #000;
}
.play-icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url("~@/assets/hot_icon.png") no-repeat;
  background-position: -24px 0;
  background-size: 166px 97px;
}
.song-info {
  text-align: left;
  flex: 1 1 auto;
  padding: 6px 0;
  width: 0;
}
.song-play {
  display: flex;
  padding: 0 10px;
  align-items: center;
}
.sq {
  display: inline-block;
  width: 12px;
  height: 8px;
  margin-right: 4px;
  background: url("~@/assets/hot_icon.png") no-repeat;
  background-size: 166px 97px;
}
.song-detail {
  font-size: 12px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}
.song-title {
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}
.song-title span {
  color: #888;
}
.song {
  display: flex;
  padding-left: 10px;
  color: #333;
}
.song-num {
  color: #999;
  align-items: center;
  width: 28px;
  font-size: 17px;
  display: flex;
}
.highlight {
  color: #df3436 !important;
}
.song-wrapper {
  position: relative;
  display: flex;
  flex: 1 1 auto;
}
.song-wrapper:after {
  width: 300%;
  height: 300%;
  transform: scale(0.333333);
  position: absolute;
  z-index: 20;
  content: " ";
  top: 0;
  left: 0;
  pointer-events: none;
  box-sizing: border-box;
  transform-origin: top left;
  border: 0 solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 2px;
}
.list-song h3 {
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  background-color: #eeeff0;
}
.list-song {
  margin-top: 30px;
}
</style>