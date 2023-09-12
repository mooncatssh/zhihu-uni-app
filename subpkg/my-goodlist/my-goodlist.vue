<template>
	<view>
	<view class="contanier">
		<view class="contauner-title">
			<view class="left">
				<text class="zihu">知乎</text>
				<text class="zhihu1">有问题 就会有答案</text>
			</view>
			<view class="right">
				<view class="btn"  @click="open">登录</view>
			</view>
		</view>
		<view class="itemlist">
			<view class="title">{{list.title}}</view>
			<text class="center">知乎&nbsp;&nbsp;·<text class="text">64</text>
			个回答 &nbsp;&nbsp;·<text class="text">{{list.hotness}}</text>人关注</text>
		</view>
		<view class="listauto">
			<view class="auto"> {{list.author}}</view>
			<text class="center">{{tokal}}人赞同&nbsp;&nbsp;·&nbsp;&nbsp;41人喜欢了该回答</text>
			<view class="contents">{{list.content}}</view>
			<view class="time">发布于{{list.publishTime}} ·&nbsp;&nbsp;禁止转载</view>
		</view>
	</view>
	<view class="footer">
		<view class="footer-box">
			<view class="btn" @click="onclicktotal">赞同{{tokal}}</view>
			<view  @click="onclicktotal1">
			<uni-icons type="star" size="25"></uni-icons>
			<view class="num">{{collection}}</view>
			</view>
			<view @click="onclicktotal2">
			<uni-icons type="heart" size="25"  ></uni-icons>
			<view class="num">{{like}}</view>
			</view>
			<view @click="onclicktotal3">
			<uni-icons type="chatbubble"  size="25" ></uni-icons>
			<view class="num">{{Reply}}</view>
			</view>
			<uni-icons type="redo-filled"  size="25">
			</uni-icons>
		</view>
	</view>
	<!-- 登录页面 -->
	<uni-popup ref="popup" class="container" type="bottom" background-color="#ffffff" :mask-click="false">
		<view class="login">
			
			<view class="login_titel">欢迎登录知乎</view>
			<view class="login_content">登录后解锁更多内容</view>
			<view class="login_btn"  v-show="!input" @click="login">手机号验证码登录</view>
			<view class="input" v-show="input">
			<input class="uni-input1" focus placeholder="账号" v-model="Account"/>
			<input class="uni-input2" focus placeholder="密码" v-model="password"/>
			<view class="login_btns" @click="login_last" >登录</view>
			</view>
			<view class="bootm">
			<radio class="login_rad"  :checked="ischecked" @click="checkded"></radio>
			<text class="login_foot">我已阅读并同意&nbsp;<text class="cont">《知乎协议》&nbsp;&nbsp;《个人信息保护指引》</text></text>
			</view>
			
		</view>
	</uni-popup>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState('m_home',['list']),
		},
		data() {
			return {
				// 传递的id
				tokal:439,
				collection:50,
				like:100,
				Reply:6,
				// 单选取消
				ischecked:false,
				input:false,
				Account:'',
				password:''
			};
		},
		onLoad(option){
			
			this.id = option.goods_id
			console.log(this.id)
		},
		methods:{
			onclicktotal(){
			   return this.tokal ++
			},
			onclicktotal1(){
			   return this.collection ++
			},
			onclicktotal2(){
			   return this.like ++
			},
			onclicktotal3(){
			   return this.Reply ++
			},
			// 登录
			 open(){
			this.$refs.popup.open('bottom')
			},
			// 点击取消
			checkded(){
				this.ischecked = !this.ischecked	
			},
			login(){
				if(!this.ischecked ) return	uni.$showMsg('请先勾选隐私协议后继续登录')
				this.input = true
				console.log(this.input)
			},
			login_last(){
				if(this.Account == 'cxy' && this.password == '123456'){
					uni.$showMsg('登录成功')
					this.Account = ''
					this.password = ''
					this.input = !this.input
					this.$refs.popup.close()
				}else if(this.Account == ''){
					uni.$showMsg('请输入账号')
				}
				else if(this.password == ''){
					uni.$showMsg('请输入密码')
				}else{
					uni.$showMsg('登录失败')
				}
				
			}
		}
	}
</script>

<style lang="scss">
.contanier{
	width: 90%;
	padding-left: 15px;
.contauner-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left{
		.zihu{
			font-size: 30px;
			color: #5555ff;
		}
		.zhihu1{
			font-size: 10px;
			color: #949494;
		}
	}
	.right{
		.btn{
			line-height: 30px;
			text-align: center;
			height: 30px;
			width: 80px;
			border-radius: 30px;
			color: #5555ff;
			border: 1px solid blue;
		}
	}
}
.itemlist{
	margin-top: 20px;
	.title{
		font-size: 18px;
	}
	.center{
		padding-top: 20px;
		font-size: 13px;
		color: #949494;
		.text{
			padding-right: 10px;
			padding-left: 10px;
			color: black;
		}
	}
}
.listauto{
	margin-top: 30px;
	.center{
		padding-top: 20px;
		font-size: 13px;
		color: #949494;
		}
		.contents{
			margin-top: 20px;
		}
		.time{
			margin-top: 50px;
			font-size: 13px;
			color: #949494;
		}
     }
}
 .footer{
	 position: absolute;
		 padding-top: 10px;
		 padding-right: 10px;
		 border: 1px solid #d9d9d9;
		 bottom: 0;
		 height: 50px;
		 width: 100%;
		 .footer-box{
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
			 .btn{
				 line-height: 30px;
				 text-align: center;
				 height: 30px;
				 width: 80px;
				 border-radius: 30px;
				 background-color: #9debeb;
				 color: #5555ff;
				 border: 1px solid blue;
			 }
		 }
		.num{
			text-align: center;
			font-size: 8px;
			margin-left: 3px;
			padding-top: 0 px;
		}
	 }

.vue-ref{
	padding-top: 0;
	border-radius: 20px;
.login{
	border-radius: 20px;
	width: 90%;
	margin: 0 auto;
	height: 180px;
	.login_titel{
		margin-top: 20px;
		margin-left: 20px;
		font-size: 25px;
	}
	.login_content{
		margin-top: 5px;
		margin-left: 20px;
		font-size: 13px;
		color: #949494;
	}
	.login_btn{
		margin-top: 30px;
		height: 50px;
		width: 100%;
		line-height: 35px;
		border-radius: 30px;
		text-align: center;
		background-color: #d9d9d9;
	}
	.login_rad{
		transform:scale(0.7,0.7); 
		}
	.login_foot{
		font-size: 10px;
		color: #949494;
		    .cont{
				color: #5555ff;
			}
	}
	.input{
			margin-left: 30px;
			width: 90%;
			height: 30px;
			.uni-input1{
				margin-top: 10px;
				height: 20px;
				border: 1px solid #e5e5e5;
			}
			.uni-input2{
				margin-top: 10px;
				margin-bottom: 10px;
				height: 20px;
				border: 1px solid #e5e5e5;
			}
			.login_btns{
				width: 50%;
				margin: 0 auto;
				height: 28px;
				border-radius: 20px;
				text-align: center;
				line-height: 28px;
				background-color: #ffaaff;
				color: white;
			}
		}
		.bootm{
			position: absolute;
			bottom: 0;
		}
	}
}
</style>
