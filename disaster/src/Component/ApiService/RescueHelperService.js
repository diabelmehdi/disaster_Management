import axios from "axios";

const RESCUE_HELPER_REST_API_URL = "http://localhost:8080/api";

class RescueHelperService {
  createRescueHelper(
    usernameValue2,
    passwordValue2,
    fullNameValue2,
    emailValue2,
    BirthdayValue2,
    ageValue2,
    departmentValue2,
    descriptionValue2,
    phoneNumberValue2,
    professionValue2,
    pathToRedirect1
  ) {
    return axios
      .post(RESCUE_HELPER_REST_API_URL + "/registerRescueHelper", {
        username: usernameValue2,
        password: passwordValue2,
        name: fullNameValue2,
        email: emailValue2,
        birthday: BirthdayValue2,
        age: ageValue2,
        department: departmentValue2,
        description: descriptionValue2,
        phoneNumber: phoneNumberValue2,
        profession: professionValue2,
      })
      .then(() => {
        window.location.href = pathToRedirect1;
      });
  }
}
export default new RescueHelperService();
