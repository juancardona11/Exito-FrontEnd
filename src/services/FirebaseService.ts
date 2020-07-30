import axios from "axios";
import { Config } from "../config/properties";

export default {
  createCampaing(payload: any) {
    const APIUrl = "";
    const API = new Config();
    return axios.post( APIUrl, payload);
    
  },

  updateCampaing(id: any, payload: any) {
    const APIUrl = "";
    return axios.post(APIUrl, payload);
  },

  deleteCampaing(id: any) {
    const APIUrl = "";
    return axios.post(APIUrl , id);
  },

  getCampaing(id: any) {
    const APIUrl = "";
    return axios.get(APIUrl , id);
  }
};
