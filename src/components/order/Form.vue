<template>
  <div>
      <div class="loader-wrapper" v-if="isLoading">
        <div class="loader left-1/3 md:left-2/4 top-72"></div>
      </div>

    <div class="pt-3">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow">New Order</h1>
        <div class="flex flex-row-reverse flex-grow">
          <button
            type="button"
            @click="onSubmit"
            class="text-white bg-purple-700 border border-purple-700 hover:text-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right"
          >
            <i class="fa fa-download mr-2"></i>
            Save
          </button>
          <router-link to="/orders">
            <span
              class="text-purple-700 border border-purple-700 hover:text-white hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right hidden md:inline-block"
            >
              Cancel
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="p-2 md:p-10 bg-gradient-light">
      <div class="px-6 lg:px-8 text-left">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div class="md:grid md:grid-cols-5">
            <div class="col-span-3">
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Client name: <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  v-model="form.client_name"
                  @focus="hideSidebar()"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Unit:
                </label>
                <input
                  type="text"
                  v-model="form.unit"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Contact Number:
                </label>
                <input
                  type="number"
                  v-model="form.contact_no"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
            <div class="col-span-2">
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Order:
                </label>
                <input
                  type="text"
                  v-model="form.order"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Deposit:
                </label>
                <input
                  type="number"
                  v-model="form.deposit"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Balance:
                </label>
                <input
                  type="number"
                  v-model="form.balance"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Measured By:
                </label>
                <input
                  type="text"
                  v-model="form.measured_by"
                  class="uppercase bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
          </div>
          <div class="md:grid md:grid-cols-5 mt-4">
            <div class="col-span-3 pr-5 mb-5">
              <p class="font-bold text-center pb-2">UPPER</p>
              <template v-for="(unit, i) in upper_measurement">
                <div class="flex group">
                  <label
                    class="w-1/2 md:w-1/3 py-1 text-sm font-medium text-gray-900 flex-shrink-0 group-hover:bg-purple-200"
                    >{{ i + 1 }}.  {{ unit.label }}
                  </label>
                  <div
                    class="flex items-center border-b border-teal-500 group-hover:border-purple-700"
                  >
                    <input
                      type="number"
                      v-model="unit.value"
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-black text-center md:text-left"
                    />
                  </div>
                </div>
              </template>
            </div>
            <div class="col-span-2 mb-5">
              <p class="font-bold text-center pb-2">LOWER</p>
              <template v-for="(unit, i) in lower_measurement">
                <div class="flex group">
                  <label
                    class="w-1/2 py-1 text-sm font-medium text-gray-900 flex-shrink-0 group-hover:bg-purple-200"
                    >{{ i + 1 }}.  {{ unit.label }}
                  </label>
                  <div
                    class="flex items-center border-b border-teal-500 group-hover:border-purple-700"
                  >
                    <input
                      type="number"
                      v-model="unit.value"
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-black text-center md:text-left"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import router from "./../../router/index"; 

export default {
  data() {
    return {
      form: {
        client_name: "",
        unit: "",
        contact_no: "",
        order: "",
        deposit: "",
        balance: "",
        measured_by: "",
      },
      upper_measurement: [
        { value: "", label: "Front Length" },
        { value: "", label: "Back Length" },
        { value: "", label: "Shoulder" },
        { value: "", label: "Arm Hole" },
        { value: "", label: "Upper Arm Girth" },
        { value: "", label: "Lower Arm Girth" },
        { value: "", label: "Sleeve Length" },
        { value: "", label: "Neck" },
        { value: "", label: "Chest/Bust" },
        { value: "", label: "Waist" },
        { value: "", label: "Hip 1" },
        { value: "", label: "Hip 2" },
        { value: "", label: "Fig" },
        { value: "", label: "Bust Distance" },
        { value: "", label: "Apex H" },
        { value: "", label: "Shoulder Distance" },
        { value: "", label: "Shoulder Blade Height" }
      ],
      lower_measurement: [
        { value: "", label: "Waist" },
        { value: "", label: "Hip" },
        { value: "", label: "Length" },
        { value: "", label: "Inner Seam" },
        { value: "", label: "Crotch" },
        { value: "", label: "Leg Circumference" },
        { value: "", label: "Knee Circumference" },
        { value: "", label: "Knee Height" },
        { value: "", label: "Buttom Circumference" }
      ],
      showPreview: false,
      isLoading: false,
    };
  },
  methods: {
    onSubmit() {
      var uniqueId = this.randomString(9, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

      const order = [
        uniqueId,
        this.convertUpperCase(this.form.client_name),
        this.form.unit,
        this.form.contact_no,
        this.form.order,
        this.form.deposit,
        this.form.balance,
        this.convertUpperCase(this.form.measured_by)
      ];

      this.upper_measurement.forEach((unit) => {
        order.push(unit.value);
      })

      this.lower_measurement.forEach((unit) => {
        order.push(unit.value);
      })

      this.isLoading = true;
      this.runGoogleScript("createOrder", order).then(data => {
          swal("Success", "Record successfully saved", "success");
          
          this.isLoading = false; 
          localStorage.setItem('data', data);
          router.push('/print-preview');

          this.showSidebar();
        }).catch(error => {
          swal("Error", "Sorry, something went wrong", "error");

          console.log(error);
        });
    },
    runGoogleScript(serverFunctionName, order){
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler(data => {
            resolve(data);
          })
          .withFailureHandler(error => {
            reject(error);
          })[serverFunctionName](order);
      });
    },
    convertUpperCase(str){
      const word = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      return word;
    },
    randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    },
    hideSidebar(){
      
      if (this.isMobile()) {
        document.getElementById("sidenav").style.display = "none";
      }
    },
    isMobile(){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    showSidebar(){
      document.getElementById("sidenav").style.display = "block";
    },
  }
};
</script>