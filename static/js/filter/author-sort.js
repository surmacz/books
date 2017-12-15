import {Filter} from './filter.js';

export class AuthorSort extends Filter {
  static trans(author) {
    const names = author.split(' ');
    return names[names.length - 1].toUpperCase();
  }

  filter(books) {
    return books.sort((a, b) => AuthorSort.trans(a.author) > AuthorSort.trans(b.author) ? 1: -1);
  }
}
