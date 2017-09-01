<template>
	<div class="header-bg container-fluid">
		<header class="container">
			<div class="row">
				<div class="col-2">
					<img src="../../assets/logo@2x.png" class="img-responsive">
				</div>
				<nav class="col-4">
					<ul class="list-unstyled row flex-around">
						<li>
							<a class="block">音乐馆</a>
						</li>
						<li>
							<a class="block">我的音乐</a>
						</li>
						<li>
							<a class="block">下载客户端</a>
						</li>
						<li>
							<a class="block">VIP</a>
						</li>
					</ul>
				</nav>
				<div class="col-6">
					<ul class="list-unstyled row flex-end">
						<li class="small-icon">
							<a class="block">1</a>
						</li>
						<li class="small-icon">
							<a class="block">2</a>
						</li>
						<li class="small-icon">
							<a class="block">3</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	</div>
</template>

<script>

export default {
	name: 'Header',
	data () {
		return {
			show_nav: false,
			show_img: false
		}
	}
}
</script>

<style scope>
	.header-bg {
		max-height: 60px;
		line-height: 60px;
	}

  .small-icon {
  	padding: 0 10px;
  	position: relative;
  }
</style>