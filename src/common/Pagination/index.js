import { useDispatch, useSelector } from "react-redux";
import { setPage, selectPage, selectLastPage } from "../../features/people/peopleSlice";
import { Button, StyledLeftArrow, StyledRightArrow, Paragraph, BoldContent, Wrapper } from "./styled";
import { useWindowDimensions } from "../../useWindowDimensions";

export const Pagination = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const lastPage = useSelector(selectLastPage);
    const width = useWindowDimensions();

    return (
        <Wrapper>
            <Wrapper $buttons>
                <Button
                    onClick={() => dispatch(setPage(1))}
                    disabled={page === 1}
                >
                    <StyledLeftArrow $buttonDisabled={page === 1 ? true : false} />
                    {width < 640 ? <StyledLeftArrow $buttonDisabled={page === 1 ? true : false} /> : "First"}
                </Button>
                <Button
                    onClick={() => dispatch(setPage(page - 1))}
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
                    onClick={() => dispatch(setPage(page + 1))}
                    disabled={page === lastPage}
                >
                    {width < 640 ? "" : "Next"}
                    <StyledRightArrow $buttonDisabled={page === lastPage ? true : false} />
                </Button>
                <Button
                    onClick={() => dispatch(setPage(lastPage))}
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