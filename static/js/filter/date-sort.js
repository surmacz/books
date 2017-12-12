import {Filter} from "./filter.js";

export class DateSort extends Filter {
  filter(books) {
    const trans = date => {
      return date.substr(3) + date.substr(0, 2);
    };
    const validate = books => {
      for(let book of books) {
        if (book.releaseDate.length !== 7) {
          throw new Error('Date is invalid');
        }
      }
    };
    validate(books);
    return books.sort((a, b) => trans(a.releaseDate) > trans(b.releaseDate) ? 1: -1);
  }
}
