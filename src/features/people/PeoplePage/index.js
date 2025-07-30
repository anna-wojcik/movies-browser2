import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Main } from "../../../common/Main/styled";
import PeopleList from "../../../common/PeopleList";
import {
    fetchPeople,
    selectPeople,
    selectPage,
    selectStatus,
    fetchPeopleSearch,
    selectTotalResults,
    selectLastPage,
} from "../peopleSlice";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";
import { searchQueryParamNames } from "../../../common/searchQueryParamNames";
import NoResults from "../../../common/NoResults";

function PeoplePage() {
    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    const page = useSelector(selectPage);
    const lastPage = useSelector(selectLastPage);
    const status = useSelector(selectStatus);
    const totalResults = useSelector(selectTotalResults);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get(searchQueryParamNames);
    const trimmedQuery = query?.trim();

    useEffect(() => {
        if (query && query.trim() !== "") {
            dispatch(fetchPeopleSearch({ query: query.trim(), page }));
        } else {
            dispatch(fetchPeople(page));
        }
    }, [dispatch, query, page]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <Section
                    title={!query || trimmedQuery === "" ? "Loading popular people" : `Search results for "${trimmedQuery}"`}
                    body={<Loader />}
                />
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        title={
                            totalResults > 0 ? (
                                !query || trimmedQuery === "" ? "Popular people" : `Search results for "${trimmedQuery}" (${totalResults})`
                            ) : `Sorry, there are no results for "${trimmedQuery}"`
                        }
                        body={totalResults > 0 ? (
                            <PeopleList
                                peopleProps={people}
                                showRole={false}
                            />
                        ) : <NoResults />}
                    />
                    {totalResults > 0
                        ? (
                            <Pagination
                                page={page}
                                lastPage={lastPage}
                            />
                        )
                        : null}
                </>
            )
        }
        else if (status === "error") {
            return (
                <Error />
            )
        }
    };

    return (
        <Main>
            {getContainerState()}
        </Main>
    );
};

export default PeoplePage;