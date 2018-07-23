import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Paragraph from '../components/paragraph';
import StyledText from '../components/decoratedSpan';
import Header from '../components/header';

import media from '../utils/media-queries';

import photoImage from '../../assets/photo.jpg';

const Container = styled.section`
  display: flex;
  min-height: 100%;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`;

const About = styled.div`
display: flex;
min-height: 100%;
justify-content: flex-start;
align-items: center;

${media.phone`
  flex-direction: column;
`}
`;

const PhotoContainer = styled.div`
  margin-right: 30px;
  ${media.phone`
    margin-right: 0;
    margin-bottom: 30px;
    width: 250px;
    align-self: center;
  `}
`;

const Photo = styled.img`
  width: 100%;
  min-width: 200px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.2);
`;

const AboutText = styled.div`
  color: #000;
`;

const IndexPage = () => (
  <Container>
    <About>
      <PhotoContainer>
        <Photo
          src={photoImage}
        />
      </PhotoContainer>
      <AboutText>
        <Header>Hello, traveller 🎉</Header>
        <Paragraph>
          My name is <StyledText red>Romanov Artem</StyledText> and I am the fullstack Javascript developer.
        </Paragraph>
        <Paragraph>
          Currently I live in Russia, Taganrog. Here I create and maintain frontend and backend stuff.
        </Paragraph>
        <Paragraph>
          In my free time I love to watch movies, listen to music and collect things. And code too.
        </Paragraph>
        <Paragraph>
          <Link to="/skills/">Here</Link> you can check my skills and experience.
          And <Link to="/contact/">here</Link> my contact info.
        </Paragraph>
      </AboutText>
    </About>
  </Container>
);

export default IndexPage;
