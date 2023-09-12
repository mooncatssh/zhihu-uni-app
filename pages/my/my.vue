<template>
	<view class="container">
		<!-- 头像区域 -->
		<view class="content">
			<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
			<vieW class="titel">未登录</vieW>
		</view>
		<!-- 中间区域 -->
		<view class="border">
			<view class="text1">常见问题</view>
			<view class="text2" @click="onclick1">购买后无法正常查看内容、找不到购买内容?</view>
			<view class="text-box" v-show="istop1">
				使用当前手机号账号登录知乎App,在 [我的] - [已购] 中查看, 或在知乎App内联系知乎小管家。
			</view>
			<view class="text2" @click="onclick2">已购买会员如何取消订阅?</view>
			<view class="text-box" v-show="istop2">
				您在小程序中购买的续费会员订单请您到进行支付的App中找到续费订单,解除续费<br>
				微信支付可在微信钱包的支付功能中关闭。<br>
				路径为：我———钱包———支付管理———自动续费;
			</view>
		</view>
		<!-- 客服区域 -->
		<view class="footer">
			<view class="footer-box">
				购买异常客服
			</view>
			<uni-icons type="phone-filled" size="20" color="#AFAFAF"></uni-icons>
		</view>
		<!-- 最近浏览 -->
		<view class="footer-last">
			<view class="text">
				最近浏览
			</view>
			<view class="text2">
				登录知乎,浏览记录不再丢失
			</view>
			<view class="btn" @click="open">
				登录
			</view>
		</view>
		<!-- 登录页面 -->
		<uni-popup ref="popup" class="container" type="bottom" background-color="#ffffff" :mask-click="false" >
			<view class="login">
				
				<view class="login_titel">欢迎登录知乎</view>
				<view class="login_content">登录后解锁更多内容</view>
				<view class="login_btn" v-show="!input" @click="login">手机号验证码登录</view>
				<view class="input" v-show="input">
				<input class="uni-input1" focus placeholder="账号" v-model="Account"/>
				<input class="uni-input2" focus placeholder="密码" v-model="password"/>
				<view class="login_btns" @click="login_last">登录</view>
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
	export default {
		data() {
			return {
				// 判断展开
				istop1:false,
				istop2:false,
				// 单选取消
				ischecked:false,
				input:false,
				Account:'',
				password:''
			};
		},
		methods:{
			onclick1(){
				this.istop1= !this.istop1
			},
			onclick2(){
				this.istop2 = !this.istop2
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
.container{
	height: 100%;
background-color: #ececec;
.content{
	padding-bottom: 10px;
	height: 130px;
	background-color: #ececec;
	display: flex;
	padding-top: 40px;
	flex-direction: column;
	align-items: center;
	.titel{
		margin-top: 5px;
		font-size: 20px;
		color: #cccccc;
	}
}
.border{
	background-color: white;
	padding-top: 10px;
	.text1{
		margin-left: 10px;
		font-size: 20px;
	}
	.text2{
		margin-left: 10px;
		margin-top: 10px;
		font-size: 14px;
	}
	.text-box{
		margin-left: 20px;
		font-size: 12px;
	}
}
.footer{
	height: 30px;
	background-color: white;
	padding: 0 10px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.footer-last{
	margin-top: 10px;
	background-color: white;
	.text{
		margin-left: 10px;
	}
	.text2{
		font-size: 14px;
		width: 60%;
		margin-top: 25px;
		margin-left: 75px;
		height: 30px;
	}
	.btn{
		margin-top: 10px;
		margin: 0 auto;
		width: 60%;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		background-color: aqua;
		color: white;
		
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
		margin-top: 50px;
		height: 50px;
		width: 100%;
		line-height: 50px;
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
}
.bootm{
	position: absolute;
	bottom: 0;
}
}
}
</style>
