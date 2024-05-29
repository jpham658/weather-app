import { convertTimeFromUnix } from "@/app/utils/date-time-utils";
import React from "react";

interface SunriseSunsetCardProps {
    sunriseTime: number;
    sunsetTime: number;
}

const SunriseSunsetCard: React.FC<SunriseSunsetCardProps> = ({
    sunriseTime,
    sunsetTime
}) => {
    const sunrise = convertTimeFromUnix(sunriseTime);
    const sunset = convertTimeFromUnix(sunsetTime);

    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 bg-white h-40 shadow-xl border rounded-lg">
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
        </div>
    );
}

export default SunriseSunsetCard;