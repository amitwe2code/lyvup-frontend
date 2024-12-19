import axios from "axios";
import { data } from "react-router";
const API_URL = 'http://127.0.0.1:8000';


export const login = async (email, password) => {
      const response = await axios.post(`${API_URL}/login/`, { email, password });
      return response;
}

export const register = async () => {
      const response = await axios.post(`${API_URL}/user/`, {})
      return response;
}

export const getUsers = async (accessToken) => {
      try {
            const response = await axios.get(`${API_URL}/user/`, {
                  headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  }
            })
            return response
      } catch (error) {
            return error
      }
}
export const getUser = async(accessToken,id)=>{
      try {
            const response = await axios.get(`${API_URL}/user/${id}/`, {
                  headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  }
            })
            return response
      } catch (error) {
            return error
      }
}
// export const addUser = async (accessToken, formData) => {
//       const Data = JSON.stringify(formData)
//       console.log('data=', Data);
//       try {
//             const response = await axios.post(`${API_URL}/user/`, Data, {
//                   headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${accessToken}`
//                   },
//             },

//             )
//             return response
//       } catch (error) {
//             return error
//       }
// }
export const addUser = async (accessToken, form) => {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("phone", form.phone);
      formData.append("language", form.language_preference);
      formData.append("name", form.name);
      formData.append("user_type", form.user_type);
      const response = await axios.post(`${API_URL}/user/`, formData, {
            headers: {
                  //'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`
            }
      });
      console.log("response_____________", response);
      return response.data;
};
export const updateUser = async (accessToken, form, id) => {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("phone", form.phone);
      formData.append("language", form.language_preference);
      formData.append("name", form.name);
      formData.append("user_type", form.user_type);
      try {
            const response = await axios.put(`${API_URL}/user/${id}/`, {
                  headers: {
                        // 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  },
                  data
            })
            return response
      } catch (error) {
            return error
      }
}

export const deleteUser = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/user/${id}/`, {
                  headers: {
                        // 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  },

            })
            return response
      } catch (error) {
            console.log('error=>', error)
            return error
      }
}