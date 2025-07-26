import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Main } from "../../../common/Main/styled";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";
import NoResults from "../../../common/NoResults";
import { MoviesList } from "../../../common/MoviesList/styled";
import TileMovie from "../../../common/TileMovie";
import { selectStatus, selectMovies, selectTotalResults, fetchMovies, selectPage, selectLastPage, fetchMoviesSearch } from "./moviesSlice";
import { searchQueryParamNames } from "../../../common/searchQueryParamNames";

function MoviesPage() {
    const status = useSelector(selectStatus);
    const movies = useSelector(selectMovies);
    const totalResults = useSelector(selectTotalResults);
    const page = useSelector(selectPage);
    const lastPage = useSelector(selectLastPage);
    const dispatch = useDispatch();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get(searchQueryParamNames);
    const trimmedQuery = query?.trim();

    useEffect(() => {
        if (query && query.trim() !== "") {
            dispatch(fetchMoviesSearch({ query: query.trim(), page }))
        } else {
            dispatch(fetchMovies(page));
        }
    }, [dispatch, query, page]);

    const getContainerState = () => {
        if (status === "loading") {
            return (
                <Section
                    title={!query || trimmedQuery === "" ? "Loading popular movies" : `Search results for "${trimmedQuery}"`}
                    body={<Loader />}
                />
            )
        } else if (status === "success") {
            return (
                <>
                    <Section
                        title={
                            totalResults > 0 ? (
                                !query || trimmedQuery === "" 
                                ? "Popular movies" 
                                : `Search results for "${trimmedQuery}" (${totalResults})`
                            ) : `Sorry, there are no results for "${trimmedQuery}"`
                        }
                        body={totalResults > 0 ? (
                            <MoviesList>
                                {movies.map(movie => (
                                    <TileMovie
                                        key={movie.id}
                                        isLink={true}
                                        id={movie.id}
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                        genre_ids={movie.genre_ids}
                                        vote_average={movie.vote_average}
                                        vote_count={movie.vote_count}
                                    />
                                ))}
                            </MoviesList>
                        ) : <NoResults />}
                    />
                    {totalResults > 0 ?
                        <Pagination
                            page={page}
                            lastPage={lastPage}
                        />
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
        <>
            <Main>
                {getContainerState()}
            </Main>
        </>
    );
};

export default MoviesPage;