import { FriendsList, ChatArea } from './components'
import { mockFriends } from './consts'
import { useChatState } from './hooks/useChatState'
import './App.css'

const App = () => {
  const {
    selectedFriend,
    newMessage,
    sendMessage,
    selectFriend,
    updateNewMessage,
    getCurrentChat
  } = useChatState()

  return (
    <div className="chat-app">
      <FriendsList
        friends={mockFriends}
        selectedFriend={selectedFriend}
        onSelectFriend={selectFriend}
      />
      <ChatArea
        selectedFriend={selectedFriend}
        messages={getCurrentChat()}
        newMessage={newMessage}
        onMessageChange={updateNewMessage}
        onSendMessage={sendMessage}
      />
    </div>
  )
}

export default App
