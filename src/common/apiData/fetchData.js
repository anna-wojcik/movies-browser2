import axios from "axios";
import { API_URL, API_KEY } from "./apiData";

export const getPeople = async (page) => {
    const response = await axios.get(`${API_URL}/person/popular`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page,
        },
    });
    return response.data;
};