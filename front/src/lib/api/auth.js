import Cookies from "js-cookie";
import client from "./client";

//ユーザ登録のAPIを叩く、引数はリクエストパラメーター、Pathにauthを指定する。clientで定義したclientをpostで実行する
export const signUp = (params) => {
  return client.post("/auth", params);
};
// ログインのAPIを叩く、引数はリクエストパラメーター、Pathにauth/sign_inを指定する。clientで定義したclientをpostで実行する
export const signIn = (params) => {
  return client.post("/auth/sign_in", params);
};
export const getUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid"),
    },
  });
};
