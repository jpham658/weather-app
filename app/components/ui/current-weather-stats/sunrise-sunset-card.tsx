import { convertUnixToDate, formatTimeFromDateString } from "@/app/utils/dateUtils";
import React from "react";

interface SunriseSunsetCardProps {
    sunriseTime: number;
    sunsetTime: number;
}

const SunriseSunsetCard: React.FC<SunriseSunsetCardProps> = ({
    sunriseTime,
    sunsetTime
}) => {
    const sunrise = convertUnixToDate(sunriseTime);
    const sunset = convertUnixToDate(sunsetTime);
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 h-40 shadow-xl border rounded-lg">
            <p>Sunrise: {formatTimeFromDateString(sunrise.toLocaleDateString())}</p>
            <p>Sunset: {formatTimeFromDateString(sunset.toLocaleDateString())}</p>
        </div>
    );
}

export default SunriseSunsetCard;