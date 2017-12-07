<template>
	<main>
		<div id="content">
			<h1>Donate</h1>
			<h2>Thank you for your interest in our cause</h2>

			<p>Here are a few senators that support our cause, and would greatly benefit from a contribution on your behalf. Please select a few to donate to</p>

			<div v-for="senator in senators">
				<label> <input type="checkbox" :checked="senator.inCart" @change="senatorChecked(senator)"> {{senator.name}} </label>
			</div>

			<h3>Cart</h3>
			<p>items: {{senators.filter(d => d.inCart).length}}</p>
			<div v-for="senator in senators" v-if="senator.inCart">
				<p>{{senator.name}}</p>
			</div>
		</div>
	</main>
</template>

<style src="../assets/css/donate.css"></style>

<script>
export default {
	data: function () {
		return {
			senators: [
				{name: 'Chuck Schumer', inCart: false},
				{name: 'Kirsten Gillibrand', inCart: false}
			]
		}
	},
	methods: {
		senatorChecked: function(sen) {
			sen.inCart = !sen.inCart
			if (sen.inCart) {
				this.$store.commit('addToCart', sen)
			} else {
				this.$store.commit('removeFromCart', sen)
			}
		}
	}
}
</script>