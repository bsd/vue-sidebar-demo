<template>
  <main>
    <div id="content">
      <h1>My Page</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <nav class="social" :class="{hidden: hidden}">
      	<hamburger :active="hidden" @hamtoggle="socialToggle" />
        <a href="#"><twitter /></a>
        <a href="#"><facebook /></a>
        <a href="#"><email /></a>
      </nav>

    </div>
  </main>
</template>

<style>
main {
	width: 800px;
	margin: 0 auto;
	background-color: #efefef;
	height: 100vh;
	padding: 0 50px;
}

.social {
  background-color: #22e4da;
  color: white;
  position: relative;
  display: block;
  padding: 12px;
  border-radius: 4px;
  transition: all 0.2s;
  white-space: nowrap;
  padding-top: 40px;
  padding-bottom: 5px;
  width: 20px;
}
.social a {
  display: block;
  margin: 5px 0;
}
.hidden {
  width: 20px;
  overflow: hidden;
  height: 20px;
  border-radius: 100%;
  padding: 12px;
}

.social > * {
  transition: opacity 0.2s;
}
.social.hidden > * {
  opacity: 0;
  visibility: hidden;
}
.social.hidden > .hamburger {
  opacity: 1;
  z-index: 3;
  visibility: visible;
}

.social .hamburger {
  position: absolute;
  top: 14px;
  left: 14px;
}

.test {
  padding: 30px;
  background-color: green;
}

</style>

<script>
import Hamburger from '~/components/Hamburger'

export default {
  data: function () {
    return {
      hidden: true
    }
  },
  methods: {
    socialToggle: function () {
      this.hidden = !this.hidden
    }
  },
  components: {Hamburger}
}
</script>


