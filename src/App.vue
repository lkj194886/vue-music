<template>
  <div id="app" class="app-header">
    <mt-header class="header" fixed title="Vue网易云音乐"></mt-header>
    <h1>123</h1>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">精品歌单</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-chatboxes"></span>
				<span class="mui-tab-label">热评</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的</span>
			</a>
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
