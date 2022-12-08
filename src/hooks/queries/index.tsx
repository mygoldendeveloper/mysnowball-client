import { useQuery } from "@tanstack/react-query";
import { getSnowball } from "service/api";

export const useGetSnowball = (id: string) =>
  useQuery(["GET_SNOWBALL", id], () => getSnowball(id));
