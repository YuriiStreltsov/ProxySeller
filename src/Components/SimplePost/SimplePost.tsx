import { Post } from "src/service/posts/PostsAPI";
import ErrorBoundary from "../ErrorBoundary";

type PostProps = {
  post: Post;
  username: string;
};

export default function SimplePost({ post, username }: PostProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          User <span className="fw-bold">{username}</span>/ Post{" "}
          <span className="fw-bold">#{post.id}</span>
        </div>
        <div className="card-body">
          <h6 className="card-title">{post.title}</h6>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </>
  );
}
