/**
 * Utils for weather
 */

type WeatherCondition = keyof typeof weatherConditionText;

const atmosphereText = (condition: string) => {
    return `it's going to be ${condition}, take care when outside.`;
}

const debrisText = (debrisType: string) => {
    return `there's going to be some ${debrisType}, bring a mask with you to help you breathe.`;
}

function isWeatherCondition(condition: string): condition is WeatherCondition {
    return condition in weatherConditionText;
}

export function getWeatherConditionText(condition: string) : string {
    if(!isWeatherCondition(condition)) return "invalid weather condition.";
    return weatherConditionText[condition];
}

export const weatherConditionText = {
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