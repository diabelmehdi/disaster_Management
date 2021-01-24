import axios from 'axios'

const SOS_REST_API_URL = 'http://localhost:8081/api/sos';


class SosService {
    getSos(){
      return axios.get(SOS_REST_API_URL)
    }
}

export default new SosService()