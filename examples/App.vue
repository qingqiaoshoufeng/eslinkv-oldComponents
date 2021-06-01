<template lang="pug">
.home-container
	d-detail
	d-screen
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { dScreen, dDetail } from 'eslinkv-sdk'

@Component({ components: { dScreen, dDetail } })
export default class App extends Vue {
	@Provide('kanboardEditor') kanboardEditor = this
}
</script>
<style lang="scss">
.home-container {
	height: 100%;
	overflow: hidden;
}
</style>
