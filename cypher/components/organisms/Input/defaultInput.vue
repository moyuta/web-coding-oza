<template>
	<input
		type="text"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
export default {
	name: 'defaultInput',
	props: {
		modelValue: String,
	},
	setup() {
		// watch(props.value, () => {
		// 	console.log(props.value)
		// })
	},
}
</script>

<style lang="scss" scoped>
input {
	width: 100%;
}
</style>
