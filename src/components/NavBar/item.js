import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  color: #002E43;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  min-height: 60px;
  width: 60px;

  &:active {
    color: #007EA7;
  }
`;

const Emoji = styled.div`
  font-size: 30px;
`;

const Title = styled.div`
  font-size: 15px;
  padding: 5px 0;
`;

const LinkItem = ({
  link,
  title,
  emoji,
}) => (
  <StyledLink
    activeStyle={{ color: 'red' }}
    to={link}
  >
    <Emoji>{emoji}</Emoji>
    <Title>{title}</Title>
  </StyledLink>
);

export default LinkItem;

LinkItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};
