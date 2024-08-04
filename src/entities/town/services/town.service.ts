import { $town } from "@/entities/api";
import { ITown } from "../models";
import { GetTownListDto } from "@/entities/api/dto";

export class TownServise {
  static async getList(dto: GetTownListDto) {
    return (await $town.get<ITown[]>("/", { params: dto })).data;
  }
}
