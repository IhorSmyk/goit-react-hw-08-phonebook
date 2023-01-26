import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTable } from 'components/ContactTable/ContactTable';
import { Filter } from 'components/Filter/Filter';
import s from './Contacts.module.css';

export const Contacts = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (isAuth) {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactTable />
      </>
    );
  } else {
    return <p className={s.message}>authorization is required!</p>;
  }
};
