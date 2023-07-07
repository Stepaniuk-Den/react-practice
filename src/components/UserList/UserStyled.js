import styled from 'styled-components';

export const Title = styled.h2`
  color: red;
  text-decoration: underline;
  & :hover {
    color: blue;
  }
`;

export const Text = styled.p`
  color: ${({ hasJob }) => {
    return hasJob ? 'green' : 'black';
  }};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
  }
  p {
  }
`;

export const StyledBtn = styled.button`
  background-color: green;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
`;
