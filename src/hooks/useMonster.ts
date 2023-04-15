import { ClientPromptMonstersContract } from "@/features/monster/api/contracts";
import { MonsterModel } from "@/models/MonsterModel";
import { MonsterState, monsterState } from "@/stores/monsterState";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface MonsterController {
  generate: (feature: string, language: string) => Promise<void>;
  mint: (monster: MonsterModel) => Promise<void>;
}

export const useMonsterValue = (): MonsterState => {
  return useRecoilValue(monsterState);
};

export const useMonsterController = (): MonsterController => {
  const setMonster = useSetRecoilState(monsterState);

  /**
   * Generate monster
   * @param feature monster feature
   * @param language output language
   */
  const generate = async (feature: string, language: string): Promise<void> => {
    const res = await axios.post("/api/generate-monster", {
      feature,
      language,
    });
    if (res.status !== 200) throw new Error(res.data.message);
    const content = res.data.result[0].message.content;
    const monster = JSON.parse(content);
    if (monster.isExisting)
      throw new Error("useMonster.ts: This monster is existing.");
    if (!monster.isFiction)
      throw new Error("useMonster.ts: This monster is non fiction.");
    console.log(monster);
    setMonster(MonsterModel.fromData(feature, monster));
  };

  /**
   * Mint monster
   * @param monster monster model
   */
  const mint = async (monster: MonsterModel): Promise<void> => {
    const promptMonster = await ClientPromptMonstersContract.instance();
    await promptMonster.mint(monster);
  };

  const controller: MonsterController = {
    generate,
    mint,
  };
  return controller;
};

export const useMonsterState = (): [MonsterState, MonsterController] => [
  useMonsterValue(),
  useMonsterController(),
];
