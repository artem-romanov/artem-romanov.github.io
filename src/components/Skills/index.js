import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SkillPart from './skillPart';
import skillData from './skillData';

const SkillsTitle = styled.h2`
  color: #177d3c;
  margin-bottom: 0;
  font-size: 1.5em;
`;

const SkillsContainer = styled.div`
`;


const SkillList = ({ skillData }) => (
  <div>
    <SkillsTitle>{skillData.title}</SkillsTitle>
    <SkillsContainer>
      {
        skillData.skills.map((skills) => {
          return (
            <SkillPart
              key={skills.title}
              skills={skills}
            />
          )
        })
      }
    </SkillsContainer>
  </div>
);

export default SkillList;
export { skillData };

SkillList.propTypes = {
  skillData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,
};
