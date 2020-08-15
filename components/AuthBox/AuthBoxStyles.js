import styled from 'styled-components';

export const AuthBoxStyles = styled.div`
  position: relative;
  width: 24rem;
  max-width: 100%;
  padding: 2rem 2rem 1rem;
  margin: -3rem 1rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);

  a {
    color: ${props => props.theme.dark};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .title {
    text-align: center;
    margin: 0 0 1em;
  }

  .switch {
    text-align: center;
    margin: 1em -2rem -1rem;
    padding: 1.5rem 2rem;
    color: ${props => props.theme.lightDark};
    background: #ebf1f3;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .playful-cat {
    position: absolute;
    width: 18rem;
    z-index: -1;
    top: -5rem;
    opacity: 0.5;

    ${props => props.theme.media.sm} {
      opacity: 1;
      top: 2rem;
      right: -8rem;
    }
  }

  .forgot-password {
    text-align: right;
    margin: -0.5em 0 1em;
    font-size: 0.875rem;
  }
`;
