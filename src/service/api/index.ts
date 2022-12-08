import { AxiosResponse } from "axios";

import { apiRequest } from "../xhr";

export const getSnowball = async (id: string) => {
  const res: any = await apiRequest.get(`/snowball/contents?id=${id}`);

  return res;
};

interface PostSnowReq {
  id: number;
  nickName: string;
  phoneNumber: string;
  accessToken: string;
  refreshToken: string;
}

interface PostSnowRes {
  id: number;
  nickName: string;
}

export const postSnowball = async (req: PostSnowReq) => {
  const data: any = await apiRequest.post(`/snowball`, req);
  return data as PostSnowRes;
};

interface PostSnowCardReq {
  senderId: number;
  receiverId: number;
  nickname: string;
  content: string;
}

interface PostSnowCardRes {
  id: number;
  content: string;
  snowBall: {
    id: number;
    nickName: string;
  };
}

export const postSnowballCard = async (req: PostSnowCardReq) => {
  const data: any = await apiRequest.post(`/snowball/contents`, req);
  return data as PostSnowCardRes;
};
