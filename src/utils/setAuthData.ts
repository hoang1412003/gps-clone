import Cookies from "js-cookie";
interface AuthData {
  userId: string;
  customerId: string;
  role: string;
  token: string;
  refreshToken: string;
}
export function setAuthData(data: AuthData[]) {
  if (!data || !data[0]) return;

  const { userId, customerId, role, token, refreshToken } = data[0];

  console.log("data: ", data);

  localStorage.setItem("uid", userId);
  localStorage.setItem("customerId", customerId);
  localStorage.setItem("role", role);

  Cookies.set("accessToken", token);
  Cookies.set("refreshToken", refreshToken);

  console.log("Auth data set to localStorage and cookies.");
}
