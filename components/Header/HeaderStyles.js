import styled from 'styled-components';

export const HeaderStyles = styled.header`
  border-bottom: 1px solid ${props => props.theme.dark};
  padding: 0.5rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
