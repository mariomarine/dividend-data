<template>
	<section class="container">
		<div class="logo-container">
			<Logo/>
		</div>
		<div class="holdings-container">
			<Holdings/>
		</div>
		<div class="reports-container">
			<Monthly/>
			<Distrobutions/>
			<Stats/>
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
.container {
	display: grid;
	grid-template: 100px 1fr / 10% 1fr 10%;
}
.logo-container {
	grid-column-start: 1;
}
.holdings-container {
	grid-row-start: 2;
}
.reports-container {
	grid-row-start: 2;
}
	
</style>

