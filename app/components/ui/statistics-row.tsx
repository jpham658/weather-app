import { CurrentWeatherData } from "@/app/types/weather-types";
import SunriseSunsetCard from "./current-weather-stats/sunrise-sunset-card";
import CloudCoverCard from "./current-weather-stats/cloud-cover-card";
import HumidityCard from "./current-weather-stats/humidity-card";

interface StatisticsRowProps {
    data: CurrentWeatherData;
}

const StatisticsRow: React.FC<StatisticsRowProps> = ({
    data
}) => {
    return (
        <div className="flex justify-center gap-5">
            <SunriseSunsetCard 
                sunriseTime={data.sys.sunrise}
                sunsetTime={data.sys.sunset}
            />
            <CloudCoverCard
                cloudCoverage={data.clouds.all}
            />
            <HumidityCard 
                humidity={data.main.humidity}
            />
        </div>
    );
}

export default StatisticsRow;