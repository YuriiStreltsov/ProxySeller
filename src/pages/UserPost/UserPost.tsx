import {
  Params,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import SimplePost from "src/Components/SimplePost";
import PostsAPI, { type Post } from "src/service/posts/PostsAPI";
import { User } from "src/service/users/UsersAPI";

export async function postLoader({
  params,
}: {
  params: Params<"postId" | "userId">;
}) {
  if (params?.postId && params?.userId) {
    return await PostsAPI.getPostById<Post[]>(params.userId, params.postId);
  } else {
    return undefined;
  }
}
export default function UserPost() {
  const posts = useLoaderData() as Post[];
  const users = useRouteLoaderData("root") as User[];
  const { userId } = useParams<{ userId: string }>();

  const user = users.find((user) => user.id.toString() === userId);

  return (
    <div className="container">
      <SimplePost username={user ? user.username : "Noname"} post={posts[0]} />
    </div>
  );
}
