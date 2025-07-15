import { StyledDangerIcon, SubTitle, Title, Wrapper } from "./styled";


export const Error = () => {
    return (
        <Wrapper>
            <StyledDangerIcon />
            <Title>Ooops! Something went wrong...</Title>
            <SubTitle>Please check your network connection and try again</SubTitle>
        </Wrapper>

    );
};

export default Error;