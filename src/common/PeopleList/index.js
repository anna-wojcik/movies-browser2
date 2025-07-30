import { List, Item, Name, Image, StyledLink, Role } from "./styled";
import { API_IMAGE_URL } from "../apiData/apiData";
import no_profile_picture from "./no_profile.svg";
import { toPerson } from "../../routes";

export const PeopleList = ({ peopleProps, showRole, roleKey }) => (
    <List>
        {peopleProps.map((person) => (
            <StyledLink
                to={toPerson({ id: person.id })}
                key={person.id}
            >
                <Item>
                    <Image
                        src={person.profile_path
                            ? `${API_IMAGE_URL}/w185${person.profile_path}`
                            : no_profile_picture
                        }
                        alt={person.name}
                    >
                    </Image>
                    <Name>{person.name}</Name>
                    {showRole && <Role>{person[roleKey]}</Role>}
                </Item>
            </StyledLink>
        ))}
    </List>
);

export default PeopleList;