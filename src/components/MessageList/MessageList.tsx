import type { Message } from '../../types'
import './MessageList.css'

type MessageListProps = {
  messages: Message[]
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="messages">
      {messages.map(message => (
        <div
          key={message.id}
          className={`message ${message.sender === 'me' ? 'my-message' : 'friend-message'}`}
        >
          <div className="message-content">
            {message.text}
          </div>
          <div className="message-time">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList