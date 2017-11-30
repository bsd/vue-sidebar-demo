<template>
  <div id="page">
  	<sidebar />
    <nuxt/>
  </div>
</template>

<style>
#page {
	display: flex;
}
</style>

<script>
import Sidebar from '~/components/Sidebar'

export default {
	components: { Sidebar }
}
</script>