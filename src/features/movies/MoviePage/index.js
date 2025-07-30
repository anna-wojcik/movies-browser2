import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

import { Main } from "../../../common/Main/styled";
import Section from "../../../common/Section";
import Top from "./Top";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";
import { fetchMovie, selectMovie, selectStatus, selectCast, selectCrew } from "./movieSlice";
import TileDetails from "../../../common/TileDetails";
import PeopleList from "../../../common/PeopleList";

function MoviePage() {
    const { id } = useParams();
    const movie = useSelector(selectMovie);
    const status = useSelector(selectStatus);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie({ id }));
    }, [dispatch, id]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <Main>
                    <Section
                        title="Loading movie"
                        body={<Loader />}
                    />
                </Main>
            )
        } else if (status === "success") {
            return (
                <>
                    <Top
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                    />
                    <Main>
                        <Section
                            body={
                                <TileDetails
                                    nameObject="movie"
                                    object={movie}
                                    isMovie={true}
                                />
                            }
                        />
                        {cast.length > 0 &&
                            <Section
                                title="Cast"
                                body={
                                    <PeopleList 
                                        peopleProps={cast}
                                        showRole={true}
                                        roleKey="character"
                                    />
                                }
                            />
                        }
                        {crew.length > 0 &&
                            <Section 
                                title="Crew"
                                body={
                                    <PeopleList 
                                        peopleProps={crew}
                                        showRole={true}  
                                        roleKey="job"  
                                    />
                                }
                            />
                        }
                    </Main>
                </>
            )
        } else if (status === "error") {
            return (
                <Main>
                    <Error />
                </Main>
            )
        }
    };

    return (
        <>
            {getContainerState()}
        </>
    );
};

export default MoviePage;