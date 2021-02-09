import axios from 'axios'

const SOS_REST_API_URL = 'http://localhost:8081/api/sos';


class SosService {
    getSos(){
      return axios.get(SOS_REST_API_URL)
    }

    createSos(sos){
      return axios.post(SOS_REST_API_URL,sos)
    }

    getSOSById(sosId){
      return axios.get(SOS_REST_API_URL+'/'+ sosId)
    }

    updateSOS(sos, sosId){
      return axios.put(SOS_REST_API_URL+'/'+ sosId, sos)
    }
}

export default new SosService()