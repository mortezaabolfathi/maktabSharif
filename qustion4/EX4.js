//mortezaAbolfathi
//m75_cw_mortezaAbolfathi

// 4-
// function to test whether a date is a weekend
// function to get difference between two dates in days
// function to calculate 'yesterday day' 'previous month' 'next month'
// function to get the day of the month, 2 digits with leading zeros
// function to get time uppercase Ante meridiem and Post meridiem (AM,PM)
// function to get time differences in minutes between two dates

// function to test whether a date is a weekend
function testdateWeekend(input) {
  let currentDay = input.getDay(); //The getDay() method returns the day of the week (0 to 6) of a date.
  // console.log(currentDay);;
  if (currentDay == 6) {
    return `The given date ${currentDay} is a Weekend`;
  } else {
    return `The given date ${currentDay} is a not a Weekend`;
  }
}
// console.log(testdateWeekend(new Date()));

// function to get difference between two dates in days
function betweenTwoDate(date1, date2) {
  let diffDays = date2 - date1; //ms
  return diffDays / 1000 / 60 / 60 / 24;
}
// console.log(betweenTwoDate(new Date("2015-03-25"), new Date("2020-03-25")));

// function to calculate 'yesterday day' 'previous month' 'next month'
function betweenYsterdayeNextmonyh(date) {
  let day = date.getDay(); // 3 -- 2
  // console.log(day);
  let month = date.getMonth(); // 2 -- 3
  // console.log(month);
  return `yesterday day: ${day - 1} , next month: ${
    month + 2
  } , pervious month: ${month}`;
}
// console.log(betweenYsterdayeNextmonyh(new Date(2021, 02, 03)));

// function to get the day of the month, 2 digits with leading zeros
function dayofmonth(date) {
  let dateOfMonth = date.getDay();
  if (dateOfMonth < 10) {
    monthZero = "0" + dateOfMonth;
  } else {
    monthZero = dateOfMonth;
  }
  return monthZero;
}
// console.log(dayofmonth(new Date(202, 01, 05)));

// function to get time uppercase Ante meridiem and Post meridiem (AM,PM)
function timeAmPm(date) {
  let timeHour = date.getHours(); // 12
  let timeMin = date.getMinutes(); //15
  if (timeHour <= 12) {
    timePMAM = `clock is: ${timeHour}:${timeMin}AM`;
  } else {
    timePMAM = `clock is: ${timeHour}:${timeMin}PM`;
  }
  return timePMAM;
}
// console.log(timeAmPm(new Date(2021, 7, 14, 12, 15, 16)));

// function to get time differences in minutes between two dates
function betweenTwoMinutesDaye(date1, date2) {
  let diffDays = date1 - date2; //ms
  return diffDays / 1000 / 60;
}
// console.log(
//   betweenTwoMinutesDaye(
//     new Date(2021, 10, 12, 12, 08, 32),
//     new Date(2020, 10, 12, 11, 07, 31)
//   )
// );

function test() {
  // 1-function to test whether a date is a weekend
  // console.log(testdateWeekend(new Date()));
  // 2-function to get difference between two dates in days
  // console.log(betweenTwoDate(new Date("2015-03-25"), new Date("2020-03-25")));
  // 3-function to calculate 'yesterday day' 'previous month' 'next month'
  // console.log(betweenYsterdayeNextmonyh(new Date(2021, 02, 03)));
  // 4-function to get the day of the month, 2 digits with leading zeros
  // console.log(dayofmonth(new Date(202, 01, 05)));
  // 5-function to get time uppercase Ante meridiem and Post meridiem (AM,PM)
  // console.log(timeAmPm(new Date(2021, 7, 14, 12, 15, 16)));
  // 6-function to get time differences in minutes between two dates
  // console.log(
  //   betweenTwoMinutesDaye(
  //     new Date(2021, 10, 12, 12, 08, 32),
  //     new Date(2020, 10, 12, 11, 07, 31)
  //   )
  // );
}
