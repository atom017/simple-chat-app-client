import React from 'react'
import './Input.css'

const Input = ({message,setMessage,sendMessage}) => {
  return (
    <form className="form">
        
        <input 
        className='input'
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e=> e.key === 'Enter'? sendMessage(e): null}
        value={message} 
        placeholder='Type a message'
        type="text" />
        <button
         className='sendButton'
         onClick={e => sendMessage(e)}
         >Send</button>
    </form>
  )
}

export default Input