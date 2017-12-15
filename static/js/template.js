export class Template {
  constructor() {
    this.template = document.querySelector('template');
    this.img = this.template.content.querySelector('.pic img');
    this.title = this.template.content.querySelector('.title');
    this.author = this.template.content.querySelector('.author');
    this.releaseDate = this.template.content.querySelector('.table .release-date');
    this.pages = this.template.content.querySelector('.table .pages');
    this.link = this.template.content.querySelector('.link');
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
}
