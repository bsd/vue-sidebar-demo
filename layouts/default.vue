<template>
  <div id="page">
  	<sidebar />
    <nuxt/>
  	<cart />
  </div>
</template>

<style>
#page {
	display: flex;
	justify-content: space-between;
}
</style>

<script>
import Sidebar from '~/components/Sidebar'
import Cart from '~/components/Cart'

export default {
	components: { Sidebar, Cart }
}
</script>