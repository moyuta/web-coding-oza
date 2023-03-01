<template>
	<div class="contact-main-img">
		<!-- TODO:フォントを確認する -->
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
		<defaultInput
			style="width: 70%; margin: 0 auto"
			v-model="form"
			label="お名前"
			:required="true"
		></defaultInput>
	</div>

	<div></div>
</template>

<script setup>
import { defaultInput } from '../components/organisms/Input'
const form = ref('')
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
// フォーム入力

.contact-form {
	padding: 0 20%;
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
</style>
