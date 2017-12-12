import {Filter} from './filter.js';

export class AuthorSort extends Filter {
  filter(books) {
    const trans = author => {
      const names = author.split(' ');
      return names[names.length - 1].toUpperCase();
    };
    return books.sort((a, b) => trans(a.author) > trans(b.author) ? 1: -1);
  }
}
