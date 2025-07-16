import { Image, Wrapper } from "./styled";
import noResults from "./noResults.svg";

export const NoResults = () => (
    <Wrapper>
        <Image src={noResults} alt="No results picture"></Image>
    </Wrapper>
);

export default NoResults;