import React from 'react'
import './InfoBar.css'

const InfoBar = ({room}) => {

  
  return (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
        <i className="fa-solid fa-house-user onlineIcon"></i>
            <h3 className='roomName'>{room}</h3>
        </div> 
        {/* <i className="fa-solid fa-users activeUsers"></i> */}
        <div className='rightInnerContainer'>
            <a href="/">
                <button className='leaveBtn'>LEAVE</button>
            </a>
        </div>
    </div>
  )
}

export default InfoBar