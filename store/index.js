import Vuex from 'vuex'

export default function () {
	return new Vuex.Store({
		state: {
			cart: []
		},
		mutations: {
			addToCart: function(state, item) {
				state.cart.push(item)
			},
			removeFromCart: function(state, item) {
				state.cart.splice(state.cart.indexOf(item), 1)
			}
		}
	})
}