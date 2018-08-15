/* eslint-disable no-underscore-dangle */
import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import Comment from 'components/Comment';

import './Comments.scss';

const Comments = ({ comments }) => (
  <div className="Comments">
    <h2>
      {comments.length}
      Comments
    </h2>
    <ol className="comments__list">
      {comments.map((comment) => (
        <li className="list__item" key={comment._key}>
          <Comment comment={comment} />
          {!isEmpty(comment.replies) && renderReplyComments(comment.replies)}
        </li>
      ))}
    </ol>
  </div>
);

function renderReplyComments(replies) {
  return (
    <ol className="replies__list">
      {replies.map((reply) => (
        <li className="list__item" key={reply._key}>
          <Comment comment={reply} />
          {!isEmpty(reply.replies) && renderReplyComments(reply.replies)}
        </li>
      ))}
    </ol>
  );
}

Comments.propTypes = {
  comments: array.isRequired
};

export default Comments;
