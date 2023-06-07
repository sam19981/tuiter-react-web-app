import React from 'react'
import {useSelector} from "react-redux";
import TuitItem from './TuitItem';

const TuitsList = () => {
    const { tuits } = useSelector(state => state.tuits)
    console.log("yo")
    console.log(tuits)
    return(
        <ul className="list-group">
          {
            tuits.map(tuit =>
              <TuitItem
                key={tuit._id}
                tuit={tuit}
              />
            )
          }
        </ul>
      );
     
}
export default TuitsList;