export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
  
    if (token) {
      console.log(token)
      return { Authorization: token };
    } else {
      return {};
    }
  }