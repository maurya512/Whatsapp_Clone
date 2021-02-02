// the chat component
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

import './Chat.css';
import React from 'react'

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        {/* the search icon */}
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        {/* attach a file icon */}
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        {/* more options icon */}
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* chat body */}
            <div className="chat_body">
                <p className="chat_message">
                    {/* spanning the user's name */}
                    <span className="chat_name">Maurya</span>
                    This is a message

                    {/* spanning the user's time stamp */}
                    <span className="chat_timestamp">
                        {new Date()
                            .toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
