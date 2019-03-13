<template>
	<div class="holdings">
		<h2>Holdings</h2>
		<div class="holdings-table">
			<div class="holdings-row">
				<span> Ticker </span>
				<span> Shares </span>
				<span> Price </span>
			</div>
			<div class="holdings-row">
				<span> SO </span>
				<span> 28.1 </span>
				<span> $84.87 </span>
			</div>
			<div class="holdings-row">
				<span> DUK </span>
				<span> 14 </span>
				<span> $114.91 </span>
			</div>
		</div>
	</div>
</template>

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

