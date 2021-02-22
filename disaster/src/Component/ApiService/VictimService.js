import axios from "axios";
import authHeader from "./AuthHeader";

const VICTIMS_REST_API_URL = "http://localhost:8080/api";

class VictimService {
  getVictims() {
    return axios.get(VICTIMS_REST_API_URL + "/victims", {
      headers: authHeader(),
    });
  }

  createVictim(
    usernameValue1,
    fullNameValue1,
    emailValue1,
    nrStreetValue1,
    streetValue1,
    cityValue1,
    descriptionValue1,
    dateOfBirthValue1,
    allergyValue1,
    bloodTypeValue1,
    telValue1,
    passwordValue1,
    pathToRedirect2
  ) {
    return axios
      .post(VICTIMS_REST_API_URL + "/registerVictim", {
        username: usernameValue1,
        name: fullNameValue1,
        email: emailValue1,
        nrStreet: nrStreetValue1,
        street: streetValue1,
        city: cityValue1,
        description: descriptionValue1,
        birthday: dateOfBirthValue1,
        allergy: allergyValue1,
        bloodType: bloodTypeValue1,
        tel: telValue1,
        password: passwordValue1,
      })
      .then(() => {
        window.location.href = pathToRedirect2;
      });
  }

  getVictimByUsername(victimUsername) {
    return axios.get(VICTIMS_REST_API_URL + "/victims/" + victimUsername, {
      headers: authHeader(),
    });
  }

  updateVictim(victim, victimUsername) {
    return axios.put(
      VICTIMS_REST_API_URL + "/victims/" + victimUsername,
      victim,
      { headers: authHeader() }
    );
  }
}

export default new VictimService();
