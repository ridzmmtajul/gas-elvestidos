<template>
  <div>
    <div class="pt-3">
      <div
        class="flex rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2 grow">Record Saved</h1>
      </div>
    </div>

    <div class="container p-10">
      <h1>{{ data }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: false
    }
  }
};
</script>
