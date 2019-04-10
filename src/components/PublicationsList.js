import React from "react";

const PublicationsList = ({ data }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {data.map((post, index) => (
        <li key={index}>
          <h2>{post.username}</h2>
          <a href={post.url}>Link</a>
        </li>
      ))}
    </ul>
  );
};

export default PublicationsList;
