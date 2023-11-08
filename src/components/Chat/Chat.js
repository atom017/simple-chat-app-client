import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar';
import './Chat.css'
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import OnlineUsers from '../OnlineUsers/OnlineUsers';


let socket;
const Chat = () => {
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([]);
  const [users,setUsers] = useState(null);
  const [isActiveOpen,setisActiveOpen] = useState(false)
  // const SERVER = 'https://hk-simple-chat-app.herokuapp.com/'

  const SERVER = 'https://chat-app-backend-ga3o.onrender.com/'
 
  
  useEffect(() =>{
    const {name,room} = queryString.parse(window.location.search);
    socket = io(SERVER,{ transports: ['websocket', 'polling', 'flashsocket']} );
    setName(name);
    setRoom(room);
   
    socket.emit('join',{name,room},(error) =>{
     
    });

    return () =>{
      socket.emit('disconnect');
      socket.off();
    }
    
  },[SERVER,window.location.search])


  useEffect(() =>{
    socket.on('message', (message) =>{
      
      setMessages([...messages,message])
    })

    socket.on('roomData',({users}) =>{
      setUsers(users)
    })
  },[messages,users])

  //function for sending messages
  const sendMessage = (e) =>{
    e.preventDefault();
    if(message){
      console.log(message);
      socket.emit('sendMessage',message,() =>{
        setMessage('')
      })
    } 
  }


  return (
    <div className='outerContainer'>
     
      <div className='innerContainer'>
        <InfoBar room ={room} />
        <div className='container'>
        
          <OnlineUsers users={users} activeOpen={isActiveOpen} setActiveOpen={setisActiveOpen} />
          <div className='messagesInfo'>
          <Messages messages={messages} name={name} activeOpen={isActiveOpen} setActiveOpen={setisActiveOpen}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
          </div>
        
        </div>
      </div>
        
    </div>
  )
}

export default Chat