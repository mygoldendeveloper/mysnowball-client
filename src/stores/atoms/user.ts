import { atom } from "recoil";
import { createPersistAtom } from "stores/persist";

interface userType {
  id: number | null;
  nickname: string | null;
}

export const userState = atom<userType>({
  key: "userState",
  default: {
    id: null,
    nickname: null,
  },
  effects: [createPersistAtom("userState")],
});
