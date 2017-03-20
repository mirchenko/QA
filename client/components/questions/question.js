import React from 'react';
import { Link } from 'react-router';

export default({ id, title, author, text}) => {
  return (
    <Link to={`/question/${id}`}>
      <div className="question">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
};
