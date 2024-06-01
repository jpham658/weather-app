import { CurrentWeatherData, ForecastData } from "@/app/types/weather-types";
import { getWeatherConditionText } from "@/app/utils/weather-utils";

interface WeatherTextWidgetProps {
    weatherData: CurrentWeatherData | ForecastData;
    isDay: boolean;
}

const WeatherTextWidget: React.FC<WeatherTextWidgetProps> = ({
    weatherData,
    isDay
}) => {
    const relativeTime = isDay ? "Today" : "Tonight";
    const weatherCondition = weatherData.weather[0].main;
    const weatherText = getWeatherConditionText(weatherCondition);
    return (
        <div className={`text-4xl lg:text-6xl`}>
            <span className="font-semibold text-5xl lg:text-7xl">{relativeTime}</span>, <br/> {weatherText}
        </div>
    );
}

export default WeatherTextWidget;