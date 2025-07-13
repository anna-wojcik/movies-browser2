import { List, Item, Name, Image } from "./styled";
import { useSelector } from "react-redux";
import { selectPeople } from "../../features/people/peopleSlice";
import { API_IMAGE_URL } from "../apiData/apiData";
import no_profile_picture from "./no_profile.svg";

export const PeopleList = () => {
    const people = useSelector(selectPeople);

    return (
        <List>
            {people.map((person) => (
                <Item key={person.id}>
                    <Image
                        src={person.profile_path
                            ? `${API_IMAGE_URL}/w185${person.profile_path}`
                            : no_profile_picture
                        }
                        alt={people.name}
                    >
                    </Image>
                    <Name>{person.name}</Name>
                </Item>
            ))}
        </List>
    );
};

export default PeopleList;