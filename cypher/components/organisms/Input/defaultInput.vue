<template>
	<div class="input-content">
		<div class="input-area">
			<div class="attention-text">
				{{ required ? 'この項目は必須です' : '' }}
			</div>
			<div class="label-input">
				<div class="label-area">
					<div>{{ label }}</div>
					<div class="attention">{{ required ? '※' : '' }}</div>
				</div>
				<input
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
	label: { type: String, default: '' },
})
</script>

<style lang="scss" scoped>
input {
	width: 60%;
	height: 40px;
	margin: 10px 0;
}

.input-content {
	width: 100%;
}

.label-area {
	display: flex;
	font-size: 20px;
	text-align: left;
	width: 40%;
	gap: 10px;
	font-weight: bold;
}
.attention {
	color: red;
}
.input-area {
	width: 110%;
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
