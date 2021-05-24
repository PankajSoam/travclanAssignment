import React, { Fragment, useEffect, useState } from 'react';
import User from './User';

function UserList(props){
    console.log(props.users[0]);
    console.log(props.showMinBid);
    const [usersList, setUsers] = useState([]);
    

    useEffect(() => {
        setUsers(props.users);
        
    })

    usersList.map( user => {
        const bidAmounts = user.bids;
        bidAmounts.sort(function(a,b){
            return a.amount - b.amount;
        });

        let bid = 0;
        if(props.showMinBid && bidAmounts.length>=1){
            bid = bidAmounts[0].amount;
        }else if(!props.showMinBid && bidAmounts.length>=1){
            bid = bidAmounts[bidAmounts.length-1].amount;
        }
        user.bidAmountToDisplay = bid;
    })
    console.log(usersList)

    const sortAccToBid = () => {
            let array = []
                    usersList.sort(function(a,b){
                    return a.bidAmountToDisplay - b.bidAmountToDisplay;
        });
        array = [...usersList]
        console.log("sorted",usersList);

        setUsers(array);
        // console.log(sortedUsers);
    }
    

    return(
        <div>
            <button onClick={sortAccToBid}>sort</button>
            {
                usersList.map(user => <User userInfo={user} showMinBid={props.showMinBid}  key = {user.id}/>)
            }
        </div>
    );
}

export default UserList;