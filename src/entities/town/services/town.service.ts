import { $town, GetTownResponseDto, GetTownListDto, GetTownDto } from "../api";

export class TownService {
  getList = (dto: GetTownListDto) => {
    return $town.get<GetTownResponseDto[]>("/", { params: dto });
  };

  getOne = (dto: GetTownDto) => {
    return $town.get<GetTownResponseDto[]>("/", { params: dto });
  };
}
