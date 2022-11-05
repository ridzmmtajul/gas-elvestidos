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
        <div class="relative p-4 h-full md:h-auto">
            <!-- Modal content -->
            <client-form />
        </div>
    </div> 
</div>
</template>

<script>
import ClientTable from './client/Table.vue';
import ClientForm from './client/Form.vue';

export default {
    components: {
        ClientTable,
        ClientForm,
    },
}
</script>