<template>
	<div class="sidebar" :class="{collapsed: collapsed}">
		<h3>Menu</h3>
		<hamburger :active="collapsed" @hamtoggle="toggle"/>
		<nav>
			<a href="#">Page</a>
			<a href="#">Page</a>
			<a href="#">Page</a>
			<a href="#">Page</a>
		</nav>
	</div>
</template>

<style>
.sidebar {
  background-color: #454545;
  color: #eee;
  width: 200px;
  min-height: 1000px;
  margin-right: 30px;
  transition: all 0.5s;
  position: relative;
  left: 0;
}

.sidebar h3 {
  text-align: center;
  cursor: pointer;
  transition: transform 0.5s;
}

.sidebar nav {
  margin-top: 100px;
  margin-left: 30px;
}

.sidebar nav a {
  color: #eee;
  text-decoration: none;
  display: block;
  margin: 12px 0;
}


.sidebar.collapsed {
  width: 40px;
}

.sidebar.collapsed nav {
  margin-left: 0;
}

.sidebar.collapsed a {
  background-color: #ddd;
  width: 100%;
  padding: 0;
  color: transparent;
  height: 35px;
}

.sidebar.collapsed h3 {
  transform: rotate(-90deg) translate(-45px, -4px); /* translate(-45px, 68px); */
}

.sidebar .hamburger {
  position: absolute;
  right: 15px;
  top: 22px;
}
</style>

<script>
import Hamburger from '~/components/Hamburger'

export default {
  data: function () {
    return {
      collapsed: false
    }
  },
  methods: {
    toggle: function () {
      this.collapsed = !this.collapsed
    }
  },
  components: {Hamburger}
}
</script>