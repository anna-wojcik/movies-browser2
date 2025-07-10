import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../common/Container";
import {
    fetchPeople,
    selectPeople,
    selectPage,
    selectStatus,
    selectLastPage,
    setPage,
} from "./peopleSlice";

function PeopleListPage() {
    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    console.log(people);
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
                    <p>People List Page</p>
                    <ul>
                        {people.map(person => (
                            <li key={person.id}>{person.name}</li>
                        ))}
                    </ul>

                    <button
                        onClick={() => dispatch(setPage(1))}
                        disabled={page === 1}
                    >
                        First
                    </button>
                    <button disabled={page === 1}>Previous</button>
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
        <>
            <Container>
                {getContainerState()}
            </Container>
        </>
    );
};

export default PeopleListPage;