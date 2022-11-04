<template>
<div>
    <div class="pt-3">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow">Client List</h1>
        <button class="block text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pull-right" type="button" data-modal-toggle="client-form-modal">
            <i class="fas fa-plus"></i>
            Add client
        </button>
      </div>
    </div>

    <div class="container p-10">

        <client-table />
    </div>

    <!-- Main modal -->
    <div id="client-form-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="client-form-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="py-6 px-6 lg:px-8 text-left">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add new client</h3>
                    <form class="space-y-6" @submit.prevent="onSubmit">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <input type="text" v-model="form.first_name" placeholder="First Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Middle Name</label>
                            <input type="text" v-model="form.middle_name" placeholder="Middle Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <input type="text" v-model="form.last_name" placeholder="Last Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="">
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
import ClientTable from './client/Table.vue';

export default {
    components :{
        ClientTable,
    },
    data() {
        return {
            form: {
                first_name: "",
                last_name: "",
                middle_name: "",
            }
        }
    },
    methods: {
        onSubmit(){
            const data = [
                this.form.first_name,
                this.form.middle_name,
                this.form.last_name,
            ];

            google.script.run.createClient(data);
        }
    },
}
</script>