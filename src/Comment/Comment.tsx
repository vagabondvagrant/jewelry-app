import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CommentData = {
  name: string;
  comment: string;
  timestamp: string;
};

type CommentFormProps = {
  onCommentSubmit: (newComment: CommentData) => void;
};

const CommentForm: React.FC<CommentFormProps> = ({ onCommentSubmit }) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === '' || comment.trim() === '') {
      toast.error('Please enter both name and comment.');
      return;
    }

    const newComment: CommentData = {
      name,
      comment,
      timestamp: new Date().toLocaleString(),
    };

    onCommentSubmit(newComment);

    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4 mt-4">
      <div className="mb-2">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="mb-2">
        <label htmlFor="comment mt-4">Comment:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

type CommentListProps = {
  comments: CommentData[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul>
    {comments.map((comment, index) => (
      <li key={index}>
        <strong>{comment.name}</strong> ({comment.timestamp}): {comment.comment}
      </li>
    ))}
  </ul>
);

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  const handleCommentSubmit = (newComment: CommentData) => {
    setComments((prevComments) => [...prevComments, newComment]);
    toast.success('Comment submitted successfully!');
  };

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="flex flex-col items-center bg-gray-500">
      <h2>Comments</h2>
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
      <ToastContainer />
    </div>
  );
};

export default CommentSection;
