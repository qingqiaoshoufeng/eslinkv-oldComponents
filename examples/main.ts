import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Message, Modal } from 'view-design'
import 'eslinkv-sdk/lib/eslinkv-sdk.css'
import { custom } from 'eslinkv-sdk'
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal

const components = {}
const snapshots = {}
const widgetsObject = []
const conf = require.context('../packages', true, /\.(component.ts)$/)
const component = require.context('../packages', true, /custom\.(vue)$/)
const snapshot = require.context('../packages', true, /snapshot\.(jpg|png)$/)
snapshot.keys().forEach(name => {
	const title = name.split('/')[1]
	snapshots[title] = snapshot(name)
})
component.keys().forEach(name => {
	const title = name.split('/')[1]
	components[title] = component(name).default
})
conf.keys().forEach(name => {
	const typeTwo = name.split('/')[1]
	const componentConfig = { ...conf(name).value, componentEnTitle: typeTwo }
	const componentAvatar = snapshots[typeTwo]
	if (componentConfig) {
		widgetsObject.push({
			componentId: Date.now(),
			componentConfig,
			componentTitle: typeTwo,
			componentEnTitle: typeTwo,
			componentAvatar,
			market: false,
		})
	}
})
const obj = {
	'e.g': {
		componentTypeName: 'e.g',
		componentTypeEnName: 'e.g',
		componentTypeId: 'e.g',
		market: false,
		children: [
			{
				componentTypeName: 'typeOne',
				componentTypeEnName: 'typeOne',
				componentTypeId: 'typeOne',
				market: false,
				children: widgetsObject,
			},
		],
	},
}
custom.actions.setCustomComponents(components)
custom.actions.setCustomWidgets(obj)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#example')
