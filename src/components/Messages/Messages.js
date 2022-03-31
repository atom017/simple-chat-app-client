import React from 'react'
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'
import OnlineUsers from '../OnlineUsers/OnlineUsers'

const Messages = ({messages,name,activeOpen,setActiveOpen}) => {
  
  const handleActive = () =>{
    setActiveOpen(true)
  }
  return (
    
       <ScrollToBottom className='messages' >
      {activeOpen ? ' ': <i onClick={handleActive} className="fa-solid fa-circle-arrow-left openUsers"></i> } 
      {messages.map((message,i) => (
          <div key={i}><Message message={message} name={name}/></div>
      ))}
      </ScrollToBottom>
   
  )
}

export default Messages