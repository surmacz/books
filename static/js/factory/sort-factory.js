import {Factory} from "./factory.js";
import {PagesSort} from "../filter/pages-sort.js";
import {DateSort} from "../filter/date-sort.js";
import {AuthorSort} from "../filter/author-sort.js";

export class SortFactory extends Factory {
  static getInstance(radioVal) {
    switch (radioVal) {
      case 1:
        return new PagesSort();
      case 2:
        return new DateSort();
      case 3:
        return new AuthorSort();
      default:
        throw new Error('Wrong input value');
    }
  }
}
