<template>
	<div class="holdings">
		<h2>Holdings</h2>
		<div class="holdings-table">
			<div class="holdings-row">
				<span> Ticker </span>
				<span> Shares </span>
				<span> Price </span>
			</div>
			<Holding>
				<span slot="ticker"> {{ ticker }} </span>
				<span slot="shares"> {{ shares }} </span>
				<span slot="price"> $84.87 </span>
			</Holding>
			<Holding>
				<span slot="ticker"> DUK </span>
				<span slot="shares"> 14 </span>
				<span slot="price"> $114.91 </span>
			</Holding>
			<Holding>
				<span slot="ticker"> NEE </span>
				<span slot="shares"> 15 </span>
				<span slot="price"> $11.91 </span>
			</Holding>
		</div>
	</div>
</template>

<script>
import Holding from '@/components/Holding.vue'

export default {
	components: {
		Holding
	},
	data() {
		return {
			ticker: 'SO',
			shares: 28.1
		}
	}
}
</script>

<style>
.holdings-table {
	display: grid;
	grid-template-rows: auto;
}
.holdings-row {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
</style>

