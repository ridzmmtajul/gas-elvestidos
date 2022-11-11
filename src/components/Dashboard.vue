<template>
  <div>
    <div class="pt-3">
      <div
        class="rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2">Dashboard</h1>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/3 p-6">
          <div
            class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"
          >
          <router-link to="/orders">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-5 bg-green-600">
                  <i class="fa fa-user fa-2x fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h2 class="font-bold uppercase text-gray-600">Total Orders</h2>
                <p class="font-bold text-3xl">
                  {{ data.length | 0 }}
                </p>
              </div>
            </div>
          </router-link>
          </div>
          <!--/Metric Card-->
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 p-6">
          <div
            class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5"
          >
          <router-link to="/scan-qrcode">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-5 bg-yellow-600">
                  <i class="fa fa-qrcode fa-2x fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h2 class="font-bold uppercase text-gray-600">Scan Order Code</h2>
              </div>
            </div>
          </router-link>
          </div>
          <!--/Metric Card-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      data: [],
    }
  },
}
</script>
