import React from "react";
import './stylepopup.css'
const ContentContextMenu = (props ) => {

  return (
    props.data.visible && (
      <ul className="popup" style={{ left: `${props.data.x}px`, top: `${props.data.y}px` }} >
        {props.data.data.map((item, idx) => {
          return(
            <li>{item.name}</li>
          )
        })}
      </ul>
    )
  );
};

export default ContentContextMenu;
