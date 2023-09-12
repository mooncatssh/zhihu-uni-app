export default {
	// 当前模块开启命名空间
	namespaced: true,
	state:()=>({
		// 信息列表
		list:[]
	}),
	mutations:{
		// 获取信息
		getList(state,list){
			state.list = list
			console.log(state.list)
		}
	},
	getter:{
		
	}
}