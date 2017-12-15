import {Filter} from "./filter.js";

export class DateSort extends Filter {
  static trans(date) {
    return date.substr(3) + date.substr(0, 2);
  }

  static validate(books) {
    for(let book of books) {
      if (book.releaseDate.length !== 7) {
        throw new Error('Date is invalid');
      }
    }
  }

  filter(books) {
    DateSort.validate(books);
    return books.sort((a, b) => DateSort.trans(a.releaseDate) > DateSort.trans(b.releaseDate) ? 1: -1);
  }
}
