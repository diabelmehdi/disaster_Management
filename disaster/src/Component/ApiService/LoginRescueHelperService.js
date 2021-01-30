import axios from 'axios'

const LOGIN_RESCUE_HELPER_REST_API_URL = 'http://localhost:8081/api/loginRescueHelper';


class LoginRescueHelperService {
    getLoginRescueHelper(){
      return axios.get(LOGIN_RESCUE_HELPER_REST_API_URL)
    }

    createLoginRescueHelper(loginVictim){
      return axios.post(LOGIN_RESCUE_HELPER_REST_API_URL,loginVictim)
    }
}

export default new LoginRescueHelperService()