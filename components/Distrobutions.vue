<template>
	<div class="distrobutions whiteframe md-whiteframe-3dp">
		<h2>Distrobutions</h2>
		<div class="distrobutions-report">
			<div class="distrobution-row">
				<span> Ticker </span>
				<span> Ex-Date </span>
				<span> Pay Date </span>
				<span> $/Share </span>
				<span> Total $</span>
				<span> Status </span>
			</div>
			<div class="distrobution-row">
				<span> SO </span>
				<span> April 4, 2019 </span>
				<span> May 1, 2019 </span>
				<span> $5 </span>
				<span> $100 </span>
				<span> Confirmed </span>
			</div>
			<div class="distrobution-row">
				<span> DUK </span>
				<span> May 15, 2019 </span>
				<span> Jun 5, 2019 </span>
				<span> $1.50 </span>
				<span> $25 </span>
				<span> Confirmed </span>
			</div>
			<div class="distrobution-row">
				<span> SO </span>
				<span> July 4, 2019 </span>
				<span> August 1, 2019 </span>
				<span> $5.05 </span>
				<span> $101 </span>
				<span> Estimated </span>
			</div>
		</div>
	</div>
</template>

<style>
.distrobution-row {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
}
</style>

