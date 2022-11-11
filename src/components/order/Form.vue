<script>
//Order Component

Vue.component("order", {
  props: {
    data: Array
  },

  methods: {
    showOrderDetail: function(order) {
      this.order = this.data.filter(i => i.OrderNo == id);
      // this.order = order;
      this.show = this.show ? false : true;
    }
  },

  data: function() {
    return {
      order: new Order(),
      show: false
    };
  },
  template: `
     
     <div>
      <div class="pt-3">
        <div
          class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
        >
          <h1 class="font-bold pl-2 text-left ml-2 flex-1">List of Orders</h1>
          <a v-on:click="route('order-form')">
              <span class="block text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pull-right" type="button">
                  <i class="fas fa-plus"></i>
                  
                  Add order
              </span>
          </a>
        </div>
      </div>
     
     <div class="container p-10">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50"
            >
              <tr>
                <th scope="col" class="py-3 px-6">
                  Order#
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b" v-for="order in data" v-bind:key="order.OrderNo" v-if="!show">
                <td class="py-4 px-6">
                  {{order.OrderNo}}
                </td>
                <td class="py-4 px-6">
                  {{order.client_name}}
                </td>
                <td class="py-4 px-6">
                  {{order.unit}}
                </td>
                <td class="py-4 px-6">
                  {{order.contact_num}}
                </td>
                <td class="py-4 px-6">
                  {{order.order}}
                </td>
                <td class="py-4 px-6">
                  {{order.measured_by}}
                </td>
                <td>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                  @click="showOrderDetail(order)"
                ">
                  <i class="fa fa-pen"></i>
                </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

     </div>
    
    `
});
</script>
