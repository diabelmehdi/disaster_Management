import axios from 'axios'
import authHeader from './AuthHeader';

const RESCUE_HELPER_REST_API_URL = 'http://localhost:8080/api/rescueHelper';


class RescueHelperService {

    createRescueHelper(rescueHelper){
        return axios.post(RESCUE_HELPER_REST_API_URL,rescueHelper,{ headers: authHeader() })
      }
}
export default RescueHelperService;
