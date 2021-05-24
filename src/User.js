import React from 'react';

function User(props){

    //check for premium or not
    let premium = 'No';
    if(props.userInfo.hasPremium){
        premium = 'Yes';
    }


    return(
        <div className="row">
            <img src={props.userInfo.avatarUrl} className="inLine"></img>
            <p className="inLine name">{props.userInfo.firstname}</p>
            <p className="inLine email">{props.userInfo.email}</p>
            <p className="inLine phone">{props.userInfo.phone}</p>
            <p className="inLine premium">{premium}</p>
            <p className="inLine bid">{props.userInfo.bidAmountToDisplay}</p>

        </div>
    )
}

export default User;