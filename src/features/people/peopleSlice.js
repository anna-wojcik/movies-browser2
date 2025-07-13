import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        status: "initial", // initial, loading, success, error
        page: 1,
        lastPage: 500,
    },
    reducers: {
        fetchPeople: (state) => {
            state.status = "loading";
        },
        fetchPeopleSuccess: (state, action) => {
            state.people = action.payload.results;
            state.status = "success";
        },
        fetchPeopleError: (state) => {
            state.status = "error";
        },
        setPage: (state, {payload: pageNumber}) => {
            state.page = pageNumber;
        },

    }
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setPage,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeople = state => selectPeopleState(state).people;
export const selectPage = state => selectPeopleState(state).page;
export const selectStatus = state => selectPeopleState(state).status;
export const selectLastPage = state => selectPeopleState(state).lastPage;

export default peopleSlice.reducer;