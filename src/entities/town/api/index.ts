import axios from "axios";

const TOWN_API_URL = "https://api.api-ninjas.com/v1/city";

const TOWN_API_KEY = "B9Lv84FKOLHb9uMnedJeYQ==n52jYp5SffDxUvcg";

const $town = axios.create({
  // withCredentials: true,
  baseURL: TOWN_API_URL,
  headers: {
    "X-Api-Key": TOWN_API_KEY,
  },
});

export { $town };

export type { GetTownListDto, GetTownResponseDto, GetTownDto } from "./dto";
