import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/global.scss";

Vue.config.productionTip = false;

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./global",
  false,
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
