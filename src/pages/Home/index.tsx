import { Card, Content, Grid, HomeContainer, SearchInput } from "./styles";

import CoverImg from "../../assets/cover.png";
import { Profile } from "./components/Profile";

export function Home() {
  return (
    <HomeContainer>
      <img src={CoverImg} alt="" />
      <Profile />
      <Content>
        <h1>Publicações</h1>
        <SearchInput type="text" placeholder="Buscar conteúdo" />
        <Grid>
          <Card>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </p>
          </Card>
          <Card>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </p>
          </Card>
        </Grid>
      </Content>
    </HomeContainer>
  );
}
