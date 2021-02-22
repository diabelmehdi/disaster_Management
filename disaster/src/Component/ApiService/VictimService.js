import axios from "axios";
import authHeader from "./AuthHeader";

const VICTIMS_REST_API_URL = "http://localhost:8080/api";

class VictimService {
  getVictims() {
    return axios.get(VICTIMS_REST_API_URL, { headers: authHeader() });
  }

  createVictim(
    usernameValue1,
    passwordValue1,
    fullNameValue1,
    emailValue1,
    dateOfBirthValue1,
    allergyValue1,
    bloodTypeValue1,
    descriptionValue1,
    telValue1,
    nrStreetValue1,
    streetValue1,
    cityValue1,
    pathToRedirect2
  ) {
    return axios
      .post(VICTIMS_REST_API_URL + "/registerVictim", {
        username: usernameValue1,
        password: passwordValue1,
        email: emailValue1,
        birthday: dateOfBirthValue1,
        allergy: allergyValue1,
        bloodType: bloodTypeValue1,
        description: descriptionValue1,
        tel: telValue1,
        city: cityValue1,
        nrStreet: nrStreetValue1,
        street: streetValue1,
        name: fullNameValue1,
      })
      .then(() => {
        window.location.href = pathToRedirect2;
      });
  }

  getVictimById(victimId) {
    return axios.get(VICTIMS_REST_API_URL + "/" + victimId);
  }

  updateVictim(victim, victimId) {
    return axios.put(VICTIMS_REST_API_URL + "/" + victimId, victim);
  }
}

export default new VictimService();
