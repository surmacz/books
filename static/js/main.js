import {Data} from "./data.js";
import {Event} from "./event.js";
import {Session} from "./session.js";
import {CollectionFilter} from "./filter/collection-filter.js";
import {FilterCollectionFactory} from "./factory/filter-collection-factory.js";
import {Template} from "./template.js";

document.addEventListener('DOMContentLoaded', () => {
  const data = new Data(new CollectionFilter(new FilterCollectionFactory()), new Template()),
    session = new Session(),
    event = new Event(data, session);
  event.register();
  session.load();
  data.load();
});
