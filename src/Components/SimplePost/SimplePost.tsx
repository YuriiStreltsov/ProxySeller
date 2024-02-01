import { Post } from "src/service/posts/PostsAPI";
import Comments from "../Comments";
import { useState } from "react";

type PostProps = {
  post: Post;
  username: string;
};

export default function SimplePost({ post, username }: PostProps) {
  const [showComments, setShowComments] = useState(false);

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
          <span
            aria-label="button"
            className="btn btn-outline-secondary float-end"
            onClick={setShowComments.bind(null, true)}
          >
            Show comments
          </span>
        </div>
      </div>
      {showComments && <Comments postId={post.id} />}
    </>
  );
}
