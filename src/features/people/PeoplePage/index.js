import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main } from "../../../common/Main/styled";
import PeopleList from "../../../common/PeopleList";
import {
    fetchPeople,
    selectPage,
    selectStatus,
} from "../peopleSlice";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import Loader from "../../../common/Loader";

function PeoplePage() {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch, page]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <Section 
                    title="Loading popular people"
                    body={<Loader />}
                />
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        title="Popular people"
                        body={<PeopleList />}
                    />
                    <Pagination />
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