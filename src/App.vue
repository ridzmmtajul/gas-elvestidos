<template>
  <div id="app">
    <NavBar />
    <main>
      <div class="flex flex-col md:flex-row">
        <Sidebar />
        <section class="grow md:pr-5">
          <div
            id="main"
            class="main-content flex-1 mt-12 md:mt-2 pb-24 md:pb-5"
          >
            <router-view />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/partial/Navbar.vue";
import Sidebar from "./components/partial/Sidebar.vue";
export default {
  name: "App",
  components: {
    NavBar,
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
  margin-top: 60px;
}
</style>
