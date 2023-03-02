<template>
	<div class="checkbox-content">
		<div class="attention-text">
			{{ required ? 'この項目は必須です' : '' }}
		</div>
		<div class="label-input">
			<div class="label-area">
				<div>{{ label }}</div>
				<div class="attention">{{ required ? '※' : '' }}</div>
			</div>
			<!-- TODO:コンポーネントもう少し細かく設定する -->
			<div>
				<div class="check-area">
					<input
						type="checkbox"
						:checked="check"
						@input="$emit('input', $event.target.checked)"
					/>

					<div class="check-label">お見積り依頼</div>
				</div>
				<div class="check-area">
					<input
						type="checkbox"
						:checked="check"
						@input="$emit('input', $event.target.checked)"
					/>

					<div class="check-label">ご質問・ご相談</div>
				</div>
				<div class="check-area">
					<input
						type="checkbox"
						:checked="check"
						@input="$emit('input', $event.target.checked)"
					/>

					<div class="check-label">その他</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	/**
	 * インプットのタイプ
	 * @example 入力値
	 */
	modelValue: { type: String, default: '' },
	/**
	 * 必須項目
	 * @example この項目は必須です
	 */
	required: { type: Boolean, default: true },
	/**
	 * ラベル
	 * @example お名前、メールアドレス、電話番号erc..
	 */
	label: { type: String, default: '' },
	/**
	 * ラベル
	 * @example お名前、メールアドレス、電話番号erc..
	 */
	check: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
input {
	height: 40px;
	margin: 10px 25px;
	width: 40px;
}

.checkbox-content {
	width: 100%;
}

.label-area {
	display: flex;
	font-size: 20px;
	text-align: left;
	width: 40%;
	gap: 10px;
}
.check-area {
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
}

.attention {
	color: red;
}
.check-label {
	font-size: 20px;
}
.label-input {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 25px;
}
.attention-text {
	color: red;
	margin-left: 42%;
}
</style>
