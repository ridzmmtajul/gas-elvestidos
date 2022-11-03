<template>
<div>
    <div class="pt-3">
      <div
        class="rounded-tl-3xl bg-gradient-violet from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
      >
        <h1 class="font-bold pl-2 text-left ml-2">Student List</h1>
      </div>
    </div>

    <div class="bg-white">
        <form @submit.prevent="onSubmit">
            <div>
                <label>First Name</label>
                <input type="text" v-model="form.first_name"/>
            </div>

            <div>
                <label>Middle Name</label>
                <input type="text" v-model="form.middle_name"/>
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" v-model="form.last_name"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
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

            google.script.run.createStudent(data);
        }
    },
}
</script>