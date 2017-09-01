export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/Home/Home')
  },
  {
  	path: '/song/:songId',
  	name: 'music-page',
  	component: require('components/Music/MusicItem')
  },
  {
    path: '*',
    redirect: '/'
  }
]
