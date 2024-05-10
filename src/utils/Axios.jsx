import axios from "axios";

const instance = axios.create({
  baseUrl: "https://fakestoreapi.com",
});
export default instance;
