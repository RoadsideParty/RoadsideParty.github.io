<script setup lang="ts">
import { Item } from "./type"

interface Goods extends Item {
	buyDays: number
	unitPrice: number
}
const props = defineProps<{
	goods: Goods
}>()
</script>

<template>
	<div class="rounded-md bg-green p-20px">
		<div class="text-white text-20px font-bold mb-10px">{{ goods.name }}</div>
		<div class="flex justify-between lt-sm:(flex-col)">
			<div class="text-14px text-white">
				<span class="mr-10px min-w-150px inline-block">
					购买日期：{{ goods.date }}
				</span>
				<span>总价：{{ goods.price }}</span>
			</div>
			<div class="text-14px text-white">
				<span class="mr-10px">已购买：{{ goods.buyDays }} 天</span>
				<span>日均：{{ goods.unitPrice }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
