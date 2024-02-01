import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { Params } from "react-router-dom";
import PostsList from "src/Components/PostsList/PostsList";
import PostsAPI, { Post } from "src/service/posts/PostsAPI";
import { User } from "src/service/users/UsersAPI";

export async function postsLoader({ params }: { params: Params<"userId"> }) {
  if (params?.userId) {
    return await PostsAPI.getPostsByUserId<Post[]>(params?.userId);
  } else {
    return [];
  }
}

export default function Posts() {
  const posts = useLoaderData() as Post[];
  const users = useRouteLoaderData("root") as User[];

  const { userId } = useParams<"userId">();

  const user = users.find((user) => user.id.toString() === userId);

  return (
    <>
      <div className="container">
        <div className="card bg-white">
          <div className="card-body">
            <h4 className="card-title">{`Posts of user ${user?.username}`}</h4>
            <PostsList posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
