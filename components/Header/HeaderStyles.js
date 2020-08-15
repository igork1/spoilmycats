import styled from 'styled-components';

export const HeaderStyles = styled.header`
  padding: 0.5rem 0;
  border-bottom: 0.25rem solid rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.dark};
    text-decoration: none;
  }
`;
