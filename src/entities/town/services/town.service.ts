import { $town, GetTownResponseDto, GetTownListDto } from "../api";

export class TownService {
  getList = (dto: GetTownListDto) => {
    return $town.get<GetTownResponseDto[]>("/", { params: dto });
  };
}
