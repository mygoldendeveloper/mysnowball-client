import { atom } from "recoil";
import { createPersistAtom } from "stores/persist";

interface userType {
  id: number;
  nickname: string;
}

export const userState = atom<userType>({
  key: "userState",
  default: {
    id: 0,
    nickname: "",
  },
  effects: [createPersistAtom("userState")],
});
