<template>
  <div id="hout">
    <!-- 热评列表 -->
    <table class="table" id="commentbody" v-for="comments in list" v-show="reping" :key="comments.id">
        <tr>
          <td class="Ontheleft">
            <img :src="comments.simpleUserInfo.avatar" class="img-circle" />
          </td>
          <td>
            <div class="information">
              <span class="nickname">{{comments.simpleUserInfo.nickname}}</span>
              <div class="dianzan">
                <span class="glyphicon glyphicon-thumbs-up">({{comments.likedCount}})</span>
              </div>
              <br />
              <span class="date">{{comments.time | dataFromat}}</span>
            </div>
            <div class="content">{{comments.content}}</div>
            <div class="repinglaiyuan">
              <span>热评来源:&nbsp;(&nbsp;{{comments.simpleResourceInfo.name}}&nbsp;)&nbsp;&nbsp;&nbsp;{{comments.simpleResourceInfo.artists[0].name}}</span>
            </div>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      msg: "暂未开放!",
      reping: false
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    getcomments() {
      this.list = [];
          this.$axios.get("/comment/hotwall/list").then(res => {
              this.reping=true
              this.list = res.data.data;
          });
      }
    }
  
};
</script>

<style>
#commentbody {
  margin: 0 auto;
}

#commentbody tr {
  height: 200px;
}

#commentbody tr td img {
  margin-left: 10px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.Ontheleft {
  width: 50px;
}

.nickname {
  height: 50px;
  font-size: 17px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.content {
  font-weight: 100;

  margin-top: 10px;
}

.information {
  margin-top: 10px;
}

.date {
  font-size: 13px;
}

.dianzan {
  display: inline;
  position: absolute;
  right: 20px;
}

.repinglaiyuan {
  margin-top: 15px;
}
</style>