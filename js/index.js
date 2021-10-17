import Data from "./modules/Data.js"
import Drawer from "./modules/Drawer.js"
import Events from "./modules/Events.js";

const events = new Events();
const data = new Data();
const drawer = new Drawer();

drawer.render()