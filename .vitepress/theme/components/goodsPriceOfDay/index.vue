<script setup lang="ts">
import GoodsItem from "./goodsItem.vue"
import dayjs from "dayjs"
import { division } from "@/theme/utils"
import { Item } from "./type"
import Big from "big.js"

const props = defineProps<{
	goodsList: Item[]
}>()
const { goodsList } = props

// 买了多少天
function getBuyDays(date: string) {
	return dayjs().diff(date, "day")
}

// 每天多少钱
function getUnitPrice(price: number, buyDays: number) {
	return division(price, buyDays, 2).toNumber()
}

const list = goodsList.map((item) => {
	const buyDays = getBuyDays(item.date)
	return {
		...item,
		buyDays,
		unitPrice: getUnitPrice(item.price, buyDays),
	}
})
const summary = list.reduce(
	(acc, cur) => {
		return {
			price: new Big(acc.price).plus(cur.price).toNumber(),
			unitPrice: new Big(acc.unitPrice).plus(cur.unitPrice).toNumber(),
		}
	},
	{
		price: 0,
		unitPrice: 0,
	}
)
</script>

<template>
	<div>
		<div class="rounded-md bg-blue p-20px">
			<div class="text-white text-20px font-bold mb-10px">总计</div>
			<div class="flex justify-between lt-sm:(flex-col)">
				<div class="text-14px text-white">购买金额：{{ summary.price }}</div>
				<div class="text-14px text-white">日均：{{ summary.unitPrice }}</div>
			</div>
		</div>
		<GoodsItem
			v-for="item in list"
			:key="item.name"
			:goods="item"
			class="mt-20px"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
