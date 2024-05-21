import Image from "next/image";

interface WeatherCardProps {
    temp: number;
    feels_like: number;
    weather_icon: string;
    weather_description: string;
    time: number;
  }
  
const CurrentWeatherCard: React.FC<WeatherCardProps> = ({
    temp,
    feels_like,
    weather_icon,
    weather_description,
    time
    }) => {
    return (
        <div className="flex flex-col justify-center items-center w-45 bg-white border border-black rounded">
            <p>{time}</p>

            <div className="flex flex-col justify-center items-center m-4 p-2 rounded">
                <Image 
                    src={`/weather/${weather_icon.toLowerCase()}.svg`}
                    width="128"
                    height="128"
                    alt="Weather icon"
                />
                <p>{temp}°C</p>
            </div>

            <span className="text-sm">
                <p>Feels like {feels_like}°C</p>
                <p>{weather_description}</p>
            </span>
        </div>
    );}

export default CurrentWeatherCard;