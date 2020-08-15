import styled from 'styled-components';

export const CatsListStyles = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-gap: 2rem;

  ${props => props.theme.media.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${props => props.theme.media.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  li.cat {
    position: relative;
    display: flex;
    flex-flow: column;
    background: ${props => props.theme.light};
    box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
      0 5px 15px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    max-width: 100%;
    border-top: 0.25rem solid transparent;

    ${props => props.theme.media.md} {
      min-height: 14rem;
    }

    .btn-wrap {
      margin: auto -2rem -1.5rem;
      padding: 1rem 2rem;
      background: rgb(239 246 249 / 50%);
      border-radius: 0 0 0.5rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    margin: 0 0 1em;
  }

  .cat-name {
    text-align: center;
    margin: 0;
  }

  .status {
    font-size: 0.875rem;
    border-radius: 2em;
    padding: 0.4em 1.6em;
    font-weight: 700;
    background: 1px solid transparent;

    &.happy {
      background-color: #d4edda;
      color: #155724;
      border-color: #c3e6cb;
    }

    &.hungry {
      background-color: #d1ecf1;
      color: #0c5460;
      border-color: #bee5eb;
    }

    &.very-hungry {
      background-color: #fff3cd;
      color: #856404;
      border-color: #ffeeba;
    }

    &.starving {
      background-color: #f8d7da;
      color: #721c24;
      border-color: #f5c6cb;
    }
  }

  .fed {
    text-align: center;
    margin: 1em 0 0.5em;

    p {
      margin: 0;
    }
  }
`;
