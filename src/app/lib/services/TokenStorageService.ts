export default class TokenStorageService {
  setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  setAccessTokenExpire(Timestamp: string) {
    localStorage.setItem("expiresIn", Timestamp);
  }

  getAccessTokenExpire() {
    return localStorage.getItem("expiresIn");
  }
}
