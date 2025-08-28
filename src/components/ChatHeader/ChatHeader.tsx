import type { Friend } from '../../types'
import './ChatHeader.css'

type ChatHeaderProps = {
  friend: Friend
}

const ChatHeader = ({ friend }: ChatHeaderProps) => {
  return (
    <div className="chat-header">
      <h2>{friend.name}</h2>
    </div>
  )
}

export default ChatHeader