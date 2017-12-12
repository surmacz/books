import {PagesFilter} from "../../static/js/filter/pages-filter.js";
import {getFixtures} from '../helper.js';

describe('Pages filter', () => {
  let pagesFilter;

  it('should filter empty array', () => {
    pagesFilter = new PagesFilter(500);
    expect(pagesFilter.filter([])).toEqual([]);
  });

  it('should not change input when limit is 0', () => {
    pagesFilter = new PagesFilter(0);
    expect(pagesFilter.filter(getFixtures())).toEqual(getFixtures());
  });

  let test = (limit, expectedPages) => {
    pagesFilter = new PagesFilter(limit);
    let books = getFixtures(),
      sorted = pagesFilter.filter(books);

    expect(sorted.length).toBe(expectedPages.length);
    for(let i = 0, l = expectedPages.length; i < l; i++) {
      expect(sorted[i].pages).toBe(expectedPages[i]);
    }
  };

  it('should filter all books with more than 200 pages', () => {
    test(200, [936, 254, 254, 334]);
  });

  it('should filter all books with more than 800 pages', () => {
    test(800, [936]);
  });
});
