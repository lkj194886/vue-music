<template>
  <div id="app" class="app-header">
    <mt-header class="header" fixed title="Vue网易云音乐"></mt-header>
	<router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/rec">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">推荐歌单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/serch">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/hotcomments">
				<span class="mui-icon mui-icon-chatboxes"></span>
				<span class="mui-tab-label">热评</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
       
    },
}
</script>
<style>
 .app-header{
   padding-top: 40px;
 }
</style>
