import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin: 4.5rem;

  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["light-blue-200"]};
  }
`;

export const SearchInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme["blue-dark-900"]};

  &::placeholder {
    color: ${(props) => props.theme["blue-dark-400"]};
  }

  &:focus {
    transition: 0.1s;
    outline: 1px solid ${(props) => props.theme.blue};
  }

  border: 1px solid ${(props) => props.theme["blue-dark-400"]};
  border-radius: 6px;
`;

export const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const Card = styled.div`
  padding: 2rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["blue-dark-700"]};

  header {
    display: flex;
    strong {
      flex: 1;
      color: ${(props) => props.theme["light-blue-100"]};
    }
    span {
      color: ${(props) => props.theme["light-blue-300"]};
    }
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme["light-blue-300"]};
  }
`;
