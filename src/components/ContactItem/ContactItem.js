import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { Button, ContactWrapper } from "./ContactItem.styled";


export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id))
    
    return (
        <ContactWrapper>
            <p>{contact.name}: {contact.number}</p>
            <Button onClick={handleDelete}>Delete</Button>
        </ContactWrapper>
    )
    
}