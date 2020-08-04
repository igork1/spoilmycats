import styled from 'styled-components';

export const AuthBoxStyles = styled.div`
  width: 24rem;
  max-width: 100%;
  padding: 2rem 2rem 1rem;
  margin: 1rem;
  border: 1px solid ${props => props.theme.dark};
  border-radius: 0.25rem;

  .title {
    text-align: center;
    margin: 0 0 1em;
  }

  .switch {
    text-align: center;
    margin: 1.5em 0 0;
  }
`;
