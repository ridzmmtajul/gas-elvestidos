<template>
  <div>
    <div class="pt-3 dont-print">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow text-sm mt-5">
          <i class="fas fa-check-circle mr-2"></i>Record sucessfully saved,
          showing the print preview below
        </h1>
        <button @click="onPrint()">
          <span
            class="block text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pull-right"
            type="button"
          >
            <i class="fas fa-print mr-2"></i>

            PRINT
          </span>
        </button>
      </div>
    </div>

    <div class="container p-10 print" style="height:auto">
      <div class="md:grid md:grid-cols-5">
        <div class="col-span-3">
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Client Name: </span>
            <div class="grow text-left border-b border-black">
              {{ data[1] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Unit: </span>
            <div class="grow text-left border-b border-black">
              {{ data[2] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Contact Number: </span>
            <div class="grow text-left border-b border-black">
              {{ data[3] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Order: </span>
            <div class="grow text-left border-b border-black">
              {{ data[4] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Deposit: </span>
            <div class="grow text-left border-b border-black">
              {{ data[5] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Balance: </span>
            <div class="grow text-left border-b border-black">
              {{ data[6] }}
            </div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Measured By: </span>
            <div class="grow text-left border-b border-black">
              {{ data[7] }}
            </div>
          </div>
        </div>
        <div class="col-span-2 ml-32">
          <p class="font-bold text-xl text-left">No. <span class="text-red-500">{{ data[0] }}</span></p>
          <qr-code :text="data[0]" :size="120"></qr-code>
        </div>
      </div>

      <div class="md:grid md:grid-cols-5 mt-5">
        <div class="col-span-3">
          <p class="font-primary-bold text-xl">UPPER</p>
          <template v-for="(unit, i) in upper_measurement">
            <div class="flex group md:w-80">
              <span class="flex-shrink-0 mr-2"
                >{{ i + 1 }}. {{ unit.label }}:
              </span>
              <div class="grow text-left border-b border-black">
                {{ data[7 + i] }}
              </div>
            </div>
          </template>
        </div>
        <div class="col-span-2">
          <p class="font-primary-bold text-xl">LOWER</p>
          <template v-for="(unit, i) in lower_measurement">
            <div class="flex group md:w-80">
              <span class="flex-shrink-0 mr-2"
                >{{ i + 1 }}. {{ unit.label }}:
              </span>
              <div class="grow text-left border-b border-black">
                {{ data[24 + i] }}
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="md:grid md:grid-cols-5">
        <div class="col-span-3 text-left text-xs mt-5">
          <p>
            This is to testify that the measurements written herein are
            correct.<br />
            If alterations are required and judged that it was EL VESTIDOS<br />
            that is at fault, alterations will be free of charge.
          </p>
          <br />
          <p>
            In some cases alterations are desired and it has been proven that
            the<br />
            fit was correctly done according to your measurements, this means
            either <br />
            you change your mind on the fitting or you want something that is
            different <br />
            from the written measurement, or you have lost/gained some weight
            since <br />
            the time you were measured. In such cases, we will quote you for the
            alteration
          </p>
        </div>
        <div class="md:w-80 mt-10">
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Client Signature: </span>
            <div class="grow text-left border-b border-black"></div>
          </div>
          <div class="flex group">
            <span class="flex-shrink-0 mr-2">Date: </span>
            <div class="grow text-left border-b border-black"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: [],
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
      value: "https://example.com",
    };
  },
  created() {
    this.data = localStorage.getItem("data");
    this.data = this.data.split(",");
  },
  methods: {
    onPrint() {
      // this.$htmlToPaper("preview");
      window.print();
    }
  }
};
</script>
