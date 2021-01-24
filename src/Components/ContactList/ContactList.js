import propTypes from 'prop-types';

import ContactListItem from './ContactListItem/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactListItem
            contact={name}
            number={number}
            key={id}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default ContactList;
