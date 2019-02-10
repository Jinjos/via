import React from 'react';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactList = ({ users }) => {
  return !users.length ? (
    <div className="loading-page flex-center">
      <h1>No Results</h1>
    </div>
  ) : (
    // <div className="contact-list">
    <Container fluid>
      <Row>
        {users.map((user, i) => {
          return (
            <Col xs="12" sm="6" md="3" key={i} style={{ marginBottom: '2vh' }}>
              <Contact user={user} />
            </Col>
          );
        })}
      </Row>
    </Container>

    // </div>
  );
};

export default ContactList;
