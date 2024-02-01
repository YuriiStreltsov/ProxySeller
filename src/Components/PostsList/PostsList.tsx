import { Link } from "react-router-dom";
import { Post } from "src/service/users/PostsAPI";

type PostsListType = {
  posts: Post[];
};

export default function PostsList({ posts }: PostsListType) {
  return (
    <>
      {posts.length > 0 && (
        <ul className="list-group list-group-flush list-unstyled">
          {posts.map((post) => (
            <li
              key={post.id}
              className="list-group-item list-group-item-action"
            >
              <Link
                to={`${post.id}`}
                className="text-decoration-none d-block w-100"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
