<script setup lang="ts">
import { computed } from "vue"
import dayjs from "dayjs"
import { division } from "../../utils"

const props = defineProps<{
	date: string
	price: number
	name: string
}>()
const { date, price } = props

// 买了多少天
const buyDays = computed(() => {
	return dayjs().diff(date, "day")
})

// 每天多少钱
const unitPrice = computed(() => {
	return division(price, buyDays.value, 2).toNumber()
})
</script>

<template>
	<div class="rounded-md bg-green p-20px">
		<div class="text-white text-20px font-bold mb-10px">{{ name }}</div>
		<div class="flex justify-between lt-sm:(flex-col)">
			<div class="text-14px text-white">
				<span class="mr-10px">购买日期：{{ date }} </span>
				<span>总价：{{ price }}</span>
			</div>
			<div class="text-14px text-white">
				<span class="mr-10px">已购买：{{ buyDays }} 天</span>
				<span>日均：{{ unitPrice }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
