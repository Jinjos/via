import React from 'react';

const Contact = ({ user }) => {
  return (
    <div className="contact">
      <img
        alt="user_image"
        src={
          user.profile_image
            ? user.profile_image
            : process.env.PUBLIC_URL + '/avatar.svg'
        }
      />
      <img
        alt="occupation"
        src={
          user.driverType.toLowerCase().replace(/\s/g, '') === 'citizen'
            ? process.env.PUBLIC_URL + '/citizen.svg'
            : process.env.PUBLIC_URL + '/professional.svg'
        }
      />
      <div>
        <h2>{user.name}</h2>
        <p>Rank: {user.driverRank}</p>
      </div>
    </div>
  );
};

export default Contact;
