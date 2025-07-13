import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main } from "../../../common/Main/styled";
import PeopleList from "../../../common/PeopleList";
import {
    fetchPeople,
    selectPage,
    selectStatus,
    selectLastPage,
    setPage,
} from "../peopleSlice";
import Section from "../../../common/Section";

function PeoplePage() {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const status = useSelector(selectStatus);
    const lastPage = useSelector(selectLastPage);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch, page]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <p>Ładowanie listy popularnych osób</p>
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        title="Popular people"
                        body={<PeopleList />}
                    />

                    <button
                        onClick={() => dispatch(setPage(1))}
                        disabled={page === 1}
                    >
                        First
                    </button>
                    <button
                        onClick={() => dispatch(setPage(page-1))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <p>Page: {page} of {lastPage}</p>
                    <button
                        onClick={() => dispatch(setPage(page + 1))}
                        disabled={page === lastPage}
                    >
                        Next
                    </button>
                    <button
                        onClick={() => dispatch(setPage(lastPage))}
                        disabled={page === lastPage}
                    >
                        Last
                    </button>
                </>
            )
        }
        else if (status === "error") {
            return (
                <p>Bład w trakcie ładowania. Sprawdź połączenie internetowe.</p>
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