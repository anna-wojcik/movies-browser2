import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Main } from "../../../common/Main/styled";
import PeopleList from "../../../common/PeopleList";
import {
    fetchPeople,
    selectPage,
    selectStatus,
    fetchPeopleSearch,
    selectTotalResults,
} from "../peopleSlice";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";
import { searchQueryParamNames } from "../../../common/searchQueryParamNames";
import NoResults from "../../../common/NoResults";

function PeoplePage() {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const status = useSelector(selectStatus);
    const totalResults = useSelector(selectTotalResults);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get(searchQueryParamNames);

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
                    title={!query || query.trim() === "" ? "Loading popular people" : `Search results for "${query.trim()}"`}
                    body={<Loader />}
                />
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        title={!query || query.trim() === "" ? "Popular people" : `Search results for "${query.trim()}" (${totalResults})`}
                        body={totalResults > 0 ? <PeopleList /> : <NoResults />}
                    />
                    {totalResults > 0 ? <Pagination /> : null}
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