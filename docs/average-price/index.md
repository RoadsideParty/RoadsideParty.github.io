<script setup>
import GoodsPriceOfDay from '@/theme/components/goodsPriceOfDay/index.vue'

const goodsList=[
    {name:"HUAWEI WATCH GT4",date:"2023-12-14",price:1244.1},
    {name:"iPhone16 Pro",date:"2025-01-11",price:7799},
    {name:"AirPods4",date:"2025-04-06",price:1189.15},
]
</script>

# average price

<GoodsPriceOfDay :goodsList class="mt-20px"/>
