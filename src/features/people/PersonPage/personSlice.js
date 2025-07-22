import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        person: {},
        status: "initial",
        movieCredits: {},
    },

    reducers: {
        fetchPerson: (state) => {
            state.status = "loading";
        },
        fetchPersonSuccess: (state, { payload }) => {
            state.status = "success";
            state.person = payload.person;
            state.movieCredits = payload.movieCredits;
        },
        fetchPersonError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchPerson,
    fetchPersonSuccess,
    fetchPersonError,
} = personSlice.actions;

const selectPersonState = state => state.person;

export const selectPerson = state => selectPersonState(state).person;
export const selectStatus = state => selectPersonState(state).status;
export const selectCast = state => selectPersonState(state).movieCredits.cast;
export const selectCrew = state => selectPersonState(state).movieCredits.crew;

export default personSlice.reducer; 