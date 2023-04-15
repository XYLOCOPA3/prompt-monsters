import { CHAINID_LINEA } from "@/const/chainParams";
import { dummyUserState } from "@/const/dummy";
import { ClientWallet } from "@/lib/wallet";
import { UserState, userState } from "@/stores/userState";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface UserController {
  login: () => Promise<void>;
}

export const useUserValue = (): UserState => {
  return useRecoilValue(userState);
};

export const useUserController = (): UserController => {
  const setUser = useSetRecoilState(userState);

  /**
   * Login
   */
  const login = async (): Promise<void> => {
    const wallet = await ClientWallet.instance();
    const chainId = (await wallet.getChainId()).toLowerCase();
    if (chainId !== CHAINID_LINEA)
      await wallet.switchChainIfNotExistAdd(CHAINID_LINEA);
    const addresses = await wallet.connect();
    setUser(dummyUserState.copyWith({ id: addresses[0] }));
  };

  const controller: UserController = {
    login,
  };
  return controller;
};

export const useUserState = (): [UserState, UserController] => [
  useUserValue(),
  useUserController(),
];
