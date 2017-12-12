import {Factory} from "./factory.js";
import {PagesFilter} from "../filter/pages-filter.js";

export class FilterFactory extends Factory {
  static getInstance(inputVal) {
    return new PagesFilter(inputVal);
  }
}
