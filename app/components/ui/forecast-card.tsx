import { formatTimeFromDateString } from "@/app/utils/dateUtils";
import WeatherIcon from "../widgets/weather-icon";

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
        <div className="flex flex-col justify-center items-center bg-white p-3 w-48 h-64 border">
            <WeatherIcon 
                weatherName={weatherName}
                iconCode={weatherIcon}
                size={100}
            />
            <p>{temp}°C</p>
            <p>Probability of rain: {pop * 100}%</p>
            <p>{formatTimeFromDateString(timestamp)}</p>
        </div>
    );
}

export default ForecastCard;