<script setup lang="ts">
const props = defineProps<{
	name: string
	size?: number[]
}>()
const { name, size } = props

const src = `/images/${name}`
function preview() {
	window.open(src, "_blank")
}

const style = {
	width: size ? size[0] + "px" : "",
	height: size ? size[1] + "px" : "",
}
</script>

<template>
	<div @click="preview" :style>
		<img :src alt="加载失败" style="object-fit: cover" />
	</div>
</template>

<style scoped></style>
