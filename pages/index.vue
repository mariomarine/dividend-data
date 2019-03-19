<template>
	<section class="container">
		<div class="logo-container">
			<Logo/>
		</div>
		<div class="content-container">
			<div class="holdings-container">
				<Holdings/>
			</div>
			<div class="reports-container">
				<Monthly/>
				<Distrobutions/>
				<Stats/>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Holdings from '~/components/Holdings.vue'
import Monthly from '~/components/Monthly.vue'
import Distrobutions from '~/components/Distrobutions.vue'
import Stats from '~/components/Stats.vue'

export default {
  components: {
    Logo,
    Monthly,
    Stats,
    Distrobutions,
    Holdings
  }
}
</script>

<style>
html, body, #__nuxt, #__layout, #__layout > div {
	height: 100%;
}
.container {
	display: grid;
	grid-template-rows: 100px 1fr;
	height: 100%;
}
.logo-container {
	grid-row-start: 1;
}
.content-container {
	display: grid;
	grid-template-columns: 10% 20% 60% 10%;
	grid-template-rows: 1fr 1fr;
	background-color: #F0FFFF;
}
.holdings-container {
	grid-column-start: 2;
}
	
</style>

