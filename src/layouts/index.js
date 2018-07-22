import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Navbar from '../components/NavBar';

import media from '../utils/media-queries';

import 'normalize.css';
import './index.css';

const Container = styled.section`
  max-width: 925px;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 70px;
  min-height: 100%;
  overflow: auto;
  box-sizing: border-box;
  height: 1px;
  ${media.phone`
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

const Layout = ({ children, data }) => (
  <div>
    <Container>
      {children()}
    </Container>
    <Navbar />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
