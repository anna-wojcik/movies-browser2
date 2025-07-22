import { Genre, Wrapper } from "./styled";

export const Genres = ({ genres }) => (
    <Wrapper>
        {genres.map(genre => (
            <Genre>{genre.name}</Genre>
        ))}
    </Wrapper>
);

export default Genres;