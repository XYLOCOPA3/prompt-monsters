import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type TitleProps = BaseProps;

/**
 * タイトル
 * @keit0728
 * @param className 親要素から指定されるスタイル
 */
export const Title = ({ className }: TitleProps) => {
  return (
    <div className={clsx("text-4xl", "font-bold", className)}>
      Prompt Dungeons
    </div>
  );
};
