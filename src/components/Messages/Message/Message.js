import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'

const Message = ({message:{user,text},name}) => {
  let isSentByCurrentUser = false;

  const trimName= name.trim().toLowerCase();

  if(user === trimName){
    isSentByCurrentUser = true;
  }

  return (
      isSentByCurrentUser ? 
      (
        <div className='messageContainer justifyEnd'>
            <div className='msgBoxContainer justifyEnd'>
                <p className='sentText mr-right'>{trimName}</p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
            
        </div>
      ) : 
      (
        <div className='messageContainer justifyStart'>
            <div className='msgBoxContainer '>
                <div className='messageBox backgroundLight'>
                    <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sentText mr-left'>{user}</p>
            </div>
            
        </div>
      )
  )
}

export default Message