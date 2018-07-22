import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import media from '../../utils/media-queries';

const StyledLink = styled(Link)`
  color: #002E43;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  min-height: 60px;
  width: 60px;
  transition: 0.1s;

  &:hover {
    color: #007EA7;
  }

  &:active {
    transform: scale(1.1);
    color: #007EA7;
  }
  
  /*
    TODO: Add transform for emoji only by hover
  */
  &:hover ${Emoji} {
    /* background-color: red; */
    /* transform: rotate(5deg); */
  }

  ${media.phone`
    min-height: 25px;
    font-size: 15px;
  `}

`;

const Emoji = styled.div`
  font-size: 30px;

  ${media.phone`
    font-size: 20px;
  `}
`;

const Title = styled.div`
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
