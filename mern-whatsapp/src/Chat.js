// the chat component
import { Avatar } from '@material-ui/core'
import React from 'react'

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                </div>
            </div>
        </div>
    )
}

export default Chat
