<template>
<div>
    <div class="pt-3">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow">List of Orders</h1>
        <router-link to="/order-form">
            <span class="block text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pull-right" type="button">
                <i class="fas fa-plus"></i>
                
                Add order
            </span>
        </router-link>
      </div>
    </div>

    <div class="container p-10">

        <order-table :data="data"/>
    </div>
</div>
</template>

<script>
import OrderTable from './order/Table.vue';

export default {
  props:["data"],
  components: {
      OrderTable,
  },
}
</script>