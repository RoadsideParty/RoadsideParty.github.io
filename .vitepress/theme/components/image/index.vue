<script setup lang="ts">
const props = defineProps<{
	name: string
}>()
const { name } = props

const src = `/images/${name}`
function preview() {
	window.open(src, "_blank")
}
</script>

<template>
	<img
		:src
		alt="加载失败"
		@click="preview"
		class="cursor-pointer object-cover"
	/>
</template>

<style scoped></style>
