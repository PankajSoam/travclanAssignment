import React from 'react';

function User(props){
    let premium = 'No';
    if(props.userInfo.hasPremium){
        premium = 'Yes';
    }
    return(
        <div>
            <p>{props.userInfo.firstname}</p>
            <img src={props.userInfo.avatarUrl}></img>
            <p>{props.userInfo.email}</p>
            <p>{props.userInfo.phone}</p>
            <p>{premium}</p>

        </div>
    )
}

export default User;