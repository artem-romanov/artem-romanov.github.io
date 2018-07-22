import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import ContactList from '../components/ContactList';
import Paragraph from '../components/paragraph';

import EmailInfo from '../components/emailInfo';

const Container = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoContainer = styled.div`
  margin-top: 20px;
`;

const ContactPage = () => (
  <Container>
    <ContactInfo>
      <Header>My contacts 🖊️</Header>
      <Paragraph>
        I always glad to meet new people.
      </Paragraph>
      <EmailInfo />
      <ContactInfoContainer>
        <ContactList />
      </ContactInfoContainer>
    </ContactInfo>
  </Container>
);

export default ContactPage;
