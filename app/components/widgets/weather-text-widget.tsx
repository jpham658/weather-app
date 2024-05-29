import { CurrentWeatherData, ForecastData } from "@/app/types/weather-types";
import { convertTimeFromUnix, getRelativeTime } from "@/app/utils/date-time-utils";
import { getWeatherConditionText, weatherConditionText } from "@/app/utils/weather-utils";

interface WeatherTextWidgetProps {
    weatherData: CurrentWeatherData | ForecastData;
}

const WeatherTextWidget: React.FC<WeatherTextWidgetProps> = ({
    weatherData
}) => {
    const relativeTime = getRelativeTime(weatherData.dt);
    const weatherCondition = weatherData.weather[0].main;
    const weatherText = getWeatherConditionText(weatherCondition);
    return (
        <div className="text-4xl md:text-5xl">
            <span className="font-semibold text-5xl md:text-6xl">{relativeTime}</span>, <br/> {weatherText}
        </div>
    );
}

export default WeatherTextWidget;