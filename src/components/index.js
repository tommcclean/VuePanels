import Vue from 'vue';
import appPanel from './app-panel.vue';
import notificationPanel from './notification-panel';

// Load some CSS Globally
import './common.css';
import "@thomaswilliammcclean/vuecommon/dist/vuecommon.common.js";

const components = {
    appPanel,
    notificationPanel
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;