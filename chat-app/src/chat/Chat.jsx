import React, { useEffect, useState,useRef } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'


const Chat = () => {

  const [open,setOpen]=useState(false);
  const[text,setText]=useState("");

  const endRef=useRef(null);

  useEffect(()=>{

    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji=(e)=>{
    setText((prev)=>prev+e.emoji);
   
  }
 
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Vaibhav</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          
        </div>
        <div className="icons">
          <img src="./video.png" alt="video" />
          <img src="./phone.png" alt="phone" />
          <img src="./info.png" alt="info" />

        </div>
      </div>
      <div className="center">
        <div className="messages">
          <div className="icon">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae numquam voluptatibus quod odit debitis similique. Quo praesentium ipsa eaque ab?</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="messages own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae numquam voluptatibus quod odit debitis similique. Quo praesentium ipsa eaque ab?</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="messages">
          <div className="icon">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae numquam voluptatibus quod odit debitis similique. Quo praesentium ipsa eaque ab?</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="messages own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae numquam voluptatibus quod odit debitis similique. Quo praesentium ipsa eaque ab?</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="messages">
          <div className="icon">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae numquam voluptatibus quod odit debitis similique. Quo praesentium ipsa eaque ab?</p>
              <span>1 min ago</span>
          </div>
          <div ref={endRef}></div>
       
        </div>
        
      </div>
       
      <div className="bottom">
        <div className="icons">
        <img src="./img.png" alt="" />
        <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' onChange={(e)=>setText(e.target.value )}  value={text}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
