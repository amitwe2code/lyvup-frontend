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
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  }
            })
            return response
      } catch (error) {
            return error
      }
}

export const addUser = async (accessToken, data) => {
      try {
            const response = await axios.post(`${API_URL}/user/`, {
                  headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  },
                  data
            })
            return response
      } catch (error) {
            return error
      }
}
export const updateUser = async (accessToken, id, data) => {
      try {
            const response = await axios.put(`${API_URL}/user/${id}`, {
                  headers: {
                        'Content-Type': 'application/json',
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