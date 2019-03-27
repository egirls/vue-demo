<template>
	<div>
		<ul class="wrap">
			<li id="first" class="left nav" @click="onClick(cou)"> {{counter}} </li>
			<li class="mid nav"> {{cou}} </li>
			<li class="right nav"> 3 </li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Navigation',
		data(){
			return {
				cou: this.counter
			};
		},
		props: {
			counter: Number
		},

		methods: {
			onClick(cou) {
				return this.cou ++;
			}
		}
	}
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap {
    	display: flex;
    	margin: 0 auto;
    }
    .left {
    	width: 20%;
    }
    .mid {
    	flex-grow: 1;
    }
    .right {
    	width: 20%;
    }
	.nav {
		margin: 0 auto;
		display: inline-flex;
		justify-content: center;
		background-color: #f7e0c1;
	}
</style>