import React from 'react';
import styled from 'styled-components';

import LinkItem from './item';
import siteMap from './sitemap';

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #A3D5D7;
  padding: 5px 0;
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