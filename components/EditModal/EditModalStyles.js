import styled from 'styled-components';

export const EditModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: white;
    margin: 1rem;
    max-width: 100%;
    width: 35rem;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
      0 5px 15px rgba(0, 0, 0, 0.06);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .modal-title {
    margin: 0;
  }

  .close {
    border: none;
    background: transparent;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;

    svg {
      height: 1rem;
      width: 1rem;
      * {
        fill: ${props => props.theme.lightDark};
      }
    }
  }

  .modal-body {
    padding: 3rem 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .btn {
      display: block;
      width: 100%;

      + .btn {
        margin-top: 1rem;
      }

      ${props => props.theme.media.sm} {
        width: auto;

        + .btn {
          margin: 0 0 0 1rem;
        }
      }
    }
  }
`;
