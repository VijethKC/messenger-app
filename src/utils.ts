import type { Message } from './types'

const createMessage = (text: string, sender: 'me' | 'friend'): Message => ({
  id: Date.now().toString(),
  text: text.trim(),
  sender,
  timestamp: new Date()
})

export {
  createMessage
}