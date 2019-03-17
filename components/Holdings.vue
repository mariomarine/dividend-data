<template>
	<div class="holdings">
		<h2>Holdings</h2>
		<div class="holdings-table">
			<div class="holdings-row">
				<span> Ticker </span>
				<span> Shares </span>
				<span> Price </span>
			</div>
			<Holding  v-for="stock in stocks" :key="stock.ticker">
				<span slot="ticker"> {{ stock.ticker }} </span>
				<span slot="shares"> {{ stock.shares }} </span>
				<span slot="price"> {{ stock.price }}</span>
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
			shares: 28.1,
			stocks: [
				{
					ticker: 'SO',
					shares: 28.1,
					price: '$84.87'
				},
				{
					ticker: 'DUK',
					shares: 14,
					price: '$114.91'
				},
				{
					ticker: 'NEE',
					shares: 15,
					price: '$11.91'
				}
			]
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

