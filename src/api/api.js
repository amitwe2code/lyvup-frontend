import axios from "axios";

const API_URL = 'http://127.0.0.1:8000';
export const login= async (email, password) => {
      const response = await axios.post(`${API_URL}/login/`, { email, password });
      return response;
}

export const register=async()=>{
      const response =await axios.post(`${API_URL}/user/`,{})
      return response ;
}