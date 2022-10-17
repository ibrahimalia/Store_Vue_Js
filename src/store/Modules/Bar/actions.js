import axios from "axios";
export const category = async ({commit }) => {
  console.log("hi");
  let result = await axios.get("http://localhost:3000/category");
  setTimeout(function(){
      commit("load", false);
  },1000)
  if (result.status == 200) {
    commit("category", result.data);
  }
  };
