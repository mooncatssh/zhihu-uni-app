<template>
	<view>
		<!-- 头部区域 -->
		<view class="my-search-contaner">
			<!-- 搜索栏 -->
			<view class="my-search" @click="mysearch">
				<view class="my-search-box1" >
					<uni-icons type="search" size="20"></uni-icons>
					<text>美将继续对华售卖芯片</text>
				</view>
			</view>
			<!-- 推荐按钮 -->
			<view class="content">
				<view class="content-box" :class="{'active':isActive==1}" @click="onclick1(1)">热榜</view>
				<view class="content-box" :class="{'active':isActive==2}" @click="onclick2(2)">推荐</view>
			</view>
			<!-- 主题区域 -->
			<view class="home-container">
				<!-- 热榜区域 -->
				<view class="container-1" v-if="isActive ==1">
					
					<scroll-view scroll-y="true">
						<view class="conten">
						<view class="goods_list" v-for="(item,i) in goods" @click="checkout(item)">
							
							<view class="goods_content">
								<!-- 标题区域 -->
								<view class="goods_list_title">
									<view class="itemid">{{item.id}}</view>
									<view class="hotness">{{item.hotness}}万热度</view>
								</view>
								<!-- 主题消息 -->
								<view class="goods_content_list">
									<view class="titles">{{item.title}}</view>
									<image :src="item.image"></image>
								</view>
								</view>
							</view>
							<!-- 底部区域 -->
							<view class="flooter">
								<view class="flooter-1">
									<text>刷完了,想要看更多</text>
								</view>
								<view class="flooter-2">
									<text>点击 <text class="textbule">进入客服会话</text>,输入数字 "1" ,下载知乎App</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 推荐区域 -->
				<view class="container-1" v-if="isActive ==2">
					
					<scroll-view scroll-y="true">
					<view class="conten">
					<view class="goods_list2" v-for="(item,i) in goods" @click="checkout(item)">
							<view class="goods_content_if2">
								<!-- 主题消息 -->
								<view class="goods_content_list">
									<text class="titles">{{item.title}}</text>
									<text class="contents">{{item.content}}</text>
								</view>
								</view>
							</view>			
						</view>
					</scroll-view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		
		data() {
			return {
				// 判断展示那个页面
				isActive:1,
				// 消息列表
				goods:{}
			};
		},
		computed:{
			goodslist(){
				this.goods.sort(this.goods.ranking)
				console.log(this.goods)
			}
		},
		onShow(){
			this.getNews()		
		},
		methods:{
			...mapMutations('m_home',['getList']),
			// 点击热榜切换
			onclick1(item){
				this.isActive = item
			},
			// 点击推荐切换
			onclick2(item){
			this.isActive = item
			},
			// 获取信息
			getNews(){
				uni.request({
					url:'https://my.home/api/cxy',
					success: (res) => {
						this.goods = res.data.newsList
					}
				})
			},
			// 点击跳转
			checkout(item){
				uni.navigateTo({
					url:'../../subpkg/my-goodlist/my-goodlist? goods_id ='+ item.id
				})
				this.getlists(item)
			},
			// 存储数据到state
			getlists(item){
				this.getList(item)
			},
			// 跳转mysearch
			mysearch(){
				uni.navigateTo({
					url:'../../subpkg/my-search/my-search'
				})
			}
		}
	}
</script>

<style lang="scss">
.my-search-contaner{
	position: sticky;
	height: 100px;

.my-search{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 20px;
		width: 70%;
		height: 35px;
		border-radius: 25px;
		background-color: #e8e8e8;
		.my-search-box1{
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				font-size: 15px;
				// font-style: italic;
				color: #808080;
			}
		}
	}
	.content{
		height: 40px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 85px;
		
		.content-box1{
			margin-top: 40px;
		}
	}
}
.active {
		position: relative;
	}
.active::after {
		content: "";  //用来配合::after 来插入内容
		position: absolute;
		width: 90rpx;
		height: 8rpx;
		border-radius: 30px;
		background-color: #2D99F5;
		top:45px;
		left: -4px;
		right: 0px;
		bottom: 0px;
		margin: auto;
}
.home-container{
	margin-top: 5px;
		.goods_list2{
			background-color: #e8e8e8;
			height: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.goods_content_if2{
				width: 97%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 10px;
				margin-top: 10px;
				
				height: 200px;
				background-color: #ffffff;
				.goods_content_list{
					display: flex;
					flex-flow: wrap;
					justify-content: flex-start;
					align-items: center;
					height: 90%;
					.titles{
						text-align: left;
						font-size: 15px;
						
					}
					.contents{
						margin-top: 2px;
						height: 36px;
						overflow: hidden;
						font-size: 13px;
						color: #787878;
						
						}
					
				}
			}
		}
	.goods_content{
		margin-top: 20px;
		.goods_list_title{
			display: flex;
			align-items: center;
			.itemid{
				background-color: #fff4bc;
				border-radius: 20px;
				padding: 0 10px;
				font-size: 12px;
				color: #ffbe63;
				
			}
			.hotness{
				color: #7c7c7c;;
				font-size: 10px;
				padding: 0 5px;
			}
		}
		.goods_content_list{
			height: 100px;
			margin-top: -17px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.titles{
				width: 200px;
				font-size: 15px;
				font-style: italic;
			}
			image{
				border-radius: 20px;
				height: 85%;
				width: 100px;
			}
			
		}
	}
	.flooter{
		background-color: #ebebeb;
		.flooter-1{
			padding-top: 20px;
			display: flex;
			font-size: 15px;
			color: #6a6a6a;
			flex-direction: column;
			align-items: center;
		}
		.flooter-2{
			display: flex;
			font-size: 13px;
			color: #808080;
			padding: 0 18px;
			padding-top: 10px;
			padding-bottom: 20px;
			flex-direction: column;
			align-items: center;
			.textbule{
				color: #2D99F5;
			}
		}
	}
}

</style>
