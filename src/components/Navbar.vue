<template>
  <div>
    <!-- Main Navigation -->
    <nav class="navbar is-fixed-top primary" :class="{ 'border': $route.path === '/'}"
        role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img :src="logo" width="120" height="48">
        </router-link>

        <a role="button"
          class="navbar-burger burger"
          :class="{'is-active': navbarBurgerOpen}"
          @click="navbarBurgerOpen = !navbarBurgerOpen"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" :class="{'is-active': navbarBurgerOpen}">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <i class="fas fa-globe-americas"></i>
              <span>Home</span>
              <i class="fas fa-sort-down"></i>
            </a>

            <div class="navbar-dropdown">
              <p class="navbar-item navbar-dropdown-desc">Vueddit Feeds</p>
              <a class="navbar-item">
                <i class="fas fa-globe-americas"></i> Home
              </a>
              <a class="navbar-item">
                <i class="fas fa-level-up-alt"></i> Popular
              </a>
              <a class="navbar-item">
                <i class="fas fa-arrows-alt"></i> All
              </a>
              <a class="navbar-item">
                <i class="fas fa-socks"></i> Original Content
              </a>
              <p class="navbar-item navbar-dropdown-desc">Other</p>
              <a class="navbar-item">
                <i class="fas fa-pen"></i> Create Post
              </a>
            </div>
          </div>

          <div class="navbar-item search">
            <div class="control has-icons-left">
              <input class="input is-static" type="text" placeholder="Search Vueddit">
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button is-white">
              <i class="fas fa-level-up-alt"></i>
            </a>
          </div>
          <div class="navbar-item">
            <a class="button is-white">
              <i class="fas fa-arrows-alt"></i>
            </a>
          </div>
          <div class="navbar-item border-right">
            <a class="button is-white">
              <i class="fas fa-socks"></i>
            </a>
          </div>
          <div class="navbar-item create-post">
            <a class="button is-white">
              <i class="fas fa-pen"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!--  App Message Blurb -->
    <nav v-if="$route.path === '/'" class="navbar secondary">
      <a class="nav-item"><i class="fas fa-rocket"></i> Learn how to build this app! <i class="fas fa-rocket"></i></a>
    </nav>
  </div>
</template>

<script>
import logo from '@/assets/vueddit_transparent_logo.png';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      navbarBurgerOpen: false
    }
  }
}
</script>

<style scoped>
nav {
  font-weight: 500;
}

nav.border {
  border-bottom: 1px solid rgb(237, 239, 241);
}

.navbar.primary {
  min-height: 52px;
  height: 52px;
  z-index: 99;
}

.navbar-start {
  flex-grow: 1;
}

.navbar-item img {
  max-height: initial;
}

.navbar-link {
  padding-right: 0.75em;
}

.navbar-link span {
  padding-right: 8.0em;
  font-size: 0.9em;
  font-weight: 600;
}

.navbar-link:after {
  display: none;
}

.fas {
  padding: 0 0.75em;
  color: #0078d2;
}

.fas.fa-sort-down {
  position: relative;
  bottom: 2px;
}

.navbar-dropdown .fas {
  width: 30px;
  margin-right: 0.4em;
}

.navbar-dropdown .navbar-dropdown-desc {
  margin-left: 0.75em;
  font-size: 0.8em;
  text-transform: uppercase;
  color: rgb(135, 138, 140);
}

.navbar-dropdown .navbar-dropdown-desc:not(:first-child) {
  padding-top: 1.5em;
}

.navbar-item.search,
.navbar-item .control {
  flex-grow: 1;
}

.navbar-item .control .input {
  background-color: rgb(246, 247, 248);
  border: 1px solid rgb(237, 239, 241);
}

.navbar-item .control .input:hover,
.navbar-item .control .input:focus {
  border: 1px solid rgb(0, 121, 211);
}

.navbar-end .navbar-item {
  padding: 0.5rem 0;
}

.navbar-end .navbar-item .button {
  padding-left: 0.25em;
  padding-right: 0.25em;
}

.navbar-end .navbar-item .button .fas {
  color: #000;
}

.navbar-end .navbar-item.border-right {
  border-right: 1px solid rgb(237, 239, 241);
}

.navbar-end .navbar-item.create-post {
  padding: 0 1.0em;
}

.navbar-end .navbar-item.create-post .button .fas {
  color: #0078d2;
}

@media screen and (max-width: 1087px) {
  .fas.fa-sort-down,
  .navbar-end {
    display: none;
  }
}

/* Secondary Nav Bar */
.navbar.secondary {
  min-height: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
}
</style>
