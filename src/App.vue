<template>
  <div id="app">
    <!-- <main> -->
      <div class="flex flex-col md:flex-row mt-n">
        <Sidebar />
        <section class="grow md:pr-5">
          <a href="/" aria-label="Home" class="inline-block md:hidden mt-5">
            <span class="logo">
              <img src="./assets/logo7.png" alt="" />
              <!-- <img src="http://drive.google.com/uc?export=view&id=1bmbHItMxis_-jfQEgmdxsjLPEC6NBx20" alt="" class="logo"> -->
            </span>
          </a>
          <div
            id="main"
            class="main-content flex-1 mt-12 md:mt-2 pb-24 md:pb-5"
          >
            <router-view />
          </div>
        </section>
      </div>
    <!-- </main> -->
  </div>
</template>

<script>
import Sidebar from "./components/partial/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mt-n {
  margin-top: -50px;
}
</style>
