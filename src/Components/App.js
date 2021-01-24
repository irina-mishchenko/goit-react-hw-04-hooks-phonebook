import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const identicalName = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (identicalName) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <ContactForm onAddContact={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
