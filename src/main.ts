import Vue from "vue";
import { CsApp, AppState, CsPlugin, MdWidget } from "@csnext/cs-client";

Vue.config.productionTip = false;

Vue.use(CsPlugin);

const app = AppState.Instance;

new Vue({
  render: h => h(CsApp as any)
}).$mount("#app");

app.init({
  header: {
    title: "cs example"
  },
  navigation: {
    style: "tabs"
  },
  leftSidebar: {
    open: false,
    mini: false,
    canMinify: true,
    floating: false,
    clipped: true,
    permanent: false,
    temporary: false,
    visible: true,
    width: 240
  },
  theme: {},
  dashboards: [
    {
      id: "start",
      path: "/",
      title: "start",
      layout: "grid",
      widgets: [
        {
          component: MdWidget,
          data: "md widget"
        }
      ]
    },
    {
      id: "charts",
      path: "/charts",
      title: "charts",
      layout: "grid",
      widgets: [
        {
          component: MdWidget,
          data: "charts"
        }
      ]
    }
  ]
});
