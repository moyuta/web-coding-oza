<template>
	<div class="text-content">
		<div class="text-area">
			<div class="attention-text">
				{{ required ? 'この項目は必須です' : '' }}
			</div>
			<div class="label-text">
				<div class="label-area">
					<div>{{ label }}</div>
					<div class="attention">{{ required ? '※' : '' }}</div>
				</div>
				<textarea
					type="text"
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
				/>
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
	label: { type: String, default: '', required: true },
})
</script>

<style lang="scss" scoped>
textarea {
	width: 60%;
	height: 180px;
	margin: 10px 0;
	resize: none;
}
.text-content {
	width: 100%;
}

.label-area {
	display: flex;
	font-size: 20px;
	text-align: left;
	width: 40%;
	gap: 10px;
	margin: 20px 0;
}
.attention {
	color: red;
}
.text-area {
	width: 110%;
}
.label-text {
	display: flex;
	justify-content: flex-start;
	font-size: 25px;
}
.attention-text {
	color: red;
	margin-left: 42%;
}
</style>
