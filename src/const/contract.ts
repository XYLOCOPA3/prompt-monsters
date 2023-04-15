import promptMonstersAbi from "artifacts/PromptMonsters.json";

export const PROMPT_MONSTER_ADDRESS = process.env
  .NEXT_PUBLIC_PROMPT_MONSTERS_CONTRACT as string;

export const PROMPT_MONSTER_ABI = promptMonstersAbi.abi;
