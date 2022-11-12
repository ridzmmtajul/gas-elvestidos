<template>
    <div>
      <div class="pt-3 dont-print">
        <div
          class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
        >
          <h1 class="font-bold pl-2 text-left ml-2 grow text-sm mt-5">
            
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
  
      <div class="container p-10 dont-print mb-96" style="height:auto">
        <div class="md:grid md:grid-cols-5">
          <div class="col-span-3">
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Client Name: </span>
              <div class="grow text-left border-b border-black">
                {{ data.client_name }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Unit: </span>
              <div class="grow text-left border-b border-black">
                {{ data.unit }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Contact Number: </span>
              <div class="grow text-left border-b border-black">
                {{ data.contact_no }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Order: </span>
              <div class="grow text-left border-b border-black">
                {{ data.order }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Deposit: </span>
              <div class="grow text-left border-b border-black">
                {{ data.deposit }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Balance: </span>
              <div class="grow text-left border-b border-black">
                {{ data.balance }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Measured By: </span>
              <div class="grow text-left border-b border-black">
                {{ data.measured_by }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Status: </span>
              <div class="grow text-left border-b border-black text-red-500">
                {{ data.status }}
              </div>
            </div>
          </div>
        </div>
  
        <div class="md:grid md:grid-cols-5 mt-5">
          <div class="col-span-3">
            <p class="font-primary-bold text-xl">UPPER</p>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">1. Front Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_front_length }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">2. Back Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_back_length }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">3. Shoulder:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">4. Arm Hole:</span>
                <div class="grow text-left border-b border-black">{{ data.u_arm_hole }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">5. Upper Arm Girth:</span>
                <div class="grow text-left border-b border-black">{{ data.u_uag }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">6. Lower Arm Girth:</span>
                <div class="grow text-left border-b border-black">{{ data.u_lag }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">7. Sleeve Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_sleeve_length }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">8. Neck:</span>
                <div class="grow text-left border-b border-black">{{ data.u_neck }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">9. Chest/Bust:</span>
                <div class="grow text-left border-b border-black">{{ data.u_chest }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">10. Waist:</span>
                <div class="grow text-left border-b border-black">{{ data.u_waist }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">11. Hip 1:</span>
                <div class="grow text-left border-b border-black">{{ data.u_hip1 }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">12. Hip 2:</span>
                <div class="grow text-left border-b border-black">{{ data.u_hip2 }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">13. Fig:</span>
                <div class="grow text-left border-b border-black">{{ data.u_fig }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">14. Bust Distance:</span>
                <div class="grow text-left border-b border-black">{{ data.u_bust_distance }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">15. Apex H:</span>
                <div class="grow text-left border-b border-black">{{ data.u_apex_h }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">16. Shoulder Distance:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder_distance }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">17. Shoulder Blade Height:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder_blade_height }}</div>
              </div>
          </div>
          <div class="col-span-2">
            <p class="font-primary-bold text-xl">LOWER</p>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">1. Waist:</span>
                <div class="grow text-left border-b border-black">{{ data.l_waist }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">2. Hip:</span>
                <div class="grow text-left border-b border-black">{{ data.l_hip }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">3. Length:</span>
                <div class="grow text-left border-b border-black">{{ data.l_length }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">4. Inner Seam:</span>
                <div class="grow text-left border-b border-black">{{ data.l_inner_seam }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">5. Crotch:</span>
                <div class="grow text-left border-b border-black">{{ data.l_crotch }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">6. Leg Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_leg_dir }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">7. Knee Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_knee_cir }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">8. Knee Height:</span>
                <div class="grow text-left border-b border-black">{{ data.l_knee_height }}</div>
              </div>
              <div class="flex group md:w-80">
                <span class="flex-shrink-0 mr-2">9. Buttom Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_buttom_cir }}</div>
              </div>
          </div>
        </div>

      </div>

      <!-- TO PRINT -->
      <div class="container p-10 print" style="height:auto">
        <div class="grid grid-cols-5">
          <div class="col-span-3">
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Client Name: </span>
              <div class="grow text-left border-b border-black">
                {{ data.client_name }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Unit: </span>
              <div class="grow text-left border-b border-black">
                {{ data.unit }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Contact Number: </span>
              <div class="grow text-left border-b border-black">
                {{ data.contact_no }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Order: </span>
              <div class="grow text-left border-b border-black">
                {{ data.order }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Deposit: </span>
              <div class="grow text-left border-b border-black">
                {{ data.deposit }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Balance: </span>
              <div class="grow text-left border-b border-black">
                {{ data.balance }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Measured By: </span>
              <div class="grow text-left border-b border-black">
                {{ data.measured_by }}
              </div>
            </div>
            <div class="flex group">
              <span class="flex-shrink-0 mr-2">Status: </span>
              <div class="grow text-left border-b border-black text-red-500">
                {{ data.status }}
              </div>
            </div>
          </div>
          <div class="col-span-2 ml-32">
            <p class="font-bold text-sm text-left">Code: <span class="text-red-500">{{ data.OrderNo }}</span></p>
            <qr-code :text="data.OrderNo" :size="120"></qr-code>
          </div>
        </div>
  
        <div class="grid grid-cols-5 mt-5">
          <div class="col-span-3">
            <p class="font-primary-bold text-xl">UPPER</p>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">1. Front Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_front_length }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">2. Back Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_back_length }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">3. Shoulder:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">4. Arm Hole:</span>
                <div class="grow text-left border-b border-black">{{ data.u_arm_hole }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">5. Upper Arm Girth:</span>
                <div class="grow text-left border-b border-black">{{ data.u_uag }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">6. Lower Arm Girth:</span>
                <div class="grow text-left border-b border-black">{{ data.u_lag }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">7. Sleeve Length:</span>
                <div class="grow text-left border-b border-black">{{ data.u_sleeve_length }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">8. Neck:</span>
                <div class="grow text-left border-b border-black">{{ data.u_neck }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">9. Chest/Bust:</span>
                <div class="grow text-left border-b border-black">{{ data.u_chest }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">10. Waist:</span>
                <div class="grow text-left border-b border-black">{{ data.u_waist }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">11. Hip 1:</span>
                <div class="grow text-left border-b border-black">{{ data.u_hip1 }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">12. Hip 2:</span>
                <div class="grow text-left border-b border-black">{{ data.u_hip2 }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">13. Fig:</span>
                <div class="grow text-left border-b border-black">{{ data.u_fig }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">14. Bust Distance:</span>
                <div class="grow text-left border-b border-black">{{ data.u_bust_distance }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">15. Apex H:</span>
                <div class="grow text-left border-b border-black">{{ data.u_apex_h }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">16. Shoulder Distance:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder_distance }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">17. Shoulder Blade Height:</span>
                <div class="grow text-left border-b border-black">{{ data.u_shoulder_blade_height }}</div>
              </div>
          </div>
          <div class="col-span-2">
            <p class="font-primary-bold text-xl">LOWER</p>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">1. Waist:</span>
                <div class="grow text-left border-b border-black">{{ data.l_waist }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">2. Hip:</span>
                <div class="grow text-left border-b border-black">{{ data.l_hip }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">3. Length:</span>
                <div class="grow text-left border-b border-black">{{ data.l_length }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">4. Inner Seam:</span>
                <div class="grow text-left border-b border-black">{{ data.l_inner_seam }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">5. Crotch:</span>
                <div class="grow text-left border-b border-black">{{ data.l_crotch }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">6. Leg Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_leg_dir }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">7. Knee Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_knee_cir }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">8. Knee Height:</span>
                <div class="grow text-left border-b border-black">{{ data.l_knee_height }}</div>
              </div>
              <div class="flex group w-80">
                <span class="flex-shrink-0 mr-2">9. Buttom Circumference:</span>
                <div class="grow text-left border-b border-black">{{ data.l_buttom_cir }}</div>
              </div>
          </div>
        </div>
  
        <div class="grid grid-cols-5">
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
          <div class="w-80 mt-10">
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
      };
    },
    created() {
      this.data = this.$route.query.order;
    },
    methods: {
      onPrint() {
        window.print();
      }
    }
  };
  </script>  