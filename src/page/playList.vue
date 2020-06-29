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

    <div v-for="item in songlist" :key="item.al.id"></div>
  </div>
</template>

<script>
export default {
  props: ["show"],
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
    }
  }
};
</script>

<style>
#playlist {
  height: 100%;
}
.songimg {
  width: 180px;
  height: 180px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 5%;
}
#synopsisimg {
  float: left;
}
#synopsis {
  width: 200px;
  height: 180px;
  float: left;
  margin-left: 10px;
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
  top: 50px;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  font-size: 14px;
  opacity: 0.7;
  padding: 2px;
  margin: 3px;
  left: -40px;
}
.abstract {
  margin-top: 10px;
  width: 98%;
  border-radius: 3%;
  background-color: darkgrey;
}
#listheader {
  height: 200px;
  width: 98%;
  margin-top: 5px;
  border-radius: 3%;
  background-color: darkgrey;
}
.abstract p {
  text-indent: 25px;
  font-size: 18px;
  color: #000;
}
.abstract h4 {
  text-indent: 2px;
  color: #fff;
}
</style>