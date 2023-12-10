import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className='section-center'>
      <div className='video-chat-container'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          className='video-container'
          style={{ width: '70%', height: '100%' }}
        />
        <ChatCard />
      </div>
    </div>
  )
}

const ChatCard = () => {
  return (
    <div className='chat-card'>
      <h3>Chat Card</h3>
      <p>Messages....</p>
      <p>Messages....</p>
      <p>Messages....</p>
      <p>Messages....</p>
      <p>Messages....</p>
      <p>Messages....</p>
      <p>Messages....</p>
    </div>
  )
}

export default Video
