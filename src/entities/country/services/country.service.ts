import {
  $country,
  GetCountryDto,
  GetCountryListDto,
  GetCountryResponseDto,
} from "../api";

export class CountryService {
  getCountryList(dto: GetCountryListDto) {
    return $country.get<GetCountryResponseDto[]>("/", { params: dto });
  }

  getCountry(dto: GetCountryDto) {
    return $country.get<GetCountryResponseDto[]>("/", { params: dto });
  }
}
