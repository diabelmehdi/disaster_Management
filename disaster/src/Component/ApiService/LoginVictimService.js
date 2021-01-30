import axios from 'axios'

const LOGIN_VICTIM_REST_API_URL = 'http://localhost:8081/api/loginVictim';


class LoginVictimService {
    getLoginVictim(){
      return axios.get(LOGIN_VICTIM_REST_API_URL)
    }

    createLoginVictim(loginVictim){
      return axios.post(LOGIN_VICTIM_REST_API_URL,loginVictim)
    }
}

export default new LoginVictimService()