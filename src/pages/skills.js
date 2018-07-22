import React from 'react';
import styled from 'styled-components'

import Header from '../components/header';
import Paragraph from '../components/paragraph';
import DecorateText from '../components/decoratedSpan';
import SkillList, { skillData } from '../components/Skills';

import { getExperienceTime } from '../utils/strings';

const Container = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillsPage = () => (
  <Container>
    <Header>My experience 👨‍💻</Header>
    <Paragraph>
      I&apos;ve started developing applications for buisness at the beginning of <DecorateText red>2017</DecorateText>,
      so my experience is about <DecorateText red>{getExperienceTime()}</DecorateText>.
    </Paragraph>
    <Paragraph>
      I prefer to work with frontend, but backend never was a problem.
    </Paragraph>
    <SkillList
      skillData={skillData}
    />
    <Paragraph>
      By the way, this site is upon <DecorateText red>MIT license</DecorateText> and open for everyone, you can check source in my Github repo 🕺.
    </Paragraph>
  </Container>
);

export default SkillsPage;
