import React from 'react';
import styled from 'styled-components';

import LinkItem from './item';
import siteMap from './sitemap';

import media from '../../utils/media-queries';

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: #A3D5D7;
  padding: 5px 50px;
  padding-top: 10px;
  box-shadow: 0px 8px 7px 9px rgba(0, 0, 0, 0.2);

  ${media.phone`
    padding-right: 0;
    padding-left: 0;
    justify-content: space-around;
  `}

`;

export default () => (
  <Navigation>
    {siteMap.map((link) => (
      <LinkItem
        key={link.id}
        emoji={link.emoji}
        link={link.link}
        title={link.title}
      />
    )) }
  </Navigation>

);