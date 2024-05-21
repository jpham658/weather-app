export default function convertUnixTimestamp(
    unixTimestamp: number
) {
    /**
     * Convert Unix timestamp to a local date
     * @param unixTimestamp A Unix timestamp
     * @returns the Unix timestamp as a local date
     */
    const date = new Date(unixTimestamp * 1e3); 
    const localised = date.toLocaleDateString();
    return localised;
}