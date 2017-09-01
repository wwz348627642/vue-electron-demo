<template>
	<div class="home-main">
		<div class="container-fluid relative new-sing">
    	<div class="container">
    		<h2 class="text-center">精彩推荐</h2>
    		<div class="swiper-container col-10 focus-list" v-swiper:options="focusOptions">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in focusList">
				    	<a class="block">
				    		<img :src="item.pic" :alt="item.title" class="img-responsive">
				    	</a>
				    </div>
				  </div>
				  <div class="swiper-pagination focus-list-pagination"></div>
				</div>
				<div class="focus-prev-btn text-center text-white">&lt;</div>
	    	<div class="focus-next-btn text-center text-white">&gt;</div>
    	</div>
		</div>
	
		<div class="container-fluid">
    	<div class="container">
    		<h2 class="text-center">排行榜</h2>
    		<ul class="row">
    			<li class="col-3 rank-list-item relative" v-for="(top, $index) in toplist">
    				<div class="relative item-bg" :class="'item-bg-' + $index"></div>
    				<div class="relative item-detail">
    					<div>
		    				<p class="text-white text-center">{{ top.header }}</p>
		    				<h2 class="text-white text-center">{{ top.desc }}</h2>
	    				</div>
	    				<div class="item-detail-center relative">
	    					<span class="icon icon-line">-</span>
	    					<span class="icon icon-play">
									<span class="icon icon-triangle"></span>
	    					</span>
	    				</div>
	    				<ul class="list-unstyled list-sing">
	    					<li v-for="(item, $index) in top.songlist" class="list-sing-item">
	    						<router-link class="block" :to="{ path: 'song/' + item.songid }">
	    						<!-- <a :href="'/song/' + item.songid" class="block"> -->
		    						<div class="text-white">
		    							<span>{{ $index + 1 }}</span>
		    							<span>{{ item.songname }}</span>
		    						</div>
		    						<p class="singer-name small text-overflow">{{ item.singername }}</p>
	    						<!-- </a> -->
	    						</router-link>
	    					</li>
	    				</ul>
    				</div>
    			</li>
    		</ul>
    	</div>
		</div>

		<div class="container-fluid relative hot-sing">
    	<div class="container">
    		<h2 class="text-center">热门歌单</h2>
    		<div class="swiper-container col-10 hot-sing-list" v-swiper:options="hotOptions">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in hotList">
				    	<ul class="row">
				    		<li v-for="child_item in item" class="col-3">
				    			<a class="block relative hot-sing-item">
				    				<div class="hot-sing-item-img">
							    		<img :src="child_item.imgurl" :alt="item.title" class="img-responsive">
							    		<span class="icon icon-play">
							    			<span class="icon icon-triangle"></span>
							    		</span>
						    		</div>
						    		<div class="hot-sing-item-desc">
						    			<!-- <a :href="'/song/' + child_item.songid"> -->
							    			<h4 class="text-white text-overflow text-center">{{ child_item.dissname }}</h4>
							    			<p class="text-muted text-center">{{ child_item.listennum }}</p>
						    			<!-- </a> -->
						    		</div>
						    	</a>
				    		</li>
				    	</ul>    	
				    </div>
				  </div>
				  <div class="swiper-pagination hot-sing-pagination"></div>
				</div>
				<div class="hot-prev-btn text-center text-white">&lt;</div>
	    	<div class="hot-next-btn text-center text-white">&gt;</div>
    	</div>
		</div>
		
		<div class="container-fluid mv-content">
			<nav class="col-6 center mv-nav">
				<ul class="list-unstyled row flex-center">
					<li v-for="item in mvNav">
						<a @click="changeMvModel(item.key)" class="block text-muted" :class="{ 'text-dark': mvModel.key == item.key }">{{ item.name }}</a>
					</li>
				</ul>
			</nav>
			<div class="container">
				<ul class="row flex-wrap">
					<li v-for="item in mvList" class="col-3">
						<div class="mv-item-img relative">
							<a class="block">
								<img :src="item.picurl" class="img-responsive">
								<span class="icon icon-play">
									<span class="icon icon-triangle"></span>
	    					</span>
							</a>
						</div>
						<div class="mv-item-content">
							<h4 class="text-overflow text-center"><a>{{ item.mvtitle }}</a></h4>
							<p class="text-overflow text-center text-muted"><a>{{ item.mvdesc }}</a></p>
							<p class="text-overflow text-center text-muted">{{ item.listennum }}</p>
						</div>		
					</li>
				</ul>
			</div>

		</div>

	</div>
