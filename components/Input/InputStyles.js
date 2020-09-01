import styled from 'styled-components';

export const InputStyles = styled.div`
  margin-bottom: 0.75rem;

  .field-control {
    width: 100%;
    font-size: 1rem;
    padding: 0.35em 0.5em;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 0.25rem;
    height: 2.5rem;
    font-size: 1.125rem;

    &.has-error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
      &::placeholder {
        color: #721c24;
      }
    }
  }

  .sr-only {
    display: none;
  }

  .error {
    font-size: 0.875rem;
    color: #f55f44;
    text-align: right;
  }
`;
