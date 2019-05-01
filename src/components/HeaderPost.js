import React from 'react';

const HeaderPost = porps => (
  <div className="postHeader">
    <img src={porps.data.avatar} alt="" />
    <div>
      <h2>{porps.data.name}</h2>
      <span>{porps.data.time}</span>
    </div>
  </div>
);

export default HeaderPost;
