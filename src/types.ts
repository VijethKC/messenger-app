type Message = {
  id: string
  text: string
  sender: 'me' | 'friend'
  timestamp: Date
}

type Friend = {
  id: string
  name: string
}

type ChatState = Record<string, Message[]>

export type {
  Message, 
  Friend, 
  ChatState
}