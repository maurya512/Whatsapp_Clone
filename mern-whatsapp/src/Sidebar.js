import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core'

// import components
import Sidebarchat from './Sidebarchat';

// import styling for sidebar
import "./Sidebar.css";

function Sidebar() {
    return (
        // entire sidebar
        <div className="sidebar">
            {/* header of the sidebar */}
            <div className="sidebar_header">
                {/* Avatar can be used to attach images */}
                <Avatar src="https://avatars.githubusercontent.com/u/64752267?s=60&v=4" />
                {/* the right portion of the sidebar */}
                <div className="sidebar_headerRight">
                    {/* Iconbutton makes the button clickable */}
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton >

                    {/* chat icon */}
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    {/* VertIcon */}
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div >
            {/* the search bar */}
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="search or start new chat" type="text" />
                </div>
            </div>

            {/* chat section */}
            <div className="sidebar_chats">
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
            </div>
        </div>
    )
}

export default Sidebar
