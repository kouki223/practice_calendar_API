import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

//header情報はキャメルケースのまま
const options = {
  ignoreHeaders: true,
};
//Rubyはスネークケース、JavaScriptはキャメルケースで記載するための違いを吸収する
const client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.REACT_APP_API_DOMEIN,
  }),
  options
);

export default client;
