import { $town, GetTownResponseDto, GetTownListDto } from "../api";

export class TownServise {
  static getList(dto: GetTownListDto) {
    return $town.get<GetTownResponseDto[]>("/", { params: dto });
  }
}
