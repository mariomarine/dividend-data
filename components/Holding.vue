<template>
	<div class="holding-row">
		<slot name="ticker"> </slot>
		<slot name="shares"> </slot>
		<slot name="price"> </slot>
	</div>
</template>

<style>
.holding-row {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
</style>

