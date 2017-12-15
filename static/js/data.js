export class Data {
  constructor(collectionFilter, template) {
    this.collectionFilter = collectionFilter;
    this.template = template;
    this.container = document.querySelector('main ol');
  }

  load() {
    const req = new XMLHttpRequest();
    req.addEventListener('load', e => {
      let books = JSON.parse(e.srcElement.response);
      const frag = this.template.fragmentFactory(this.collectionFilter.filter(books));
      this.container.innerHTML = '';
      this.container.appendChild(frag);
    });
    req.open('GET', 'books.json');
    req.send();
  }
}
