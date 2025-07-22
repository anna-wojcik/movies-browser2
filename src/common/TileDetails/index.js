import { Wrapper, Box, Image, Title, Description, Info, InfoValue, Year, InfoContainer } from "./styled";
import { API_IMAGE_URL } from "../apiData/apiData";
import no_profile_picture from "./no_profile.svg";
import no_poster_picture from "./no_poster.svg";
import { useWindowDimensions } from "../../useWindowDimensions";
import Genres from "../Genres";
import Vote from "../Vote";

export const TileDetails = ({ nameObject, object }) => {
    const width = useWindowDimensions();
    const handleData = date => (new Date(date)).toLocaleDateString();
    const getYear = (date) => new Date(date).getFullYear();
    
    if (nameObject === "person") {
        return (
            <Wrapper $external>
                <Wrapper $internal>
                    <Image
                        $person
                        src={object.profile_path
                            ? `${API_IMAGE_URL}/h632/${object.profile_path}`
                            : no_profile_picture}
                        alt={object.name}>
                    </Image>
                    <Box>
                        <Title>{object.name}</Title>
                        <Box $info>
                            <InfoContainer>
                                <Info>
                                    {width < 640
                                        ? "Birth:"
                                        : "Date of birth:"
                                    }
                                </Info>
                                <InfoValue>{handleData(object.birthday)}</InfoValue>
                            </InfoContainer>
                            <InfoContainer>
                                <Info>Place of birth:</Info>
                                <InfoValue>{object.place_of_birth}</InfoValue>
                            </InfoContainer>
                        </Box>
                        {width > 1024
                            ? <Description>{object.biography}</Description>
                            : null
                        }
                    </Box>
                </Wrapper>
                {width <= 1024
                    ? <Description>{object.biography}</Description>
                    : null
                }
            </Wrapper >
        )
    } else if (nameObject === "movie") {
        return (
            <Wrapper $external>
                <Wrapper $internal>
                    <Image
                        $movie
                        src={object.poster_path
                            ? `${API_IMAGE_URL}/w342/${object.poster_path}`
                            : no_poster_picture}
                        alt={object.title}>
                    </Image>
                    <Box>
                        <Title>{object.title}</Title>
                        {object.release_date &&
                            <Year>{getYear(object.release_date)}</Year>
                        }
                        <Box $info>
                            <InfoContainer>
                                <Info $movie>Production:</Info>
                                <InfoValue>
                                    {object.production_countries.map(coutry => coutry.name).join(', ')}
                                </InfoValue>
                            </InfoContainer>
                            {object.release_date &&
                                <InfoContainer>
                                    <Info $movie>Release date:</Info>
                                    <InfoValue>{object.release_date}</InfoValue>
                                </InfoContainer>
                            }
                        </Box>
                        {object.genres &&
                            <Genres genres={object.genres} />
                        }
                        <Vote
                            vote_average={object.vote_average}
                            vote_count={object.vote_count}
                        />

                        {width > 1024
                            ? <Description>{object.overview}</Description>
                            : null
                        }
                    </Box>
                </Wrapper>
                {width <= 1024
                    ? <Description>{object.overview}</Description>
                    : null
                }
            </Wrapper >
        )
    }

};

export default TileDetails;