import axios from "axios";

const RESCUE_HELPER_REST_API_URL = "http://localhost:8080/api";

class RescueHelperService {
  createRescueHelper(
    usernameValue1,
    passwordValue1,
    fullNameValue1,
    emailValue1,
    BirthdayValue1,
    ageValue1,
    departmentValue1,
    descriptionValue1,
    phoneNumberValue1,
    professionValue1,
    pathToRedirect1
  ) {
    return axios
      .post(RESCUE_HELPER_REST_API_URL + "/registerRescueHelper", {
        username: usernameValue1,
        password: passwordValue1,
        email: emailValue1,
        birthday: BirthdayValue1,
        age: ageValue1,
        department: departmentValue1,
        description: descriptionValue1,
        phoneNumber: phoneNumberValue1,
        profession: professionValue1,
        name: fullNameValue1,
      })
      .then(() => {
        window.location.href = pathToRedirect1;
      });
  }
}
export default new RescueHelperService();
