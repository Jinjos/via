import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.hoverContact = this.hoverContact.bind(this);
  }
  hoverContact() {
    this.setState(prevState => {
      return { isHovered: !prevState.isHovered };
    });
  }
  render() {
    const hovered = this.state.isHovered ? '' : 'hidden';

    // const Contact = ({ user }) => {
    //remove all const variables and include all the rest of the details in the list
    //will allow to dynamically add / remove data to display
    const additionalDetailsValidation = [
      'name',
      'driverType',
      'driverRank',
      'profile_image'
    ];
    const additionalDetails = Object.keys(this.props.user).map(key => {
      return additionalDetailsValidation.includes(key) ? (
        ''
      ) : (
        <p key={key}>
          {key}: {this.props.user[key]}
        </p>
      );
      // }
    });
    return (
      <div
        className="contact"
        onMouseEnter={this.hoverContact}
        onMouseLeave={this.hoverContact}
      >
        <img
          alt="user_image"
          src={
            this.props.user.profile_image
              ? this.props.user.profile_image
              : process.env.PUBLIC_URL + '/avatar.svg'
          }
        />
        <img
          alt="occupation"
          src={
            this.props.user.driverType.toLowerCase().replace(/\s/g, '') ===
            'citizen'
              ? process.env.PUBLIC_URL + '/citizen.svg'
              : process.env.PUBLIC_URL + '/professional.svg'
          }
        />
        <div>
          <h2>{this.props.user.name}</h2>
          <p>Rank: {this.props.user.driverRank}</p>
          <div className={hovered}>{additionalDetails}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
