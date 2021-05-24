import React, { Fragment, useEffect, useState } from 'react';
import User from './User';

function UserList(props){
    console.log(props.users[0]);
    console.log(props.showMinBid);
    const [usersList, setUsers] = useState([]);
    

    useEffect(() => {
        setUsers(props.users);
        
    })
    

    return(
        <div>
            <button>Show min bid</button>
            {
                usersList.map(user => <User userInfo={user} showMinBid={props.showMinBid} />)
            }
        </div>
    );
}

export default UserList;