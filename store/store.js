import Vue from 'vue'
import Vuex from 'vuex'
import modulehome from './home.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		'm_home':modulehome,
	}
})

export default store