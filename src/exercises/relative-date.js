/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: date = today - 1
* - This week: today - 7 < date < today - 1
* - Last week: today - 14 < date <= today - 7
* - This month: same year, same month, date <= today - 14
* - Last month: month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  const formatDate = new Date(inputDate);
  const today = new Date();
  const yearDiff = today.getFullYear() - formatDate.getFullYear();
  const monthDiff = today.getMonth() - formatDate.getMonth();
  const dayDiff = today.getDate() - formatDate.getDate();

  if (yearDiff === 0 && monthDiff === 0 && dayDiff === 0) {
      return 'Today: same year, same month, same date';
  } else if (yearDiff === 0 && monthDiff === 0 && dayDiff === 1) {
      return 'Yesterday: date = today - 1';
  } else if (monthDiff===0 && yearDiff === 0 && dayDiff < 7 && dayDiff > 0) {
      return 'This week: today - 7 < date < today - 1';
  } else if (monthDiff===0 && yearDiff === 0 && dayDiff >= 7 && dayDiff <= 13) {
      return 'Last week: today - 14 < date <= today - 7';
  } else if (yearDiff === 0 && monthDiff === 0 && dayDiff <= 14) {
      return 'This month: same year, same month, date <= today - 14';
  } else if (yearDiff === 0 && monthDiff === 1) {
      return 'Last month: month = current month - 1';
  } else if (yearDiff === 0) {
      return 'This year: same year';
  } else if (yearDiff === 1) {
      return 'last year: year = current year - 1';
  } else {
      return 'Long time ago: everything else';
  }
};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};
