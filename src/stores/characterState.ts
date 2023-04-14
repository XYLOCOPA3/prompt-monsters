import { MonsterModel } from "@/models/MonsterModel";
import { atom } from "recoil";

export type CharacterState = MonsterModel;

export const characterState = atom<CharacterState>({
  key: "characterState",
  default: MonsterModel.create({}),
});
