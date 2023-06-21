import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";

import {
    FaCheckCircle,
    FaFileExport,
    FaGratipay,
    FaRegComment,
    FaRetweet,
    FaSync
} from "react-icons/fa";

import {FiHeart, FiUpload} from "react-icons/fi";

import { RiTimeLine } from 'react-icons/ri';
import { BsPersonFill, BsFillCheckCircleFill } from 'react-icons/bs';



const TuitItem = ({tuit}
) => {
  console.log(tuit)

  const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));

}

    
 return(
  <li className="list-group-item">


   <div className="row">
   <div className="col-2">
       <img width={50} className=" rounded-5" src= {`${process.env.PUBLIC_URL}/images/${tuit.image}`}/>
     </div>
     
     <div className="col-10">
     <button className=" btn btn-close float-end "
            onClick={() => deleteTuitHandler(tuit._id)}></button>

        <div className="row g-1">
        <div className="col-auto fw-bolder">{tuit.username}</div>
        <div className="col-auto"><FaCheckCircle color="#1DA1F2"/></div>
        <div className="col-auto">{tuit.handle} </div>
        <div className="col-auto">·</div>
        <div className="col-auto"> {tuit.time}</div>
        </div>
        <div>{tuit.tuit}</div>
        <TuitStats tuit = {tuit} />
       
     </div>
     
   </div>
  </li>
 );
};
export default TuitItem;