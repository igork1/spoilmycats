import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*, :after, :before {
  box-sizing: border-box;
}

  body {
    font-family: 'Quicksand', sans-serif;
    color: ${props => props.theme.dark};
    font-weight: 500;
    background: #f3f7f9;
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
    font-weight: 700;
    font-size: 1.125rem;

    &:hover {
      text-decoration: none;
      background: rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .btn-sm {
    font-size: 0.9375rem;
    padding: 0.25em 1.5em;
    font-weight: 500;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-primary {
    background-color: ${props => props.theme.primary};
    border-color: transparent;
    color: ${props => props.theme.dark};

    &:hover {
      background-color: ${props => props.theme.primaryDark};
    }
  }
  
  .btn-secondary {
    background-color: ${props => props.theme.secondary};
    border-color: transparent;
    color: ${props => props.theme.light};

    &:hover {
      background-color: ${props => props.theme.secondaryDark};
    }
  }

  .btn-plain {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 0.875rem;
    color: ${props => props.theme.lightDark};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
