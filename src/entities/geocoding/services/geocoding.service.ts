import {
  GetTownLanAndLatDto,
  GetTownLanAndLatResponseDto,
  $geocoding,
} from "../api";
export class GeocodingService {
  getTownLanAndLat = (dto: GetTownLanAndLatDto) => {
    return $geocoding.get<GetTownLanAndLatResponseDto[]>("", { params: dto });
  };
}
