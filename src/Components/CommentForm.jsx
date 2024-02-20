import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentForm = () => {
  // State variables to hold the comment text and author
  const [commentText, setCommentText] = useState('');
  const [author, setAuthor] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action like sending the comment to a server, etc.
    console.log("Comment submitted:", { text: commentText, author: author });
    // Reset form fields after submission
    setCommentText('');
    setAuthor('');
  };

  return (
    <>
      <div></div>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentText">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit" className='my-4'>
        Submit
      </Button>
      </Form>
      
    </>
  );
};

export default CommentForm;
