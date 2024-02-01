import { Params, useLoaderData } from "react-router-dom";
import PostsAPI, { Post } from "src/service/posts/PostsAPI";

export async function postLoader({ params }: { params: Params<"postId"> }) {
  if (params?.postId) {
    return await PostsAPI.getPostById<Post>(params?.postId);
  } else {
    return {};
  }
}
export default function UserPost() {
  const post = useLoaderData() as Post;
  console.log(post);

  return <div>User post</div>;
}
