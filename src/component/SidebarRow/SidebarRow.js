import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
import axios from 'axios';

function SidebarRow({src, Icon, title}) {

    const hello = () => {
        console.log("hello called")
        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: 'http://localhost:8080/hello',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
          }).then(res => {
              console.log("resssssssssssss  :: ", res)
          })
    }

    return (
        <div className="sidebarRow" onClick={hello}>
            {src && <Avatar src={src} /> }
            {Icon && <Icon /> }
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
