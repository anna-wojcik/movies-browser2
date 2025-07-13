import { Title } from "../Title/styled";
import { StyledSection, Wrapper } from "./styled";

export const Section = ({ title, body }) => (
    <StyledSection>
        <Title>{title}</Title>
        <Wrapper>
            {body}
        </Wrapper>
    </StyledSection>

);

export default Section;