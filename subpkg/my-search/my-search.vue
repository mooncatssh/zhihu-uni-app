<template>
	<view class="my-search-container">
		<uni-search-bar class="search" @confirm="search" @input="input" :radius="100" cancelButton="none"></uni-search-bar>
		<!-- 输入框 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
		}
}
</script>

<style lang="scss">
.my-search-container{
	height: 50px;
	background-color: #ffaaff;
	.search{
		border-radius: 30px;
	}
}
</style>
