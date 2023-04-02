import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { Input, Form, Button } from "./ContactForm.styled";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const newName = form.elements.name.value;
        const phone = form.elements.number.value;
        
        if (contacts.find(({ name }) => name === newName)) {
            alert(`${newName} is already in contacts.`);
            form.reset();
            return
        }
        dispatch(addContact(newName, phone));
        
        form.reset();
    }

    return (
         <Form  onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
           
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            <br/>
      <Button type="submit">Add contact</Button>
    </Form>
    )
}