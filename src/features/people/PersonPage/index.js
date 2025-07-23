import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Main } from "../../../common/Main/styled";
import { fetchPerson, selectPerson, selectStatus, selectCast, selectCrew } from "./personSlice";
import Section from "../../../common/Section";
import Error from "../../../common/Error";
import Loader from "../../../common/Loader";
import TileDetails from "../../../common/TileDetails";
import { MoviesList } from "../../../common/MoviesList/styled";
import TileMovie from "../../../common/TileMovie";

function PersonPage() {
    const { id } = useParams();
    const person = useSelector(selectPerson);
    const status = useSelector(selectStatus);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
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
                    {cast.length > 0 &&
                        <Section
                            title={`Movies - Cast (${cast.length})`}
                            body={
                                <MoviesList>
                                    {cast.map(element => (
                                        <TileMovie 
                                            key={element.id}
                                            isLink={false}
                                            id={element.id}
                                            poster_path={element.poster_path}
                                            title={element.title}
                                            role={element.character}
                                            release_date={element.release_date}
                                            genre_ids={element.genre_ids}
                                            vote_average={element.vote_average}
                                            vote_count={element.vote_count}
                                        />
                                    ))}
                                </MoviesList>
                            }
                        />
                    }
                    {crew.length > 0 &&
                        <Section
                            title={`Movies - Crew (${crew.length})`}
                            body={
                                <MoviesList>
                                    {crew.map(element => (
                                        <TileMovie 
                                            key={element.id}
                                            isLink={false}
                                            id={element.id}
                                            poster_path={element.poster_path}
                                            title={element.title}
                                            role={element.job}
                                            release_date={element.release_date}
                                            genre_ids={element.genre_ids}
                                            vote_average={element.vote_average}
                                            vote_count={element.vote_count}
                                        />
                                    ))}
                                </MoviesList>
                            }
                        />
                    }
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