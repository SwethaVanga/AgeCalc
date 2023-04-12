import axios from "axios";
import { AgeResponse } from "../types/response";

axios.defaults.baseURL = "http://localhost:3131";

export const getAge: (dob: string) => Promise<AgeResponse> = async (dob) => {
  try {
    const {
      data: { age },
    } = await axios.get<{ age: AgeResponse }>(`/age/calculate?dob=${dob}`);
    return age;
  } catch (e) {
    alert("Error while calling api");
    throw e;
  }
};
