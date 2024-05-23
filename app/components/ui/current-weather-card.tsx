import WeatherIcon from "../widgets/weather-icon";


interface WeatherCardProps {
    temp: number;
    feelsLike: number;
    weatherIcon: string;
    weatherName: string;
    weatherDescription: string;
  }
  
const CurrentWeatherCard: React.FC<WeatherCardProps> = ({
    temp,
    feelsLike,
    weatherIcon,
    weatherName,
    weatherDescription,
    }) => {
    return (
        <div className="flex flex-col justify-center items-center py-7 px-6 bg-white shadow-lg rounded">

            <div className="flex flex-col justify-center items-center rounded">
                <WeatherIcon
                    weatherName={weatherName}
                    iconCode={weatherIcon}
                    size={150}
                />
                <p className="font-semibold">{temp}°C</p>
            </div>

            <span className="text-sm text-center">
                <p>feels like {feelsLike}°C</p>
                <p>{weatherDescription}</p>
            </span>

        </div>
    );}

export default CurrentWeatherCard;