import { Image, StyledLink } from "./styled";
import videoIcon from "../../images/video.svg";

export const Logo = () => {
    return (
        <StyledLink to="/movies">
            <Image src={videoIcon} alt="Video Icon"/>
            Movies Browser
        </StyledLink>
    );
};

export default Logo;