import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: "initial",
        page: 1,
        lastPage: null,
        totalResults: null,
    },
    reducers: {
        fetchMovies: (state) => {
            state.status = "loading";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.status = "success";
            state.movies = payload.results;
            state.lastPage = payload.total_pages < 500 ? payload.total_pages : 500;
            state.totalResults = payload.total_results;
        },
        fetchMoviesError: (state) => {
            state.status = "error";
        },
        setMoviesPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        fetchMoviesSearch: (state, { payload }) => {
            state.status = "loading";
            state.page = payload.page;
        },
        fetchMoviesSearchSuccess: (state, { payload }) => {
            state.status = "success";
            state.movies = payload.results;
            state.lastPage = payload.total_pages < 500 ? payload.total_pages : 500;
            state.totalResults = payload.total_results;
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    setMoviesPage,
    fetchMoviesSearch,
    fetchMoviesSearchSuccess,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectStatus = state => selectMoviesState(state).status;
export const selectPage = state => selectMoviesState(state).page;
export const selectLastPage = state => selectMoviesState(state).lastPage;
export const selectTotalResults = state => selectMoviesState(state).totalResults;
export default moviesSlice.reducer;