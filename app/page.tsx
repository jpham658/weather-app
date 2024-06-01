import CurrentWeatherCard from "./components/ui/current-weather-card";
import StatisticsRow from "./components/ui/statistics-row";
import ForecastRow from "./components/ui/forecast-row";
import { CurrentWeatherData, ForecastData, WeatherIconType } from "./types/weather-types";
import Search from "./components/widgets/search-bar";
import { filterObjectsByCurrentTime } from "./utils/date-time-utils";
import WeatherTextWidget from "./components/widgets/weather-text-widget";
import { getWeatherType, getWeatherTypeBackground, getWeatherTypeTextColour, isDay } from "./utils/weather-utils";

async function getLocationData(city: string, country?: string) {
  const url = `${process.env.LOCAL_URL}/api/geolocation/location-coords?city=${city}&country=${country}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0];
}

async function getLocationName(lat: number, lon: number) {
  const url = `${process.env.LOCAL_URL}/api/geolocation/location-name?lat=${lat}&lon=${lon}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0];
}

async function getCurrentWeatherData(lat: number, lon: number) {
  const url = `${process.env.LOCAL_URL}/api/weather/current?lat=${lat}&lon=${lon}`;
  const res = await fetch(url, { next: { revalidate: 10800 } });
  const data = await res.json();
  return data;
}

async function getForecastData(lat: number, lon: number) {
  const url = `${process.env.LOCAL_URL}/api/weather/forecast?lat=${lat}&lon=${lon}`;
  const res = await fetch(url, { next: { revalidate: 10800 } });
  const data = await res.json();
  return data;
}

function filterCurrentForecastData(forecastData: ForecastData[]) {
  return filterObjectsByCurrentTime(forecastData, "dt_txt");
}

export default async function Home({
  searchParams
}: {
  searchParams?: {
    city?: string;
    country?: string;
  }
}) {
  let city = searchParams?.city || "London";
  let country = searchParams?.country || "England";

  let locationData = await getLocationData(city, country);
  let lat, lon: number;

  if(!locationData) {
    locationData = await getLocationData(city);
  }

  lat = locationData.lat;
  lon = locationData.lon;

  const locationName = await getLocationName(lat, lon);

  city = locationName.name; 
  country = locationName.country;

  const currentData = await getCurrentWeatherData(lat, lon);
  const forecastData = await getForecastData(lat, lon);
  const icon: WeatherIconType = currentData.weather[0].icon;
  const backgroundColour = getWeatherTypeBackground(icon);
  const textColour = getWeatherTypeTextColour(icon);

  let currentForecastData: ForecastData[] = forecastData.list;

  if(forecastData) {
    currentForecastData = filterCurrentForecastData(forecastData.list);
  }

  return (
    <main className={`flex min-h-screen flex-col py-10 px-5 ${`${backgroundColour} ${textColour}`}`}>

      <div className="flex flex-col gap-4">
        <Search 
          placeholder="See what weather is like somewhere else!"
        /> 
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className={`text-xl`}>{city}, {country}</p>
            {currentData && <WeatherTextWidget
              weatherData={currentData}
              isDay={true}
            />}
          </div>
          <div className="flex-shrink-1">
            {currentData && <CurrentWeatherCard
              temp={currentData.main.temp}
              feelsLike={currentData.main.feels_like}
              weatherIcon={currentData.weather[0].icon}
              weatherName={currentData.weather[0].main}
              weatherDescription={currentData.weather[0].description}
            />}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="overflow-x-auto">
            {currentForecastData &&
            <ForecastRow
              weatherList={currentForecastData}
            />}
          </div>

          <div>
            {currentData && <StatisticsRow 
             data={currentData}
            />}  
          </div>
        </div>
        
      </div>

    </main>
  );
}
