
import React, { useState } from 'react';
import { FaComment, FaRetweet, FaHeart, FaShare, FaThumbsDown } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ( {tuit} ) => {


  const dispatch = useDispatch();

  

  return (
    <div className="row">
      <div className="col">
        <FaComment className="me-2" />
        {tuit.comments}
      </div>
      <div className="col">
        <FaRetweet className="me-2" />
        {tuit.retweets}
      </div>
      <div className="col">
        <FaHeart
          className="me-2"
          color= 'red'
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
        }
        />


        {tuit.likes}
      </div>
      <div className="col">
      <FaThumbsDown
  className="me-2"
  color="blue"
  onClick={() =>
    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
  }
/>

{tuit.dislikes}

      </div>

      



      <div className="col">
        <FiUpload className="me-2" />
      </div>
    </div>
  );
};

export default TuitStats;