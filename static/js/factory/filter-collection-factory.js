import {SortFactory} from "./sort-factory.js";
import {FilterFactory} from "./filter-factory.js";

export class FilterCollectionFactory {
  constructor() {
    this.filterInput = document.querySelector('aside .filter input');
  }

  getCollection() {
    const filters = [],
      sort = document.querySelector('aside .sort input:checked');

    if (this.filterInput.value !== '') {
      filters.push(FilterFactory.getInstance(+this.filterInput.value));
    }
    if (sort) {
      filters.push(SortFactory.getInstance(+sort.getAttribute('value')));
    }
    return filters;
  }
}
