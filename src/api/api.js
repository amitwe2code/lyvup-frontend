import axios from "axios";
const API_URL = 'http://127.0.0.1:8000';


// Headers: {
//       headers: {
//         Content-Type: 'multipart/form-data',
//         Authorization: `Bearer ${access_token}`
//       }
// }

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
                        // 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  }
            })
            return response
      } catch (error) {
            console.log(error)
      }
}