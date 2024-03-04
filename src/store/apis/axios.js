import axios from "axios";
import { DEFAULT } from "../../config";

const token = "example token"; // Token or API Key?

export default axios.create({
    baseURL: DEFAULT.BASE_URL,
    headers : {
        Authorization: token ? `Bearer ${token}` : null,
    }
});
