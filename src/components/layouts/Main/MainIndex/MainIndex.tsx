import { Result } from "@/components/elements/Result";
import { MonsterGenerator } from "@/features/monster";
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
      <Result className={clsx("w-[90%]", "mb-[20px]", "max-w-[700px]")} />
    </div>
  );
};
