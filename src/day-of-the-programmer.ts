/*
https://www.hackerrank.com/challenges/day-of-the-programmer/problem

day of the programmer = 256th day of the year
inclusive range 1700 to 2700

from 1700 to 1917 calendar was julian
since 1919 used gregorian

1918 change year
feb 14th was 32nd day of the year

29 days during a leap year
28 days during all other years

how to determine leap years:
  julian: (1700 - 1917)
    % 4 == 0

  gregorian: (1918 - present)
    divisible by 400
    divisible by 4 and not divisible by 100

day of programmer:
  - sept 13 in common years
  - sept 12 in leap years

given year `y` find date of 256th day of that year
print result in format dd.mm.yyyy


calendar = (year:number):Calendars => year > 1917 ? gregorian : julian


isLeap = (year):boolean =>
  if calendar == gregorian
    isLeap = (year / 400) || (year / 4 && (year % 100 !== 0))
  else
    isLeap = year % 4 === 0


- find calendar: 2017
calendar = gregorian
*/

enum Calendars {
  JULIAN,
  GREGORIAN,
}

class Calendar {
  year: number;

  constructor(year: number) {
    this.year = year;
  }
}

const GREGORIAN_TRANSITION = 1917;
const CALENDAR_YEAR_MIN = 1700;
const CALENDAR_YEAR_MAX = 2700;

const ensureInclusive = (year: number) => {
  if (year >= CALENDAR_YEAR_MIN && year <= CALENDAR_YEAR_MAX) return true;

  throw new Error(`Year ${year} is not in inclusive range`);
};

const calendarType = (year: number): Calendars => {
  ensureInclusive(year);

  return year > GREGORIAN_TRANSITION ? Calendars.GREGORIAN : Calendars.JULIAN;
};

const isLeap = (year: number): boolean => {
  switch (calendarType(year)) {
    case Calendars.GREGORIAN:
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    case Calendars.JULIAN:
      return year % 4 === 0;
    default:
      throw new Error("Invalid calendar");
  }
};

export default function dayOfProgrammer(year: number): string {
  if (year == 1918) return "26.09.1918";

  return isLeap(year) ? `12.09.${year}` : `13.09.${year}`;
}
