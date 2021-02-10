import axios from 'axios'
import authHeader from './AuthHeader';

const VICTIMS_REST_API_URL = 'http://localhost:8080/api/victims';


class VictimService {

    getVictims(){
      return axios.get(VICTIMS_REST_API_URL,{ headers: authHeader() })
    }

    createVictim(victim){
      return axios.post(VICTIMS_REST_API_URL,victim)
    }

    getVictimById(victimId){
      return axios.get(VICTIMS_REST_API_URL+'/'+ victimId)
    }

    updateVictim(victim, victimId){
      return axios.put(VICTIMS_REST_API_URL+'/'+ victimId, victim)
    }
}

export default new VictimService()