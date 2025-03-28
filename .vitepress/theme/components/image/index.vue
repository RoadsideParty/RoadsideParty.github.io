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
	<div @click="preview" class="cursor-pointer">
		<img :src alt="加载失败" class="object-cover size-full" />
	</div>
</template>

<style scoped></style>
