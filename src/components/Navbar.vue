<template>
  <div class="container">
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <router-link :to="{ path: '/' }" class="pure-menu-heading-icon pure-menu-link">
                <img src="@/assets/y18.gif" width="18" height="18" style="border: 1px solid white;" />
                </router-link>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/' }" class="pure-menu-link pure-menu-heading">Hacker News</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/newest' }" class="pure-menu-link">new</router-link>
                <span>|</span>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/front' }" class="pure-menu-link">past</router-link>
                <span>|</span>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/newcomments' }" class="pure-menu-link">comments</router-link>
                <span>|</span>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/ask' }" class="pure-menu-link">ask</router-link>
                <span>|</span>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/show' }" class="pure-menu-link">show</router-link>
                <span>|</span>
            </li>
            <li class="pure-menu-item">
                <router-link :to="{ path: '/jobs' }" class="pure-menu-link">jobs</router-link>
                <span>|</span>
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

<style scoped>
.pure-menu {
    background-color: #ff6600;
    text-align: left;
    margin-top: 10px;
}

.pure-menu-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    top: 2px;
    left: 1px;
}

.pure-menu-item {
    float: left;
    /* border-right: 0.5px solid black; */
}

/* .pure-menu-item:first-child {
    padding: 0;
    border-right: none;
}

.pure-menu-item:last-child {
    border-right: none;
}

.pure-menu-item:nth-child(2) {
    border-right: none;
} */

.pure-menu-list a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10pt;
    color: black;
    text-decoration: none;
    padding: 0 5px 0 5px;
}

.pure-menu-heading {
    color: black;
    font-weight: bold;
    padding: 0;
}

.pure-menu-item > .pure-menu-heading-icon {
    padding: 0;
}

</style>