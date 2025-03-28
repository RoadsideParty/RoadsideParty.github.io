<script setup>
import GoodsPriceOfDay from '@/theme/components/goodsPriceOfDay/index.vue'

const goodsList=[
    {name:"HUAWEI WATCH GT4",date:"2023-12-14",price:1244.1},
    {name:"iPhone16 Pro",date:"2025-01-11",price:7799}
]
</script>

# price of Day

<GoodsPriceOfDay :goodsList class="mt-20px"/>