</template>

<script>

export default {
	name: 'home-main',
	data () {
		return {
			focusOptions: {
				className: '.focus-list',
				pagination: '.focus-list-pagination',
				autoplay: 5000,
				effect: 'coverflow',
				slidesPerView: 2,
				grabCursor: true,
				centeredSlides: true,
				coverflow: {
          rotate: 0,
          stretch: -80,
          depth: 500,
          slideShadows : false
        }, 
				prevButton:'.focus-prev-btn',
				nextButton:'.focus-next-btn',	
			},
			hotOptions: {
				className: '.hot-sing-list',
				pagination: '.hot-sing-pagination',
				autoplay: 5000,
				prevButton:'.hot-prev-btn',
				nextButton:'.hot-next-btn',	
			},
			jsonp_params: {
				format: 'jsonp',
				tpl: 'v12',
				page: 'other',
				rnd: '36592586123510884',
				g_tk: 5381,
				jsonpCallback: 'musicCallback',
				hostUin: 0,
				inCharset: 'utf8',
				outCharset: 'GB2312',
				notice: 0,
				platform: 'yqq',
				needNewCode: 0,
			},
			focusList: [],
			toplist: [],
			hotList: [],
			mvNav: [
				{ name: '全部', key: 'all' },
				{ name: '内地', key: 'neidi' },
				{ name: '港台', key: 'gangtai' },
				{ name: '欧美', key: 'oumei' },
				{ name: '韩国', key: 'korea' },
				{ name: '日本', key: 'japan' }
			],
			mvList: [],
			mvData: {},
			mvModel: {
				key: 'all' // gangtai, japan, korea, neidi, oumei
			}
		}
	},
	mounted () {
		this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg', { params: this.jsonp_params, jsonpCallback: 'musicCallback' })
			.then(res => { 
				this.focusList = res.body.data.focus;
				this.toplist = this.changeTopListData(res.body.data.toplist);
				this.hotList = this.changeHotListData(res.body.data.hotdiss.list);
				this.mvData = res.body.data.shoubomv;
				this.initMvList();

				console.log(this.toplist)
			}); 
	},
	methods: {
		changeTopListData (arr) {
			let newArr = [];
			for (let i = 0; i < arr.length; ++i) {
				let obj = arr[i].ListName.split('·');
				arr[i].header = obj[0];
				arr[i].desc = obj[1];
				newArr.push(arr[i]);
			}
			return newArr;
		},
		changeHotListData (arr) {
			// [[],[],[],[]];
			let data = [];
			let child = [];
			for (let i = 0; i < arr.length; ++i) {
				if ((i + 1) % 4 != 0) {
					child.push(arr[i]);
				} else {
					child.push(arr[i]);
					data.push(child);
					child = [];
				}
			}
			return data;
		},
		initMvList () {
			this.mvList = this.mvData[this.mvModel.key];
		},
		changeMvModel (key) {
			this.mvModel.key = key;
			this.mvList = this.mvData[key];
		}
	}
}
</script>

