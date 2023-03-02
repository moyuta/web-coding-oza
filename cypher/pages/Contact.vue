<template>
	<div class="contact-main-img">
		<!-- <div class="header-title">Contact お問い合わせ・お見積もり</div> -->
		<img src="@/assets/img/sec-img02.png" alt="cypher" />
		<div class="contact-img-text">
			<p class="img-text-main">まずはお気軽にお問合せ下さい</p>
			<p class="img-text-sub">
				母体が内装解体専門会社であるからこそ、一般的な施工会社よりも解体費用を抑えることができます。つまり、解体費用を抑えることができるということです。
			</p>
			<p class="img-text-sub">
				選択のできる予算の使途も合わせてご提案いたします。
			</p>
		</div>
	</div>

	<div class="contact-form">
		<p class="sub-title">お問合せ・お見積</p>
		<p class="sub-title-comment">
			タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
		</p>
		<p class="attention-text">※ こちらのマークは必須項目です</p>
		<div style="width: 65%; margin: 0 auto">
			<DefaultInput
				v-model="form.name"
				label="お名前"
				:required="true"
			></DefaultInput>
			<DefaultInput
				v-model="form.mail"
				label="メールアドレス"
				:required="true"
			></DefaultInput>
			<DefaultInput
				v-model="form.tel"
				label="電話番号"
				:required="true"
			></DefaultInput>
			<DefaultInput
				v-model="form.address"
				label="住所"
				:required="true"
			></DefaultInput>
			<CheckBox label="お問い合わせ内容"></CheckBox>
			<TextBox
				v-model="form.contact"
				label="お問い合わせ内容"
				:required="true"
			></TextBox>
		</div>
		<div class="robocon">
			<div class="robocon-text">下記にチェックをして下さい。</div>
			<div>ロボコン</div>
			<div class="personal-information">aaaaaaaa</div>
			<!-- <linkButton></linkButton> -->
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'
import { DefaultInput, TextBox, CheckBox } from '../components/organisms/Input'
// import { linkButton } from '../components/atoms/Button/LinkButton.vue'
const form = reactive({
	name: '',
	mail: '',
	tel: '',
	address: '',
	contact: '',
})
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	z-index: 10;
	width: 100%;
}
// main画像
.header-title {
	height: 100px;
	width: 100vw;
	font-size: 2.2rem;
}

.contact-main-img {
	object-fit: cover;
	height: auto;
	position: relative;
}

.contact-img-text {
	position: absolute;
	top: 50%;
	left: 710px;
	font-size: 30px;
	color: #ffffff;
	padding: 0;
	margin: 0;
	width: 500px;
}

.img-text-main {
	font-size: 30px;
	font-weight: bold;
	width: 300px;
}
.img-text-sub {
	font-size: 15px;
}

.contact-form {
	padding: 0 18%;
}
// TODO:これ聞かない・・・。
@media screen and (min-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
	.contact-form {
		padding: none;
	}
}

.sub-title {
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	margin: 50px;
}
.sub-title-comment {
	width: 100%;
	margin: 20px 0;
}
.attention-text {
	color: red;
}

.robocon {
	padding: 0 10%;
}
.robocon-text {
	font-weight: bold;
}
.personal-information {
	border: solid 1px;
	height: 180px;
}
</style>
