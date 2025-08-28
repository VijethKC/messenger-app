import type { Friend } from '../../types'
import './FriendsList.css'

type FriendsListProps = {
  friends: Friend[]
  selectedFriend: Friend | null
  onSelectFriend: (friend: Friend) => void
}

const FriendsList = (props: FriendsListProps) => {
  const { friends, selectedFriend, onSelectFriend } = props;

  return (
    <div className="sidebar">
      <h2>Friends List</h2>
      <div className="friends-list">
        {friends?.map((friend) => (
          <div
            key={friend.id}
            className={`friend-item ${selectedFriend?.id === friend.id ? 'selected' : ''}`}
            onClick={() => onSelectFriend(friend)}
          >
            <span className="name">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsList
