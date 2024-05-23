/**
 * Utils related to dates
 */

import { time } from "console";

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
 * Filters objects from a list where the date part of the date-time string is today.
 * @param objects - The list of objects to filter.
 * @param dateTimeKey - The key in each object that contains the date-time string.
 * @returns A list of objects where the date part matches today's date.
 */
export function filterObjectsByTodayDate<T extends Record<string, any>>(
    objects: T[],
    dateTimeKey: string
  ): T[] {
    const today = new Date().toISOString().split('T')[0];

    return objects.filter((obj) => {
      const dateTimeString = obj[dateTimeKey];
      const date = extractDate(dateTimeString);
      return date === today;
    });
  }