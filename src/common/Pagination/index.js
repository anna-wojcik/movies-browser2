import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { setPeoplePage } from "../../features/people/peopleSlice";
import { setMoviesPage } from "../../features/movies/MoviesPage/moviesSlice";
import { Button, StyledLeftArrow, StyledRightArrow, Paragraph, BoldContent, Wrapper } from "./styled";
import { useWindowDimensions } from "../../useWindowDimensions";

export const Pagination = ({ page, lastPage }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const width = useWindowDimensions();
    const isMoviesPage = location.pathname.startsWith("/movies");

    const handleSetPage = (number) => {
        if (isMoviesPage) {
            dispatch(setMoviesPage(number));
        } else {
            dispatch(setPeoplePage(number));
        }
    };

    return (
        <Wrapper>
            <Wrapper $buttons>
                <Button
                    onClick={() => handleSetPage(1)}
                    disabled={page === 1}
                >
                    <StyledLeftArrow $buttonDisabled={page === 1 ? true : false} />
                    {width < 640 ? <StyledLeftArrow $buttonDisabled={page === 1 ? true : false} /> : "First"}
                </Button>
                <Button
                    onClick={() => handleSetPage(page - 1)}
                    disabled={page === 1}
                >
                    <StyledLeftArrow $buttonDisabled={page === 1 ? true : false} />
                    {width < 640 ? "" : "Previous"}
                </Button>
            </Wrapper>
            <Paragraph>
                Page <BoldContent>{page}</BoldContent> of <BoldContent>{lastPage}</BoldContent>
            </Paragraph>
            <Wrapper $buttons>
                <Button
                    onClick={() => handleSetPage(page + 1)}
                    disabled={page === lastPage}
                >
                    {width < 640 ? "" : "Next"}
                    <StyledRightArrow $buttonDisabled={page === lastPage ? true : false} />
                </Button>
                <Button
                    onClick={() => handleSetPage(lastPage)}
                    disabled={page === lastPage}
                >
                    {width < 640 ? <StyledRightArrow $buttonDisabled={page === lastPage ? true : false} /> : "Last"}
                    <StyledRightArrow $buttonDisabled={page === lastPage ? true : false} />
                </Button>
            </Wrapper>
        </Wrapper>
    );
};

export default Pagination;