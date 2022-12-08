import { recoilPersist } from "recoil-persist";

export const createPersistAtom = (atomKey: string) => {
  const sessionStorage =
    typeof window !== "undefined" ? window.sessionStorage : undefined;

  const { persistAtom } = recoilPersist({
    key: atomKey,
    storage: sessionStorage,
  });

  return persistAtom;
};
