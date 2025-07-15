import { StyledDangerIcon, StyledLink, SubTitle, Title, Wrapper } from "./styled";


export const Error = () => {
    return (
        <Wrapper>
            <StyledDangerIcon />
            <Title>Ooops! Something went wrong...</Title>
            <SubTitle>Please check your network connection and try again</SubTitle>
            <StyledLink to="/">Back to home page</StyledLink>
        </Wrapper>

    );
};

export default Error;