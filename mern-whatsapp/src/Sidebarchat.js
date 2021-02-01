import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebarchat.css';

function Sidebarchat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>This is the latest message we see on the room</p>
            </div>
        </div>
    )
}

export default Sidebarchat;
