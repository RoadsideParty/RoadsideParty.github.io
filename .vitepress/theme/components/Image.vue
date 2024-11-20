<script setup lang="ts">
const props = defineProps<{
	name: string
	size?: number[]
}>()
const { name } = props

const src = "/assets/images/" + name

function preview() {
	window.open(src, "_blank")
}
</script>

<template>
	<div @click="preview">
		<img :src alt="" />
	</div>
</template>

<style scoped></style>
