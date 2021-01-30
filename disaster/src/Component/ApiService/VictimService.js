import axios from 'axios'

const VICTIMS_REST_API_URL = 'http://localhost:8081/api/victims';


class VictimService {

    getVictims(){
      return axios.get(VICTIMS_REST_API_URL)
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