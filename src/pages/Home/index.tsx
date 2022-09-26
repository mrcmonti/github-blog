import { useEffect, useRef, useState } from "react";
import { Profile } from "./components/Profile";
import { Card, Content, Grid, HomeContainer, SearchInput } from "./styles";
import CoverImg from "../../assets/cover.png";
import { debounce } from "lodash";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import api from "../../lib/api";
import ReactMarkdown from "react-markdown";

export function Home() {
  const [posts, setPosts] = useState([] as any);

  async function getPosts() {
    const response = await api.get(
      `https://api.github.com/search/issues?q=repo:mrcmonti/github-blog`
    );
    if (response.status === 200) {
      const { data } = response;
      setPosts([...data.items]);
    }
  }

  const debouncedFilter = useRef(
    debounce((filter) => getFilteredPosts(filter), 1000)
  ).current;

  function handleFilterPosts(filter: string) {
    debouncedFilter(filter);
  }

  async function getFilteredPosts(filter: string) {
    const response = await api.get(
      `search/issues?q=${filter}repo:mrcmonti/github-blog`
    );
    if (response.status === 200) {
      const { data } = response;
      setPosts([...data.items]);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer>
      <img src={CoverImg} alt="" />
      <Profile />
      <Content>
        <h1>Publicações</h1>
        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => handleFilterPosts(e.target.value)}
        />

        <Grid>
          {posts.map((post: any) => {
            return (
              <Card key={post.id}>
                <header>
                  <a href={`/post/${post.number}`}>{post.title}</a>
                  <span>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </header>
                <p>
                  
                  {post.body?.length > 100 ? (
                    <ReactMarkdown>{`${post.body.substring(
                      0,
                      300
                    )}...`}</ReactMarkdown>
                  ) : (
                    <ReactMarkdown>{`${post.body ?? ''}`}</ReactMarkdown>
                  )}
                </p>
              </Card>
            );
          })}
        </Grid>
      </Content>
    </HomeContainer>
  );
}
