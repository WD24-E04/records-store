import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/users";

export const register = async (usersDispatch, formData) => {
  try {
    const response = await axios.post("/register", formData);
    usersDispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usersDispatch, formData) => {
  try {
    const response = await axios.post("/login", formData);
    usersDispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (usersDispatch) => {
  try {
    await axios.get("/logout");
    usersDispatch({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};
