<template>
	<div class="holdings-row">
		<slot name="ticker"> </slot>
		<slot name="shares"> </slot>
		<slot name="price"> </slot>
	</div>
</template>

<style>
</style>

<script>
export default {
	props: [
		'ticker'
	]
}
</script>

