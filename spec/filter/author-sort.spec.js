import {AuthorSort} from "../../static/js/filter/author-sort.js";
import {getFixtures} from '../helper.js';

describe('Author sort', () => {
  let authorSort;
  beforeEach(() => authorSort = new AuthorSort());

  it('should sort empty array', () => {
    expect(authorSort.filter([])).toEqual([]);
  });

  let test = (books, expectedNames) => {
    let sorted = authorSort.filter(books);
    expect(sorted.length).toBe(expectedNames.length);
    for(let i = 0, l = expectedNames.length; i < l; i++) {
      expect(sorted[i].author).toBe(expectedNames[i]);
    }
  };

  it('should sort all books', () => {
    test(getFixtures(), [
      'Nicolas Bevacqua',
      'Douglas Crockford',
      'Eric Elliott',
      'David Flanagan',
      'Cody Lindley',
      'Addy Osmani'
    ]);
  });

  it('should handle empty authors', () => {
    test([{author: 'Eric Elliott'}, {author: ''}, {author: 'Douglas Crockford'}, {author: ''}], [
      '',
      '',
      'Douglas Crockford',
      'Eric Elliott'
    ]);
  });

  it('should sort case insensitive', () => {
    test([{author: 'Eric Elliott'}, {author: 'John Kowalski'}, {author: 'addy osmani'}, {author: 'douglas crockford'}], [
      'douglas crockford',
      'Eric Elliott',
      'John Kowalski',
      'addy osmani'
    ]);
  });
});
