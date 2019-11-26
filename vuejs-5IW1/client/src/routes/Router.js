import Vue from "vue";
import VueRouter from "vue-router";
import HeaderBoard from "../components/Header/HeaderBoard";
import HeaderList from "../components/Header/HeaderList";
import Board from "../components/Board";

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", name: "home", components: {
      header: HeaderBoard,
      default: Board
    }},
    {
      path: "/list", 
      name:"listHome",
      components: {
        header: Vue.component({template: "<router-view><h1>List Home</h1></router-view>"})
      },
      children: [
        {
          path: "/:listid", 
          components: {
            header: HeaderList
          }
        }
      ]
  },
  ]
});

export default router;