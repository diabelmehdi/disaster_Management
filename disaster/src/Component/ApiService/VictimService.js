import axios from "axios";
import authHeader from "./AuthHeader";

const VICTIMS_REST_API_URL = "http://localhost:8080/api/victims";

class VictimService {
  getVictims() {
    return axios.get(VICTIMS_REST_API_URL, { headers: authHeader() });
  }

  createVictim(victim) {
    return axios.post(VICTIMS_REST_API_URL, victim, { headers: authHeader() });
  }

    getVictimByUsername(victimUsername){
      return axios.get(VICTIMS_REST_API_URL+'/'+ victimUsername,{ headers: authHeader() })
    }

    updateVictim(victim, victimUsername){
      return axios.put(VICTIMS_REST_API_URL+'/'+ victimUsername, victim, { headers: authHeader()})
    }
}

export default new VictimService();
