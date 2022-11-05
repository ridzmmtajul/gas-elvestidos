<template>
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <button
      type="button"
      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
      :class="isUpperClicked == true ? 'md:invisible' : 'md:visible'"
      data-modal-toggle="client-form-modal"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>

    <div class="py-6 px-6 lg:px-8 text-left">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-5">
          <div
            class="col-span-3 "
            :class="isUpperClicked == true ? 'md:mt-10' : ''"
          >
            <h3 class="mb-8 text-xl font-medium text-gray-900 dark:text-white">
              Add new client
            </h3>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Client name:
              </label>
              <input
                type="text"
                v-model="form.client_id"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Unit:
              </label>
              <input
                type="text"
                v-model="form.unit"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Contact Number:
              </label>
              <input
                type="text"
                v-model="form.contact_no"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Order:
              </label>
              <input
                type="text"
                v-model="form.order_id"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Deposit:
              </label>
              <input
                type="text"
                v-model="form.deposit"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Balance:
              </label>
              <input
                type="text"
                v-model="form.balance"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div class="flex mt-2">
              <label
                class="w-1/4 flex-shrink-0 text-sm font-medium text-gray-900"
                >Measured By:
              </label>
              <input
                type="text"
                v-model="form.staff_id"
                class="bg-gray-50 md:mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div class="col-span-2">
            <div>
              <div
                class="mb-4 border-b border-gray-200 dark:border-gray-700 mt-5"
              >
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center bg-blue-50 rounded-tr-full"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li class="mr-2" role="presentation">
                    <button
                      class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                      id="profile-tab"
                      data-tabs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                      @click="isUpperClicked = true"
                    >
                      Upper
                    </button>
                  </li>
                  <li class="mr-2" role="presentation">
                    <button
                      class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                      id="dashboard-tab"
                      data-tabs-target="#dashboard"
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                      @click="isUpperClicked = false"
                    >
                      Lower
                    </button>
                  </li>
                </ul>
              </div>

              <div id="myTabContent">
                <div
                  class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <template v-for="(unit) in upper_measurement">
                    <div class="flex group">
                      <label
                        class="w-1/2 py-1 text-sm font-medium text-gray-900 flex-shrink-0 group-hover:bg-blue-100"
                        >{{ unit.label }}
                      </label>
                      <div
                        class="flex items-center border-b border-teal-500 w-full group-hover:border-blue-400 focus-within:border-blue-400"
                      >
                        <input
                          type="text"
                          v-model="unit.value"
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-blue-400"
                        />
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <template v-for="(unit) in lower_measurement">
                    <div class="flex group">
                      <label
                        class="w-1/2 py-1 text-sm font-medium text-gray-900 flex-shrink-0 group-hover:bg-blue-100"
                        >{{ unit.label }}
                      </label>
                      <div
                        class="flex items-center border-b border-teal-500 w-full group-hover:border-blue-400 focus-within:border-blue-400"
                      >
                        <input
                          type="text"
                          v-model="unit.value"
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0 focus:text-blue-400"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse">
          <button
            type="button"
            @click="onPrint"
            class="text-white w-full md:w-1/6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pull-right"
          >
            Save & Print
          </button>
          <button
            type="submit"
            class="text-blue-700 border border-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 py-2.5 text-center pull-right"
          >
            Save
          </button>
          <button
            type="button"
            class="text-gray-400 border border-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center px-10 mr-2 hidden md:inline-flex"
            data-modal-toggle="client-form-modal"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

    <div id="preview" :class="showPreview == false ? 'hidden' : ''">
      <print-preview />
    </div>
  </div>
</template>

<script>
import PrintPreview from './Preview.vue';

export default {
  components: {
    PrintPreview,
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        middle_name: ""
      },
      upper_measurement: {
        front_length: { value: "", label: "Front Length" },
        back_length: { value: "", label: "Back Length" },
        shoulder: { value: "", label: "Shoulder" },
        arm_hole: { value: "", label: "Arm Hole" },
        upper_arm_girth: { value: "", label: "Upper Arm Girth" },
        lower_arm_girth: { value: "", label: "Lower Arm Girth" },
        sleeve_length: { value: "", label: "Sleeve Length" },
        neck: { value: "", label: "Neck" },
        chest_bust: { value: "", label: "Chest/Bust" },
        waist: { value: "", label: "Waist" },
        hip_1: { value: "", label: "Hip 1" },
        hip_2: { value: "", label: "Hip 2" },
        fig: { value: "", label: "Fig" },
        bust_distance: { value: "", label: "Bust Distance" },
        apex_h: { value: "", label: "Apex H" },
        shoulder_distance: { value: "", label: "Shoulder Distance" },
        shoulder_blade_height: { value: "", label: "Shoulder Blade Height" },
      },
      lower_measurement: {
        waist: { value: "", label: "Waist" },
        hip: { value: "", label: "Hip" },
        length: { value: "", label: "Length" },
        inner_seam: { value: "", label: "Inner Seam" },
        crotch: { value: "", label: "Crotch" },
        leg_cir: { value: "", label: "Leg Circumference" },
        knee_cir: { value: "", label: "Knee Circumference" },
        knee_height: { value: "", label: "Knee Height" },
        buttom_cir: { value: "", label: "Buttom Circumference" },
      },
      isUpperClicked: true,
      showPreview: false,
    };
  },
  methods: {
    onSubmit() {
      const data = [
        this.form.first_name,
        this.form.middle_name,
        this.form.last_name,
        this.upper_measurement.front_length.value,
        this.upper_measurement.back_length.value,
        this.upper_measurement.shoulder.value,
        this.upper_measurement.arm_hole.value,
        this.upper_measurement.upper_arm_girth.value,
        this.upper_measurement.lower_arm_girth.value,
        this.upper_measurement.sleeve_length.value,
        this.upper_measurement.neck.value,
        this.upper_measurement.chest_bust.value,
        this.upper_measurement.waist.value,
        this.upper_measurement.hip_1.value,
        this.upper_measurement.hip_2.value,
        this.upper_measurement.fig.value,
        this.upper_measurement.bust_distance.value,
        this.upper_measurement.apex_h.value,
        this.upper_measurement.shoulder_distance.value,
        this.upper_measurement.shoulder_blade_height.value,
        this.lower_measurement.waist.value,
        this.lower_measurement.hip.value,
        this.lower_measurement.length.value,
        this.lower_measurement.inner_seam.value,
        this.lower_measurement.crotch.value,
        this.lower_measurement.leg_cir.value,
        this.lower_measurement.knee_cir.value,
        this.lower_measurement.knee_height.value,
        this.lower_measurement.buttom_cir.value,
      ];

      console.log(data);
      // google.script.run.createClient(data);
    },
    onPrint() {
      this.showPreview = true;
      this.$htmlToPaper("preview");
    }
  }
};
</script>
