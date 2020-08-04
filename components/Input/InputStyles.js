import styled from 'styled-components';

export const InputStyles = styled.div`
  margin-bottom: 0.75rem;
  .field-control {
    width: 100%;
    font-size: 1rem;
    padding: 0.35em 0.5em;
    border: 1px solid ${props => props.theme.dark};
    border-radius: 0.25rem;
    height: 2.5rem;
    font-size: 1.125rem;
  }
`;
