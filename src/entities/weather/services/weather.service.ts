import { $weather, GetWeatherDto, GetWeatherResponseDto } from "../api";

export class WeatherService {
  getWeather = (dto: GetWeatherDto) => {
    return $weather.get<GetWeatherResponseDto>("", { params: dto });
  };
}
