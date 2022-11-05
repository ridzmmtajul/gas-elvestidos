<template>
  <nav aria-label="alternative nav">
    <div
      class="bg-violet shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-60 content-center"
    >
      <div
        class="md:mt-5 md:fixed md:left-0 md:top-0 p-3 content-center md:content-start text-left justify-between"
      >
        <a href="/" aria-label="Home" class="hidden md:inline-block">
          <span class="logo">
            <!-- <img src="../../assets/logo7.png" alt="" /> -->
            <img src="http://drive.google.com/uc?export=view&id=1j2JOLTDE-qYAd_8zN5HupgEB3sopMW5s" alt="" class="logo">
          </span>
        </a>
        <ul
          class="list-reset flex flex-row md:flex-col md:mt-10 pt-3 md:py-3 px-1 md:px-2 text-center md:text-left"
        >
          <template v-for="option in options">
            <li class="mr-3 flex-1">
              <router-link
                :to="option.route"
                class="nav-link block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-black hover:border-purple-800"
              >
                <i
                  :class="'fas ' + option.icon + ' pr-0 md:pr-3 text-white'"
                ></i
                ><span
                  class="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block"
                  >{{ option.name }}</span
                >
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { name: "Dashboard", icon: "fa-chart-area", route: "/" },
        { name: "Orders", icon: "fa-user", route: "/orders" }
      ]
    };
  }
};
</script>

<style>
.nav-link:hover {
  border-color: #b7a2c3;
}
.logo img {
  width: 200px;
  margin: -12px 20px -30px 5px;
}
</style>
