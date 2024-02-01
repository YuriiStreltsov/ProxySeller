import {
  Params,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import ErrorBoundary from "src/Components/ErrorBoundary";
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

  if (!user) {
    return (
      <div className="container">
        <ErrorBoundary message="User not found " />
      </div>
    );
  }

  return (
    <div className="container">
      {posts.length > 0 ? (
        <SimplePost username={user.username} post={posts[0]} />
      ) : (
        <ErrorBoundary message="Post not found" />
      )}
    </div>
  );
}
