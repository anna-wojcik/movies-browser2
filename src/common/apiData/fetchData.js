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

export const getPeopleSearch = async (query, page) => {
    const response = await axios.get(`${API_URL}/search/person`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            query: query,
            page,
            include_adult: false,
        }
    });
    return response.data;
};

export const getPerson = async (id) => {
    const response = await axios.get(`${API_URL}/person/${id}`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
        }
    });
    return response.data;
};

export const getPersonMovieCredits = async (id) => {
    const response = await axios.get(`${API_URL}/person/${id}/movie_credits`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
        }
    });
    return response.data;
};

export const getGenres = async () => {
    const response = await axios.get(`${API_URL}/genre/movie/list`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
        }
    });
    return response.data;
}