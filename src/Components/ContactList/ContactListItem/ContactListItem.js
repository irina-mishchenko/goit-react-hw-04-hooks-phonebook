import propTypes from 'prop-types';

import s from './ContactListItem.module.css';

const ContactListItem = ({ contact, number, onDeleteContact, id }) => {
  return (
    <li className={s.contactListItem}>
      <p className={s.contact}>
        {contact}: {number}
      </p>
      <button
        onClick={() => onDeleteContact(id)}
        className={s.contactListButton}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};

export default ContactListItem;
