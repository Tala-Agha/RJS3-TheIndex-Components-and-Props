import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authors = props.authors;
  const authorList = authors.map(author => (
    <AuthorCard
      author={author}
      key={`${author.first_name} ${author.last_name}`}
    />
  ));
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
}

export default AuthorList;
