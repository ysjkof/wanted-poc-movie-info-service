import axios from "axios";
import { USER_URL } from "../constant/constant";
import { User } from "../utils/useAuth";

const axiosUser = axios.create({
  baseURL: USER_URL,
  headers: {
    "Content-type": "application/json",
  },
});

class UserServices {
  getUser = async (email: string): Promise<User> => {
    let data: User;
    await axiosUser
      .get("", { params: { email } })
      .then((_response) => {
        data = _response.data[0];
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getUser"));
    // @ts-ignore
    return data;
  };

  getIdOfLastUser = async (): Promise<number> => {
    let lastUserId = 1;
    await axiosUser
      .get("")
      .then((_response) => {
        // @ts-ignore
        lastUserId = _response.data.sort((a, b) => b.id - a.id)[0].id ?? 1;
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getIdOfLastUser"));
    return lastUserId;
  };

  postUser = async (user: User) => {
    axiosUser
      .post("", user)
      .then((_response) => {
        console.warn("postUser status code: ", _response.status);
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done postUser"));
  };

  patchUser = async (user: Partial<User>) => {
    let data: User;
    await axiosUser
      .patch("1", user)
      .then((_response) => {
        data = _response.data;
        console.warn("patchUser status code: ", _response.status);
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done patchUser"));
    // @ts-ignore
    return data;
  };
}

export const userServices = new UserServices();
