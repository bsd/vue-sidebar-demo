<template>
	<div id="cartarea">
		<div id="cart">
			<header>
				<cart-icon /> <span id="badge">{{items.length}}</span>
			</header>

			<div v-if="items.length" id="items">
				<div class="checkout-item" v-for="item in items">
					<p class="item-name">{{item.name}}</p>
					<button type="button" aria-label="Remove item from cart" class="remove">&times;</button>
				</div>
			</div>

			<button v-if="items.length" type="button" id="checkout">checkout</button>
		</div>
	</div>
</template>

<style>
#cartarea {
	margin-right: 2%;
}
#cart svg {
	width: 40px;
}

#cart {
	border: 1px solid #dedede;
	width: 200px;
	margin-top: 20px;
	position: relative;
	border-radius: 10px;
}

#cart header {
	background: #fbfbfb;
	padding: 20px;
	border-radius: 10px;
	border-bottom: 1px solid #f9f9f9;
}
#items {
	padding: 0 20px;
	margin-top: 20px;
}
#checkout {
	outline: 0;
	background: #4484bf linear-gradient(to bottom, #67a3da, #4484bf);
	border: 1px solid #5491c7;
	border-radius: 10px;
	padding: 5px 10px;
	display: block;
	color: white;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 3px 1px rgba(0, 0, 40, 0.3);
	cursor: pointer;
	font-size: 13px;
	margin: 20px;
}
#checkout:hover {
	background: #67a3da linear-gradient(to bottom, #8db4d8, #67a3da);
}

#badge {
	background: #ea5050;
	color: white;
	border-radius: 100%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 13px;
	left: 50px;
	font-size: 12px;
	font-family: sans-serif;
	border: 2px solid white;
}

.checkout-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #efefef;
}
.checkout-item:first-of-type {
	border-top: 1px solid #efefef;
}
.item-name {
	padding: 5px 0;
	margin: 0;
}

.remove {
	outline: 0;
	background: none;
	border: 0;
	color: #c77020;
	cursor: pointer;
	padding: 0;
	margin: 0;
}

.remove:hover {
	color: #9a3b0b;
}
</style>

<script>
export default {
	data: function () {
		return {
			items: []
		}
	}
}
</script>