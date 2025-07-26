import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { Container, Input, Image } from "./styled";
import searchIcon from "./search.svg";
import { searchQueryParamNames } from "../../searchQueryParamNames";
import { setPeoplePage } from "../../../features/people/peopleSlice";
import { setMoviesPage } from "../../../features/movies/MoviesPage/moviesSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const { pathname, search } = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get(searchQueryParamNames);

    const isMoviesPage = pathname.startsWith("/movies");

    const onInputChange = ({ target }) => {
        const tempSearchParams = new URLSearchParams(search);
        if (target.value.trim() === "") {
            tempSearchParams.delete(searchQueryParamNames);
        } else {
            tempSearchParams.set(searchQueryParamNames, target.value);
            if(isMoviesPage) {
                dispatch(setMoviesPage(1));
            } else {
                dispatch(setPeoplePage(1));
            }
        }
        history.push(`${pathname}?${tempSearchParams.toString()}`);
    };

    return (
        <Container>
            <label htmlFor="search">
                <Image src={searchIcon} alt="Search icon" />
            </label>
            <Input
                id="search"
                placeholder={`Search for ${pathname === "/movies" ? "movies" : "people"}...`}
                value={query || ""}
                onChange={onInputChange}
            />
        </Container>
    );
};

export default Search;