import React from 'react'
import './MessageInput.css'

type MessageInputProps = {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

const MessageInput = ({ value, onChange, onSend, disabled = false }: MessageInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={disabled}
      />
      <button onClick={onSend} disabled={disabled || !value.trim()}>
        Send
      </button>
    </div>
  )
}

export default MessageInput