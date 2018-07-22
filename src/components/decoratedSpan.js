import React from 'react';
import styled from 'styled-components';

export default styled.span`
  color: ${({ red }) => red ? '#b32d16' : 'black'};
`;
