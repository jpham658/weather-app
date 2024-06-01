import { ForecastData } from "@/app/types/weather-types";
import ForecastCard from "./forecast-card";

interface ForecastRowProps {
    weatherList: ForecastData[];
}

const ForecastRow: React.FC<ForecastRowProps> = ({
    weatherList
}) => {
    return (
        <div className="flex rounded-lg gap-2 scrollbar-hide">
            {weatherList.map((data: ForecastData) => (
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