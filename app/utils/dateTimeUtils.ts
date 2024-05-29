/**
 * Utils related to date times
 */

import moment from "moment";


/**
 * Extracts the date part from a date-time string.
 * @param dateTimeString - The date-time string in the format 'YYYY-MM-DD HH:MM:SS'.
 * @returns The date part of the string in the format 'YYYY-MM-DD'.
 */
export function extractDate(dateTimeString: string): string {
    const datePart = dateTimeString.split(' ')[0];
    return datePart;
  }

/**
 * Extracts the time part from a date-time string.
 * @param dateTimeString - The date-time string in the format 'YYYY-MM-DD HH:MM:SS'.
 * @returns The time part of the string in the format 'YYYY-MM-DD'.
 */
export function extractTime(dateTimeString: string): string {
    const timePart = dateTimeString.split(' ')[1];
    return timePart;
  }

/**
 * Filters objects from a list where the object timestamp is after the current time.
 * @param objects - The list of objects to filter.
 * @param dateTimeKey - The key in each object that contains the date-time string.
 * @returns A list of objects where the object timestamp is after the current time.
 */
export function filterObjectsByCurrentTime<T extends Record<string, any>>(
    objects: T[],
    dateTimeKey: string
  ): T[] {
    const currentDateTime = new Date().toISOString();
    const currentDate = currentDateTime.split('T')[0];
    const currentTime = currentDateTime.split('T')[1].slice(0,8);
    return objects.filter((obj) => {
      const dateTimeString = obj[dateTimeKey];
      const date = extractDate(dateTimeString);
      const time = extractTime(dateTimeString);
      return date >= currentDate || time >= currentTime;
    });
  }

/**
 * Convert Unix timestamp to a time string.
 * @param unixTimestamp The given Unix timestamp
 * @returns the converted time string
 */
export function convertTimeFromUnix(unixTimestamp: number) : string {
  const inputTime = moment.unix(unixTimestamp);
  const currentTime = moment();

  if (inputTime.isSame(currentTime, 'day')) {
    return inputTime.format('h:mm A');
  } else {
    return inputTime.calendar(null, {
      nextDay: '[Tomorrow at] h:mm A',
      nextWeek: 'dddd [at] h:mm A',
      lastDay: '[Yesterday at] h:mm A',
      lastWeek: '[Last] dddd [at] h:mm A',
      sameElse: 'MMMM Do [at] h:mm A'
    });
  }
}

/**
 * Format a given date string to a human-readable time
 * @param dateString The given date string
 * @return A human readable time
 */
export function formatTimeFromDateString(dateString: string) : string {
  if (!dateString) return "";
  const time = dateString.split(" ")[1];
  const formattedTime = moment(time, "H:mm").format("H:mm");
  return formattedTime;
}