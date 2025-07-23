import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        genres: [],
        status: "initial",
    },
    reducers: {
        fetchGenres: (state) => {
            state.status = "loading";
        },
        fetchGenresSuccess: (state, { payload }) => {
            state.genres = payload;
            state.status = "success";
        },
        fetchGenresError: (state) => {
            state.status = "error";
        },
    }
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresError,
} = genresSlice.actions;

const selectGenresState = state => state.genres;

export const selectGenres = state => selectGenresState(state).genres;
export const selectStatus = state => selectGenresState(state).status;

export default genresSlice.reducer;