import React from 'react';
import PropTypes from 'prop-types';

import HeaderPost from './HeaderPost.js';

const Posts = props => (
  <div className="posts">
    <HeaderPost data={props.data} />
    <p>{props.data.body}</p>
  </div>
);

Posts.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
