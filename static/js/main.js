import {Data} from "./data.js";
import {Event} from "./event.js";
import {Session} from "./session.js";

document.addEventListener('DOMContentLoaded', () => {
  const data = new Data(),
    session = new Session(),
    event = new Event(data, session);
  event.register();
  session.load();
  data.refresh();
});
