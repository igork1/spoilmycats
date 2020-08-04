import styled from 'styled-components';

export const CatsListStyles = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    border: 1px solid ${props => props.theme.dark};
    border-radius: 0.25rem;
    padding: 1rem;
    max-width: 100%;
    margin: 0 0 1rem;
  }

  .cat-name {
    text-align: center;
    margin: 0 0 1em;
  }

  .fed {
    text-align: center;
    margin: 1em 0 1.5em;
  }
`;
