import {calculateRelativeDate} from './relative-date';
import { html,fixture,fixtureCleanup,elementUpdated,expect } from '@open-wc/testing';

describe('DOM Manipulation', () => {
  it('Can semantically compare <h1> dom trees', async () => {
    const el = await fixture(`<h1>Relative Date</h1>`);
    expect(el).dom.to.equal('<h1>Relative Date</h1>');
  });
  it('Check for Input Date Label ', async () => {
    const el = await fixture(`<label>Input Date:</label>`);
    expect(el).dom.to.equal('<label>Input Date:</label>');
  });
  it('Check for Input Date Input ', async () => {
    const el = await fixture(`<input type="date" id="relative-date-input"/>`);
    expect(el).dom.to.equal('<input type="date" id="relative-date-input"/>');
    expect(el.getAttribute('id')).to.equal('relative-date-input');
  });
  it('Check for Span Label ', async () => {
    const el = await fixture(`<label class="relative-date-label">Output:</label>`);
    expect(el).to.have.class('relative-date-label');
  });
  it('Check for Span Attribute ', async () => {
    const el = await fixture(`<span id="relative-date-msg"></span> <br/>`);
    expect(el.getAttribute('id')).to.equal('relative-date-msg');
  });
  it('Date Button Validation', async () => {
    const el = await fixture(html`<button id="relative-date-btn">Get Relative Date</button>`);
    expect(el.id).to.equal('relative-date-btn');
    expect(el.getAttribute('id')).to.equal('relative-date-btn');
  });
  afterEach(() => {
    fixtureCleanup();
  });
});

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

  it('Yesterday Failure Case', () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const expected = 'Yesterday: date = today - 12';
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
