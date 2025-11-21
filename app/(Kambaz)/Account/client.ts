import axios from "axios";
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

type User = {
  _id?: string,
  username?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  dob?: string,
  role?: string,
  loginId?: string,
  section?: string,
  lastActivity?: string,
  totalActivity?: string
}

export const signin = async (credentials: User) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const signup = async (user: User) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
