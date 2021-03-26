import React, { useState } from "react";
import "./index.scss";

const ModalExample = (props) => {
   
 
  

  return (
    <div className="editModalWrapper">
      <div className="modalBox">
        <div className="modalHeader">
          <p className="content">Edit this user</p>
        </div>
        <div className="modalBody">
            <div className="maincontent">
                <input type="email" placeholder="enter email"/>
                <select className="selectstyle">
                    <option>value 1</option>
                    <option>value 2</option>
                </select>
            </div>

        </div>
        <div className="modalFooter">
          <div className="combinedBtn">
            <span
              className="rowBtn"
            
            >
              Cancel
            </span>
            <span
              className="exportListBtn"
            
            >
              Edit User
            </span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ModalExample;