<style>
	.home-main .list-item {
		width: 25%;
	}

	.home-main .focus-prev-btn, 
	.home-main .focus-next-btn {
		position: absolute;
		top: 35%;
		width: 50px;
		line-height: 50px;
		background: #ddd;
		cursor: pointer;
		transition: all 0.5s;
	}

	.home-main .focus-prev-btn {
		left: 0;
		transform: translate(-50px, 0);
	}

	.home-main .focus-prev-btn:hover {
		background: #31c27c;
	}

	.home-main .focus-next-btn:hover {
		background: #31c27c;
	}

	.home-main .focus-next-btn {	
		right: 0;	
		transform: translate(50px, 0);
	}

	.new-sing:hover .focus-prev-btn{
		transform: translate(0, 0);
	}

	.new-sing:hover .focus-next-btn {
		transform: translate(0, 0);
	}

	.new-sing nav .block {
		padding: 10px 20px;
	}

	.new-sing .swiper-slide {
		width: 33.3333%;
	}
		
	.rank-list-item {
		height: 560px;
		overflow: hidden;
	}
	
	.rank-list-item:hover .item-bg {
		transform: scale(1.1, 1.1);
	} 

	.item-bg {
		background: url('../../assets/bg_index_top.jpg');
		height: 560px;
		transition: all 1s;
	}

	.item-detail {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		padding: 20px;
	}

	.item-detail .singer-name {
		text-indent: 0.9em;
		color: #fff;
		opacity: .5;
		line-height: 1.5;

	}
	.item-detail .list-sing {
		width: 100%;
	}

	.item-detail .item-detail-center {
		line-height: 40px;
		height: 40px;
		width: 60px;
	}
	
	.item-detail .item-detail-center .icon-line {
		position: absolute;
		display: inline-block;
		width: 60px;
		height: 2px;
		background: rgba(255, 255, 255, .7);
		transition: all 1s;
	}
	
	.icon-play {
		position: absolute;
		transform: translate(-50%, 0);
		display: inline-block;
		width: 60px;
		height: 60px;
		line-height: 60px;
		background: rgba(255, 255, 255, .7);
		border-radius: 50%;
		text-align: center;
		opacity: 0;
		transform: scale(0, 0);
		transition: all 0.5s;
	}

	.item-detail .item-detail-center .icon-play {
		top: -65%;
	}

	.rank-list-item:hover .icon-line{
		opacity: 0;
	}
	
	.rank-list-item:hover .icon-play {
		transform: scale(1, 1);
		opacity: 1;
	}

	.icon-triangle {
		display: inline-block;
		width: 0;
		height: 0;
		transform: translate(30%, 30%);
		border-style: solid;
		border-width: 15px;
		border-color:  transparent transparent transparent #666;
	}

	.item-detail .list-sing .list-sing-item {
		margin-bottom: 10px;
	}
	
	.item-bg-0 {
		background-position: 0 0;
	}

	.item-bg-1 {
		background-position: -33.3% 0;
	}

	.item-bg-2 {
		background-position: -66.7% 0;
	}

	.item-bg-3 {
		background-position: -100% 0;
	}
	
	.hot-sing .hot-prev-btn,
	.hot-sing .hot-next-btn {
		position: absolute;
		top: 40%;
		width: 50px;
		line-height: 50px;
		background: #ddd;
		cursor: pointer;
		transition: all 0.5s;
	}

	.hot-sing .hot-prev-btn {
		left: 0;
		transform: translate(-50px, 0);
	}

	.hot-sing .hot-prev-btn:hover {
		background: #31c27c;
	}

	.hot-sing .hot-next-btn:hover {
		background: #31c27c;
	}

	.hot-sing .hot-next-btn {	
		right: 0;	
		transform: translate(50px, 0);
	}

	.hot-sing:hover .hot-prev-btn {
		transform: translate(0, 0);
	}

	.hot-sing:hover .hot-next-btn {
		transform: translate(0, 0);
	}

	.hot-sing-item:hover .icon-play {
		opacity: 1;
		transform: translate(0, 0);
	}

	.hot-sing-item:hover img {
		transition: all 0.7s;
		transform: scale(1.1, 1.1);
	}

	.hot-sing-item:hover .hot-sing-item-desc {
		background: #31c27c;
	}

	.hot-sing .icon-play {
		top: 35%;
		left: 40%;
	}
	
	.hot-sing-item-img {
		height: 250px;
		overflow: hidden;
	}

	.hot-sing-item-desc {
		padding: 20px;
		transition: all 0.7s;
		background: rgba(0,0,0,.8);
	}

	
	.mv-content .mv-nav li{
		padding: 10px 20px;
		cursor: pointer;
	}

	.mv-item-img {
		height: 168px;
		overflow: hidden;
	}

	.mv-item-img > a:hover {
		transition: all 0.7s;
		transform: scale(1.1, 1.1);
	}

	.mv-item-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		padding: 30px;
	}

	.mv-item-img .icon-play {
		top: 35%;
		left: 40%;
	}

	.mv-item-img > a:hover .icon-play {
		opacity: 1;
		transform: scale(1, 1);
	}
</style>
