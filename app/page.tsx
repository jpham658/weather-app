import Image from "next/image";
import WeatherCard from "./components/ui/weather-card";
import CurrentWeatherCard from "./components/ui/current-weather-card";

// const mockCurrentData =                 
// {
//    "lat":33.44,
//    "lon":-94.04,
//    "timezone":"America/Chicago",
//    "timezone_offset":-18000,
//    "current":{
//       "dt":1684929490,
//       "sunrise":1684926645,
//       "sunset":1684977332,
//       "temp":292.55,
//       "feels_like":292.87,
//       "pressure":1014,
//       "humidity":89,
//       "dew_point":290.69,
//       "uvi":0.16,
//       "clouds":53,
//       "visibility":10000,
//       "wind_speed":3.13,
//       "wind_deg":93,
//       "wind_gust":6.71,
//       "weather":[
//          {
//             "id":803,
//             "main":"Clouds",
//             "description":"broken clouds",
//             "icon":"04d"
//          }
//       ]
//    },
//    "minutely":[
//       {
//          "dt":1684929540,
//          "precipitation":0
//       },
//    ],
//    "hourly":[
//       {
//          "dt":1684926000,
//          "temp":292.01,
//          "feels_like":292.33,
//          "pressure":1014,
//          "humidity":91,
//          "dew_point":290.51,
//          "uvi":0,
//          "clouds":54,
//          "visibility":10000,
//          "wind_speed":2.58,
//          "wind_deg":86,
//          "wind_gust":5.88,
//          "weather":[
//             {
//                "id":803,
//                "main":"Clouds",
//                "description":"broken clouds",
//                "icon":"04n"
//             }
//          ],
//          "pop":0.15
//       },
//       {
//           "dt":1684926000,
//           "temp":292.01,
//           "feels_like":292.33,
//           "pressure":1014,
//           "humidity":91,
//           "dew_point":290.51,
//           "uvi":0,
//           "clouds":54,
//           "visibility":10000,
//           "wind_speed":2.58,
//           "wind_deg":86,
//           "wind_gust":5.88,
//           "weather":[
//             {
//                 "id":803,
//                 "main":"Clouds",
//                 "description":"broken clouds",
//                 "icon":"04n"
//             }
//           ],
//           "pop":0.15
//         },
//         {
//           "dt":1684926000,
//           "temp":292.01,
//           "feels_like":292.33,
//           "pressure":1014,
//           "humidity":91,
//           "dew_point":290.51,
//           "uvi":0,
//           "clouds":54,
//           "visibility":10000,
//           "wind_speed":2.58,
//           "wind_deg":86,
//           "wind_gust":5.88,
//           "weather":[
//             {
//                 "id":803,
//                 "main":"Clouds",
//                 "description":"broken clouds",
//                 "icon":"04n"
//             }
//           ],
//           "pop":0.15
//         },
//    ],
//    "daily":[
//       {
//          "dt":1684951200,
//          "sunrise":1684926645,
//          "sunset":1684977332,
//          "moonrise":1684941060,
//          "moonset":1684905480,
//          "moon_phase":0.16,
//          "summary":"Expect a day of partly cloudy with rain",
//          "temp":{
//             "day":299.03,
//             "min":290.69,
//             "max":300.35,
//             "night":291.45,
//             "eve":297.51,
//             "morn":292.55
//          },
//          "feels_like":{
//             "day":299.21,
//             "night":291.37,
//             "eve":297.86,
//             "morn":292.87
//          },
//          "pressure":1016,
//          "humidity":59,
//          "dew_point":290.48,
//          "wind_speed":3.98,
//          "wind_deg":76,
//          "wind_gust":8.92,
//          "weather":[
//             {
//                "id":500,
//                "main":"Rain",
//                "description":"light rain",
//                "icon":"10d"
//             }
//          ],
//          "clouds":92,
//          "pop":0.47,
//          "rain":0.15,
//          "uvi":9.23
//       },
//    ],
// }

const key = process.env.OPEN_WEATHER_API_KEY;
const lat = 51.5072;
const lon = 0.1276;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function getWeatherData() {
  const currentData = await fetch(url);
  const weatherData = await currentData.json();
  return weatherData;
}

export default async function Home() {
  const currentData = await getWeatherData();

  return (
    <main className="flex min-h-screen flex-col justify-center py-10 px-20 bg-zinc-100">
      
      <div className="flex flex-col mb-10 bg-red-100">
        <p className="text-3xl font-medium">This is a weather app.</p>
      </div>

      <div className="flex justify-around items-center h-96 bg-blue-200">

        <CurrentWeatherCard
          temp={currentData.main.temp}
          feels_like={currentData.main.feels_like}
          weather_icon={currentData.weather[0].main}
          weather_description={currentData.weather[0].description}
          time={currentData.dt}
        />

      </div>

    </main>
  );
}
