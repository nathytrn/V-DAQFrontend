import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://3ic8ifp6ye.execute-api.ap-southeast-2.amazonaws.com/prod/userData",
  headers: { "x-api-key": process.env.REACT_APP_API_KEY },
});
