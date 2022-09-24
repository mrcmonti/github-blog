import styled, { ThemeConsumer } from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  margin: 0 auto;
  margin-top: -5.5rem;
  position: relative;

  display: flex;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme["blue-dark-700"]};
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-top: 0.5rem;

  header {
    display: flex;
    strong {
      flex: 1;
      color: ${(props) => props.theme["light-blue-100"]};
      font-size: 1.5rem;
    }

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-size: 0.875rem;
    }
  }

  .description {
    margin-top: 0.5rem;

    p {
      color: ${(props) => props.theme["light-blue-300"]};
    }
  }

  .info {
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme["light-blue-300"]};
    }
  }
`;
