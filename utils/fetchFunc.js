import axios from "axios";
export const axiosFetcher = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result.data;
};
