import axios from "axios";

const WEATHER_API_KEY = "885f534f838475510dee8554066963b2";
// const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

const $weather = axios.create({
  baseURL: FORECAST_API_URL,
  params: {
    appid: WEATHER_API_KEY,
    lang: "RU",
    units: "metric",
  },
});

export { $weather };

export type { GetWeatherDto, GetWeatherResponseDto } from "./dto";
