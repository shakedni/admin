
import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Active from "views/examples/Active";
import Pending from "views/examples/Pending";



var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/active",
    name: "Active Reports",
    icon: "ni ni-spaceship text-primary",
    component: Active,
    layout: "/admin",
  },

  {
    path: "/pending",
    name: "Pending Reports",
    icon: "ni ni-palette text-primary",
    notification: "fas fa-bell text-info",
    component: Pending,
    layout: "/admin",
  },

 
];
export default routes;
