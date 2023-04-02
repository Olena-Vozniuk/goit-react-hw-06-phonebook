import { useSelector } from "react-redux";
import { getContacts, getFilterValue } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem";
import { List, ListItem } from "./ContactList.styled";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);
    
    const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  
    return (
        <List>
            {visibleContacts.map( contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact} />
                </ListItem>
            ))}
        </List>
    );
};