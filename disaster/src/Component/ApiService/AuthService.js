import axios from 'axios'

const AUTH_REST_API_URL = 'http://localhost:8080/api';

class AuthService {

    loginUser(username, password) {
        return axios
          .post(AUTH_REST_API_URL + '/authenticate', {
            username,
            password
          })
          .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
      logout() {
        localStorage.removeItem("user");
      }
    
      register(username,password) {
        return axios.post(AUTH_REST_API_URL + '/register', {
          username,
          password
        });
      }
    
      getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }
    }
}
    
    export default new AuthService();

   
