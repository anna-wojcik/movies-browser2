import { List, StyledNavLink } from "./styled";

export const Navigation = () => {
    return (
        <nav>
            <List>
                <li>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/people">
                        PEOPLE
                    </StyledNavLink>
                </li>
            </List>
        </nav>
    );
};

export default Navigation;