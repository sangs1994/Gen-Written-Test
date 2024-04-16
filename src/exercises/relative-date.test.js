import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {

  const today  = new Date();
  it('Today', () => {
    const input  = new Date();
    const expected = 'Today: same year, same month, same date';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  it('Yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const expected = 'Yesterday: date = today - 1';
    const actual = calculateRelativeDate(yesterday);
    expect(actual).to.equal(expected);
  });
  
  it('This Week', () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 6);
    const expected = 'This week: today - 7 < date < today - 1';
    const actual = calculateRelativeDate(sevenDaysAgo);
    expect(actual).to.equal(expected);
  });
  
  it('Last Week', () => {
    const thirteenDaysAgo = new Date();
    thirteenDaysAgo.setDate(today.getDate() - 9);
    const expected = 'Last week: today - 14 < date <= today - 7';
    const actual = calculateRelativeDate(thirteenDaysAgo);
    expect(actual).to.equal(expected);
  });

  it('This Month', () => {
    const fifteenDaysAbove = new Date();
    fifteenDaysAbove.setDate(today.getDate() - 14);
    const expected = 'This month: same year, same month, date <= today - 14';
    const actual = calculateRelativeDate(fifteenDaysAbove);
    expect(actual).to.equal(expected);
  });

  it('Last month', () => {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const expected = 'Last month: month = current month - 1';
    const actual = calculateRelativeDate(lastMonth);
    expect(actual).to.equal(expected);
  });

  it('This year', () => {
    const thisYear = new Date(today.getFullYear(), 0, 1);
    const expected = 'This year: same year';
    const actual = calculateRelativeDate(thisYear);
    expect(actual).to.equal(expected);
  });
 

  it('Last year', () => {
    const lastYear = new Date(today.getFullYear() - 1, 0, 1);
    const expected = 'last year: year = current year - 1';
    const actual = calculateRelativeDate(lastYear);
    expect(actual).to.equal(expected);
  });

  it('Last year', () => {
    const longTimeAgo = new Date(2019, 0, 1); 
    const expected = 'Long time ago: everything else';
    const actual = calculateRelativeDate(longTimeAgo);
    expect(actual).to.equal(expected);
  });
  
  
});
