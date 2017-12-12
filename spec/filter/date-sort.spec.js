import {DateSort} from "../../static/js/filter/date-sort.js";
import {getFixtures} from '../helper.js';

describe('Date sort', () => {
  let dateSort;
  beforeEach(() => dateSort = new DateSort());

  it('should sort empty array', () => {
    expect(dateSort.filter([])).toEqual([]);
  });

  it('should sort all books', () => {
    let books = getFixtures(),
      sorted = dateSort.filter(books),
      expectedDates = [
        '11/2001',
        '12/2008',
        '08/2012',
        '12/2012',
        '07/2014',
        '07/2017'
      ];
    for(let i = 0, l = expectedDates.length; i < l; i++) {
      expect(sorted[i].releaseDate).toBe(expectedDates[i]);
    }
  });

  it('should throw exception when date is invalid', () => {
    let books = [{releaseDate: '02/2017'}, {releaseDate: '01/201'}];
    expect(() => dateSort.filter(books)).toThrow(new Error('Date is invalid'));
  });
});
