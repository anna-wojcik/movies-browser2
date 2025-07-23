import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Item, StyledLink, Image, Title, Paragraph, Role, Box } from "./styled";
import { toMovie } from "../../routes";
import no_poster_picture from "./no_poster.svg";
import { API_IMAGE_URL } from "../apiData/apiData";
import Genres from "../Genres";
import Vote from "../Vote";
import { useWindowDimensions } from "../../useWindowDimensions";
import { selectGenres } from "../Genres/genresSlice";


export const TileMovie = ({ isLink, id, poster_path, title, role, release_date, genre_ids, vote_average, vote_count }) => {
    const getYear = (date) => new Date(date).getFullYear();
    const width = useWindowDimensions();
    const allGenres = useSelector(selectGenres);

    const getGenresByIds = (genre_ids, allGenres) =>
        genre_ids.map(id => allGenres.find(genre => genre.id === id)).filter(Boolean);

    const genreObjects = useMemo(() => getGenresByIds(genre_ids, allGenres), [genre_ids, allGenres]);

    const content = (
        <Item key={isLink ? id : undefined}>
            <Image
                src={poster_path
                    ? `${API_IMAGE_URL}/w342${poster_path}`
                    : no_poster_picture
                }
                alt={title}

            ></Image>
            <Box $external>
                <Box $internal>
                    <Title>{title}</Title>
                    <Paragraph>
                        <Role>{role} </Role>
                        {release_date && (
                            width > 640
                                ? `(${getYear(release_date)})`
                                : `${getYear(release_date)}`
                        )}
                    </Paragraph>
                    {genreObjects.length > 0 && (
                        <Genres
                            genres={genreObjects} inTileMovie={true} />
                    )}
                </Box>
                <Vote
                    vote_average={vote_average}
                    vote_count={vote_count}
                    inTileMovie={true}
                />
            </Box>
        </Item>
    )

    return isLink ? (
        <StyledLink
            key={id}
            to={toMovie({ id: id })}
        >
            {content}
        </StyledLink>
    ) : (
        content
    );
};

export default TileMovie;