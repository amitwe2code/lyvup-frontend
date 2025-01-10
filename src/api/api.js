/* eslint-disable no-useless-catch */
import axios from "axios";
const API_URL = 'http://127.0.0.1:8000';



export const loginUser = async (email, password) => {
      try {
            const response = await axios.post(`${API_URL}/login/`, { email, password });
            return response;
      } catch (error) {
            throw error;
      }
}

export const signupUser = async (user) => {
      const response = await axios.post(`${API_URL}/signup/`, user)
      console.log('response', response);
      return response;

}

export const forgetPassword = async (email) => {
      const response = await axios.post(`${API_URL}/forgot/`, {
            email: email
      })
      return response
}


export const resetPassword = async (userId, token, password, confermPassword) => {
      console.log('in reset', userId, token)
      const response = await axios.post(`${API_URL}/reset/${userId}/${token}/`, {
            password: password,
            confirm_password: confermPassword
      });
      return response;
};

export const logoutUser = async (accessToken, refreshToken) => {
      try {
            const response = await axios.post(`${API_URL}/logout/`, {
                  access_token: accessToken,
                  refresh_token: refreshToken
            })
            return response
      } catch (error) {
            console.log(error)
      }
}

export const getUsers = async (accessToken, search, userType, page, pageSize, ordering) => {
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
export const getUser = async (accessToken, id) => {
      console.log('in get user', accessToken, id)
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

export const addUser = async (accessToken, data) => {
    
      const response = await axios.post(`${API_URL}/user/`, data, {
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`
            }
      });
      console.log("response_____________", response);
      return response.data;
};
export const updateUser = async (accessToken, data, id) => {
   
      try {
            const response = await axios.put(`${API_URL}/user/${id}/`, data, {
                  headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                  },

            })
            return response
      } catch (error) {
            throw error
      }
}

export const deleteUser = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/user/${id}/`, {
                  headers: {
                        'Content-Type': 'application/json',
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
      // eslint-disable-next-line no-useless-catch
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
      console.log('in update account', form, id)
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
      console.log('in delete account', id)
      try {
            const response = await axios.delete(`${API_URL}/account/${id}/`, {
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



//add user in team api   
export const getAccountUsers = async (id) => {
      try {
            const response = await axios.get(`${API_URL}/useraccount/account/${id}/`);
            return response;
      } catch (error) {
            throw error;
      }
}

export const RemoveUserAccount = async (id) => {
      try {
            const response = await axios.delete(`${API_URL}/useraccount/delete/${id}/`);
            console.log('response in delete user account=>', response);
            return response;
      } catch (error) {
            throw error;
      }
}
export const AddUserAccount = async (accountId, userIds) => {
      try {
            const response = await axios.post(`${API_URL}/useraccount/create/`, {
                  users: userIds,
                  account: accountId
            });
            return response;
      } catch (error) {
            throw error;
      }
}



//activity api
export const getActivity = async (accessToken, search, currentPage, pageSize, ordering) => {
      try {
            const response = await axios.get(`${API_URL}/activity/?search=${search}&page=${currentPage}&page_size=${pageSize}&ordering=${ordering}`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}


export const getSingleActivity = async (accessToken, id) => {
      try {
            const response = await axios.get(`${API_URL}/activity/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const addActivity = async (accessToken, data) => {
      try {
            console.log('data=>', data)
            const response = await axios.post(`${API_URL}/activity/`, data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const updateActivity = async (accessToken, data, id) => {
      try {
            const response = await axios.put(`${API_URL}/activity/${id}/`, data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const deleteActivity = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/activity/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}


export const getActivityTypes = async (accessToken, search, currentPage, pageSize, ordering) => {
      try {
            const response = await axios.get(`${API_URL}/activityapp/?search=${search}&page=${currentPage}&page_size=${pageSize}&ordering=${ordering}`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}


export const getSingleActivityType = async (accessToken, id) => {
      try {
            const response = await axios.get(`${API_URL}/activityapp/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const addActivityType = async (accessToken, data) => {
      try {
            const response = await axios.post(`${API_URL}/activityapp/`, data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const updateActivityType = async (accessToken, data, id) => {
      try {
            const response = await axios.put(`${API_URL}/activityapp/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const deleteActivityType = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/activityapp/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

//program api call 
export const getProgram = async (accessToken, search, currentPage, pageSize, ordering) => {
      try {
            const response = await axios.get(`${API_URL}/program/?search=${search}&page=${currentPage}&page_size=${pageSize}&ordering=${ordering}`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
          
            return response;
      } catch (error) {
            throw error;
      }
}


export const getSingleProgram = async (accessToken, id) => {
      try {
            const response = await axios.get(`${API_URL}/program/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const addProgram = async (accessToken, data) => {
      try {
            const response = await axios.post(`${API_URL}/program/`, data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const updateProgram = async (accessToken, data, id) => {
      try {
            const response = await axios.put(`${API_URL}/program/${id}/`,data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const deleteProgram = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/program/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}

export const getWeek = async (accessToken) => {
      try {
            const response = await axios.get(`${API_URL}/week/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
         
            return response;
      } catch (error) {
            throw error;
      }
}

export const addWeakActivity = async (accessToken, data) => {
      try {
            const response = await axios.post(`${API_URL}/week/`, data, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}



export const deleteWeekActivity = async (accessToken, id) => {
      try {
            const response = await axios.delete(`${API_URL}/week/${id}/`, {
                  headers: {
                        'Authorization': `Bearer ${accessToken}`
                  }
            });
            return response;
      } catch (error) {
            throw error;
      }
}