<template>
  <button class="hamburger" :class="{ 'is-active': !active}" type="button" aria-label="Menu" @click="toggle">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <span v-if="$slots.default" class="hamburger-label"><slot /></span>
  </button>
</template>

<style>
:root {
	--burgerWidth: 16px;
	--burgerLayerHeight: 2px;
	--burgerSpacing: 3px;
	--burgerColor: #eee;
	--burgerRadius: 4px;
	--burgerHovOpac: 0.7;
	--burgerTiming: 0.15s;
}

.hamburger {
	padding: 0;
	cursor: pointer;
	display: inline-block;
	transition-property: opacity, filter;
	transition-duration: var(--burgerTiming);
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
}
.hamburger:hover {
	opacity: var(--burgerHovOpac);
}

.hamburger-box {
	width: var(--burgerWidth);
	height: calc( var(--burgerLayerHeight) * 3 + var(--burgerSpacing) * 2 );
	display: inline-block;
	position: relative;
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: calc( var(--burgerLayerHeight) / -2 );
}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
	width: var(--burgerWidth);
	height: var(--burgerLayerHeight);
	background-color: var(--burgerColor);
	border-radius: var(--burgerRadius);
	position: absolute;
	transition-property: transform;
	transition-duration: var(--burgerTiming);
	transition-timing-function: ease;
}
.hamburger-inner::before, .hamburger-inner::after {
	content: "";
	display: block;
}
.hamburger-inner::before {
	top: calc( (var(--burgerSpacing) + var(--burgerLayerHeight)) * -1 );
}
.hamburger-inner::after {
	bottom: calc( (var(--burgerSpacing) + var(--burgerLayerHeight)) * -1 );
}

.hamburger .hamburger-inner {
	top: auto;
	bottom: 0;
	transition-duration: 0.13s;
	transition-delay: 0.13s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger .hamburger-inner::after {
	top: calc( (var(--burgerSpacing) + var(--burgerLayerHeight)) * -2 );
	transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}
.hamburger .hamburger-inner::before {
	transition:
		top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
		transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger.is-active .hamburger-inner {
	transform: translate3d(0, calc( (var(--burgerSpacing) + var(--burgerLayerHeight)) * -1 ), 0) rotate(-45deg);
	transition-delay: 0.22s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger.is-active .hamburger-inner::after {
	top: 0;
	opacity: 0;
	transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}
.hamburger.is-active .hamburger-inner::before {
	top: 0;
	transform: rotate(-90deg);
	transition:
		top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
		transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}


.hamburger-label {
	font-weight: 600;
	display: inline-block;
	margin-left: 5px;
	vertical-align: middle;
	color: var(--burgerColor);
}
</style>


<script>
export default {
  props: ['active'],
  methods: {
    toggle: function () {
      this.$emit('hamtoggle')
    }
  }
}
</script>

