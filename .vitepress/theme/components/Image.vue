<script setup lang="ts">
const props = defineProps<{
	name: string
	size?: string[]
}>()
const { name, size } = props

const src = `/images/${name}`
function preview() {
	window.open(src, "_blank")
}

const style = {
	width: size ? size[0] : "",
	height: size ? size[1] : "",
	cursor: "pointer",
}
</script>

<template>
	<div @click="preview" :style>
		<img
			:src
			alt="加载失败"
			style="object-fit: cover; width: 100%; height: 100%"
		/>
	</div>
</template>

<style scoped></style>
