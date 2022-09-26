import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const PostInfo = styled.div`
  max-width: 864px;
  width: 100%;
  height: 168px;
  margin: 0 auto;
  margin-top: -5.5rem;
  position: relative;

  padding: 2rem 2rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme["blue-dark-700"]};

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.875rem;
    }
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme["light-blue-100"]};
  }

  .info {
    margin-top: 0.5rem;
    display: flex;
    justify-items: center;
    gap: 2rem;
    color: ${(props) => props.theme["light-blue-400"]};

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  color: ${(props) => props.theme["light-blue-300"]};
`
