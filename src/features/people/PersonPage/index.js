import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Main } from "../../../common/Main/styled";
import { fetchPerson, selectPerson, selectStatus, selectCast, selectCrew } from "./personSlice";
import Section from "../../../common/Section";
import Error from "../../../common/Error";
import Loader from "../../../common/Loader";
import TileDetails from "../../../common/TileDetails";

function PersonPage() {
    const { id } = useParams();
    const person = useSelector(selectPerson);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPerson({ id }));
    }, [dispatch, id]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <Section
                    title="Loading person"
                    body={<Loader />}
                />
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        body={
                            <TileDetails
                                nameObject="person"
                                object={person}
                            />
                        }
                    />
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
}

export default PersonPage;