<template>
  <div>
    <div class="pt-3">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow">New Order</h1>
        <div class="flex flex-row-reverse flex-grow hidden md:inline-block">
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
              type="button"
              class="text-purple-700 border border-purple-700 hover:text-white hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right"
            >
              Cancel
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="p-2 md:p-10 bg-gradient-light">
      <div class="px-6 lg:px-8 text-left">
        <form class="space-y-6">
          <div class="md:grid md:grid-cols-5">
            <div class="col-span-3">
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Client name:
                </label>
                <input
                  type="text"
                  v-model="form.client_id"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
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
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Organization:
                </label>
                <input
                  type="text"
                  v-model="form.organization"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Contact Number:
                </label>
                <input
                  type="text"
                  v-model="form.contact_no"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
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
                  v-model="form.order_id"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Deposit:
                </label>
                <input
                  type="text"
                  v-model="form.deposit"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Balance:
                </label>
                <input
                  type="text"
                  v-model="form.balance"
                  class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div class="md:flex mt-2">
                <label
                  class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                  >Measured By:
                </label>
                <select v-model="form.staff_id" class="bg-transparent md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-blue-500 block w-full p-2.5">
                  <option></option>
                  <option>Tajul</option>
                  <option>Ridzmahal</option>
                  <option>Halid</option>
                </select>
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
                      type="text"
                      v-model="unit.value"
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-black text-center md:text-left"
                    />
                  </div>
                </div>
              </template>
            </div>
            <div class="col-span-2">
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
                      type="text"
                      v-model="unit.value"
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-black text-center md:text-left"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="flex flex-row-reverse flex-grow inline-block md:hidden">
            <button
              type="text"
              @click="onSubmit"
              class="text-white bg-purple-700 border border-purple-700 hover:text-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right"
            >
              Save
            </button>
            <router-link to="/orders">
              <span
                type="button"
                class="text-purple-700 pt-4 h-full border border-purple-700 hover:text-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right"
              >
                Cancel
              </span>
            </router-link>
          </div>
        </form>
      </div>

      <div id="preview" :class="showPreview == false ? 'hidden' : ''">
        <print-preview />
      </div>
    </div>
  </div>
</template>

<script>
import PrintPreview from "./Preview.vue";

export default {
  components: {
    PrintPreview
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        middle_name: ""
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
    };
  },
  methods: {
    onSubmit() {
  
      const data = [
        this.form.first_name,
        this.form.middle_name,
        this.form.last_name,
      ];

      this.upper_measurement.forEach((unit) => {
        data.push(unit.value);
      })

      this.lower_measurement.forEach((unit) => {
        data.push(unit.value);
      })

      // google.script.run.createOrder(data);
      google.script.run
          .withSuccessHandler(function(){
            swal("Success", "Record successfully saved", "success");
          })
          .withFailureHandler(function() {
            swal("Something went wrong", "Please check your internet connection", "error");
          })
          .createOrder(data);
    },
    onPrint() {
      // this.$htmlToPaper("preview");
      window.print();
    }
  }
};
</script>
