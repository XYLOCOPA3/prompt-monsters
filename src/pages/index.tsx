import { Result } from "@/components/elements/Result";
import { Title } from "@/components/elements/Title";
import { MonsterGenerator } from "@/features/monster";
import clsx from "clsx";

/**
 * Home
 * @keit0728
 */
export default function Home() {
  return (
    <main className={clsx("flex", "items-center", "flex-col")}>
      <Title className={clsx("m-[20px]")} />
      <MonsterGenerator className={clsx("my-[20px]", "w-[300px]")} />
      <Result className={clsx("w-[90%]", "mb-[20px]", "max-w-[700px]")} />
    </main>
  );
}
