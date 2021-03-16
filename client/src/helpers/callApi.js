import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://calm-hamlet-79579.herokuapp.com"
    : "http://localhost:5000";

export async function callApi({ url, method, body }) {
  return await axios({
    url: `${BASE_URL}${url}`,
    method,
    data: body,
  });
}
