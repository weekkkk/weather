import { $town, GetTownResponseDto } from "@/entities/api";
import { GetTownListDto } from "@/entities/api";

export class TownServise {
  static getList(dto: GetTownListDto) {
    return $town.get<GetTownResponseDto[]>("/", { params: dto });
  }
}
