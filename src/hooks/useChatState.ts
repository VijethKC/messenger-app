import { useState, useCallback } from 'react'
import type { Friend, ChatState } from '../types'
import { createMessage } from '../utils'

export const useChatState = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
  const [chats, setChats] = useState<ChatState>({})
  const [newMessage, setNewMessage] = useState('')

  console.log(chats)

  const sendMessage = useCallback(() => {
    if (!newMessage.trim() || !selectedFriend) return

    const message = createMessage(newMessage, 'me')

    setChats((prev) => ({
      ...prev,
      [selectedFriend.id]: [...(prev[selectedFriend.id] || []), message]
    }))

    setNewMessage('')

    setTimeout(() => {
      const friendMessage = createMessage('Hello, how are you!', 'friend')

      setChats((prev) => ({
        ...prev,
        [selectedFriend.id]: [...(prev[selectedFriend.id] || []), friendMessage]
      }))
    }, 300)
  }, [newMessage, selectedFriend])

  const selectFriend = useCallback((friend: Friend) => {
    setSelectedFriend(friend)
  }, [])

  const updateNewMessage = useCallback((message: string) => {
    setNewMessage(message)
  }, [])

  const getCurrentChat = useCallback(() => {
    return selectedFriend ? chats[selectedFriend.id] || [] : []
  }, [selectedFriend, chats])

  return {
    selectedFriend,
    chats,
    newMessage,
    sendMessage,
    selectFriend,
    updateNewMessage,
    getCurrentChat
  }
}
