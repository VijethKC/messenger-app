import type { Friend, Message } from '../../types'
import { ChatHeader, MessageInput, MessageList } from '../../components'
import './ChatArea.css'

type ChatAreaProps  = {
  selectedFriend: Friend | null
  messages: Message[]
  newMessage: string
  onMessageChange: (message: string) => void
  onSendMessage: () => void
}

const ChatArea = ({
  selectedFriend,
  messages,
  newMessage,
  onMessageChange,
  onSendMessage
}: ChatAreaProps) => {
  return (
    <div className="chat-area">
      {selectedFriend ? (
        <>
          <ChatHeader friend={selectedFriend} />
          <MessageList messages={messages} />
          <MessageInput
            value={newMessage}
            onChange={onMessageChange}
            onSend={onSendMessage}
          />
        </>
      ) : (
          <div className="no-chat-selected">
            <h3>Select a friend to start chatting</h3>
          </div>
        )}
    </div>
  )
}

export default ChatArea