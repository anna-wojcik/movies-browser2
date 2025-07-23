import { Genre, Wrapper } from "./styled";

export const Genres = ({ genres, inTileMovie }) => (
    <Wrapper $inTileMovie={inTileMovie}>
        {genres.map(genre => (
            <Genre key={genre.id}>{genre.name}</Genre>
        ))}
    </Wrapper>
);

export default Genres;