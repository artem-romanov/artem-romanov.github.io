import React from 'react';
import styled from 'styled-components';

import ContactIcon from './contactIcon';
import data from './contactData';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default () => (
  <Container>
    {data.map((link) => (
      <ContactIcon
        key={link.title}
        iconName={link.icon}
        link={link.link}
      />
      ))
    }
  </Container>
);
