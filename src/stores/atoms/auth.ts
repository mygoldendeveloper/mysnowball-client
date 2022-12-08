import { atom } from "recoil";
import { createPersistAtom } from "stores/persist";

export type authKey = "accessToken" | "refreshToken";

export type authType = Record<authKey, string | null>;

export const authState = atom<authType>({
  key: "authState",
  default: {
    accessToken: null,
    refreshToken: null,
  },
  effects: [createPersistAtom("authState")],
});
