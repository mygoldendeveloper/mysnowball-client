import { atom } from "recoil";
import { createPersistAtom } from "stores/persist";

interface Snow {
  id: number;
  content: string;
  snowBall: {
    id: number;
    nickName: string;
  };
}

interface modalProps {
  status: boolean;
  content: Snow | null;
}

export const modalState = atom<modalProps>({
  key: "modal",
  default: {
    status: false,
    content: null,
  },
});
