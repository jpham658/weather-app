import { formatTimeFromDateString } from "@/app/utils/date-time-utils";
import WeatherIcon from "../widgets/weather-icon";
import { getShortDayName } from "@/app/utils/date-utils";

interface ForecastCardProps {
    temp: number;
    weatherIcon: string;
    weatherName: string;
    pop: number;
    timestamp: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
    temp,
    weatherIcon,
    weatherName,
    pop,
    timestamp
}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 text-center px-20 py-10 border border-sm rounded h-full bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
            <p>{getShortDayName(timestamp)}</p>
            <p>{formatTimeFromDateString(timestamp)}</p>
            <WeatherIcon
                weatherName={weatherName}
                iconCode={weatherIcon}
                size={100}
            />
            <p>{Math.round(temp)}°C</p>
            <p>{Math.round(pop * 100)}% chance of rain</p>
        </div>
    );
}

export default ForecastCard;