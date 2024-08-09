import axios from "axios";

const GEOCODING_API_KEY = "885f534f838475510dee8554066963b2";
const GEOCODING_API_URL = "http://api.openweathermap.org/geo/1.0/direct";

const $geocoding = axios.create({
  baseURL: GEOCODING_API_URL,
  params: {
    appid: GEOCODING_API_KEY,
  },
});

export { $geocoding };

export type { GetTownLanAndLatDto, GetTownLanAndLatResponseDto } from "./dto";
