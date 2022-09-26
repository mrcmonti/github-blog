import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content, PostContainer, PostInfo } from "./styles";
import CoverImg from "../../assets/cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCalendar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import api from "../../lib/api";

import ReactMarkdown from "react-markdown";

import PostModel from "../../models/PostModel";
import UserModel from "../../models/UserModel";

import _ from "lodash";

export function Post() {
  const [post, setPost] = useState({} as typeof PostModel);
  const [user, setuser] = useState({} as typeof UserModel);

  const routeParams = useParams();

  async function getPost(id: string) {
    const response = await api.get(`/repos/mrcmonti/github-blog/issues/${id}`);
    if (response.status === 200) {
      const { data } = response;
      setPost({
        title: data.title,
        body: data.body,
        created_at: new Date(data.created_at),
        comments: data.comments,
        html_url: data.html_url,
      });
      setuser(UserModel(data.user));
    }
  }

  useEffect(() => {
    const { id } = routeParams;
    if (id) getPost(id);
  }, [routeParams]);

  if (_.isEmpty(post)) return <></>;

  return (
    <PostContainer>
      <img src={CoverImg} alt="" />
      <PostInfo>
        <header>
          <a href="/">
            <FontAwesomeIcon icon={faArrowLeft} /> VOLTAR
          </a>
          <a href={`${post.html_url}`}>VER NO GITHUB</a>
        </header>
        <h1>{post.title}</h1>
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            {formatDistanceToNow(post.created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} Comentários
          </span>
        </div>
      </PostInfo>
      <Content>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </Content>
    </PostContainer>
  );
}
