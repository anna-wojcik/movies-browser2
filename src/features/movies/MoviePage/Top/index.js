import { Wrapper, Backdrop, Title, Box } from "./styled";
import { API_IMAGE_URL } from "../../../../common/apiData/apiData";
import Vote from "../../../../common/Vote";
import no_poster_picture from "./no_poster.svg";

export const Top = ({ title, backdrop_path, vote_average, vote_count }) => {
    const backdrop_url = backdrop_path ? `${API_IMAGE_URL}/w1280/${backdrop_path}` : no_poster_picture;

    return (
        <Wrapper>
            <Backdrop backdrop_url={backdrop_url}>
                <Box>
                    <Title>{title}</Title>
                    <Vote
                        vote_average={vote_average}
                        vote_count={vote_count}
                        inBackdrop={true}
                    />
                </Box>
            </Backdrop>
        </Wrapper>
    );
};

export default Top;