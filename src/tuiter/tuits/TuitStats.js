
import React, { useState } from 'react';
import { FaComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const TuitStats = ({ replies, retuits, likes, isLiked }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <FaComment className="me-2" />
        {replies}
      </div>
      <div className="col">
        <FaRetweet className="me-2" />
        {retuits}
      </div>
      <div className="col">
        <FaHeart
          className="me-2"
          color={liked ? 'red' : 'inherit'}
          onClick={handleLike}
        />
        {likeCount}
      </div>
      <div className="col">
        <FiUpload className="me-2" />
      </div>
    </div>
  );
};

export default TuitStats;
