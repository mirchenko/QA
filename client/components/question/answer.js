import React from 'react';

export default({ author, title, text }) => {
  return(
    <div className="answer">
      <h4>{title}</h4>
      <h5>{author}</h5>
      <p>{text}</p>
    </div>
  );
};
