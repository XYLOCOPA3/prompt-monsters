import { MonsterModel } from "@/models/MonsterModel";
import { CharacterState, characterState } from "@/stores/characterState";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface CharacterController {
  generate: (feature: string, language: string) => Promise<void>;
}

export const useCharacterValue = (): CharacterState => {
  return useRecoilValue(characterState);
};

export const useCharacterController = (): CharacterController => {
  const setCharacter = useSetRecoilState(characterState);

  /**
   * モンスターを生成する
   * @param feature モンスターの特徴
   * @param language 出力言語
   */
  const generate = async (feature: string, language: string): Promise<void> => {
    const res = await axios.post("/api/generate-character", {
      feature,
      language,
    });
    if (res.status !== 200) throw new Error(res.data.message);
    const content = res.data.result[0].message.content;
    const monster = JSON.parse(content);
    if (monster.isExisting)
      throw new Error("useCharacter.ts: This monster is existing.");
    if (!monster.isFiction)
      throw new Error("useCharacter.ts: This monster is non fiction.");
    setCharacter(MonsterModel.fromData(feature, monster));
  };

  const controller: CharacterController = {
    generate,
  };
  return controller;
};

export const useCharacterState = (): [CharacterState, CharacterController] => [
  useCharacterValue(),
  useCharacterController(),
];
