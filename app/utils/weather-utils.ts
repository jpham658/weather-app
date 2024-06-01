/**
 * Utils for weather
 */

import { WeatherIconType } from "../types/weather-types";


/**
 * Get text for a given weather condition
 * @param condition The weather condition given
 * @returns the associated text for the weather condition
 */
export function getWeatherConditionText(condition: string) : string {
    const atmosphereText = (condition: string) => {
        return `it's going to be ${condition}, take care when outside.`;
    }

    const debrisText = (debrisType: string) => {
        return `there's going to be some ${debrisType}, bring a mask with you to help you breathe.`;
    }
    
    const weatherConditionText: Record<string, string> = {
        "Thunderstorm": "it's going to be stormy - don't forget an umbrella!",
        "Drizzle": "there's going to be a bit of drizzle.",
        "Rain": "it's going to rain so bring a raincoat!",
        "Snow": "there's going to be snow, go out and make a snowman!",
        "Mist": atmosphereText("misty"),
        "Smoke": atmosphereText("smoky"),
        "Haze": atmosphereText("hazy"),
        "Dust": debrisText("dust"),
        "Fog": atmosphereText("foggy"),
        "Sand": debrisText("sand"),
        "Ash": debrisText("ash"),
        "Squall": "there's going to be strong gusts of wind, take care and reduce going outside where possible.",
        "Tornado": "there's a tornado warning, take precautionary measures and stay safe.",
        "Clear": "it's going to be clear skies.",
        "Clouds": "there's some cloud cover.",
    }
    
    return weatherConditionText[condition] || "invalid weather condition."; 
}

/**
 * @param iconText The icon text of a weather data
 * @returns true, if the weather data is for the day, otherwise, returns false
 */
export function isDay(iconText: WeatherIconType) : boolean {
    const dayChar = iconText[iconText.length - 1];
    return dayChar === "d";
}

/**
 * Get the verbose weather type for a given icon text
 * @param iconText The icon text of the weather data
 * @returns the associated weather type for the icon text
 */
export function getWeatherType(iconText: WeatherIconType) : string {
    const weatherType = iconText.slice(0, iconText.length - 1);
    const types: Record<string, string> = {
        "01": "clear",
        "02": "sunny-intervals",
        "03": "clouds",
        "04": "clouds",
        "09": "shower",
        "10": "rain",
        "11": "thunderstorm",
        "13": "snow",
        "50": "mist",
    }
    return types[weatherType] || "clouds"
}

/**
 * Get Tailwind background colour styles for a given weather type 
 * @param weather The weather type given
 * @param isDay True if the weather is in the day, false otherwise
 * @returns the associated colour for the weather type
 */
export function getWeatherTypeBackground(weather: string , isDay: boolean) {
    const colours: Record<string, string> = {
        "clear": isDay ? "bg-gradient-to-b from-sky-200 to-cyan-100" : "bg-gradient-to-b from-indigo-500 to-blue-200",
        "sunny-intervals": isDay ? "bg-gradient-to-b from-slate-300 to-sky-100" : "bg-gradient-to-b from-slate-500 to-indigo-200",
        "clouds": isDay ? "bg-gradient-to-b from-slate-300 to-sky-50" : "bg-gradient-to-b from-slate-500 to-indigo-300",
        "rain": isDay ? "bg-gradient-to-b from-slate-400 to-slate-200" : "bg-gradient-to-b from-slate-600 to-slate-400",
        "thunderstorm": isDay ? "bg-gradient-to-b from-slate-600 to-blue-100" : "bg-gradient-to-b from-slate-600 to-indigo-900",
    }

    return colours[weather] || colours["clouds"];
}