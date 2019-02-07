import React from 'react';
import Card from './Contact';

const ContactList = ({ users }) => {
  return (
    <div className="contact-list">
      {users.map((user, i) => {
        return <Card key={i} user={user} />;
      })}
    </div>
  );
};

export default ContactList;
