<template>
	<div class="home-page">
		<main-header></main-header>
		<!-- <home-nav></home-nav> -->
		<home-main></home-main>
	</div>
</template>
<script>
import MainHeader from '../Header/Header'
import HomeMain from './Main'
// import HomeNav from './HomeNav' 


export default {
	name: 'home-page',
	components: {
		MainHeader,
		// HomeNav,
		HomeMain
	}
}
</script>
<style>
	
</style>