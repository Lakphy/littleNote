import axios from "axios";

export const getJsonData = (): any => {
  return axios.get("./assets/notes.json");
};
