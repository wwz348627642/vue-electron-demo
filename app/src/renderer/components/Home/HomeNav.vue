<template>
	<div class="home-nav container">
		<nav class="col-8 center">
			<ul class="list-unstyled row flex-center">
				<li>
					<router-link :to="{ path: '/' }" class="block">首页</router-link>
				</li>
				<li>
					<a class="block">歌手</a>
				</li>
				<li>
					<a class="block">专辑</a>
				</li>
				<li>
					<a class="block">排行榜</a>
				</li>
				<li>
					<a class="block">分类歌单</a>
				</li>
				<li>
					<a class="block">MV</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'home-nav'
	}
</script>

<style>
	.home-nav .block {
		padding: 10px 20px;
	}
</style>