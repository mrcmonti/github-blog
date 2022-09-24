import styled from "styled-components";

export const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoadingSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: ${(props) => props.theme.blue} transparent
    ${(props) => props.theme.blue} transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
