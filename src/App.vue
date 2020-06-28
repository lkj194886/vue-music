<template>
  <div id="app" class="app-header">
    <mt-header class="header" fixed title="Vue网易云音乐"></mt-header>
	<transition>
    <router-view></router-view>
	</transition>
    <nav class="mui-bar mui-bar-tab " >
      <a class="mui-tab-item mui-active" @click="rec">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label" >首页</span>
      </a>
      <a class="mui-tab-item" @click="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </a>
      <a class="mui-tab-item" @click="hotcomments">
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-tab-label">热评</span>
      </a>
      <a class="mui-tab-item" @click="my">
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
		
	};
  },
  methods: {
    rec() {
      this.$router.push({ path: "/rec" });
    },
    my() {
      this.$router.push({ path: "my" });
    },
    search() {
      this.$router.push({ path: "search" });
    },
    hotcomments() {
      this.$router.push({ path: "HotComments" });
    }
  }
};
</script>
<style>
.app-header {
  padding-top: 40px;
  padding-bottom: 120px;
}
.v-enter,
.v-leave-to{
	opacity: 0;
	transform: translateX(100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s;
}

</style>
