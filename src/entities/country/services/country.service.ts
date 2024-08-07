import { $country, GetCountryListDto, GetCountryResponseDto } from "../api";

export class CountryService {
  getCountryList(dto: GetCountryListDto) {
    return $country.get<GetCountryResponseDto[]>("/", { params: dto });
  }
}
