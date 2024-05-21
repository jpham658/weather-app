interface WeatherCardProps {
    temp: number;
    feels_like: number;
    weather_icon: string;
    weather_description: string;
    time: number;
  }
  
const WeatherCard: React.FC<WeatherCardProps> = ({
    temp,
    feels_like,
    weather_icon,
    weather_description,
    time
    }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white w-56 border border-black rounded">
            <p>{time}</p>

            <div className="flex flex-col justify-center items-center m-4 bg-orange-200 p-2 rounded">
                <p>/images/{weather_icon}.svg</p>
                <p>{temp}°C</p>
            </div>

            <span className="text-sm">
                <p>Feels like {feels_like}°C</p>
                <p>{weather_description}</p>
            </span>
        </div>
    );}

export default WeatherCard;