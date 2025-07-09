import { Container, Input, Image } from "./styled";
import searchIcon from "./search.svg";

export const Search = () => {
    return (
        <Container>
            <label htmlFor="search">
                <Image src={searchIcon} alt="Search icon" />
            </label>
            <Input id="search" placeholder="Search for movies..." />
        </Container>
    );
};

export default Search;