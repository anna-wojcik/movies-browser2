import Search from "./Search";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Wrapper, HeaderStyled } from "./styled";

export const Header = () => {
    return (
        <HeaderStyled>
            <Wrapper>
                <Logo />
                <Navigation />
            </Wrapper>
            <Search />
        </HeaderStyled>
    )
};

export default Header;