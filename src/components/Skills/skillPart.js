import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkillTitle = styled.h3`
  color: #5276cc;
`;

const List = styled.ul`

`;

const ListItem = styled.li`
  font-size: 20px;
`;

const SkillPart = ({ skills }) => (
  <div>
    <SkillTitle>
      {skills.title}
    </SkillTitle>
    <List>
      {
        skills.items.map((skill) => (
          <ListItem
            key={skill}
          >
            {skill}
          </ListItem>
        ))
      }
    </List>
  </div>
);

export default SkillPart;

SkillPart.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
