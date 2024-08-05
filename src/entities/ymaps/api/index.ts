import axios from "axios";

const YMAPS_API_URL = "https://geocode-maps.yandex.ru/1.x/";

const YMAPS_API_KEY = "476f6f94-c6e4-4fa1-b806-b682e7ce6fbe";

const $ymaps = axios.create({
  // withCredentials: true,
  baseURL: YMAPS_API_URL,
  params: {
    apikey: YMAPS_API_KEY,
    lang: "en_US",
    format: "json",
    kind: "locality", // Уточните, если нужно
  },
});

export { $ymaps };

export type { GetAdressByCoordsDto, GeoObjectCollection } from "./dto";
