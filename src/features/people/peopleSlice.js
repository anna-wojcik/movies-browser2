import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        status: "initial", // initial, loading, success, error
        page: 1,
        lastPage: null,
        totalResults: null,
    },
    reducers: {
        fetchPeople: (state, action) => {
            state.status = "loading";
            state.page = action.payload;
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.people = payload.results;
            state.lastPage = payload.results.total_pages < 500 ? payload.results.total_pages : 500;
            state.status = "success";
        },
        fetchPeopleError: (state) => {
            state.status = "error";
        },
        setPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        fetchPeopleSearch: (state, { payload }) => {
            state.status = "loading";
            state.page = payload.page;
        },
        fetchPeopleSearchSuccess: (state, { payload }) => {
            state.people = payload.results;
            state.lastPage = payload.total_pages < 500 ? payload.total_pages : 500;
            state.status = "success";
            state.totalResults = payload.total_results;
        }
    }
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setPage,
    fetchPeopleSearch,
    fetchPeopleSearchSuccess,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeople = state => selectPeopleState(state).people;
export const selectPage = state => selectPeopleState(state).page;
export const selectStatus = state => selectPeopleState(state).status;
export const selectLastPage = state => selectPeopleState(state).lastPage;
export const selectTotalResults = state => selectPeopleState(state).totalResults;

export default peopleSlice.reducer;