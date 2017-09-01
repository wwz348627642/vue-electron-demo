<template>
	<div class="container music-item-page">
		<main-header></main-header>
		<home-nav></home-nav>
		<div class="container">
			<div class="row">
				<div class="col-3">
					<img src="#" alt="" class="img-responsive">
				</div>
				<div class="col-9">
					<h2>title</h2>
					<h4><a>user-name</a></h4>
					<ul class="row music-info">
						<li>
							<span>专辑：</span>
							<span></span>
						</li>
						<li>
							<span>语种：</span>
							<span></span>
						</li>
						<li>
							<span>流派：</span>
							<span></span>
						</li>
						<li>
							<span>发行公司：</span>
							<span></span>
						</li>
						<li>
							<span>发行时间：</span>
							<span></span>
						</li>
					</ul>
					<a class="btn">
						<i></i><span>播放</span>
					</a>
					<a class="btn">
						<i></i><span>收藏</span>
					</a>
					<a class="btn">
						<i></i><span>收藏</span>
					</a>
				</div>
			</div>
			<div classs="audio">
				<audio :src="audio_data.src" controls autoplay ref="audio">
					您的浏览器不支持音频
				</audio>
			</div>
		</div>
	</div>
</template>

<script>
import MainHeader from '../Header/Header';
import HomeNav from '../Home/HomeNav';

	export default {
		name: 'music-item-page',
		components: {
			MainHeader,
			HomeNav
		},
		data () {
			return {
				jsonp_params: {
					songmid: '003E2rXb4JS6tm',
					tpl: 'yqq_song_detail',
					format: 'jsonp',
					callback: 'songDetailCallback',
					g_tk: 5381,
					jsonpCallback: 'songDetailCallback',
					loginUin: 0,
					hostUin: 0,
					format: 'jsonp',
					inCharset: 'utf8',
					outCharset: 'utf-8',
					notice: 0,
					platform: 'yqq',
					needNewCode:0
				},
				audio_data: {
					src: 'http://dl.stream.qqmusic.qq.com/C400004RFzS52efiXA.m4a?vkey=33BC74ECE1D76C4E539C3908040BAF5594A9596EC1F90B0BF84279507B45FA91C4478E0D2484CE1736B8814D1204276D2CC96659B437EEE4&guid=3657286264&uin=0&fromtag=66'
				}

			}
		},
		mounted () {

			this.initAudio() 
			// https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=201626480&callback=MusicItemCallback&g_tk=5381&jsonpCallback=jsonp1&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0

			// https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=201626480&callback=jsonp1&g_tk=5381&jsonpCallback=jsonp1&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0



			// this.$http.jsonp('https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg', { params: this.jsonp_params, jsonpCallback: 'songDetailCallback' })
			// 	.then(res => { 
			// 	console.log(res);
			// }).catch(error => console.log(error))
		},
		methods: {
			initAudio () {

				var audioObject = this.$refs.audio;
				let config = {
					el: this.$refs.audio,    // 元素
					src: this.audio_data.src, // 数据源
					width: 500,              // 宽度
					height: 500,             // 高度
					autoplay: true,          // 自动播放
					preload: true,           // 预播放
					controls: true,          // 显示默认控制条
					defaultMuted: false,     // 默认是否静音
					muted: false,            // 是否静音
					currentTime: 0,          // 开始播放的位置（秒）
					defaultPlaybackRate: 1,  // 默认播放速度
					playbackRate: 1,         // 播放速度
					loop: true,              // 是否循环播放
				}

				function Audio (config) {
					this.el = config.el;
					this.src = config.src;
					this.width = config.width;
					this.height = config.height;
					this.autoplay = config.autoplay;
					this.preload = config.preload;
					this.controls = config.controls;
					this.defaultMuted = config.defaultMuted;
					this.defaultPlaybackRate = config.defaultPlaybackRate;
				}
				
				Audio.prototype.getBuffered = () => {
				}

				new Audio(config)





				console.log(audioObject)
			}
		}
	}

</script>

<style>
	
</style>