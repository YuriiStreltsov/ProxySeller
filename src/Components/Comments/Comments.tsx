import { useEffect, useState } from "react";
import PostsAPI, { Comment } from "src/service/posts/PostsAPI";

type CommentsProps = {
  postId: string;
};

export default function Comments({ postId }: CommentsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetchComments() {
      setIsLoading(true);
      const comments = await PostsAPI.getUserComments<Comment[]>(postId);
      setComments(comments);
      setIsLoading(false);
    }
    fetchComments();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card mt-3">
      <h6 className="card-header">Comments</h6>
      <div className="card-body">
        <ul className="list-unstyled list-group list-group-flush">
          {comments.length > 0
            ? comments.map((comment) => (
                <li key={comment.id} className="list-group-item">
                  <div className="card mb-2">
                    <div className="card-body">
                      <p className="card-title fs-6">{comment.name}</p>
                      <p className="card-subtitle mb-2 text-muted">
                        {comment.email}
                      </p>
                      <p className="card-text">{comment.body}</p>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
