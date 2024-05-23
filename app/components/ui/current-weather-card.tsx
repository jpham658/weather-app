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
        <div className="flex items-center w-full p-5 gap-7 bg-white shadow-xl border border-sm rounded">
            <WeatherIcon
                weatherName={weatherName}
                iconCode={weatherIcon}
                size={150}
            />
            
            <div className="flex flex-col justify-center">
                <h2 className="font-semibold text-3xl">{weatherName}</h2>
                <p className="text-xl">{temp}°C</p>
                <p>feels like {feelsLike}°C</p>
                <p>{weatherDescription}</p>
            </div>

        </div>
    );}

export default CurrentWeatherCard;