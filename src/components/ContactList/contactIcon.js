import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import styled from 'styled-components';

const iconSize = '30px';

const Container = styled.div`
  border-radius: 100px;
  padding: 20px;
  background-color: lightgray;
  transition: 0.2s ease-in;
  margin-right: 10px;
  height: ${iconSize};
  width: ${iconSize};
  
  &:hover {
    background-color: #A3D5D7;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.img`
  width: ${iconSize};
  height: ${iconSize};
`;

const ContactInfo = ({
  link,
  iconName
}) => {
  const imgSource = withPrefix(`/icons/${iconName}.svg`);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Container>
        <Icon
          src={imgSource}
        />
      </Container>
    </a>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  link: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

ContactInfo.defaultProps = {
  iconName: 'fallback',
};