import React from 'react';
import CreatePost from './createPost';
import FeedStream from './feedStream';
import News from './news';

import './feed.sass';

const Feed = () => (
  <div className="feed">
    <div className="user__posts">
      <CreatePost />
      <FeedStream />
    </div>
    <div className="suggestions">
      <div>
        <News />
        <h5>People You May Know: 0</h5>
      </div>
    </div>
  </div>
);

export default Feed;