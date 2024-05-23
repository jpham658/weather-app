import { WeatherData } from "@/app/types/weather-types";
import ForecastCard from "./forecast-card";

interface ForecastRowProps {
    weatherList: WeatherData[];
}

const ForecastRow: React.FC<ForecastRowProps> = ({
    weatherList
}) => {
    return (
        <div className="flex">
            {weatherList.map((data: WeatherData) => (
                <ForecastCard
                    temp={data.main.temp}
                    weatherIcon={data.weather[0].icon}
                    weatherName={data.weather[0].main}
                    pop={data.pop}
                    timestamp={data.dt_txt}
                />   
            ))}
        </div>
    );
}

export default ForecastRow;