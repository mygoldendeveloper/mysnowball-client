import { atom } from "recoil";

export const redirectUrlState = atom<string>({
  key: "redirectUrlState",
  default: "/",
});
