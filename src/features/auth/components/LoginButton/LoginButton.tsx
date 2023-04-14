import { useState } from "react";
import { Button } from "@/components/elements/Button";
import { useUserController } from "@/hooks/useUser";
import { userInitState } from "@/stores/userInitState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilValue } from "recoil";

export type LoginButtonProps = BaseProps;

/**
 * Login button
 * @feature
 * @keit0728
 * @param className Style from parent element
 */
export const LoginButton = ({ className }: LoginButtonProps) => {
  const userInit = useRecoilValue(userInitState);
  const [loading, setLoading] = useState(false);
  const userController = useUserController();

  /**
   * Login button click event
   */
  const handleClick = async () => {
    setLoading(true);
    try {
      await userController.login();
    } catch (e) {
      console.error(e);
      alert("Failed to login.");
    }
    setLoading(false);
  };

  return (
    <Button
      disabled={loading}
      className={clsx("w-[100px]", "h-[40px]", "rounded-full", className)}
      loading={loading || !userInit}
      onClick={handleClick}
    >
      LOGIN
    </Button>
  );
};
