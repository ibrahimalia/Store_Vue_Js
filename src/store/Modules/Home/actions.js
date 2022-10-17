import axios from "axios";
export const topProduct = async ({ commit }) => {
  let result = await axios.get("http://localhost:3000/topProduct");
  if (result.status == 200) {
    commit("topProduct", result.data);
  }
};
export const topCategory = async ({ commit }) => {
  console.log("sds")
  let result = await axios.get("http://localhost:3000/topCategory");
  if (result.status == 200) {
    commit("topCategory", result.data);
  }
};
 