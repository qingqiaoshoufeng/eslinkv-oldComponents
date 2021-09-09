export default {
	inject: ['getMap'],
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
		overlayIcon: {
			type: String,
			default: '',
		},
		overlayType: {
			type: String,
			default: '',
		},
		data: {
			type: Array,
		},
	},
	data() {
		return {
			hasLoad: false,
		}
	},
	watch: {
		visible(val) {
			if (val) {
				if (this.hasLoad) {
					this.instanceArr.forEach(instance => {
						instance.show()
					})
				} else {
					this.initData()
				}
			} else {
				this.instanceArr.forEach(instance => {
					instance.hide()
					if (instance.setDataSet) {
						instance.setDataSet({
							data: [],
							max: 0,
						})
					}
				})
			}
		},
	},
	created() {
		this.instanceArr = []
		this.$amap = this.getMap()
		if (this.visible) {
			this.initData()
		}
	},
	methods: {
		initData() {
			this.init && this.init()
			this.hasLoad = true
		},
		clearInstance() {
			this.instanceArr.forEach(instance => {
				this.$amap.remove(instance)
				// 热力图特殊处理
				if (instance.setDataSet) {
					instance.setDataSet({
						data: [],
						max: 0,
					})
				}
			})
			this.instanceArr = null
		},
	},
	beforeDestroy() {
		this.clearInstance()
	},
	destroyed() {
		this.map = null
	},
}
