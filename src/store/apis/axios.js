import axios from "axios";
import { API_URL } from "../../config";

const token = "";

export default axios.create({
    baseURL: API_URL.STAGING,
    headers : {
        // Authorization: token ? `Bearer ${token}` : null,
    }
});
