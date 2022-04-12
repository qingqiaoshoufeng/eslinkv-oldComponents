<script>
export default {
	name: 'heat-map',
	inject: {
		$$mapRoot: {
			default: null,
		},
	},
	props: {
		data: {
			type: Array,
			default() {
				return []
			},
		},
		max: {
			type: Number,
			default: 100,
		},
		radius: {
			type: Number,
			default: 25,
		},
		gradient: {
			type: Object,
		},
		opacity: {
			type: Array,
			default() {
				return [0, 0.8]
			},
		},
		zooms: {
			type: Array,
			default() {
				return [3, 18]
			},
		},
	},
	render() {
		return null
	},
	// beforeCreate() {
	// 	let self = this
	// 	this._handlers = {
	// 		data: function () {
	// 			this.setDataSet({ data: self.data, max: self.max })
	// 		},
	// 	}
	// },
	beforeDestroy() {
		this.$amapComponent.setDataSet({
			data: [{ lng: 0, lat: 0, count: 0 }],
			max: this.max,
		})
		this.$amapComponent = null
	},
	mounted() {
		this._initComponent()
		console.log(this.$$mapRoot)
		// debugger
	},
	methods: {
		_initComponent() {
			if (!AMap.Heatmap) {
				AMap.plugin(['AMap.Heatmap'], () => {
					this._initHeatMap()
				})
			} else {
				this._initHeatMap()
			}
		},
		_initHeatMap() {
			let { radius, gradient, opacity, zooms } = this
			this.$amapComponent = new AMap.Heatmap(this.$$mapRoot.$amap, {
				radius,
				gradient,
				opacity,
				zooms,
			})
			this.$amapComponent.setDataSet({ data: this.data, max: this.max })
		},
	},
	watch: {
		data: {
			handler() {
				// debugger
				this.$amapComponent.setDataSet({
					data: this.data,
					max: this.max,
				})
			},
		},
	},
}
</script>
