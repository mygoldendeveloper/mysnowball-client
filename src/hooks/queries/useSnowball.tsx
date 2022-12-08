import { useRecoilValue } from "recoil";
import { userState } from "stores";
import { useGetSnowball } from ".";

export const useSnowball = () => {
  const user = useRecoilValue(userState);
  const { data, isError, isLoading } = useGetSnowball(user.id.toString());

  return {
    hasSnowball: data && !isError && !isLoading,
  };
};
