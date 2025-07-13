import Search from "./Search";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Wrapper, HeaderStyled, Container } from "./styled";

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Logo />
                    <Navigation />
                </Wrapper>
                <Search />
            </Container>
        </HeaderStyled>
    )
};

export default Header;