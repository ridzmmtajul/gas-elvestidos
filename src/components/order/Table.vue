<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">
            Order Code
          </th>
          <th scope="col" class="py-3 px-6">
            Client Name
          </th>
          <th scope="col" class="py-3 px-6">
            Unit
          </th>
          <th scope="col" class="py-3 px-6">
            Contact Number
          </th>
          <th scope="col" class="py-3 px-6">
            Order
          </th>
          <th scope="col" class="py-3 px-6">
            Measured By
          </th>
          <th scope="col" class="py-3 px-6">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        v-for="order in orders">
          <td class="py-4 px-6">{{ order.OrderNo }}</td>
          <td class="py-4 px-6">{{ order.client_name }}</td>
          <td class="py-4 px-6">{{ order.unit }}</td>
          <td class="py-4 px-6">{{ order.contact_num }}</td>
          <td class="py-4 px-6">{{ order.order }}</td>
          <td class="py-4 px-6">{{ order.measured_by }}</td>
          <td class="py-4 px-6">{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return{
      orders: [],
    }
  },
  created(){
    const chunkSize = 10;
    var data = '';
    for (let i = 0; i < this.data.length; i += chunkSize) {
      data = this.data.slice(i, i + chunkSize);
    }
    this.orders = data.reverse();
  }
}
</script>
