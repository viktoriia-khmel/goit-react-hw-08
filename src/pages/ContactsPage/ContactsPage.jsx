
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsError, selectIsLoading } from '../../redux/contactsSlice';

const ContactsPage = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div>
      <h1>Phonebook</h1>
      
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}

      <ContactList />
    </div>
  );

}

export default ContactsPage
