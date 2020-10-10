<template>
  <div class="pure-menu pure-menu-horizontal">
      <div class="container">
          <router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Hacker News</router-link>
          <ul class="pure-menu-list">
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/newest' }" class="pure-menu-link">new</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/front' }" class="pure-menu-link">past</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/newcomments' }" class="pure-menu-link">comments</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/ask' }" class="pure-menu-link">ask</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/show' }" class="pure-menu-link">show</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/jobs' }" class="pure-menu-link">jobs</router-link>
              </li>
              <li class="pure-menu-item">
                  <router-link :to="{ path: '/submit' }" class="pure-menu-link">submit</router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
.pure-menu {
    background-color: #e17842;
    text-align: left;
}

.pure-menu a {
    color: white;
}

</style>