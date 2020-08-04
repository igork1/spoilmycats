import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*, :after, :before {
  box-sizing: border-box;
}

  body {
    font-family: 'Quicksand', sans-serif;
    color: ${props => props.theme.dark};
  }

  .container {
    width: 100%;
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .btn {
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    background: transparent;
    border: 1px solid ${props => props.theme.dark};
    color: ${props => props.theme.dark};
    padding: 0.35em 2em;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: all ease-in-out 0.15s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      background: rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .btn-block {
    display: block;
    width: 100%;
  }
`;
