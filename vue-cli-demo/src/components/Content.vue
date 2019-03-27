<template>
	<div>
		<input laceholder="edit me" />
		{{count}}
	</div>
</template>

<script>
	export default {
		name: 'Content',
		props: {
			count: Number
		}
	}
</script>