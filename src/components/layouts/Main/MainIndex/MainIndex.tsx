import { Result } from "@/components/elements/Result";
import { MonsterGenerator } from "@/features/monster";
import { MonsterMintButton } from "@/features/monster/components/MonsterMintButton";
import clsx from "clsx";

/**
 * Main: Home
 * @layout
 * @keit0728
 */
export const MainHome = () => {
  return (
    <div className={clsx("flex", "items-center", "flex-col")}>
      <MonsterGenerator className={clsx("my-[20px]", "w-[300px]")} />
      <div
        className={clsx(
          "w-[90%]",
          "mb-[20px]",
          "max-w-[700px]",
          "flex",
          "flex-col",
          "items-end",
        )}
      >
        <Result className={clsx("w-[100%]", "mb-[10px]")} />
        <MonsterMintButton />
      </div>
    </div>
  );
};
