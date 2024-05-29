/**
 * Utils related to date
 */

import moment from "moment";


/**
 * Get the day name from the date time string
 * @param dateTimeString The date time string
 * @returns the name of the day
 */
export function getDayName(dateTimeString: string) : string {
    return moment(dateTimeString).format("dddd");
}

/**
 * Get the short day name from the date time string
 * @param dateTimeString The date time string
 * @returns the short name of the day
 */
export function getShortDayName(dateTimeString: string) : string {
    return moment(dateTimeString).format("ddd");
}