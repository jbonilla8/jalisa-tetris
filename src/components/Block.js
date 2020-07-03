import React from 'react';
import styled from 'styled-components';

const Block = (props) => (
    <StyledBlock blockColor={props.blockColor} />
);

export default Block;

export const StyledBlock = styled.div`
  background-color: ${props => props.blockColor || "#272838"};
  border: 1px solid rgba(59, 60, 84, 0.8);
  text-align: center;
  justify-content: center;
  align-items: center;
  outline: 0;
`;
