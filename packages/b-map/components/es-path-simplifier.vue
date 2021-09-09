<template></template>
<script>
export default {
	name: 'es-path-simplifier',
	inject: ['$$mapRoot'],
	props: {
		data: {
			type: Array,
			default() {
				return []
			},
		},
		stepSpace: {
			type: [String, Number],
			default: 50,
		},
		lineWidth: {
			type: [String, Number],
			default: 5,
		},
	},
	watch: {
		data: {
			immediate: true,
			handler(val) {
				if (val && val.length) {
					let autoSetFitView = false
					if (!this.lineInstanceMap) {
						autoSetFitView = true
						this.lineInstanceMap = {}
					}
					this._initComponent(autoSetFitView)
				}
			},
		},
	},
	methods: {
		_initComponent(autoSetFitView = false) {
			this.data.forEach(line => {
				let { visible, position } = line
				position = visible ? position : []
				if (!this.lineInstanceMap[line.label]) {
					this.lineInstanceMap[line.label] =
						new AMapUI.PathSimplifier({
							map: this.$$mapRoot.$amap,
							eventSupport: false,
							zIndex: 100,
							data: position,
							autoSetFitView: false,
							getPath: function (pathData, pathIndex) {
								return pathData.nodeList
							},
							clickToSelectPath: false,
							onTopWhenSelected: false,
							renderOptions: {
								keyPointStyle: null,
								startPointStyle: null,
								endPointStyle: null,
								pathLineSelectedStyle: null,
								keyPointHoverStyle: null,
								keyPointOnSelectedPathLineStyle: null,
								pathLineHoverStyle: null,
								hoverTitleStyle: null,
								getPathStyle: ({ pathData }, zoom) => {
									let dirArrowStyle = false
									if (!!pathData.flow) {
										dirArrowStyle = {
											stepSpace: this.stepSpace,
										}
									}
									return {
										pathLineStyle: {
											strokeStyle: line.color,
											lineWidth: Number(this.lineWidth),
											borderWidth: 0,
											lineJoin: 'round',
											dirArrowStyle: dirArrowStyle,
										},
									}
								},
							},
						})
				} else {
					this.lineInstanceMap[line.label].setData(position)
				}
				if (autoSetFitView) {
					Object.keys(this.lineInstanceMap).forEach(prop => {
						let line = this.lineInstanceMap[prop]
						line.setFitView()
					})
				}
			})
		},
	},
}
</script>
