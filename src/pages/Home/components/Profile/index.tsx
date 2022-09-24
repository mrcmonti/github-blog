import { Content, ProfileContainer } from "./styles";
import api from "../../../../lib/api";

import { useEffect, useState } from "react";
import _ from "lodash";

import UserModel from "../../../../models/UserModel";
import Loading from "../../../../components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  const [user, SetUser] = useState({} as typeof UserModel);

  async function getUser() {
    const response = await api.get("users/mrcmonti");

    if (response.status === 200) {
      const { data } = response;
      SetUser(UserModel(data));
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (_.isEmpty(user)) {
    return (
      <ProfileContainer>
        <Loading />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <img src={user.avatar_url} />
      <Content>
        <header>
          <strong>{user.name}</strong>
          <a href="">GITHUB</a>
        </header>
        <div className="description">
          <p>
            {user.bio
              ? user.bio
              : "Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass."}
          </p>
        </div>
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faAddressCard} />
            {user.location}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} {user.followers > 1 ? "seguidores" : "seguidor"}
          </span>
        </div>
      </Content>
    </ProfileContainer>
  );
}
