import React from 'react';

function User(props){

    //check for premium or not
    let premium = 'No';
    if(props.userInfo.hasPremium){
        premium = 'Yes';
    }

    //
    console.log(props.userInfo.bids);
    //sorting bids array according to amount
    // const bids = props.userInfo.bids;
    // let bidAmount = 0;
    // bids.sort(function(a,b){
    //     return a.amount - b.amount;
    // });

    //selecting which amount to show min or max bid
    // if(!props.showMinBid){   
    //     if(bids.length>=1){
    //         bidAmount = bids[bids.length-1].amount;
    //     }
    // }else{
    //     if(bids.length>=1){
    //         bidAmount = bids[0].amount;
    //     }
    // }


    return(
        <div>
            <p className="inLine name">{props.userInfo.firstname}</p>
            <img src={props.userInfo.avatarUrl} className="inLine"></img>
            <p className="inLine email">{props.userInfo.email}</p>
            <p className="inLine phone">{props.userInfo.phone}</p>
            <p className="inLine premium">{premium}</p>
            <p className="inLine bid">{props.userInfo.bidAmountToDisplay}</p>

        </div>
    )
}

export default User;