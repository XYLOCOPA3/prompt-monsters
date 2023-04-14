import { CHAINID_MUMBAI } from "@/const/chainParams";
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
    if ((await wallet.getChainId()) !== CHAINID_MUMBAI)
      await wallet.switchChainIfNotExistAdd(CHAINID_MUMBAI);
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
