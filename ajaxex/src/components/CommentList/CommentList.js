import React, {Component} from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = ({comments}) => {
  const CommentList = comments.map(
    (comment, index) => (
      <Comment
        name = {comment.name}
        body = {comment.body}
        key = {index}
        />
    )
  );

  return (
    <u1 className="CommentList">
      {CommentList}
    </u1>
  );
};

export default CommentList;
