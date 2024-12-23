import axios from "axios";
import { data } from "react-router";
const API_URL = 'http://127.0.0.1:8000';


export const loginUser = async (email, password) => {
      const response = await axios.post(`${API_URL}/login/`, { email, password });
      return response;
}

export const signupUser = async () => {
      const response = await axios.post(`${API_URL}/user/`, {})
      return response;
}

export const forgetPassword =async (email)=>{
      const response=await axios.post(`${API_URL}/forgot/`,{
            email:email
      })
      return response
}


export const resetPassword = async (userId,token,password,confermPassword) => {
      console.log('in reset',userId,token)
      const response = await axios.post(`${API_URL}/reset/${userId}/${token}/`, {
        password: password,
        confirm_password:confermPassword
      });
      return response;
    };

export const logoutUser=async(accessToken,refreshToken)=>{
      try {
            const response=await axios.post(`${API_URL}/logout/`,{
                  access_token:accessToken,
                  refresh_token:refreshToken
            })
            return response      
      } catch (error) {
            console.log(error)  
      }
}

export const getUsers = async (accessToken,search,userType,page,pageSize,ordering) => {
      try {
            const response = await axios.get(`${API_URL}/user/?search=${search}&page=${page}&page_size=${pageSize}&user_type=${userType}&ordering=${ordering}`, {
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
      console.log('in get user',accessToken,id)
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
      formData.append("phone", form.phone);
      formData.append("language", form.language_preference);
      formData.append("name", form.name);
      formData.append("user_type", form.user_type);
      try {
            const response = await axios.put(`${API_URL}/user/${id}/`,formData, {
                  headers: {
                        // 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  },
               
            })
            return response
      } catch (error) {
            alert(error.message)
            throw error
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


//account api

export const addAccount = async (accessToken, form) => {
      try {
            const response = await axios.post(`${API_URL}/account/`, form, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const getSingleAccountDetail = async (accessToken, id) => {
      try {
            const response = await axios.get(`${API_URL}/account/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const getAllAccountDetail = async (accessToken, search, currentPage, pageSize, ordering) => {
      try {
            const response = await axios.get(`${API_URL}/account/?search=${search}&page=${currentPage}&page_size=${pageSize}&ordering=${ordering}`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const updateAccount = async (accessToken, form, id) => {
      console.log('in update account',form,id)
      try {
            const response = await axios.put(`${API_URL}/account/${id}/`, form, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const deleteAccount = async (accessToken, id) => {
      console.log('in delete account',id)
      try {
            const response = await axios.delete(`${API_URL}/account/accounts/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            console.log('error=>', error)
            throw error;
      }
}