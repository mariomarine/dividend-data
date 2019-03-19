<template>
	<div class="monthly whiteframe md-whiteframe-3dp">
		<h2>Monthly Income Distrobution</h2>
		<div class="monthly-content">
			<Month :mon='"MAR"' />
			<Month :mon='"APR"' />
			<Month :mon='"MAY"' />
			<div class='month'>
				<span>JUN: $15</span>
			</div>
			<div class='month'>
				<span>JUL: $15</span>
			</div>
			<div class='month'>
				<span>AUG: $15</span>
			</div>
			<div class='month'>
				<span>SEP: $15</span>
			</div>
			<div class='month'>
				<span>OCT: $15</span>
			</div>
			<div class='month'>
				<span>NOV: $15</span>
			</div>
			<div class='month'>
				<span>DEC: $15</span>
			</div>
			<div class='month'>
				<span>JAN: $15</span>
			</div>
			<div class='month'>
				<span>FEB: $15</span>
			</div>
		</div>
	</div>
</template>

<style>
.monthly-content {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
}
</style>

<script>
import Month from '@/components/Month.vue'

export default {
	components: {
		Month
	}
}
</script>
