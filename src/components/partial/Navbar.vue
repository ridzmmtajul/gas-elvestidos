<template>
  <header>
    <!--Nav-->
    <nav
      aria-label="menu nav"
      class="pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0 bg-violet"
    >
      <div class="md:flex flex-wrap items-center">
        <div
          class="flex flex-shrink justify-center md:justify-start text-white"
        >
          <a href="#" aria-label="Home">
            <span class="logo">
              <img src="../../assets/logo-white.png" alt="" />
              <!-- <img src="http://drive.google.com/uc?export=view&id=1RtEaPKW8xK3qpffDBrSvqxyX3hVEIsAX" alt="" class="logo"> -->
            </span>
          </a>
        </div>

        <div
          class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2 pt-10 md:pt-3"
        >
          <span class="relative w-full">
            <input
              aria-label="search"
              type="search"
              id="search"
              placeholder="Search"
              class="w-full bg-violet-light text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
            />
            <div class="absolute search-icon" style="top: 1rem; left: .8rem;">
              <svg
                class="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                ></path>
              </svg>
            </div>
          </span>
        </div>

        <div
          class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end pt-5 hidden md:inline-flex"
        >
          <ul
            class="list-reset flex justify-between flex-1 md:flex-none items-center"
          >
            <li class="flex-1 md:flex-none md:mr-3">
              <div class="relative inline-block">
                <button
                  onclick="toggleDD('myDropdown')"
                  class="drop-button text-white py-2 px-2 flex"
                >
                  <span class="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
                  </span> 
                  Hi, User
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.logo img {
  width: 200px;
  margin: -12px 20px -30px 5px;
}
</style>
