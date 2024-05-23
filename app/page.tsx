import CurrentWeatherCard from "./components/ui/current-weather-card";
import ForecastRow from "./components/ui/forecast-row";
import { WeatherData } from "./types/weather-types";
import { extractDate, filterObjectsByTodayDate } from "./utils/dateUtils";


async function getCurrentWeatherData() {
  const url = `${process.env.LOCAL_URL}/api/weather/current-weather`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function getForecastData() {
  const url = `${process.env.LOCAL_URL}/api/weather/weather-forecast`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function filterDailyForecastData(forecastData: WeatherData[]) {
  if(!forecastData) {
    return []
  }
  return filterObjectsByTodayDate(forecastData, "dt_txt");
}

export default async function Home() {
  const currentData = await getCurrentWeatherData();
  const forecastData = await getForecastData();
  const dailyForecastData = await filterDailyForecastData(forecastData.list);

  return (
    <main className="flex min-h-screen flex-col justify-center py-10 px-5">
      
      <div className="flex flex-col mb-10 bg-red-100">
        <p className="text-3xl font-medium">This is a weather app.</p>
      </div>

      <div className="flex justify-around items-center h-96 bg-blue-200">

        <CurrentWeatherCard
          temp={currentData.main.temp}
          feelsLike={currentData.main.feels_like}
          weatherIcon={currentData.weather[0].icon}
          weatherName={currentData.weather[0].main}
          weatherDescription={currentData.weather[0].description}
        />

        {dailyForecastData &&
        <ForecastRow 
          weatherList={dailyForecastData}
        />}
        
      </div>

      <p>{extractDate("2024-05-21 15:00:00")}</p>
      
    </main>
  );
}
