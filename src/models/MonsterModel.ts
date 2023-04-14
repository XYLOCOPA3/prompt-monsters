import { BaseModel } from "@/models/BaseModel";
import { MonsterId } from "@/types/MonsterId";
import { Status } from "@/types/Status";
import uuid from "react-uuid";

export class MonsterModel extends BaseModel<MonsterId> {
  /**
   * Constructor
   * You must create an instance with the static method `create`.
   * ```
   * export const dummyMonster = MonsterModel.create({ id: "dummyId" });
   * ```
   * @param name name
   * @param flavor flavor text
   * @param status status
   * @param skills skills
   * @param feature monster feature
   */
  private constructor(
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
    super("");
  }

  /**
   * Create instance
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
   * @param feature monster feature
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
