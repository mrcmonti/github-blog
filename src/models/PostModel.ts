interface PostProps {
  title: string;
  body: string;
  created_at: Date;
  comments: number;
  html_url: string;
}

const PostModel = (data?: PostProps) => {
  if (data)
    return {
      title: data.title,
      body: data.body,
      created_at: new Date(data.created_at),
      comments: data.comments,
      html_url: data.html_url,
    };
  else return {} as PostProps;
};

export default PostModel;
