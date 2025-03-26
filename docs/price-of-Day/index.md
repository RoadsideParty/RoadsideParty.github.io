<script setup>
import GoodsPriceOfDay from '@/theme/components/goodsPriceOfDay/index.vue'

const goodsList=[
    {name:"HUAWEI WATCH GT4",date:"2023-12-14",price:1244.1},
    {name:"iPhone16 Pro",date:"2025-01-11",price:7799}
]
</script>

# price of Day

<GoodsPriceOfDay v-for="item in goodsList" :key="item.name" :name="item.name" :date="item.date" :price="item.price" class="mt-20px"/>
