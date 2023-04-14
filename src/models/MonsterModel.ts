import { ObjectCopier } from "@/models/ObjectCopier";
import { Status } from "@/types/Status";
import uuid from "react-uuid";

export class MonsterModel extends ObjectCopier {
  /**
   * コンストラクタ
   * createメソッドを使用してインスタンスを作成すること
   * ```
   * export const dummyMonster = MonsterModel.create({ id: "dummyId" });
   * ```
   * @param id ID
   * @param name 名前
   * @param flavor フレーバーテキスト
   * @param status ステータス
   * @param skills スキル
   * @param feature モンスターの特徴
   */
  private constructor(
    public readonly id: string = "",
    public readonly name: string = "",
    public readonly flavor: string = "",
    public readonly status: Status = {
      ATK: 0,
      DEF: 0,
      INT: 0,
      MGR: 0,
      AGL: 0,
    },
    public readonly skills: string[] = [],
    public readonly feature: string = "",
  ) {
    super();
  }

  /**
   * インスタンス生成
   * @param modifyObject modifyObject
   * @return {MonsterModel} MonsterModel
   */
  public static create(modifyObject: {
    [P in keyof MonsterModel]?: MonsterModel[P];
  }): MonsterModel {
    return new MonsterModel().copyWith(modifyObject);
  }

  /**
   * fromJson
   * @param feature モンスターの特徴
   * @param json json
   * @return {MonsterModel} MonsterModel
   */
  public static fromData(feature: string, json: any): MonsterModel {
    return MonsterModel.create({
      id: uuid(),
      name: json.name,
      flavor: json.flavor,
      status: json.status,
      skills: json.skills,
      feature: feature,
    });
  }
}
