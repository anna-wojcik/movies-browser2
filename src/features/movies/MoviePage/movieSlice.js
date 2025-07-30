import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: {},
        status: "initial",
        movieCredits: {},
    },
    reducers: {
        fetchMovie: (state) => {
            state.status = "loading";
        },
        fetchMovieSuccess: (state, { payload }) => {
            state.status = "success";
            state.movie = payload.movie;
            state.movieCredits = payload.movieCredits;
        },
        fetchMovieError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
} = movieSlice.actions;

const selectMovieState = state => state.movie;

export const selectMovie = state => selectMovieState(state).movie;
export const selectStatus = state => selectMovieState(state).status;
export const selectCast = state => selectMovieState(state).movieCredits.cast;
export const selectCrew = state => selectMovieState(state).movieCredits.crew;
 
export default movieSlice.reducer;