interface UserProps {
  name: string;
  bio: string;
  login: string;
  location: string;
  url: string;
  avatar_url: string;
  followers: number;
}

const UserModel = (data?: UserProps) => {
  if (data) {
    return {
      login: data.login,
      name: data.name,
      bio: data.bio,
      url: data.url,
      avatar_url: data.avatar_url,
      followers: data.followers,
      location: data.location,
    } as UserProps;
  }

  return {} as UserProps;
};
export default UserModel;
