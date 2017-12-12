import {SortFactory} from "./factory/sort-factory.js";
import {FilterFactory} from "./factory/filter-factory.js";

export class Data {
  constructor() {
    this.container = document.querySelector('main ol');
    this.filterInput = document.querySelector('aside .filter input');

    this.template = document.querySelector('template');
    this.img = this.template.content.querySelector('.pic img');
    this.title = this.template.content.querySelector('.title');
    this.author = this.template.content.querySelector('.author');
    this.releaseDate = this.template.content.querySelector('.table .release-date');
    this.pages = this.template.content.querySelector('.table .pages');
    this.link = this.template.content.querySelector('.link');
  }

  refresh() {
    this.load(this.collectFilters());
  }

  load(filters = []) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', e => {
      let books = JSON.parse(e.srcElement.response);
      const frag = this.fragmentFactory(this.filterBooks(filters, books));
      this.container.innerHTML = '';
      this.container.appendChild(frag);
    });
    req.open('GET', 'books.json');
    req.send();
  }

  collectFilters() {
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

  fragmentFactory(books) {
    const frag = document.createDocumentFragment();
    for (let book of books) {
      this.img.setAttribute('src', book.cover.small);
      this.img.setAttribute('data-large', book.cover.large);

      this.title.innerHTML = book.title;
      this.author.innerHTML = book.author;
      this.releaseDate.innerHTML = book.releaseDate;
      this.pages.innerHTML = book.pages;
      this.link.setAttribute('href', book.link);

      let li = document.createElement('li');
      let clone = document.importNode(this.template.content, true);
      li.appendChild(clone);
      frag.appendChild(li);
    }
    return frag;
  }

  filterBooks(filters, books) {
    for (let filter of filters) {
      books = filter.filter(books);
    }
    return books;
  }
}
