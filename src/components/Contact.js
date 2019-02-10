import React from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

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
    let driverType = this.props.user.driverType
      .toLowerCase()
      .replace(/\s/g, '');
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
        <Card.Text key={key}>
          {key}: {this.props.user[key]}
        </Card.Text>
      );
    });
    return (
      <Card
        bg="secondary"
        text="white"
        border="secondary"
        onMouseEnter={this.hoverContact}
        onMouseLeave={this.hoverContact}
        style={{ width: '20rem' }}
      >
        <Card.Img
          className="contact-image"
          variant="top"
          alt="user_image"
          style={{ height: '20rem' }}
          src={
            this.props.user.profile_image
              ? this.props.user.profile_image
              : process.env.PUBLIC_URL + '/avatar.svg'
          }
        />

        <Card.Body style={{ position: 'relative' }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/' + driverType + '.svg'}
            alt="contact"
            className="contact-type"
            title={driverType}
          />
          <Card.Title>{this.props.user.name}</Card.Title>
          <Card.Subtitle>Rank: {this.props.user.driverRank}</Card.Subtitle>
          <Collapse in={this.state.isHovered}>
            <div>{additionalDetails}</div>
          </Collapse>
        </Card.Body>
      </Card>
      // <Card onMouseEnter={this.hoverContact} onMouseLeave={this.hoverContact}>
      //   <CardActionArea>
      //     <div className="contact-image">
      //       <img
      //         src={
      //           this.props.user.profile_image
      //             ? this.props.user.profile_image
      //             : process.env.PUBLIC_URL + '/avatar.svg'
      //         }
      //         alt="contact"
      //         title={this.props.user.name}
      //       />
      //     </div>
      //     <CardContent>
      //       <div className="contact-data">
      //         <div className="contact-type">
      //           <img
      //             src={process.env.PUBLIC_URL + '/' + driverType + '.svg'}
      //             alt="contact"
      //             className="contact-type"
      //             title={driverType}
      //           />
      //         </div>
      //         <Typography gutterBottom variant="h5" component="h2">
      //           {this.props.user.name}
      //         </Typography>
      //         <Typography component="p">
      //           Rank: {this.props.user.driverRank}
      //         </Typography>
      //         <div>{additionalDetails}</div>
      //       </div>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>

      // <div
      //   className="contact"
      //   onMouseEnter={this.hoverContact}
      //   onMouseLeave={this.hoverContact}
      // >
      //   <img
      //     alt="user_image"
      //     src={
      //       this.props.user.profile_image
      //         ? this.props.user.profile_image
      //         : process.env.PUBLIC_URL + '/avatar.svg'
      //     }
      //   />
      //   <div>
      //     <img
      //       alt="occupation"
      //       title={driverType}
      //       src={
      //         driverType === 'citizen'
      //           ? process.env.PUBLIC_URL + '/citizen.svg'
      //           : process.env.PUBLIC_URL + '/professional.svg'
      //       }
      //     />
      //     <h2>{this.props.user.name}</h2>
      //     <p>Rank: {this.props.user.driverRank}</p>
      //     <div className={hovered}>{additionalDetails}</div>
      //   </div>
      // </div>
    );
  }
}

export default Contact;
