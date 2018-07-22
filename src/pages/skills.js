import React from 'react';

import Header from '../components/header';
import Paragraph from '../components/paragraph';
import DecorateText from '../components/decoratedSpan';
import SkillList, { skillData } from '../components/Skills';

import { getExperienceTime } from '../utils/strings';

const SkillsPage = () => (
  <div>
    <Header>My experience 🧠</Header>
    <Paragraph>
      I&apos;ve started developing applications for buisness at the beginning of 2017, so my experience is about {getExperienceTime()}.
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
  </div>
);

export default SkillsPage;
